export const profile = {
  name: 'Juan Taborda',
  headline: 'Full-Stack Engineer',
  tagline:
    '19+ years building consumer experiences end to end — React, TypeScript, Node.js, and the cloud.',
  location: 'Carlsbad, CA',
  email: 'jftabord@gmail.com',
  avatar: 'https://avatars.githubusercontent.com/u/20758367',
  links: {
    github: 'https://github.com/guanguer',
    linkedin: 'https://www.linkedin.com/in/jftabord',
    trailblazer: 'https://www.salesforce.com/trailblazer/jftabord',
  },
  about: [
    `I'm a frontend-focused full-stack engineer who has spent nearly two decades shipping software people actually touch — from theme-park experiences for Disney to connected IoT products and hospitality platforms used by major hotel brands.`,
    `My center of gravity is JavaScript: React and modern frontends backed by Node.js services, REST APIs, and cloud infrastructure on AWS and Azure. I've also gone deeper in the stack, building on embedded Linux with C/C++ integration for IoT devices.`,
    `In recent years I've led technology for large accounts at Globant — auditing architectures, reviewing designs, and mentoring technical leads. What I've never wanted to give up is building, and this site is part of that practice.`,
  ],
};

export const experience = [
  {
    company: 'Globant',
    location: 'Carlsbad, CA',
    role: 'Technical Manager',
    period: 'Oct 2021 — Present',
    summary:
      'Responsible for all technology across multiple medium/large projects in hospitality and entertainment accounts (IHG, Choice Hotels, Sonesta, MGM Resorts). Architecture audits, design reviews, quality metrics, and mentoring technical leaders across globally distributed teams.',
    tech: ['Architecture', 'Code Quality', 'Mentoring', 'Roadmaps'],
  },
  {
    company: 'Globant',
    location: 'Carlsbad, CA',
    role: 'Web UI Developer · Analyst Architect',
    period: 'Mar 2020 — Oct 2021',
    summary:
      'Technical Leader on IoT product development for HM Electronics — React frontends and Node.js services on embedded Linux devices with C/C++ integration.',
    tech: ['React', 'Node.js', 'Linux', 'C/C++', 'IoT'],
  },
  {
    company: 'Globant',
    location: 'Medellín, Colombia',
    role: 'Web UI Developer · Software Designer',
    period: 'Mar 2017 — Mar 2020',
    summary:
      'Consumer-facing experiences for Disney Parks and Resorts (MagicBand customization, cast-member training) and connected wearables for JTech. Reference Architecture team member building shared messaging libraries.',
    tech: ['AngularJS', 'Node.js', 'Java', 'RabbitMQ', 'React'],
  },
  {
    company: 'Tech and Solve',
    location: 'Medellín, Colombia',
    role: 'Software Architect',
    period: 'Oct 2012 — Mar 2017',
    summary:
      'Automated the continuous delivery pipeline for 100+ applications at Sura. Built a pension and savings web simulator for Protección and a softphone for Allus Global BPO.',
    tech: ['CI/CD', 'JavaScript', 'Java', 'Performance Testing'],
  },
  {
    company: 'LandSoft S.A.',
    location: 'Medellín, Colombia',
    role: 'Project Manager · Technical Leader',
    period: 'Feb 2007 — Apr 2012',
    summary:
      'Led development teams on products including a health record system for Helpharma and a student credit system for the National University of Colombia.',
    tech: ['Java', 'SQL', 'Team Leadership'],
  },
];

export const projects = [
  {
    title: 'Build a Band — Disney MagicBand',
    client: 'Disney Parks and Resorts',
    description:
      'Consumer-facing customization experience that let park guests design their own MagicBand. Shipped to a massive audience under one of the most beloved brands in entertainment.',
    tech: ['AngularJS', 'Node.js'],
    accent: 'violet',
  },
  {
    title: 'HME IoT Platform',
    client: 'HM Electronics',
    description:
      'React frontends and Node.js services running on embedded Linux devices with C/C++ integration — end-to-end product work from UI to native code.',
    tech: ['React', 'Node.js', 'Linux', 'C/C++'],
    accent: 'cyan',
  },
  {
    title: 'LinkWear Connect',
    client: 'JTech (an HME company)',
    description:
      'Connected wearables platform for staff paging and guest management — web frontend, services, and device connectivity.',
    tech: ['React', 'Node.js', 'PHP', 'IoT'],
    accent: 'blue',
  },
  {
    title: 'Qualify Me (Touch To Train)',
    client: 'Disney Parks and Resorts',
    description:
      'Training application used by cast members across the parks — designed and developed end to end.',
    tech: ['AngularJS', 'Node.js'],
    accent: 'pink',
  },
  {
    title: 'Continuous Delivery at Scale',
    client: 'Sura',
    description:
      'Automated the CD pipeline and performance-test analysis for 100+ applications at one of the largest insurance companies in Latin America.',
    tech: ['CI/CD', 'Automation', 'Performance'],
    accent: 'green',
  },
  {
    title: 'Messaging Reference Architecture',
    client: 'Disney Parks and Resorts',
    description:
      'Shared reference libraries for messaging (AMQP, JMS) used by engineering teams across the division.',
    tech: ['Java', 'RabbitMQ', 'SonicMQ'],
    accent: 'orange',
  },
];

export const skills = [
  {
    group: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Angular', 'HTML5', 'CSS', 'Responsive UI'],
  },
  {
    group: 'Backend & APIs',
    items: ['Node.js', 'Java', 'Spring', 'PHP', 'REST APIs', 'OAuth', 'SQL'],
  },
  {
    group: 'Cloud & DevOps',
    items: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Linux', 'Git', 'Load Testing'],
  },
  {
    group: 'Systems & Data',
    items: ['C/C++', 'IoT', 'Embedded Linux', 'Power BI', 'Salesforce'],
  },
];

export const certifications = [
  {
    name: 'Salesforce Certified Agentforce Specialist',
    year: '2025',
  },
  {
    name: 'Salesforce Certified Data 360 Consultant',
    year: '2025',
  },
];

export const education = [
  {
    school: 'Universidad Católica de Oriente',
    degree: 'Specialist in Software Management',
    period: '2008 — 2010',
  },
  {
    school: 'National University of Colombia',
    degree: 'Systems and Informatics Engineer',
    period: '2001 — 2006',
  },
];
