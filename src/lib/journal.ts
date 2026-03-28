import fs from "fs";
import path from "path";

export interface JournalPost {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  readingTime: string;
  content: string;
  faqs?: { question: string; answer: string }[];
}

const CONTENT_DIR = path.join(process.cwd(), "src/content/journal");

function parsePost(filename: string): JournalPost | null {
  const filePath = path.join(CONTENT_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");

  // Simple frontmatter parser (--- delimited)
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return null;

  const frontmatter: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const value = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      frontmatter[key] = value;
    }
  }

  let content = match[2].trim();

  // Parse optional ---faqs--- section at the end of the content
  let faqs: { question: string; answer: string }[] | undefined;
  const faqSeparator = "---faqs---";
  const faqIndex = content.indexOf(faqSeparator);
  if (faqIndex !== -1) {
    const faqBlock = content.slice(faqIndex + faqSeparator.length).trim();
    content = content.slice(0, faqIndex).trim();

    const pairs: { question: string; answer: string }[] = [];
    const entries = faqBlock.split(/\n\n+/);
    for (const entry of entries) {
      const lines = entry.trim().split("\n");
      let question = "";
      let answer = "";
      for (const line of lines) {
        if (line.startsWith("Q: ")) {
          question = line.slice(3).trim();
        } else if (line.startsWith("A: ")) {
          answer = line.slice(3).trim();
        }
      }
      if (question && answer) {
        pairs.push({ question, answer });
      }
    }
    if (pairs.length > 0) {
      faqs = pairs;
    }
  }

  const wordCount = content.split(/\s+/).length;
  const readingTime = `${Math.max(1, Math.ceil(wordCount / 250))} min read`;

  return {
    slug: filename.replace(/\.md$/, ""),
    title: frontmatter.title || "",
    description: frontmatter.description || "",
    date: frontmatter.date || "",
    readingTime,
    content,
    faqs,
  };
}

export function getAllPosts(): JournalPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".md"))
    .map(parsePost)
    .filter((p): p is JournalPost => p !== null && p.date !== "")
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPostBySlug(slug: string): JournalPost | undefined {
  const filename = `${slug}.md`;
  const filePath = path.join(CONTENT_DIR, filename);
  if (!fs.existsSync(filePath)) return undefined;
  return parsePost(filename) ?? undefined;
}
