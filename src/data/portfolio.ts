// ===== ALL MY PORTFOLIO CONTENT =====
// Components read from this file. To update my site, I edit this file.
// The types (shapes) are in src/types/portfolio.ts

import type {
  About,
  Highlight,
  Personal,
  Project,
  SkillGroup,
  Social,
  UpcomingProject,
} from "@/types/portfolio";

// ----- Personal info -----
export const personal: Personal = {
  name: "Sajidur Rahman",
  title: "Full Stack Developer",
  intro:
    "CSE graduate building full-stack web apps with MongoDB, Express, React and Node.js. I use AI tools to code faster and debug smarter, and I understand every line I ship.",
  location: "Jessore, Khulna, Bangladesh",
  // Shown as a green badge in the Hero. Set to "" to hide it.
  availability: "Open to junior full-stack roles",
  email: "sajidurrahmansahib@gmail.com",
  phone: "+880 1521-319370", // Shown in About and Contact. Set to "" to hide it
  photo: "/profile.png", // My photo in public/profile.png (Hero + social preview)
  resumeUrl: "/Sajidur_Rahman_Resume.pdf", // PDF in public/. "" = hide the Resume buttons
  siteUrl: "https://sajidur-portfolio.vercel.app", // My live link (SEO: canonical base URL)
};

// ----- Quick facts in the Hero -----
// Only real facts I can prove (recruiters may check!).
export const highlights: Highlight[] = [
  { icon: "education", text: "B.Sc. in CSE, East West University" },
  { icon: "code", text: "500+ LeetCode problems solved" },
  { icon: "location", text: personal.location },
];

// ----- Social links -----
// An empty url ("") is hidden on the site.
export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/sajidur319370" },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sajidur-rahman-sajidur319370/",
  },
];

// ----- About me -----
export const about: About = {
  // My story: who I am → what I build → how I work → what I'm learning
  paragraphs: [
    "I'm a full-stack developer from Jessore, Bangladesh, with a B.Sc. in Computer Science and Engineering from East West University (2024). I love turning ideas into working web apps.",
    "I build with the MERN stack: React on the front end, Node.js and Express for APIs, and MongoDB for data. Solving 500+ LeetCode problems taught me to break big problems into small, clear steps.",
    "I use AI tools to code faster, debug smarter and learn quickly, and I make sure I understand every line I ship. Right now I'm building full-stack projects and looking for my first developer role.",
  ],
  motto:
    "Think BIG, Solve Small: I explore every possibility, then ship the simplest solution that works.",
  learning: ["System Design", "Databases", "Deployment", "Caching"],
  // The "quick info" card. Only true facts!
  // detail = a small second line. href = makes the value a link.
  facts: [
    {
      label: "Education",
      value: "B.Sc. in Computer Science & Engineering",
      detail: "East West University, Dhaka · 2018 – 2024",
    },
    { label: "Location", value: personal.location },
    { label: "Focus", value: "MERN Stack, Full Stack Web Apps" },
    {
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      label: "Phone",
      value: personal.phone,
      // tel: link opens the phone app. Remove spaces and dashes for the link
      href: `tel:${personal.phone.replace(/[\s-]/g, "")}`,
    },
  ].filter((fact) => fact.value), // hide facts with an empty value
};

// ----- Skills -----
// Rule: only list skills I can explain in an interview.
// The logo for each skill is set in src/components/SkillCard.tsx
export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend & Database",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Auth",
      "MongoDB",
      "Mongoose",
      "SQL",
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Linux",
      "Postman",
      "Jest",
      "Vercel",
    ],
  },
  {
    category: "Problem Solving",
    items: ["Data Structures", "Algorithms", "Python", "Java", "C++"],
  },
];

// ----- Projects -----
// My finished projects, shown as cards. To add one, copy an object and fill it in.
// image: screenshot in public/projects/ ("" = no image)
// liveUrl / githubUrl: "" = hide that button
// featured: true shows a "Featured" badge
export const projects: Project[] = [
  {
    title: "ShopStock",
    description:
      "Multi-branch inventory and point-of-sale system for a retail chain. Built for correctness under concurrency: stock never goes negative, retried sales are never counted twice, and every stock change is audited.",
    image: "/projects/shopstock.png",
    tech: ["TypeScript", "React", "Express", "MongoDB"],
    liveUrl: "https://shopstock-sajidur.onrender.com",
    githubUrl: "https://github.com/sajidur319370/shopstock",
    featured: true,
  },
  {
    title: "SeatBook",
    description:
      "Event ticketing with live seat selection: see other people's picks in real time, seats held for 10 minutes at checkout, and signed QR tickets that scan only once.",
    image: "/projects/seatbook.png",
    tech: ["TypeScript", "React", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://seatbook-sajidur.onrender.com",
    githubUrl: "https://github.com/sajidur319370/seatbook",
    featured: false,
  },
  {
    title: "TeamBoard",
    description:
      "Multi-tenant project management SaaS, a lighter Jira/Trello: workspaces with roles, sprints and real-time Kanban boards with drag & drop.",
    image: "/projects/teamboard.png",
    tech: ["TypeScript", "React", "Express", "MongoDB", "Socket.io"],
    liveUrl: "https://teamboard-yaur.onrender.com",
    githubUrl: "https://github.com/sajidur319370/teamboard",
    featured: false,
  },
];

// ----- Projects I'm building now -----
// Shown only while `projects` is empty. All three are finished, so this is empty.
// Format: { title, description, tech: [...], status: "In progress" | "Planned" }
export const upcomingProjects: UpcomingProject[] = [];
