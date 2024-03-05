import {Citizen} from "./citizens/citizen.entity";
import {Job} from "./yggdrasil/jobs/job.entity";

export const securityJob: Job = {
    id: 'Qs4sdf',
    name: 'Security',
    leafs: [
        {
        leafId: 'Qs4sdf',
        parent: true,
        weight: 1,
        }
    ],
    publicUtility: 0,
    competence: 0,
    penibility: 0,
    risk: 0,
    stress: 0,
    autonomy: 0,
    complexity: 0,
    responsibility: 0,
}
export const productConceptorJob: Job = {
  id: 'Qs4sdf',
  name: 'Product conceptor',
  leafs: [
      {
      leafId: 'Qs4sdf',
      parent: true,
      weight: 1,
      }
  ],
  publicUtility: 0,
  competence: 0,
  penibility: 0,
  risk: 0,
  stress: 60,
  autonomy: 100,
  complexity: 60,
  responsibility: 70,
}
export const citizens: Citizen[] = [
  {
    id: 'Qs4d5f',
    firstName: 'Majin',
    lastName: 'Alucard',
    atlasName: 'Majin',
    birth: null,
    death: null,
    parents: [],
    children: [],
    partners: [],
    siblings: [],
    leafs: [
      {
        id: 'Qs4d5f',
        name: 'Atlas',
        links: [],
      },
      {
        id: 'Qs4d5f',
        name: 'Atheism',
        links: [],
      },
    ],
    hubsHistory: null,
    jobHistory: null,
  },
  {
    id: 'Qs4sdf',
    firstName: 'Jean-Marc',
    lastName: 'Jancovici',
    atlasName: 'Janco',
    birth: {
      id: 'Qs4sdf',
      date: new Date('1962-02-13'),
      place: {
        id: 'Qs4sdf',
        name: 'Paris',
        pods: [],
      },
    },
    death: null,
    parents: [],
    children: [],
    partners: [],
    siblings: [],
    leafs: [
      {
        id: 'Qs4sdf',
        name: 'Atlas',
        links: [],
      }
    ],
    hubsHistory: [],
    jobHistory: [{
      id: 'Qs4sdf',
      name: 'Consultant',
      leafs: [{
        leafId: 'Qs4sdf',
        parent: true,
        weight: 1,
      }],
      publicUtility: 0,
      competence: 0,
      penibility: 0,
      risk: 0,
      stress: 0,
      autonomy: 0,
      complexity: 0,
      responsibility: 0,
      company: {
        id: 'Qs4sdf',
        name: 'Manicore',
        purpose: {
          id: 'Qs4sdf',
          shortDescription: 'Consulting',
          longDescription: 'Carbone 4 is a consulting company that helps other companies to reduce their carbon footprint.'
        }
      },
      startDate: new Date('2007-01'),
      endDate: new Date('1990'),
    }],
  },
  {
    id: 'Qs4sdf',
    firstName: 'Bernard',
    lastName: 'Jancovici',
    atlasName: 'Bernard Jancovici',
    birth: {
      id: 'Qs4sdf',
      date: new Date('1962-02-13'),
      place: {
        id: 'Qs4sdf',
        name: 'Paris',
        pods: [],
      },
    },
    death: null,
    parents: [],
    children: [],
    partners: [],
    siblings: [],
    leafs: [
      {
        id: 'Qs4sdf',
        name: 'Atlas',
        links: [],
      }
    ],
    hubsHistory: [],
    jobHistory: null,
  }
];

export const leafs: OldLeaf[] = [
  {
    name: "Trading System",
    parent: null,
    children: [
      "Money",
      "Market analysis",
      "Time",
      "CO2 Credits",
      "Natural Resources",
      "Energy"
    ]
  },
  {
    name: "Money",
    parent: "Trading System",
    children: [
      "Currency",
      "Banking",
      "Investment"
    ]
  },
  {
    name: "Communities",
    parent: null,
    children: [
      "Family",
    ]
  },{
    name: "Paranormal",
    parent: "Belief",
    children: [
      "UFO",
      "Ghosts",
      "Aliens"
    ]
  },
  {
    name: "Belief",
    parent: null,
    children: [
      "Religion",
      "Paranormal",
      "Spirituality"
    ]
  },
  {
    name: "Religion",
    parent: "Belief",
    children: [
      "Christianity",
      "Islam",
      "Buddhism",
      "Judaism"
    ]
  },
  {
    name: "Spirituality",
    parent: "Belief",
    children: [
      "Meditation",
      "Yoga",
      "Mindfulness"
    ]
  },
  {
    name: "Technology",
    parent: null,
    "children": [
      "Internet",
      "Software",
      "Hardware"
    ],
  },
  {
    name: "Internet",
    parent: "Technology",
    children: [
      "Web",
      "Email",
      "Social Media"
    ],
  },
  {
    name: "Energy",
    parent: "Trading System",
    children: [
      "Renewable",
      "Limited",
    ]
  },
  {
    name: "Renewable",
    parent: "Energy",
    children: [
      "Wind",
      "Sun's photons",
      "Water",
    ]
  },
  {
    name: "Limited",
    parent: "Energy",
    children: [
      "Oil",
      "Nuclear"
    ]
  },
  {
    name: "Oil",
    parent: "Limited",
    children: [
      "Gasoline",
      "Diesel",
      "Kerosene"
    ]
  },
  {
    name: "Web",
    parent: "Internet",
    children: [
      "Usage",
      "Privacy",
      "Hacking"
    ]
  },
  {
    name: "Software",
    parent: "Technology",
    children: [
      "Operating system",
      "Application",
      "Programming"
    ]
  },
  {
    name: "Hardware",
    parent: "Technology",
    children: [
      "Computer",
      "Mobile",
      "Network"
    ]
  },
  {
    name: "Currency",
    parent: "Money",
    children: [
      "Foreign exchange",
      "Cryptocurrency",
      "Cash"
    ]
  },
  {
    name: "Banking",
    parent: "Money",
    children: [
      "Savings",
      "Loans",
      "Credit"
    ]
  },
  {
    name: "Investment",
    parent: "Money",
    children: [
      "Stocks",
      "Bonds",
      "Real estate"
    ]
  },
  {
    name: "Market analysis",
    parent: "Trading System",
    children: [
      "Stock market",
      "Commodities",
      "Derivatives"
    ]
  },
  {
    name: "Shyness",
    parent: "Personality",
    children: null,
  },
  {
    name: "Personality",
    parent: null,
    children: [
      "Shyness",
      "Extroversion",
      "Introversion",
      "Fearfullness",
      "Sociability",
      "Anxiety",
      "Depression",
      "Anger",
      "Happiness",
      "Sadness",
      "Optimism",
      "Pessimism",
      "Confidence",
      "Self-esteem",
      "Self-confidence",
      "Self-respect",
      "Self-love",
      "Self-acceptance",
      "Self-awareness",
      "Self-knowledge",
      "Self-improvement",
      "Self-help",
    ]
  },
  {
    name: "Casino",
    parent: "Gambling",
    children: [
      "Poker",
      "Blackjack",
      "Roulette"
    ]
  },
  {
    name: "Gambling",
    parent: "Money",
    children: [
      "Casino",
      "Lottery",
      "Betting"
    ]
  },
  {
    name: "Time",
    parent: "Trading System",
    children: [
      "Work",
      "Leisure",
      "Sleep"
    ]
  },
  {
    name: "Work",
    parent: "Time",
    children: [
      "Production",
      "Services",
      "Trade"
    ]
  },
  {
    name: "Production",
    parent: "Work",
    children: [
      "Food",
      "Houses",
      "Clothes"
    ]
  },
  {
    name: "Services",
    parent: "Work",
    children: [
      "Health",
      "Education",
      "Transportation",
        "Creation"
    ]
  },
  {
    name: "Art",
    parent: null,
    children: [
      "Painting",
      "Sculpture",
      "Music"
    ]
  },
  {
    name: "CO2",
    parent: "Trading System",
    children: [
     "Carbon credit",
     "Carbon emissions calculation",
     "Carbon offsetting",
     "Carbon trading"
    ]
  },
  {
    name: "Life",
    parent: null,
    children: [
      "Plants",
      "Birth",
      "Animals",
      "Corals",
      "Conservation",
    ]
  },
  {
    name: "Plants",
    parent: "Life",
    children: [
      "Vegetable"
    ]
  },
  {
    name: "Feminism",
    parent: "Equality",
    children: [],
  },
    {
        name: "Equality",
        parent: null,
        children: [
          "Feminism",
          "Racial equality"
        ]
    },
  {
    name: "Racial equality",
    parent: "Equality",
    children: [
        "Black equality",
        "Asian equality",
        "Latino equality",
        "Native American equality",
            "White equality",
          "Jewish equality",
            "Muslim equality"
    ],
  },
  {
    name: "Conservation",
    parent: "Life",
    children: [
      "Environmental protection",
      "Pollution reduction",
      "Sustainable living"
    ]
  },
  {
    name: "Birth",
    parent: "Life",
    children: [
      "Family planning",
      "Reproductive health",
      "Parental care"
    ]
  },
  {
    name: "Animals",
    "parent": "Life",
    "children": [
        "Animal behavior",
      "Companion Pets",
      "Feeding Pets",
      "Wildlife conservation"
    ]
  },
  {
    name: "Corals",
    parent: "Animals",
    children: [
      "Coral reef conservation"
    ]
  },
  {
    name: "Sport",
    parent: null,
    children: [
      "Racket sports",
      "Ball sports",
      "Combat",
        "Dance",
    ]
  },
  {
    name: "Dance",
    parent: "Sport",
    children: [
        "Ballet",
        "Salsa",
        "Tango",
        "Tai Chi",
        "Belly Dance",
        "Flamenco",
        "Breakdance",
        "Swing",
        "Hip Hop",
        "Contemporary",
        "Jazz",
        "Tap",
        "Irish",
        "Folk",
        "Street",
        "Ballroom",
        "Latin",
        "African",
        "Indian",
        "Bollywood",
        "Kathak",
        "Bharatanatyam",
        "Kuchipudi",
        "Odissi",
        "Manipuri",
        "Sattriya",
        "Mohiniyattam",
        "Kathakali",
        "Chhau",
        "Yakshagana",
        "Koodiyattam",
        "Therukoothu",
        "Butoh",
        "Noh",
        "Kabuki",
        "Kathakali",
  ]
  },
  {
    name: "Racket sports",
    parent: "Sport",
    children: [
      "Tennis",
      "Badminton",
      "Squash"
    ]
  },
  {
    name: "Ball sports",
    parent: "Sport",
    children: [
      "Soccer",
      "Basketball",
      "Volleyball",
      "Handball"
    ]
  },
  {
    name: "Combat",
    parent: "Sport",
    children: [
      "MMA",
      "Boxing",
      "Wrestling",
      "Judo",
      "Jusitsu",
      "Karate",
      "Taekwondo",
      "Kung Fu",
      "Aikido",
      "Muay Thai",
      "Kickboxing",
      "Capoeira",
      "Krav Maga",
      "Sambo",
      "Systema",
      "Hapkido",
    ]
  },
  {
    name: "MMA",
    parent: "Combat",
    children: null,
    federation: {
        id: "4er5t6y7u8i9o0p-1q2w3e4r5t6y7u8i9o0p-1q2w3e4r5t6y7u8i9o0p",
        name: "Ultimate Fighting Championship"
    },
  } as OldSportLeaf,
  {
    name: "Birth Control",
    parent: "Birth",
    children: [
      "Contraception",
      "Abortion",
      "Adoption"
    ]
  },
  {
    name: "Animal care",
    parent: "Animals",
    children: [
      "Feeding Pets"
    ]
  },
  {
    name: "Humorist",
    parent: "Humor",
    children: [
      "Jokes",
      "Satire",
      "Parody"
    ]
  },
  {
    name: "Everyday Life",
    parent: null,
    children: [
      "Sex",
        "Privacy",
        "Emojis",
      ]
  },
  {
    name: "Sex",
    parent: "Everyday Life",
    children: [
      "Contraception",
      "STDs",
      "Sexual orientation"
    ]
  },
  {
    name: "Privacy",
    parent: "Everyday Life",
    children: [
      "Data protection",
      "Surveillance",
      "Anonymity"
    ]
  },
  {
    name: "Physics",
    parent: "Science",
    children: [
      "Quantum mechanics",
      "Relativity",
      "Particle physics"
    ]
  },
  {
    name: "Emojis",
    parent: "Everyday Life",
    children: [
      "Emoji usage",
      "Emoji interpretation",
      "Emoji design"
    ]
  },
  {
    name: "Marketing",
    parent: null,
    children: [
      "Advertising",
      "Branding",
      "Public relations"
    ]
  },
  {
    name: "Citizenship",
    parent: null,
    children: [
      "Recognition",
      "Citizen Grade Trophies"
    ]
  },
  {
    name: "Recognition",
    parent: "Citizenship",
    children: [
      "Citizenship test",
      "Citizenship ceremony",
      "Citizenship oath"
    ]
  },
  {
    name: "Assurance",
    parent: "Citizenship",
    children: [
      "Citizenship benefits",
      "Citizenship rights",
      "Citizenship duties"
    ]
  },
  {
    name: "Wine",
    parent: "Food",
    children: [
        "Wine production",
        "Wine tasting",
    ]
  },
  {
    name: "Citizen Trophies",
    parent: "Citizenship",
    children: []
  },
  {
    name: "Medicine",
    parent: null,
    children: [
      "Drugs",
      "Healthcare",
      "Death"
    ]
  },
  {
    name: "Transportation",
    parent: null,
    children: [
      "Train",
      "Speed Limit",
      "Biking",
      "Motorcycle"
    ]
  },
  {
    name: "Drugs",
    parent: "Medicine",
    children: [
      "Prescription drugs",
      "Recreational drugs",
      "Performance-enhancing drugs"
    ]
  },
  {
    name: "Healthcare",
    parent: "Medicine",
    children: [
      "Primary care",
      "Specialized medicine",
      "Public health initiatives"
    ]
  },
  {
    name: "Humor",
    parent: "Life",
    children: [
      "Humorist"
    ]
  },
  {
    name: "Death",
    parent: "Medicine",
    children: [
      "Suicide",
      "Funeral rites",
      "Grief counseling"
    ]
  },
  {
    name: "Suicide",
    parent: "Death",
    children: [],
  },
  {
    name: "Education",
    parent: null,
    children: [
      "Teaching",
      "Education methods",
      "Skills",
      "Knowledge",
      "Culture"
    ],
  },
  {
    name: "Plants",
    parent: "Life",
    children: [
      "Vegetable"
    ]
  },
]



// Air Quality
// Water Management
// Waste Management
// Biodiversity Conservation
// Governance
// Skills: Policy-making, governance structures, democratic processes
// Legislation
// Judiciary
// Executive Branch
// Civil Liberties
// Healthcare
// Skills: Healthcare provision, public health management, medical research
// Primary Care
// Specialized Medicine
// Public Health Initiatives
// Health Education
// Social Welfare
// Skills: Social assistance, poverty alleviation, community support
// Welfare Programs
// Housing Assistance
// Food Assistance
// Disability Services
// Technology
// Skills: Technological innovation, digital literacy, cybersecurity
// Internet Access
// Digital Privacy
// Emerging Technologies
// Data Protection
// Justice
// Skills: Legal representation, conflict resolution, rehabilitation
// Legal Rights
// Court System
// Policing
// Prison Reform
// Economy
// Skills: Economic planning, entrepreneurship, financial literacy
// Labor Market
// Business Regulation
// Taxation
// International Trade
// International Relations
// Skills: Diplomacy, international law, peacekeeping
// Diplomatic Relations
// International Organizations
// Conflict Resolution
// Humanitarian Aid
// Civil Rights
// Skills: Advocacy, activism, awareness raising
// Equality
// Freedom of Expression
// Privacy Rights
// Anti-discrimination Laws
// Migration
// Skills: Immigration policies, refugee resettlement, cultural integration
// Immigration
// Asylum
// Border Security
// Citizenship Acquisition
// Family Law
// Skills: Family mediation, child custody, adoption processes
// Marriage
// Divorce
// Child Support
// Guardianship
// Media Regulation
// Skills: Media literacy, content moderation, press freedom
// Broadcasting Standards
// Internet Regulation
// Media Ownership
// Journalistic Ethics
