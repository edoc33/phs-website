export interface ServiceData {
  slug: string;
  name: string;
  headline: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  inclusions: string[];
  bestFor: string[];
  duration?: string;
  blogLink?: { href: string; label: string };
}

export const services: ServiceData[] = [
  {
    slug: "standard-cleaning",
    name: "Standard Cleaning",
    headline: "Standard House Cleaning",
    metaTitle: "Standard House Cleaning in Toronto and Mississauga",
    metaDescription:
      "Regular house cleaning in Toronto and Mississauga. Surfaces, floors, bathrooms, and kitchen on your schedule. Same cleaner every visit. $45 per hour.",
    description:
      "This is the cleaning most of our clients book. Your cleaner comes on the same day each week, every two weeks, or once a month. They already know your home, your preferences, and what matters to you. No checklist needed.",
    inclusions: [
      "All surfaces wiped and sanitized",
      "Floors vacuumed and mopped",
      "Bathrooms cleaned top to bottom",
      "Kitchen counters, sink, and stovetop",
      "Dusting shelves, ledges, and furniture",
      "Garbage emptied and bags replaced",
      "Beds made if requested",
    ],
    bestFor: [
      "Families who want ongoing maintenance between deep cleans",
      "Busy professionals who need a clean home without thinking about it",
      "Anyone who wants the same trusted cleaner on a regular schedule",
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    headline: "Deep Cleaning",
    metaTitle: "Deep Cleaning Services in Toronto and Mississauga",
    metaDescription:
      "Deep cleaning in Toronto and Mississauga. Inside the oven, behind furniture, baseboards, light fixtures, and every corner. $45 per hour.",
    description:
      "A deep clean goes beyond the surface. We reach behind furniture, inside appliances, and into the corners that regular cleaning misses. Most clients book a deep clean as their first visit, then switch to standard cleaning after that.",
    inclusions: [
      "Everything in a standard cleaning",
      "Inside the oven and fridge",
      "Baseboards wiped down",
      "Window tracks and sills",
      "Light fixtures and ceiling fans",
      "Behind and under furniture",
      "Door frames and switch plates",
      "Detailed scrubbing of tile grout",
    ],
    bestFor: [
      "Seasonal resets (spring cleaning, pre-holiday prep)",
      "First-time clients who want a fresh starting point",
      "Homes that have not been professionally cleaned in a while",
    ],
    duration:
      "It depends on the size and condition of your home, but a deep clean usually takes 4 to 6 hours for a 3-bedroom house.",
  },
  {
    slug: "move-in-move-out",
    name: "Move-In / Move-Out",
    headline: "Move-In and Move-Out Cleaning",
    metaTitle: "Move-In and Move-Out Cleaning in Toronto and Mississauga",
    metaDescription:
      "Move-in and move-out cleaning in Toronto and Mississauga. Wall-to-wall detail, inside every cabinet, deep oven cleaning, and full bathroom scrub. $45 per hour.",
    description:
      "Whether you are moving in or moving out, this is a wall-to-wall clean designed to leave the home spotless for the next person or for you. Every surface, every cabinet, every corner.",
    inclusions: [
      "Inside all cabinets and closets",
      "Deep oven and stovetop cleaning",
      "Full bathroom scrub including tile and grout",
      "Window tracks and sills",
      "Baseboards, door frames, and switch plates",
      "All floors vacuumed and mopped",
      "Light fixtures and ceiling fans",
      "Interior windows if accessible",
    ],
    bestFor: [
      "Renters preparing for a lease end or move-in inspection",
      "Home sellers getting ready for showings or closing",
      "New homeowners who want a fresh start",
    ],
    blogLink: {
      href: "/journal/move-in-cleaning-guide-gta",
      label: "Read our move-in cleaning guide",
    },
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}
