import Project1 from "../assets/Project1.png.jpg";
import Project2 from "../assets/Project2.png.jpg";
import Project3 from "../assets/Project3.png.jpg";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Project5.jpg";

export const navItems = [
  { name: "Home" },
  { name: "Portfolio" },
  { name: "Skill" },
  { name: "Work" },
  { name: "Blog" },
];

export const skillsData = {
  frontend: [
    { skill: "HTML5", percentage: 80 },
    { skill: "CSS3 (Sass/SCSS)", percentage: 90 },
    { skill: "JavaScript", percentage: 75 },
    { skill: "React.js", percentage: 80 },
  ],
  backend: [
    { skill: "Node.js", percentage: 70 },
    { skill: "Express.js", percentage: 65 },
  ],
  tools: [
    { skill: "Git & GitHub", percentage: 85 },
    { skill: "Visual Studio Code", percentage: 75 },
    { skill: "Webpack", percentage: 60 },
    { skill: "Responsive Design", percentage: 70 },
  ],
};

export const Skills = [
  {
    title: "Frontend",
    icon: "./assets/images/frontend-icon.png",
    skills: skillsData.frontend,
  },
  {
    title: "Backend",
    icon: "./assets/images/backend-icon.png",
    skills: skillsData.backend,
  },
  {
    title: "Tools",
    icon: "./assets/images/tools-icon.png",
    skills: skillsData.tools,
  },
];

export const WORK_EXPERIENCE = {
  accounts: [
    {
      title: "Junior Accountant at XYZ Ltd",
      date: "January 2023 - Present",
      responsibilities: [
        "Managed financial records and reconciliations.",
        "Assisted in budgeting and expense tracking.",
        "Worked with tax professionals for timely filings.",
        "Used accounting software for payroll and transactions.",
      ],
    },
    {
      title: "Accounting Intern at ABC Corp",
      date: "June 2021 - December 2022",
      responsibilities: [
        "Assisted in preparing balance sheets and reports.",
        "Performed data entry and maintained records.",
        "Helped in audit preparations and documentation.",
        "Worked on cost analysis and financial reports.",
      ],
    },
  ],
  tech: [
    {
      title: "Frontend Developer at Spacze",
      date: "January 2024 - Present",
      responsibilities: [
        "Developing Spacze e-commerce platform using React.js and Tailwind CSS.",
        "Implementing AI-driven features.",
        "Optimizing website performance and SEO.",
        "Collaborating with UI/UX designers for smooth experience.",
      ],
    },
    {
      title: "Freelance Software Developer",
      date: "March 2023 - Present",
      responsibilities: [
        "Built multiple web apps, including HR management tools.",
        "Worked with ASP.NET, C#, and MySQL for backend solutions.",
        "Designed full-stack applications using React.js and Firebase.",
        "Mastering CI/CD pipelines and DevOps best practices.",
      ],
    },
  ],
};

export const Projects = [
  {
    id: 1,
    title: "Resume Builder",
    category: "Projects",
    image: Project1, // Now correctly imported
    description:
      "A web-based tool to create professional resumes with custom templates.",
    link: "https://your-resume-builder-link.com",
  },
  {
    id: 2,
    title: "SpaczeGet E-commerce",
    category: "Projects",
    image: Project2,
    description:
      "An AI-powered e-commerce platform specializing in gadgets with a bidding system.",
    link: "https://your-spaczeget-link.com",
  },
  {
    id: 3,
    title: "HR Software",
    category: "Projects",
    image: Project3,
    description:
      "A full-fledged HR management system for businesses, built with React and ASP.NET.",
    link: "https://your-hr-software-link.com",
  },
  {
    id: 4,
    title: "DMS (Digital Marketing Square)",
    category: "Projects",
    image: Project4,
    description:
      "A marketing tool that simplifies content creation and audience targeting.",
    link: "https://your-dms-link.com",
  },
  {
    id: 5,
    title: "Dropshipping Mini Platform",
    category: "Projects",
    image: Project5,
    description:
      "A self-built dropshipping platform that eliminates the need for Shopify.",
    link: "https://your-dropshipping-link.com",
  },
];
