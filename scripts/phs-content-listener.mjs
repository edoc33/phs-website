#!/usr/bin/env node
// PHS Content Listener — standalone Node script (GitHub Actions).
// Scans Reddit / BlogTO / Google News for Toronto cleaning content ideas,
// picks the 2 best, writes blog drafts in Denise's voice, reviews them
// against the style card, and writes .md files to src/content/journal/.
// A summary (with GBP post) is written to draft-summary.md for the PR body.

import { readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, "..");
const JOURNAL_DIR = join(REPO_ROOT, "src/content/journal");
const DRAFT_DIR = join(REPO_ROOT, "drafts/journal");
const SUMMARY_PATH = join(REPO_ROOT, "draft-summary.md");

const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
if (!ANTHROPIC_API_KEY) {
  console.error("Missing ANTHROPIC_API_KEY env var");
  process.exit(1);
}

const STYLE_CARD = `
## PHS Voice Rules

Writer: Denise, 67, blue collar, 30+ years cleaning homes in Toronto/Mississauga.

TONE: Warm and kind but not overly friendly or familiar. Like a reliable neighbour.
Confident but not loud. Direct but never blunt.

BANNED WORDS: delve, robust, leverage, utilize, optimal, streamline, elevate,
empower, curated, transparent, stakeholder, touchpoint, commence, residence,
purchase, prior to, complimentary, sanitize (use "scrub"), ensure (use "make sure"),
facilitate (use "help"), solutions (say what it is), in today's world, passionate about

BANNED PUNCTUATION: em dashes. Use periods, commas, or "and" instead.
No exclamation marks in body copy.

SENTENCES: Short. One idea per sentence. Two at most. Start with the point.
If a sentence needs an em dash to work, break it into two sentences.

LISTS: Use **Bold label**: description (colon after bold, not em dash)

SHE WOULD NEVER SAY: "We pride ourselves on", "our team of dedicated professionals",
"we go above and beyond", "don't hesitate to reach out", "tailored solutions",
"unlock the potential"

SHE WOULD SAY: "We show up on time. Every time.", "Same cleaner, every visit.",
"Call us. We'll sort it out."

BLOG RULES: Skip fluffy intros. Get useful in first two sentences.
Lists are fine. End with soft PHS mention, never hard sell.
No keyword stuffing. 500-800 words. Plain language headlines.
No clickbait. Read it out loud: if it sounds like a brochure, rewrite it.

FRONTMATTER: title, description, date (YYYY-MM-DD, unquoted)
`;

function readExistingSlugs() {
  if (!existsSync(JOURNAL_DIR)) return [];
  return readdirSync(JOURNAL_DIR)
    .filter(f => f.endsWith(".md"))
    .map(f => f.replace(/\.md$/, ""));
}

async function fetchReddit(subreddit, query, sort = "new", time = "week") {
  const url = query
    ? `https://www.reddit.com/r/${subreddit}/search.json?q=${encodeURIComponent(query)}&sort=${sort}&t=${time}&limit=15&restrict_sr=on`
    : `https://www.reddit.com/r/${subreddit}/top.json?t=${time}&limit=15`;
  try {
    const resp = await fetch(url, {
      headers: { "User-Agent": "PHS-Content-Listener/1.0 (github-actions)" },
      signal: AbortSignal.timeout(20000),
    });
    if (!resp.ok) return [];
    const data = await resp.json();
    return (data.data?.children || []).map(c => ({
      source: `r/${subreddit}`,
      title: c.data.title,
      score: c.data.score,
      comments: c.data.num_comments,
      url: `https://reddit.com${c.data.permalink}`,
      selftext: (c.data.selftext || "").slice(0, 300),
    }));
  } catch {
    return [];
  }
}

async function fetchRSS(url, sourceName) {
  try {
    const resp = await fetch(url, { signal: AbortSignal.timeout(20000) });
    if (!resp.ok) return [];
    const xml = await resp.text();
    const items = [];
    const cdata = /<item>[\s\S]*?<title><!\[CDATA\[(.*?)\]\]><\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/g;
    const plain = /<item>[\s\S]*?<title>(.*?)<\/title>[\s\S]*?<link>(.*?)<\/link>[\s\S]*?<\/item>/g;
    let m;
    while ((m = cdata.exec(xml)) !== null) items.push({ source: sourceName, title: m[1], url: m[2] });
    if (items.length === 0) {
      while ((m = plain.exec(xml)) !== null) {
        items.push({ source: sourceName, title: m[1].replace(/<!\[CDATA\[|\]\]>/g, ""), url: m[2] });
      }
    }
    return items.slice(0, 10);
  } catch {
    return [];
  }
}

async function callClaude(systemPrompt, userPrompt, maxTokens = 8192) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    signal: AbortSignal.timeout(180000),
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: maxTokens,
      system: systemPrompt,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });
  if (!resp.ok) {
    const err = await resp.text();
    throw new Error(`Claude API ${resp.status}: ${err.slice(0, 500)}`);
  }
  const data = await resp.json();
  return data.content[0].text;
}

const RELEVANT_TERMS = [
  "clean", "cleaning", "cleaner", "maid", "housekeep", "housework",
  "mop", "vacuum", "scrub", "dust", "wipe", "sweep", "tidy",
  "kitchen", "bathroom", "floor", "carpet", "baseboard", "window",
  "condo", "apartment", "home care", "move in", "move out",
  "raccoon", "pest", "mice", "ant", "spider", "mold", "mould",
  "renovation", "reno", "hardwood", "grout", "laundry",
  "pet hair", "dog hair", "cat hair", "odour", "odor", "smell",
  "hockey bag", "gear", "mudroom", "salt stain", "pollen",
  "spring clean", "deep clean", "declutter",
];

function isRelevant(item) {
  const text = `${item.title} ${item.selftext || ""}`.toLowerCase();
  return RELEVANT_TERMS.some(t => text.includes(t));
}

function slugify(s) {
  return s.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

async function main() {
  const existingSlugs = readExistingSlugs();
  console.log(`[phs-content] ${existingSlugs.length} existing posts in src/content/journal/`);

  const sourceTasks = [
    fetchReddit("toronto", "cleaning OR cleaner OR maid OR housekeeping OR home care"),
    fetchReddit("askTO", "cleaning OR cleaner OR maid OR housekeeping"),
    fetchReddit("CleaningTips", null, "top"),
    fetchReddit("CleaningTips", "tiktok OR viral OR hack OR trend", "top"),
    fetchReddit("toronto", "raccoon OR pest OR mold OR renovation OR condo"),
    fetchReddit("HomeImprovement", "cleaning OR deep clean OR move in", "top"),
    fetchRSS("https://www.blogto.com/feed/", "BlogTO"),
    fetchRSS("https://news.google.com/rss/search?q=toronto+home+cleaning&hl=en-CA&gl=CA&ceid=CA:en", "Google News"),
    fetchRSS("https://news.google.com/rss/search?q=cleaning+tips+hack+trend&hl=en-CA&gl=CA&ceid=CA:en", "Google News Trends"),
  ];

  const settled = await Promise.allSettled(sourceTasks);
  const allSources = settled
    .filter(r => r.status === "fulfilled")
    .flatMap(r => r.value);

  console.log(`[phs-content] fetched ${allSources.length} raw items`);
  if (allSources.length === 0) {
    console.error("No sources fetched. Reddit/RSS all failed.");
    process.exit(2);
  }

  const seen = new Set();
  const uniqueSources = allSources
    .filter(isRelevant)
    .filter(it => {
      const key = it.title.toLowerCase().slice(0, 50);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  console.log(`[phs-content] ${uniqueSources.length} relevant + unique items`);
  if (uniqueSources.length === 0) {
    console.error("No relevant sources this week.");
    process.exit(3);
  }

  const today = new Date().toISOString().split("T")[0];
  const nextWeek = new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0];

  const systemPrompt = `You are a content strategist for Portuguese Housekeeping Services (PHS), a house cleaning company in Toronto/Mississauga run by Denise for 30+ years. Your job is to find blog content ideas from trending discussions and write the actual blog posts.

RELEVANCE DEFINITION (strict):
A topic is ONLY relevant to PHS if it is something a homeowner or renter would read to:
- Learn how to clean something in their home (floors, kitchens, bathrooms, appliances, fixtures, furniture)
- Deal with a mess or home maintenance issue (pests, mold, salt damage, pet hair, sports gear smell, renovation dust)
- Decide whether to hire a cleaning service or what to expect from one
- Prepare their home for a season, event, move, or sale
- Manage household cleaning with kids, pets, or specific housing types (condos, older homes)

A topic is NOT relevant if it is about:
- Commercial/industrial cleaning, janitorial, or office cleaning
- Cleaning product reviews or brand promotions
- "Clean eating", clean energy, clean politics, or any figurative use of "clean"
- Home renovation/construction (unless specifically about the cleanup after)
- Real estate, mortgage, or investment content
- General lifestyle/parenting/wellness content not tied to physical home cleaning

If fewer than 2 sources pass this test, write only 1 post (or 0 and say so). Never stretch a weak idea into a post.

${STYLE_CARD}

IMPORTANT: After writing each post, review it line by line against the style card. Check for:
- Any em dashes (replace with periods or commas)
- Any banned words (replace with plain alternatives)
- Sentences that are too long (break them up)
- Marketing-speak or corporate tone (rewrite in Denise's voice)
- Lists must use **Bold label**: description format
Fix any issues before returning the final version.`;

  const userPrompt = `Here are ${uniqueSources.length} recent posts/articles from Reddit, BlogTO, and Google News about cleaning, home care, and Toronto life:

${uniqueSources.map((s, i) => `${i + 1}. [${s.source}] "${s.title}" (${s.score ? `${s.score} upvotes, ${s.comments} comments` : "RSS"})${s.selftext ? `\n   "${s.selftext.slice(0, 200)}..."` : ""}`).join("\n")}

EXISTING PHS BLOG SLUGS (do NOT duplicate these — topics or angles):
${existingSlugs.join(", ")}

YOUR TASK:
1. Pick the 2 most promising content ideas from these sources. Look for:
   - Topics with high engagement (upvotes, comments)
   - Toronto/GTA-specific angles
   - Practical cleaning/home care problems people are actually asking about
   - Viral trends from CleanTok/social media that Denise could weigh in on
   - Seasonal relevance (today is ${today})
   - Topics NOT already covered by existing slugs above

2. For each idea, write a COMPLETE blog post as markdown. Use dates ${today} and ${nextWeek}.

3. After writing each post, review it line by line against the style card. Fix any violations.

Return your response in this EXACT format (literal section markers, nothing between them but the requested content):

---IDEA1_REASONING---
[2-3 sentences on why you picked this topic and which source inspired it]

---POST1---
[Complete markdown file content including frontmatter]

---IDEA2_REASONING---
[2-3 sentences on why you picked this topic and which source inspired it]

---POST2---
[Complete markdown file content including frontmatter]

---FILENAMES---
suggested-slug-1.md, suggested-slug-2.md

---GBP_POST---
Write a Google Business Profile post (2-3 sentences max, under 300 characters) based on the first blog post. It should be a practical tip or interesting fact from the article, ending with "Read more on our blog: portuguesemaids.ca/journal/[slug]". Match Denise's voice. No em dashes. No hashtags.`;

  console.log(`[phs-content] calling Claude with ${uniqueSources.length} sources`);
  let response;
  try {
    response = await callClaude(systemPrompt, userPrompt);
  } catch (e) {
    console.error("Claude call failed:", e.message);
    process.exit(4);
  }

  const grab = (re) => {
    const m = response.match(re);
    return m ? m[1].trim() : "";
  };
  const idea1 = grab(/---IDEA1_REASONING---([\s\S]*?)---POST1---/) || "No reasoning provided";
  const post1 = grab(/---POST1---([\s\S]*?)---IDEA2_REASONING---/);
  const idea2 = grab(/---IDEA2_REASONING---([\s\S]*?)---POST2---/) || "No reasoning provided";
  const post2 = grab(/---POST2---([\s\S]*?)---FILENAMES---/);
  const filenamesRaw = grab(/---FILENAMES---([\s\S]*?)---GBP_POST---/) || "";
  const gbpPost = grab(/---GBP_POST---([\s\S]*?)$/);

  if (!post1 && !post2) {
    console.error("Claude returned no usable posts. First 500 chars:");
    console.error(response.slice(0, 500));
    process.exit(5);
  }

  // Parse filenames. Accept "a.md, b.md" or "[a.md, b.md]".
  const names = filenamesRaw
    .replace(/[\[\]`]/g, "")
    .split(",")
    .map(s => s.trim())
    .filter(Boolean)
    .map(s => s.endsWith(".md") ? s : `${s}.md`);

  // Fall back to slug-from-title if Claude misses filenames.
  function titleFrom(md) {
    const t = md.match(/^title:\s*"?([^"\n]+)"?/m);
    return t ? t[1].trim() : "";
  }
  const fn1 = names[0] || `${slugify(titleFrom(post1) || "draft-1")}.md`;
  const fn2 = names[1] || `${slugify(titleFrom(post2) || "draft-2")}.md`;

  mkdirSync(DRAFT_DIR, { recursive: true });
  const written = [];
  if (post1) {
    const p = join(DRAFT_DIR, fn1);
    writeFileSync(p, post1 + "\n");
    written.push(fn1);
  }
  if (post2) {
    const p = join(DRAFT_DIR, fn2);
    writeFileSync(p, post2 + "\n");
    written.push(fn2);
  }

  // Summary for the PR body.
  const lines = [];
  lines.push(`# PHS Content Drafts — Week of ${today}`);
  lines.push("");
  lines.push(`Scanned ${uniqueSources.length} relevant items across Reddit, BlogTO, and Google News.`);
  lines.push("");
  lines.push(`**Files written to \`drafts/journal/\`** (move to \`src/content/journal/\` to publish):`);
  written.forEach(f => lines.push(`- \`${f}\``));
  lines.push("");
  if (post1) {
    lines.push(`## Draft 1 — why this topic`);
    lines.push(idea1);
    lines.push("");
  }
  if (post2) {
    lines.push(`## Draft 2 — why this topic`);
    lines.push(idea2);
    lines.push("");
  }
  if (gbpPost) {
    lines.push(`## Google Business Profile post`);
    lines.push("");
    lines.push("```");
    lines.push(gbpPost);
    lines.push("```");
    lines.push("");
    lines.push("_Paste into GBP under \"Add update\"._");
    lines.push("");
  }
  lines.push(`## Sources scanned`);
  uniqueSources.slice(0, 20).forEach(s => {
    const engagement = s.score ? ` — ${s.score} pts, ${s.comments} comments` : "";
    lines.push(`- [${s.source}] ${s.title}${engagement}`);
  });
  writeFileSync(SUMMARY_PATH, lines.join("\n") + "\n");

  console.log(`[phs-content] wrote ${written.length} draft(s): ${written.join(", ")}`);
  console.log(`[phs-content] summary: ${SUMMARY_PATH}`);
}

main().catch(e => {
  console.error("Fatal:", e);
  process.exit(99);
});
