import Project1 from "../assets/Project1.png.jpg";
import Project2 from "../assets/Project2.png.jpg";
import Project3 from "../assets/Project3.png.jpg";
import Project4 from "../assets/Project4.jpg";
import Project5 from "../assets/Resume.png";
import Project6 from "../assets/eco.png";
import Project7 from "../assets/spahot.png";
import Project8 from "../assets/lifa.png";
import Project9 from "../assets/rof.png";
import Project10 from "../assets/jerico.png";
import Project11 from "../assets/Dms.png";

export const navItems = [
  { name: "Home" },
  { name: "Skill" },
  { name: "Work" },
  { name: "Portfolio" },
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
    title: "NFT",
    category: "Projects",
    image: Project1,
    description:
      "A web-based tool to create professional resumes with custom templates.",
    link: "",
  },
  {
    id: 2,
    title: "Olutumbi Babayomi Chambers",
    category: "Projects",
    image: Project2,
    description: "",
    link: "http://olutumbibabayomichambers.com",
  },
  {
    id: 3,
    title: "SpaczeGet E-commerce",
    category: "Projects",
    image: Project3,
    description:
      "An AI-powered e-commerce platform specializing in gadgets with a bidding system.",
    link: "https://your-hr-software-link.com",
  },
  {
    id: 4,
    title: "Hanne Bakery",
    category: "Projects",
    image: Project4,
    description:
      "An Online Platform for Hanne Bakery, showcasing their products and services.",
    link: "",
  },
  {
    id: 5,
    title: "Resume Builder",
    category: "Projects",
    image: Project5,
    description:
      "A web-based tool to create professional resumes with custom templates. ATS-friendly.",
    link: "https://v0-resume-builder-with-ats.vercel.app/",
  },

  {
    id: 6,
    title: "Ecosatisfaction",
    category: "Clients",
    image: Project6,
    description:
      "An e-commerce platform that allows users to buy and sell products.",
    link: "https://ecosatisfaction.com/",
  },
  {
    id: 7,
    title: "SpaHotel",
    category: "Projects",
    image: Project7,
    description:
      "An Hotel booking platform that allows users to book hotels and manage their bookings.",
    link: "https://spahot.netlify.app/",
  },
  {
    id: 8,
    title: "LifaDoc",
    category: "Clients",
    image: Project8,
    description:
      "your trusted partner in Environmental Management. We are committed to excellence and we strive to deliver unmatched values and reliability to our clients.",
    link: "https://spahot.netlify.app/",
  },
  {
    id: 9,
    title: "ROF",
    category: "Clients",
    image: Project9,
    description:
      "R.O.F is a Fraternal Organisation. It is not a religion, but it is religious in character based on the belief in the Fatherhood of God; Brotherhood of man and the immortality of souls.",
    link: "https://roferp.com.ng/",
  },

  {
    id: 10,
    title: "Digital Market Square",
    category: "Clients",
    image: Project11,
    description:
      "We don’t just market brands,we create digital experience that captivate, engage and convert",
    link: "https://www.jericohotel.com.ng/",
  },
];
