import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Zheng Han",
  lastName: "Ong",
  name: `Zheng Han`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "ozhenghan2@gmail.com",
  location: "Singapore", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Chinese"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <></>,
  description: <></>,
};
const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/yooningui",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ongzhenghan/",
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transforming ideas into scalable, user-friendly applications</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">

      </Row>
    ),
    href: "/work/foody",
  },
  subline: (
    <>
      I'm Zheng Han, a software engineer passionate about full stack development and AI innovation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: false,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Singapore based software engineer with a passion in creating solutions for problems.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Great Eastern",
        timeframe: "May 24 - Aug 24",
        role: "Creative Technologist Intern",
        achievements: [
          <>
            Built and maintained React and TypeScript components for the company’s internal design system, ensuring clean code and consistent UX.
          </>,
          <>
            Created interactive prototypes with React, Vue, and Gatsby to support agile product testing cycles.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/geapp-image.png",
            alt: "GE logo",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Handshakes by DC Frontiers",
        timeframe: "Aug 23 - Dec 23",
        role: "Machine Learning Intern",
        achievements: [
          <>
            Refactored and documented legacy codebase; implemented linting tools (e.g., Ruff) to improve code quality and enforce standards.
          </>,
          <>
            Built a custom Named Entity Recognition (NER) pipeline using spaCy and pandas to classify and analyze customer search queries, helping the product team uncover user intent.
          </>,
          <>
            Built FastAPI-based REST endpoints integrating LLMs (Mistral) to streamline internal workflows and enable custom NLP tasks.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Singapore University of Technology and Design (SUTD)",
        description: <>Bachelor of Engineering (Computer Science and Design), Honours, Minor in AI.</>,
      },
    ],
  },
  technical: {
  display: true, // set to false to hide this section
  title: "Technical Skills",
  skills: [
    {
      title: "Frontend Development",
      description: (
        <>
          Experienced in building responsive and dynamic interfaces using React, Vue, and React Native (Expo), with TypeScript for scalability and Figma for design collaboration.
        </>
      ),
      tags: [
        { name: "React" },
        { name: "Vue" },
        { name: "React Native (Expo)" },
        { name: "TypeScript" },
        { name: "Figma" },
      ],
      images: [],
    },
    {
      title: "Backend & Databases",
      description: (
        <>
          Skilled in developing APIs and backend services using FastAPI, Node.js, and Express, with PostgreSQL, MySQL, and Firebase for data storage and management.
        </>
      ),
      tags: [
        { name: "FastAPI" },
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "Firebase" },
      ],
      images: [],
    },
    {
      title: "AI & Machine Learning",
      description: (
        <>
          Experienced in implementing and integrating AI features using TensorFlow, PyTorch, Scikit-learn, and OpenCV, with a focus on personalization and recommendation systems.
        </>
      ),
      tags: [
        { name: "TensorFlow" },
        { name: "PyTorch" },
        { name: "Scikit-learn" },
        { name: "OpenCV" },
      ],
      images: [],
    },
    {
      title: "Testing & DevOps",
      description: (
        <>
          Proficient in testing and deployment workflows using Jest, Selenium, Cypress, Docker, Git, and GitHub for CI/CD and version control.
        </>
      ),
      tags: [
        { name: "Jest" },
        { name: "Selenium" },
        { name: "Cypress" },
        { name: "Docker" },
        { name: "Git" },
        { name: "GitHub" },
      ],
      images: [],
    },
    {
      title: "Programming Languages",
      description: (
        <>
          Strong foundation in Python, Java, JavaScript, TypeScript, C, and C++, enabling versatility across full-stack and AI development.
        </>
      ),
      tags: [
        { name: "Python" },
        { name: "Java" },
        { name: "JavaScript" },
        { name: "TypeScript" },
        { name: "C" },
        { name: "C++" },
      ],
      images: [],
    },
  ],
},

};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: []
};

export { person, social, newsletter, home, about, blog, work, gallery };
