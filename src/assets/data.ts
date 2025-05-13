import {chartType, experienceType} from "./types.ts";

export const kion: experienceType = {
    skills: [
        'Spring Boot',
        'JPA',
        'Hibernate',
        'Oauth2 - spring security',
        'SQL Server',
        'Azure',
        'CI/CD - Github Actions',
        'REACT',
        'TYPESCRIPT',
        'Material UI',
    ],
    bullets: [
        'Developing and maintaining scalable internal applications using Java Spring Boot, React.js, and SQL Server',
        'Implementing secure APIs and managing authentication flows using OAuth2',
        'Collaborating with cross-functional teams to align engineering tasks with business objectives',
        'Optimizing performance and maintaining high code quality standards in an enterprise setting',
    ],
    description: 'Currently working as a backend-focused fullstack engineer at one of the world’s leading providers of industrial trucks and supply chain solutions.',
    title: 'Fullstack Software Engineer – KION Group',
    period: 'Sep 2023 – Present | Germany',
};


export const advansys: experienceType = {
    skills: [
        'Spring Boot',
        'JPA',
        'Hibernate',
        'Oauth2 - spring security',
        'MSAL',
        'WebSockets',
        'SQL Server',
        'Azure',
        'CI/CD - Github Actions',
        'REACT',
        'TYPESCRIPT',
        'Material UI',
        'Agile - SCRUM'
    ],
    bullets: [
        'Collaborated directly with international stakeholders including Dematic (Germany).',
        'Designed and implemented core modules for data security and system access control.',
        'Contributed to architectural decisions, technical documentation, and mentorship initiatives.',
    ],
    description: 'Led the development of RESTful services for two enterprise applications: a Warehouse Management System (WMS) and a comprehensive administrative platform tailored for internal company operations.',
    title: 'Fullstack Software Engineer – Advansys ESC',
    period: 'Mar 2021 – Jul 2023 | Germany',
};

export const nasnav: experienceType = {
    skills: [
        'Spring Boot',
        'JPA',
        'Hibernate',
        'Oauth2 - spring security',
        'firebase',
        'WebSockets',
        'SQL Server',
        'CI/CD - Gitlab runners',
    ],
    bullets: [
        'Engineered the fintech module enabling wallet-based transactions and tokenized customer payments.',
        'Delivered user profile and product management features with a focus on scalability and UX.',
    ],
    description: 'Developed a cutting-edge 3D e-commerce platform allowing real-time interaction with physical and virtual storefronts.',
    title: 'Fullstack Software Engineer – NasNav',
    period: 'Oct 2019 – Feb 2020 | Egypt',
};


export const tawsela: experienceType = {
    skills: [
        'Spring Boot',
        'JPA',
        'Hibernate',
        'Oauth2 - spring security',
    ],
    bullets: [
        'Developed customer-facing interfaces for shipment creation and tracking.',
        'Built dashboards for delivery agents to manage daily operations.',
        'Integrated reporting tools for warehouse and finance teams.'
    ],
    description: 'Designed and built a logistics management system serving three core user groups: customers, captains (delivery personnel), and operators.',
    title: 'Fullstack Software Engineer – Tawsela Express ',
    period: 'Mar 2018 – Sep 2019 | Egypt',
};

export const edu: experienceType = {
    skills: [],
    bullets: [
        'Graduation Project: Autonomous Mars Rover for Exploration (Grade: Excellent)',
        'GPA: 72.2% (2.89/4.0)',
    ],
    description: '',
    title: 'Bachelor of Engineering Aerospace Department, Cairo University, Egypt',
    period: '2015 – 2020 | Egypt',
};


export const frameworksChart: Array<chartType> = [
    { id: 0, value: 90, label: 'Spring boot' },
    { id: 2, value: 20, label: 'React' },
    { id: 1, value: 15, label: 'Azure' },
    { id: 2, value: 20, label: 'CI/CD Github Actions' },
    { id: 2, value: 20, label: 'OAuth2 - MSAL' },
]

export const languagesChart: Array<chartType> = [
    { id: 0, value: 90, label: 'Java' },
    { id: 1, value: 15, label: 'TypeScript' },
    { id: 2, value: 20, label: 'SQL' },
    { id: 2, value: 10, label: 'Python' },
    { id: 2, value: 10, label: 'C' },
]