export const METADATA = {
  title: "Portfolio | Ghouzali Abderrahmani",
  description:
    "Ghouzali Abderrahmani is a Full Stack Developer from France, interested in crafting beautiful and functional applications. Ghouzali ghouzali just got graduated from Paris 8 University, France.",
  siteUrl: "",
  twitterHandle: "@Ghozali_00",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Diplomes",
    ref : "diplomes",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "A pragmatic Full Stack Developer",
  "I build things for the web",
  "I create aesthetic and modern apps",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mailto: abderrahmani.ghouzali@gamil.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/Ghouzali/",
  },
  {
    name: "github",
    url: "https://github.com/GH0GH0",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/ghozali_00/",
  },
  {
    name: "twitter",
    url: "https://twitter.com/ghozali_00",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "sass",
    "php",
    "c",
    "C++",
    "csharpe",
    "java",
    "python",
  ],
  librariesAndFrameworks: [
    "react",
    "nextjs",
    "jquery",
    "threejs",
    "bootstrap",
    "django",
    "flask",
    
  ],
  Modeling: [
    "unity",
    "blender",
  ],
  databases: [
    "mysql",
    "phpmyadmin",
    "mongodb",
  ],
  MotionDesign: [
    "photoshop",
    "illustrator",
    "aftereffect",
    "premierpro",
  ],
  tools: ["nodejs", "git", "visualstudio", "pycharm", "qt"],
};

export const PROJECTS = [
  {
    name: "GallicBot",
    image: "/projects/gallic.png",
    blurImage: "/projects/blur/gallic.png",
    description: "Chatbot  for Gallica 🤖 using Python + Flask ",
    gradient: ["#fd4c4d", "#fff0ed"],
    url: "https://shubh73-airbnb.vercel.app/",
    tech: ["python", "flask", "javascript", "html", "css"],
  },

  {
    name: "Les Voix de l'Opera",
    image: "/projects/lesvoixdelopera.png",
    blurImage: "/projects/blur/lesvoixdelopera.png",
    description: "Web App using Three.js + Html/Css ✍🏻",
    gradient: ["#3e59d1", "#021259"],
    url: "https://gh0gh0.github.io/Les-Voix-l-Opera/",
    tech: ["threejs", "javascript", "html", "css"],
  },
  {
    name: "Inshorts",
    image: "/projects/inshorts.webp",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
    "Conversational Voice Controlled React News Application using Alan AI 🎙",
    gradient: ["#000066", "#6699FF"],
    url: "https://shubh73-inshorts.netlify.app/",
    tech: ["react", "chakra-ui", "alan"],
  },
  {
    name: "Tesla",
    image: "/projects/tesla.webp",
    blurImage: "/projects/blur/tesla-blur.webp",
    description: "A Tesla React Native App 🏎️",
    gradient: ["#142D46", "#2E4964"],
    url: "https://github.com/shubh73/tesla",
    tech: ["react"],
  },
];

export const WORK = [
  {
    company: "Union Sportive de Gringy",
    title: "Webmaster Designer",
    location: "Grigny, France",
    range: "October 2020- October 2022",
    responsibilities: [
      "Led the Full Stack revamp on the Admin Portal.",
      "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
      "Implemented CRUD features for all the services and providers.",
    ],
    url: "https://spacenos.com/",
  },
  
];
export const DIPLOMES = [
  {
    university : "Paris 8 ",
    title : "Creation and Digital Edition",
    image :"/projects/paris8.svg",
    location: "Paris, France",
    range: "2020-2022",
    level :" Master 2",
    gradient: ["#000066", "#021259"],
    mention : "Honors",
    url: "/projects/university/paris8.pdf"
  },
  {
    university : "Verailles ",
    title : "computer science",
    image : "/projects/universiteversaille.svg",
    location: "Paris, France",
    range: "2019-2021",
    level :"Bachelor",
    gradient: ["#000066", "#6699FF"],
    mention : "Good enough",
    url: "/projects/university/versailles.pdf"
  },
  {
    university : "Béjaïa ",
    title : "computer science",
    image : "/projects/bejaia.png",
    location: "Béjaia, Algeria",
    range: "2016-2017",
    level :"Bachelor",
    gradient: ["#000066", "#6699FF"],
    mention : "Good",
    url: "/projects/university/"
  }
]

export const GTAG = "G-5HCTL2TJ5W";
