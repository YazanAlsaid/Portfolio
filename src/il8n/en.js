const en =  {
    nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        contact: "Contact"
    },
    hero: {
  cli: [
    {
      command: "whoami",
      output: ["Yazan Alsaid"],
    },
    {
      command: "education",
      output: [
        "B.Sc. Computer Science",
        "Frankfurt University of Applied Sciences",
        "Graduation: 2026",
      ],
    },
    {
      command: "skills",
      output: [
        "Software Development",
        "Deep Learning & Computer Vision",
        "Embedded Systems",
      ],
    },
    {
      command: "status",
      output: [
        "Entry-level candidate",
      ],
    },
    {
      command: "cd documents && ls",
      actions: [
             {
          label: "download documents",
             },
           ],
    },
          {
        type: "actions",
        actions: [
          {
            label: "download documents",
          },
        ],
      },
    ],
  },
documents: {
  title: "Documents"
},

about: {
  title: "About Me",
  intro: [
    "I successfully completed my Bachelor's degree in Computer Science on January 15, 2026. My studies provided me with solid theoretical knowledge as well as practical experience across various areas of computer science.",

    "A strong focus was placed on software development from analysis and design to implementation, including backend and frontend development. Through this, I gained experience in building structured, maintainable, and efficient software solutions.",

    "In addition, I acquired practical experience in the field of embedded systems, working with platforms such as Raspberry Pi and Arduino as well as AI accelerators. I also worked on combining classical software with deep learning models, for example YOLO based object detection and camera based tracking on embedded systems.",

    "During my practical phases in business and IT operations, I worked with Linux and Windows servers, handled system monitoring tasks, managed databases, and supported general IT operations.",

    "I am able to work both independently and as part of a team, take responsibility, and place great value on clear communication, clean solutions, and continuous professional development."
  ]
},

education: {
  title: "Education",
  items: [
    {
      date: "10.2021 – 01.2026",
      text: "B.Sc. in Computer Science – Frankfurt University of Applied Sciences",
    },
    {
      date: "09.2020 – 09.2021",
      text: "Preparatory College (Studienkolleg) – Hochschule Merseburg",
    },
    {
      date: "11.2019 – 08.2020",
      text: "germany language course",
    },
  ],
},

experience: {
  title: "Experience",
  items: [
    {
      date: "09.2024 – Present",
      text: "Working Student at MediaMarkt",
    },
    {
      date: "09.2024 – 04.2025",
      text: "Industry Practice Phase as part of my studies at DekaBank, Frankfurt am Main",
    },
    {
      date: "05.2024 – 07.2024",
      text: "Tutor for C Programming at Frankfurt University of Applied Sciences",
    },
  ],
},

highlight:
  "I am currently seeking an entry level or junior position to further develop my skills and contribute to real world software projects.",

skills: {
  title: "Skills",
},
projects: {
    title: "Projects",

    github: {
      label: "GitHub",
      aria: "Open project on GitHub",
    },

    types: {
      thesis: "Thesis Project",
      university: "University Project",
      personal: "Personal Project",
    },

    
    // eslint-disable-next-line no-sparse-arrays
    items: [
      {
        id: 1,
        name: "Edge AI Car Detection, Tracking and Collision Warning System",
        type: "thesis",
        github: "https://github.com/YazanAlsaid/Edge-AI-System",
      },
    ,{
        id: 2,
        name: "Edge Computing Wildlife Detection System",
        type: "university project",
        github: "https://github.com/kamalbhaiii/cloud-computing"
    },
    {
        id: 3,
        name: "Parking Management System",
        type: "university project",
        github: "https://github.com/YazanAlsaid/PMS"
    },
    {
        id: 4,
        name: "Library Management System",
        type: "university project",
        github: ""
    },
    {
        id: 5,
        name: "Simple Chat Application",
        type: "personal project",
        github: "https://github.com/YazanAlsaid/simpleChatApplication"
    },
    {
        id: 6,
        name: "Simple Calculation with React",
        type: "personal project",
        github: ""
    }
  
  ],
    
  },
  contact: {
  title: "Contact",
  description:
    "Interested in working together or having a conversation? Feel free to reach out."
},

};


export default en;