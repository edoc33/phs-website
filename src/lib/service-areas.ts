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
  // Mississauga
  {
    slug: "mississauga",
    name: "Mississauga",
    region: "Peel Region",
    headline: "House Cleaning in Mississauga",
    description:
      "Most cleaning companies send whoever is available. We send the same person, every time. Owner-operated house cleaning in Mississauga since 1994.",
    intro:
      "Our office is in Mississauga. This is where we started over 30 years ago, and most of our longest-standing clients are here. From lakeside condos in Port Credit to family homes in Erin Mills, your cleaner already knows the neighbourhood because they live in it. You will never have to re-explain how you like things done. That is the difference between hiring a company and hiring Denise's team.",
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
      "Owner-operated house cleaning in Mississauga since 1994. Same cleaner every visit, $45/hr, weekly/bi-weekly/monthly. Call (905) 501-1509.",
  },
  // Toronto
  {
    slug: "toronto",
    name: "Toronto",
    region: "City of Toronto",
    headline: "House Cleaning in Toronto",
    description:
      "Not a franchise. Not an app. A family-owned cleaning company where the owner knows your name and the same person cleans your home every visit.",
    intro:
      "Most Toronto cleaning companies book you online and send whoever is free that day. You get a stranger each time, explain everything again, and hope for the best. We work differently. Denise assigns one cleaner to your home. That person learns your space, your preferences, and your schedule. They come back every visit. After 30 years, every single client we have came through a referral. That does not happen by accident.",
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
      "Owner-operated house cleaning in Toronto. Same cleaner every visit, not a franchise. 30+ years, 100% referral-built. Call (905) 501-1509.",
  },
  // Toronto neighbourhoods
  {
    slug: "etobicoke",
    name: "Etobicoke",
    region: "City of Toronto",
    headline: "House Cleaning in Etobicoke",
    description:
      "Just minutes from our Mississauga office. Your cleaner arrives on time because they are not driving across the city between appointments.",
    intro:
      "Etobicoke families often tell us they tried a franchise first. Different person every time, no one remembered the alarm code, and they had to show the new cleaner around every visit. That is not how we work. We are based right next door in Mississauga. Your cleaner knows the Kingsway, knows Mimico, knows Long Branch. They show up on the same day, at the same time, and already know exactly what your home needs.",
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
      "House cleaning in Etobicoke from a family company based minutes away. Same cleaner every visit, 30+ years experience. Call (905) 501-1509.",
  },
  {
    slug: "north-york",
    name: "North York",
    region: "City of Toronto",
    headline: "House Cleaning in North York",
    description:
      "Condos, townhomes, detached homes. One cleaner who knows yours. Not a rotating crew from an app.",
    intro:
      "North York has everything from high-rise condos along the Yonge corridor to large detached homes in Bayview Village. Most cleaning apps treat them all the same and send whoever is closest. We match you with one cleaner who learns your specific home. They know which floors need extra care, which rooms to skip, and how you like the kitchen left. You will never explain it twice.",
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
      "House cleaning in North York. One dedicated cleaner, not a rotating crew. Owner-operated, 30+ years. Call (905) 501-1509.",
  },
  {
    slug: "scarborough",
    name: "Scarborough",
    region: "City of Toronto",
    headline: "House Cleaning in Scarborough",
    description:
      "The same quality and personal attention our Mississauga and downtown clients get. One cleaner, assigned to your home, every visit.",
    intro:
      "A lot of cleaning companies focus on downtown and treat Scarborough as an afterthought. We don't. Your home gets the same dedicated cleaner, the same consistency, and the same attention as a Forest Hill estate or a Port Credit condo. One person assigned to your home who learns every room, every preference, and shows up the same day every visit. That is what 30 years of referral-only growth looks like.",
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
      "House cleaning in Scarborough. Same dedicated cleaner every visit, owner-operated, 30+ years. Call (905) 501-1509.",
  },
  {
    slug: "downtown-toronto",
    name: "Downtown Toronto",
    region: "City of Toronto",
    headline: "House Cleaning in Downtown Toronto",
    description:
      "Your cleaner already knows the concierge, the parking, and the elevator code. You do not have to manage anything.",
    intro:
      "Downtown condo cleaning is a hassle with most companies. You have to arrange building access, explain the concierge process, figure out parking, and hope the cleaner actually shows up. With us, your assigned cleaner already knows your building. They handle the concierge, the elevator, and the parking. Most of our downtown clients have had the same cleaner for years. You just come home to a clean unit.",
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
      "Downtown Toronto condo cleaning. Your cleaner knows the building, the concierge, and your unit. Same person every visit. Call (905) 501-1509.",
  },
  {
    slug: "midtown-toronto",
    name: "Midtown Toronto",
    region: "City of Toronto",
    headline: "House Cleaning in Midtown Toronto",
    description:
      "Most of our longest-standing clients are in Midtown. They found us through a neighbour. That is how it has worked for 30 years.",
    intro:
      "The homes in Forest Hill, Deer Park, and Davisville have standards. The families who live here have tried other cleaners and know the difference between someone who shows up and someone who actually cares about the work. Most of our Midtown clients came to us through a neighbour's recommendation. They stay because the same cleaner comes every visit and the quality never drops. We have never had to advertise here. The work speaks for itself.",
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
      "Midtown Toronto house cleaning. Trusted in Forest Hill, Deer Park, and Yonge-Eglinton for 30+ years. Same cleaner every visit. Call (905) 501-1509.",
  },
  {
    slug: "the-beaches-toronto",
    name: "The Beaches",
    region: "City of Toronto",
    headline: "House Cleaning in The Beaches",
    description:
      "A small company for a small-town neighbourhood. The owner knows your name. Your cleaner knows your home.",
    intro:
      "The Beaches feels like a small town, and we fit right in. We are not a franchise with a call centre. Denise knows every client by name. Your cleaner knows your home, your schedule, and your kids' names. When you need to change a day or add something extra, you call one person and it is handled. That is what you lose when you book through an app.",
    neighborhoods: [
      "Upper Beaches",
      "Woodbine Beach",
      "Kew Beach",
      "Balmy Beach",
      "Fallingbrook",
    ],
    metaTitle: "House Cleaning in The Beaches, Toronto",
    metaDescription:
      "House cleaning in The Beaches. Family-owned, owner knows every client. Same cleaner every visit. Call (905) 501-1509.",
  },
  {
    slug: "high-park",
    name: "High Park",
    region: "City of Toronto",
    headline: "House Cleaning in High Park",
    description:
      "Families along Bloor West and Roncesvalles who care about their homes hire cleaners they actually know. Not whoever the app sends.",
    intro:
      "High Park families care about quality of life, and that includes who comes into their home. Most cleaning apps send a different person each time. You never build trust, never build a routine, and the quality varies week to week. We assign one cleaner to your home. They learn your space, your preferences, and your schedule. Same person, every visit, for as long as you want. We have served homes along Bloor West and Roncesvalles for years, almost always because a neighbour recommended us.",
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
      "High Park house cleaning. One cleaner who knows your home, not a rotating crew. Owner-operated, 30+ years. Call (905) 501-1509.",
  },
  {
    slug: "leslieville",
    name: "Leslieville",
    region: "City of Toronto",
    headline: "House Cleaning in Leslieville",
    description:
      "Young families in renovated Victorians need a cleaner who learns their home, not one who reads instructions off an app every visit.",
    intro:
      "Leslieville is full of young families who just renovated a Victorian and want someone to help keep it that way. The big cleaning companies send a different crew every time. They don't know your home, your floors, or what products you prefer. We do it differently. One cleaner, assigned to you, who comes back every visit. No app, no rotating strangers. Just Denise's team doing what we have done for three decades. Every client we have ever had came through a referral. In Leslieville, that usually means your neighbour on the next block.",
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
      "Leslieville house cleaning. One dedicated cleaner, not a franchise. Owner-operated, 30 years of referrals. Call (905) 501-1509.",
  },
];
