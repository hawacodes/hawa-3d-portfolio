import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    threejs,
    echarts,
    sanset,
    yellowpages,
    siemens,
    toksoz
  } from "../assets";
  import kadirhas from "../assets/education/khas_logo.png";
  import mondragon from "../assets/education/Mondragon_logo.png";
  import istanbul from "../assets/education/istanbul_logo.png";

  export const navLinks = [
    {
      id: "about",
      title: "navLinks.about",
    },
    {
      id: "works",
      title: "navLinks.works",
    },
    {
      id: "contact",
      title: "navLinks.contact",
    },
  ];

  const services = [
    {
      title: "webDeveloper",
      icon: web,
    },
    {
      title: "dataVisualisationSpecialist",
      icon: mobile,
    },
    {
      title: "modelEnthusiast",
      icon: backend,
    },
    {
      title: "digitalArtist",
      icon: creator,
    },
  ];

  const technologies = [
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "echarts",
      icon: echarts
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    }
  ];

  const experiences = [
    {
      title: "Junior Frontend Developer",
      company_name: "Yellow Pages",
      icon: yellowpages,
      iconBg: "#383E56",
      date: "Jun 2017 - Jul 2017",
      points: [
        "Collaborated with cross-functional teams to develop products, implemented password reset functionality, and enhanced search page error handling."
      ],
      tags: [
        {
          name: "CoffeeScript",
          color: "blue-text-gradient",
        },
        {
          name: "Laravel",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        }
      ],
    },
    {
      title: "Management Trainee",
      company_name: "Rell - Toksöz Grup",
      icon: toksoz,
      iconBg: "#E6DEDD",
      date: "Sep 2018 - Sep 2019",
      points: [
       "Completed three rotations as a management trainee in network administration, web development, and program consulting. Gained experience in C# and ASP.Net while working on SoftExpert and XAF Framework projects. Participated in leadership training and company culture programs"
      ],
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "asp.net",
          color: "green-text-gradient",
        },
        {
          name: "XAF framework",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Software Specialist",
      company_name: "Sanset",
      icon: sanset,
      iconBg: "#383E56",
      date: "Sep 2019 - Jan 2022",
      points: [
       "Developed a dynamic Bonus Model using XAF framework for sales representatives' monthly calculations. Implemented e-commerce API integrations and web services. Created responsive exam and survey systems while maintaining the Bonus Model project."
      ],
      tags: [
        {
          name: "C#",
          color: "blue-text-gradient",
        },
        {
          name: "asp.net",
          color: "green-text-gradient",
        },
        {
          name: "XAF framework",
          color: "pink-text-gradient",
        },
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Siemens",
      icon: siemens,
      iconBg: "#E6DEDD",
      date: "Feb 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "echarts",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
    },
  ];

  const educations = [
    {
      educationTitle: "Computer Engineering",
      educationName: "Kadir Has University",
      from: "2014",
      to: "2018",
      degree: "Bachelor's degree",
      image: kadirhas,
    },
    {
      educationTitle: "Computer Engineering",
      educationName: "Mondragon Unibertsitatea",
      from: "2016",
      to: "2017",
      degree: "Bachelor's degree, ERASMUS",
      image: mondragon,
    },
    {
      educationTitle: "Child Development & Education",
      educationName: "Istanbul University",
      from: "2019",
      to: "2025",
      degree: "Bachelor's degree",
      image: istanbul,
    },
  ];

  export { services, technologies, experiences, educations };