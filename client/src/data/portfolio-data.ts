// Experience Data
export const experienceData = [
  {
    company: "Synechron Technologies Pvt Ltd (Emirates National Bank of Dubai)",
    title: "Lead Technology Consultant",
    date: "Dec 2022 - Present",
    responsibilities: [
      "Experience in Retail Banking - Led STP Credit card and loans journey, building Microservices and integrating with end systems including TIBCO, FINANCIAL, BASE24, ETISALAT, FIRCO, SPOCTO, AECB, DMS",
      "Developed 100% digital, paperless Loan-on-Card journey that enables pre-approved credit card customers to apply and receive loan disbursement within minutes",
      "Delivered STP (Straight Through Processing) for E-commerce Credit Card Journey",
      "Built a scalable Bulk Notification System to handle high-volume alerts, improving communication efficiency",
      "Optimized MongoDB performance with index creation and query tuning, reducing latency and improving throughput",
      "Developed POCs on automatic code generation and AI-powered chatbots leveraging OpenAI LLM (Azure)",
      "Designed microservices using Spring Boot, Node.js, and Kafka, deployed on OpenShift for cloud-native scalability",
    ],
  },
  {
    company: "Oracle",
    title: "Full Stack Developer",
    date: "Nov 2021 - Dec 2022",
    responsibilities: [
      "Developed a bulk payment processing system capable of handling 2 million transactions efficiently",
      "Built a Configurable Rule Framework for the Trade Finance Module, enabling dynamic rule management",
      "Designed and developed RESTful APIs using Node.js, Express.js, and Spring Boot for backend communication",
      "Integrated backend operations with Hibernate and Oracle AQ for reliable messaging and database interaction",
      "Enhanced system efficiency through auditing, caching, and logging using Spring AOP",
      "Built and enhanced UI components using OJET UI Framework and React.js for improved user experience",
    ],
  },
  {
    company: "Volante Technologies Pvt Ltd (Mastercard)",
    title: "Full Stack Developer",
    date: "Jan 2020 - Nov 2021",
    responsibilities: [
      "Worked on VolPay 2.x and other Volante products to enhance payment workflows and ensure compliance with banking standards",
      "Developed and optimized ISO20022 and SWIFT messaging services for real-time, cross-border payment processing",
      "Deployed services on AWS EC2 and utilized AWS S3 for secure storage and scalability",
      "Built and optimized RESTful APIs using Node.js, Express.js, and Spring Boot, integrated with Kafka",
      "Enhanced system security through Spring Security, implementing robust authentication and authorization mechanisms",
      "Monitored and analyzed system performance using Grafana and Kibana, enabling proactive issue detection",
    ],
  },
  {
    company: "I Base IT",
    title: "Software Engineer",
    date: "Aug 2017 - Jan 2020",
    responsibilities: [
      "Developed microservices using Spring Boot and integrated MySQL for backend operations",
      "Implemented authentication and authorization using Spring Security",
      "Designed and optimized database schemas and queries for improved performance",
      "Collaborated with cross-functional teams to deliver software solutions that met business requirements",
    ],
  },
  {
    company: "NIIT Technologies",
    title: "Technical Trainer",
    date: "Nov 2015 - June 2017",
    responsibilities: [
      "Delivered training sessions on Java and web component development to over 100 students",
      "Developed training materials and hands-on exercises to facilitate learning",
      "Provided mentorship and guidance to students for their projects and assignments",
    ],
  },
];

// Skills Data
export const technicalSkills = [
  { name: "Java", percentage: 95 },
  { name: "Spring Boot", percentage: 92 },
  { name: "Node.js", percentage: 90 },
  { name: "React.js", percentage: 85 },
  { name: "MongoDB", percentage: 88 },
  { name: "Python", percentage: 80 },
];

// Technologies grouped by category
export const technologies = {
  programmingLanguages: [
    "Java (17+)",
    "JavaScript (ES6+)",
    "TypeScript",
    "NodeJS",
    "Python",
    "SQL",
    "Kotlin",
  ],
  frameworks: [
    "Spring Core",
    "Spring MVC",
    "Spring Boot",
    "Spring Data REST",
    "Spring Security",
    "Spring AOP",
    "Spring Batch",
    "Spring Cloud",
    "Hibernate",
    "J2EE",
    "JSP",
    "JPA",
    "Node.js",
    "React.js",
    "Express.js",
    "Redux",
    "jQuery",
  ],
  designAndArchitecture: [
    "Microservices Architecture",
    "Microservices Integration",
    "MVC Architecture",
    "Object-Oriented Design",
    "Design Patterns (UML, BDD, TDD)",
    "ELK Stack",
  ],
  cloudPlatforms: [
    "AWS (Lambda, EC2, S3, RDS)",
    "Azure (Functions, App Services)",
    "Oracle Cloud",
    "OpenShift",
  ],
  databases: [
    "PostgreSQL",
    "SQL Server",
    "Oracle DB",
    "MySQL",
    "MongoDB",
    "Elastic Search",
    "Cassandra",
    "Oracle AQ",
  ],
  documentation: [
    "JavaDoc",
    "Gradle Javadoc Plugin",
    "Maven Javadoc Plugin",
    "Restful API",
    "GraphQL",
    "gRPC",
  ],
  devOps: [
    "Docker",
    "Jenkins",
    "Terraform",
    "Kubernetes",
    "Heroku",
    "Netlify",
    "Vercel",
    "Grafana",
    "Kibana",
    "Maven",
    "Gradle",
    "JBoss",
    "WebLogic",
    "Apache Tomcat",
  ],
  testing: [
    "JUnit",
    "Mockito",
    "SpringBootTest",
    "Jest",
    "Enzyme",
    "Cypress",
    "React Testing Library",
    "Log4j",
  ],
  security: ["Spring Security", "OAuth2", "JWT", "PCI Compliance"],
  projectManagement: [
    "Agile Methodologies (Scrum, Kanban)",
    "Jira",
    "Confluence",
    "SCRUM",
  ],
  messaging: [
    "Apache Kafka",
    "Confluent Kafka",
    "RabbitMQ",
    "WebSocket",
    "IBM MQ",
    "SWIFT Messages (MT700)",
    "ISO20022 Messages (pacs.008, pacs.004, camt.056, camt.029)",
  ],
  integration: [
    "TIBCO",
    "Way4",
    "Aramex DeliveryService",
    "Etisalat",
    "Sianet Integration",
    "BASE24",
    "FIRCO",
    "SPOCTO",
    "AECB",
    "DMS",
  ],
  versionControl: ["Git", "GitHub", "GitLab"],
  aiMl: [
    "OpenAI LLM",
    "Natural Language Processing",
    "Deep Learning",
    "Machine Learning",
  ],
};

// Flattened list for display purposes
export const technologiesList = [
  ...technologies.programmingLanguages,
  ...technologies.frameworks,
  ...technologies.designAndArchitecture,
  ...technologies.cloudPlatforms,
  ...technologies.databases,
  ...technologies.devOps,
  ...technologies.messaging,
  ...technologies.integration,
  ...technologies.security,
  ...technologies.aiMl,
];

export const softSkills = [
  "Technical Leadership",
  "Team Management",
  "Problem Solving",
  "Communication",
  "Agile Methodologies",
  "Project Delivery",
];

// Recognition Data
export const recognitions = [
  {
    title: "Spot Award for Outstanding Performance",
    issuer: "Emirates NBD Bank",
    date: "January 2024",
    description:
      "Awarded for exceptional leadership and technical contribution to the E-commerce Credit Card Journey project, which significantly improved customer onboarding and engagement.",
  },
  {
    title: "Innovation Champion",
    issuer: "Synechron Technologies",
    date: "July 2024",
    description:
      "Recognized for developing innovative proof-of-concepts using AI and automation that improved development efficiency by 30%.",
  },
];

// Timeline Data
export const timelineData = [
  {
    id: 1,
    year: "Dec 2022 - Present",
    title: "Lead Technology Consultant",
    company: "Synechron Technologies (Emirates National Bank of Dubai)",
    description:
      "Leading STP Credit Card and Loan journeys, developing microservices and integrating with banking systems. Delivered the Loan-on-Card digital journey and E-commerce Credit Card journey.",
    icon: "💼",
  },
  {
    id: 2,
    year: "Nov 2021 - Dec 2022",
    title: "Full Stack Developer",
    company: "Oracle",
    description:
      "Developed bulk payment processing system and configurable rule frameworks for Trade Finance Module. Built RESTful APIs and integrated with Hibernate and Oracle AQ.",
    icon: "🖥️",
  },
  {
    id: 3,
    year: "Jan 2020 - Nov 2021",
    title: "Full Stack Developer",
    company: "Volante Technologies (Mastercard)",
    description:
      "Enhanced payment workflows and ensured compliance with banking standards. Developed ISO20022 and SWIFT messaging services for cross-border payments.",
    icon: "💳",
  },
  {
    id: 4,
    year: "Aug 2017 - Jan 2020",
    title: "Software Engineer",
    company: "I Base IT",
    description:
      "Built microservices with Spring Boot, implemented authentication with Spring Security, and optimized database schemas and queries.",
    icon: "⚙️",
  },
  {
    id: 5,
    year: "Nov 2015 - June 2017",
    title: "Technical Trainer",
    company: "NIIT Technologies",
    description:
      "Delivered training sessions on Java and web component development to over 100 students. Created training materials and guided student projects.",
    icon: "🎓",
  },
];

// Projects Data
export const projects = [
  {
    title: "Loan-on-Card Digital Journey - Emirates NBD",
    description:
      "Developed a 100% digital, paperless Loan-on-Card journey that enables pre-approved credit card customers to apply, get evaluated, and receive loan disbursement within minutes through Emirates NBD's online banking platform.",
    image:
      "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: [
      "React.js",
      "Spring Boot",
      "Node.js",
      "Kafka",
      "Oracle",
      "MongoDB",
      "OAuth2",
      "JWT",
      "ELK Stack",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "AI-Based Code Generator with Tools",
    description:
      "Developed an AI-powered code generation tool that automates and streamlines the development process. Uses advanced AI models to generate code based on specifications.",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["Python", "OpenAI", "AI/ML", "DevOps Tools"],
    github: "https://github.com/sairam356/CodeGenerator-With-Tools",
    live: "#",
  },

  {
    title: "LLM Agents",
    description:
      "Created intelligent language model agents capable of performing complex tasks through natural language processing. Leverages advanced AI to automate processes.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["Python", "Large Language Models", "AI/ML", "OpenAI"],
    github: "https://github.com/sairam356/LLM-Agents",
    live: "#",
  },
  {
    title: "Cortex - Vehicle Insurance Platform",
    description:
      "Full-stack development for QBE's Cortex vehicle insurance platform, which provides comprehensive insurance for 4-wheeler vehicles to protect against accidents and other disasters.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: [
      "React.js",
      "Spring Boot",
      "Hibernate",
      "Spring Security",
      "Spring AOP",
      "RESTful APIs",
      "MySQL",
    ],
    github: "#",
    live: "#",
  },
  {
    title: "QuirkAI - Enterprise Bot Platform",
    description:
      "Worked as a developer at iBase IT on this enterprise bot platform, contributing to the development of natural conversation systems using NLP and AI techniques.",
    image:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: ["Node.js", "React.js", "Redux", "MongoDB", "RESTful APIs"],
    github: "#",
    live: "#",
  },
  {
    title: "Immovable Platform - User Service",
    description:
      "Backend service for managing user data in the Immovable Platform, which enables users to invest in real estate deals for as little as ₹20,000 in under 3 minutes.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: [
      "Spring Boot",
      "Java",
      "Microservices",
      "RESTful APIs",
      "Database Design",
    ],
    github: "https://github.com/sairam356/immovable-user-service",
    live: "#",
  },
  {
    title: "Immovable Platform - Property Service",
    description:
      "Backend service for managing property listings and investment transactions in the Immovable Platform. Handles property data, investment calculations, and transaction processing.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    technologies: [
      "Spring Boot",
      "Java",
      "Microservices",
      "Financial Calculations",
      "Database Design",
    ],
    github: "https://github.com/sairam356/immovable-property-service",
    live: "#",
  },
];
