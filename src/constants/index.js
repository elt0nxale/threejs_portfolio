import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  sgxchange,
  jobit,
  tripguide,
  threejs,
  vue,
  java,
  spring,
  flask,
  rabbitmq,
  python,
  php,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "Data Analyst",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "rabbitmq",
    icon: rabbitmq,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Software Developer Intern",
    company_name: "Truffle Technologies",
    icon: shopify,
    iconBg: "#383E56",
    date: "May ' 23 - Aug ' 23",
    points: [
      "Developed new web platform used in production from existing IOS version using React.js, TailwindCSS, MobX, MongoDB and AWS",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "Shopee",
    icon: tesla,
    iconBg: "#383E56",
    date: "Sep ' 22 - Dec ' 22",
    points: [
      "Utilized PySpark and PrestoSQL for off-platform data querying to support regional business intelligence teams",
      "Integrated gsheet apis to automate periodic statistical reporting with Apache Airflow and Data Studio",
      "Built internal dashboards & download boards to provide BI teams with self-customizable reports",
      "Optimized workflow scripts to reduce expenditure on Google Analytics",
    ],
  },
  {
    title: "Web Development Intern",
    company_name: "Superminted Co",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May ' 22 - Aug ' 22",
    points: [
      "Built industry-standard ui/ux prototypes using figma to ensure quality user experience",
      "Deployed timely code fixes to production and refactored code for reusability and efficiency",
      "Participated in code reviews and providing constructive feedback to other developers",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "Portfolio Site",
    description:
      "3D portfolio site to showcase my portfolio. Features animated 3D models using Threejs and react-three-fiber, contact section built with emailjs and styled with tailwind. Credits to @adrianhajdin for the inspiration.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sgxchange,
    demo_link: "https://sgxchange-smu.vercel.app/",
    source_code_link: "https://github.com/elt0nxale/sgxchange",
  },
  {
    name: "SGXchange",
    description:
      "Web-based platform that allows users to search, plan, and map university modules from universities around the world specific to their degree. Features a module mapping tool configured using web-scraped backend data, built by a team of 4.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: sgxchange,
    demo_link: "https://sgxchange-smu.vercel.app/",
    source_code_link: "https://github.com/elt0nxale/sgxchange",
  },
  {
    name: "Go Book",
    description:
      "Class booking app with user account system to facilitate the browsing, reviewing and booking of courses. Features kafka recommendation engine, qr ticket generator, integrated stripe payment api and designed with microservice architecture",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "yellow-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "dark-blue-text-gradient",
      },
      {
        name: "rabbitMQ",
        color: "orange-text-gradient",
      },
      {
        name: "springboot",
        color: "purple-text-gradient",
      },
    ],
    image: jobit,
    demo_link: "#",
    source_code_link: "https://github.com/TeoSean00/GoBook-Frontend",
    // https://github.com/JosephJL/Gobook-Backend
  },
  {
    name: "Form Management App",
    description:
      "Auth-based form management system for users to create, approve, fill and track forms based on an existing business workflow. Features an interactive form builder, customizable dashboard, pdf exporter and audit trail. Built by team of 6 for an academic client-based project",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "materialui",
        color: "pink-text-gradient",
      },
      {
        name: "springboot",
        color: "purple-text-gradient",
      },
    ],
    image: tripguide,
    demo_link: "#",
    source_code_link: "https://github.com/BryanTJJ99/OOP_FormApp",
  },
];

export { services, technologies, experiences, testimonials, projects };
