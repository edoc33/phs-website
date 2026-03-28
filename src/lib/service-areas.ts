export interface ServiceArea {
  slug: string;
  name: string;
  region: string;
  headline: string;
  description: string;
  intro: string;
  neighborhoods: string[];
  metaTitle: string;
  metaDescription: string;
}

export const serviceAreas: ServiceArea[] = [
  // Mississauga — single page
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    headline: "House Cleaning in Mississauga",
    description:
      "Professional house cleaning services in Mississauga. Our office is right here in the city — we know every neighbourhood and have been cleaning Mississauga homes for over 30 years.",
    intro:
      "Mississauga is home to our office and where Portuguese Housekeeping Services began over 30 years ago. From lakeside condos in Port Credit to family homes in Erin Mills, we know this city inside and out. Our cleaners live locally, arrive on time, and treat every home like their own.",
    neighborhoods: [
      "Port Credit",
      "Streetsville",
      "Erin Mills",
      "Meadowvale",
      "Square One",
      "Cooksville",
      "Clarkson",
      "Lorne Park",
      "Mineola",
      "Mississauga Valleys",
      "Churchill Meadows",
      "Lisgar",
    ],
    metaTitle: "House Cleaning in Mississauga",
    metaDescription:
      "Trusted house cleaning in Mississauga for 30+ years. Same cleaner every visit, weekly/bi-weekly/monthly. Call (905) 501-1509 for a free quote.",
  },
  // Toronto — hub page
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    headline: "House Cleaning in Toronto",
    description:
      "Professional house cleaning services across Toronto. From downtown condos to family homes in the east end, we bring the same care and consistency to every visit.",
    intro:
      "Toronto families have trusted Portuguese Housekeeping Services for decades. Whether you live in a Midtown Victorian, a downtown condo, or a home in the Beaches, we assign you the same cleaner every visit — someone who learns your home and your preferences. No rotating crews, no surprises.",
    neighborhoods: [
      "Downtown",
      "Midtown",
      "North York",
      "Scarborough",
      "Etobicoke",
      "The Beaches",
      "High Park",
      "Yorkville",
      "Leslieville",
      "Roncesvalles",
      "The Annex",
      "Lawrence Park",
      "Leaside",
    ],
    metaTitle: "House Cleaning in Toronto",
    metaDescription:
      "Trusted house cleaning in Toronto for 30+ years. Owner-operated, same cleaner every visit. Weekly, bi-weekly & monthly. Call (905) 501-1509.",
  },
  // Toronto neighbourhoods — individual pages
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "City of Toronto",
    headline: "House Cleaning in Etobicoke",
    description:
      "Professional house cleaning services in Etobicoke. Just minutes from our Mississauga office, we serve families across every Etobicoke neighbourhood.",
    intro:
      "Etobicoke is one of our closest service areas, just minutes from our Mississauga office. We clean homes across the Kingsway, Mimico, Long Branch, and everywhere in between. Families here appreciate that we show up on time, every time — with the same trusted cleaner they already know.",
    neighborhoods: [
      "The Kingsway",
      "Mimico",
      "Long Branch",
      "New Toronto",
      "Islington Village",
      "Humber Bay",
      "Alderwood",
      "Princess Margaret",
    ],
    metaTitle: "House Cleaning in Etobicoke",
    metaDescription:
      "Reliable house cleaning in Etobicoke. Family-owned, 30+ years experience. Same cleaner every visit. Call (905) 501-1509 for a free quote.",
  },
  {
    slug: "north-york",
    name: "North York",
    region: "City of Toronto",
    headline: "House Cleaning in North York",
    description:
      "Professional house cleaning services in North York. From Yonge & Sheppard condos to Willowdale family homes, we deliver consistent, trusted cleaning.",
    intro:
      "North York is home to a wide mix of condos, townhomes, and detached homes — and we clean them all. Whether you're near the Yonge corridor or out in Bayview Village, your assigned cleaner already knows the building, the layout, and your preferences. That's the PHS difference.",
    neighborhoods: [
      "Willowdale",
      "Bayview Village",
      "Don Mills",
      "York Mills",
      "Newtonbrook",
      "Lansing",
      "Bathurst Manor",
      "Downsview",
      "Sheppard Corridor",
    ],
    metaTitle: "House Cleaning in North York",
    metaDescription:
      "Trusted house cleaning in North York. Same dedicated cleaner every visit, 30+ years experience. Weekly & bi-weekly. Call (905) 501-1509.",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "City of Toronto",
    headline: "House Cleaning in Scarborough",
    description:
      "Professional house cleaning services in Scarborough. Reliable, consistent cleaning from a family-owned company that's served the GTA for 30+ years.",
    intro:
      "Scarborough families deserve the same quality and consistency that our Mississauga and downtown clients have enjoyed for decades. We assign one dedicated cleaner to your home — someone who learns every room, every preference, and shows up the same day, every visit.",
    neighborhoods: [
      "Agincourt",
      "Birch Cliff",
      "Cliffside",
      "Highland Creek",
      "Scarborough Town Centre",
      "Woburn",
      "Malvern",
      "Guildwood",
      "Bluffs",
    ],
    metaTitle: "House Cleaning in Scarborough",
    metaDescription:
      "Professional house cleaning in Scarborough. Owner-operated, same cleaner every visit, 30+ years trusted service. Call (905) 501-1509.",
  },
  {
    slug: "downtown-toronto",
    name: "Downtown Toronto",
    region: "City of Toronto",
    headline: "House Cleaning in Downtown Toronto",
    description:
      "Professional house cleaning for downtown Toronto condos and homes. We handle condo access, concierge check-in, and keep your space spotless on your schedule.",
    intro:
      "Downtown living is fast-paced — your cleaning shouldn't be another thing to manage. We handle concierge check-ins, condo access, and parking logistics so you don't have to. Your cleaner knows your unit, your building, and exactly how you like things. Most of our downtown clients have had the same cleaner for years.",
    neighborhoods: [
      "Financial District",
      "Entertainment District",
      "King West",
      "Queen West",
      "Liberty Village",
      "CityPlace",
      "St. Lawrence Market",
      "Corktown",
      "Harbourfront",
      "Distillery District",
    ],
    metaTitle: "House Cleaning in Downtown Toronto",
    metaDescription:
      "Downtown Toronto condo & house cleaning. Same cleaner every visit, concierge-friendly, 30+ years trusted service. Call (905) 501-1509.",
  },
  {
    slug: "midtown-toronto",
    name: "Midtown Toronto",
    region: "City of Toronto",
    headline: "House Cleaning in Midtown Toronto",
    description:
      "Professional house cleaning in Midtown Toronto. From Forest Hill estates to Yonge & Eglinton condos, we deliver meticulous, consistent care.",
    intro:
      "Midtown is where some of our longest-standing clients live. The tree-lined streets of Forest Hill, Deer Park, and Davisville have trusted us for years — often through word of mouth from a neighbour. We understand the standards here, and our cleaners meet them every single visit.",
    neighborhoods: [
      "Forest Hill",
      "Deer Park",
      "Davisville",
      "Yonge & Eglinton",
      "Chaplin Estates",
      "Moore Park",
      "Summerhill",
      "Casa Loma",
    ],
    metaTitle: "House Cleaning in Midtown Toronto",
    metaDescription:
      "Midtown Toronto house cleaning. Trusted for 30+ years in Forest Hill, Deer Park & Yonge-Eglinton. Same cleaner every visit. Call (905) 501-1509.",
  },
  {
    slug: "the-beaches-toronto",
    name: "The Beaches",
    region: "City of Toronto",
    headline: "House Cleaning in The Beaches",
    description:
      "Professional house cleaning in The Beaches, Toronto. Consistent, reliable cleaning for families in one of Toronto's most beloved neighbourhoods.",
    intro:
      "The Beaches is a neighbourhood that feels like a small town inside a big city — and we fit right in. We're a small, family-owned company where every client knows the owner by name. Your cleaner knows your home, your kids' schedules, and exactly when to come and go.",
    neighborhoods: [
      "Upper Beaches",
      "Woodbine Beach",
      "Kew Beach",
      "Balmy Beach",
      "Fallingbrook",
    ],
    metaTitle: "House Cleaning in The Beaches, Toronto",
    metaDescription:
      "Trusted house cleaning in The Beaches. Family-owned, same cleaner every visit, 30+ years experience. Call (905) 501-1509 for a free quote.",
  },
  {
    slug: "high-park",
    name: "High Park",
    region: "City of Toronto",
    headline: "House Cleaning in High Park",
    description:
      "Professional house cleaning in the High Park area. Reliable, owner-operated cleaning for families in one of Toronto's most family-friendly neighbourhoods.",
    intro:
      "The High Park neighbourhood attracts families who care about quality of life — and quality cleaning is part of that. We've served homes along Bloor West, Roncesvalles, and the side streets near the park for years. Same cleaner, same schedule, same peace of mind.",
    neighborhoods: [
      "High Park North",
      "High Park South",
      "Bloor West Village",
      "Swansea",
      "South Parkdale",
      "Roncesvalles Village",
      "Junction Triangle",
    ],
    metaTitle: "House Cleaning in High Park, Toronto",
    metaDescription:
      "High Park area house cleaning. Owner-operated, 30+ years trusted service, same cleaner every visit. Call (905) 501-1509.",
  },
  {
    slug: "leslieville",
    name: "Leslieville",
    region: "City of Toronto",
    headline: "House Cleaning in Leslieville",
    description:
      "Professional house cleaning in Leslieville and the east end of Toronto. Reliable, consistent service from a company that's been trusted for 30+ years.",
    intro:
      "Leslieville's mix of young families and renovated Victorians is a perfect fit for our approach: one dedicated cleaner who learns your home and keeps it exactly how you like. No apps, no rotating strangers — just Denise's team, doing what we've done for three decades.",
    neighborhoods: [
      "Leslieville",
      "Riverside",
      "South Riverdale",
      "Greenwood-Coxwell",
      "East Chinatown",
      "Gerrard India Bazaar",
    ],
    metaTitle: "House Cleaning in Leslieville, Toronto",
    metaDescription:
      "Leslieville house cleaning. Same trusted cleaner every visit, owner-operated, 30+ years of referrals. Call (905) 501-1509.",
  },
];
