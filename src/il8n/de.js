const de = {
  nav: {
    home: "Startseite",
    about: "Über mich",
    skills: "Kenntnisse",
    projects: "Projekte",
    contact: "Kontakt",
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
          "B.Sc. Allgemeine Informatik",
          "Frankfurt University of Applied Sciences",
          "Graduation: 15.01.2026",
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
        output: ["Berufseinsteiger"],
      },
      {
  command: "cd documents && ls",
  actions: [
         {
      label: "Dokumente herunterladen",
         },
       ],
      },
      {
        type: "actions",
        actions: [
          {
            label: "Dokumente herunterladen",
          },
        ],
      },
    ],
  },

  documents: {
    title: "Dokumente",
  },

  about: {
   title: "Über mich",
   intro: [
    "Ich habe am 15.01.2026 mein Studium der Allgemeinen Informatik erfolgreich abgeschlossen. Das Studium vermittelte mir fundierte theoretische sowie praktische Kenntnisse in verschiedenen Bereichen der Informatik.",

    "Ein besonderer Schwerpunkt lag auf der Softwareentwicklung von der Analyse und dem Design über die Implementierung bis hin zur Entwicklung von Backend- und Frontend-Komponenten. Dabei habe ich gelernt, strukturierte, wartbare und effiziente Softwarelösungen zu entwickeln.",

    "Zusätzlich konnte ich praktische Erfahrungen im Bereich Embedded Systems sammeln, unter anderem mit Raspberry Pi und Arduino sowie mit KI-Beschleunigern. Dabei beschäftigte ich mich auch mit der Kombination klassischer Software mit Deep Learning Modellen, beispielsweise mit YOLO basierter Objekterkennung und kamerabasierter Verfolgung auf Embedded Systemen.",

    "Während meiner Praxisphasen im Bereich Betriebsmanagement arbeitete ich zudem mit Linux- und Windows-Servern, übernahm Aufgaben im Monitoring von Systemen, der Verwaltung von Datenbanken sowie im allgemeinen IT-Betrieb.",

    "Ich arbeite sowohl selbstständig als auch im Team, übernehme gerne Verantwortung und lege großen Wert auf klare Kommunikation, saubere Lösungen und kontinuierliche Weiterentwicklung."
   ]
},   

 education: {
   title: "Ausbildung",
   items: [
    {
      date: "10.2021 – 01.2026",
      text: "Bachelor Informatik – Frankfurt University of Applied Sciences",
    },
    {
      date: "09.2020 – 09.2021",
      text: "Studienkolleg – Hochschule Merseburg",
    },
    {
      date: "10.2019 – 08.2020",
      text: "Deutsch Sprachkurs",
    },
  ],
},

experience: {
  title: "Erfahrung",
  items: [
    {
      date: "09.2024 – heute",
      text: "Werkstudent bei MediaMarkt",
    },
    {
      date: "09.2024 – 04.2025",
      text: "Praxisphase im Rahmen des Studiums bei der DekaBank in Frankfurt am Main",
    },
    {
      date: "05.2024 – 07.2024",
      text: "Tutor für C-Programmierung an der Frankfurt University of Applied Sciences",
    },
  ],
},

highlight:
  "Aktuell suche ich eine Einstiegsposition, um meine Kenntnisse in realen Projekten weiter auszubauen.",

  skills: {
    title: "Kenntnisse",
  },

  projects: {
    title: "Projekte",

    github: {
      label: "GitHub",
      aria: "Projekt auf GitHub öffnen",
    },

    types: {
      thesis: "Bachelorarbeit",
      university: "Universitätsprojekt",
      personal: "Eigenes Projekt",
    },

    items: [
      {
        id: 1,
        name: "Edge AI Car Detection, Tracking and Collision Warning System",
        type: "Bachelorarbeit",
        github: "https://github.com/YazanAlsaid/Edge-AI-System",
      },
      {
        id: 2,
        name: "Edge Computing Wildlife Detection System",
        type: "Universitätsprojekt",
        github: "https://github.com/kamalbhaiii/cloud-computing",
      },
      {
        id: 3,
        name: "Parking Management System",
        type: "Universitätsprojekt",
        github: "https://github.com/YazanAlsaid/PMS",
      },
      {
        id: 4,
        name: "Library Management System",
        type: "Universitätsprojekt",
        github: "",
      },
      {
        id: 5,
        name: "Simple Chat Application",
        type: "Eigenes Projekt",
        github: "https://github.com/YazanAlsaid/simpleChatApplication",
      },
      {
        id: 6,
        name: "Simple Calculation with React",
        type: "Eigenes Projekt",
        github: "",
      },
    ],
  },

  contact: {
    title: "Kontakt",
    description:
      "Interessiert an einer Zusammenarbeit oder einem Gespräch? Ich freue mich über Ihre Nachricht.",
  },
};

export default de;
