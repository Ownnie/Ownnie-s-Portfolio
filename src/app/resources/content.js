import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nicolas',
    lastName: 'Calderon',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Full-Stack Developer | Cloud Solutions Architect | AI Enthusiast',
    avatar: '/images/avatar.jpg',
    location: 'America/Bogota',
    languages: ['English', 'Spanish']
};

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about software development, cloud technologies, and AI innovations.</>
};

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Ownnie',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/nico-calderon/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://x.com/OwnnieNs',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:nico.calderon.correa@gmail.com',
    },
];

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full-Stack Developer and Cloud Architect</>,
    subline: <>I'm Nicolas, a passionate <InlineCode>Software Engineer</InlineCode> from Bogotá, Colombia, dedicated to implementing cutting-edge full-stack technologies.</>
};

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hello! I'm Nicolas Calderon, a versatile Software Engineer specializing in AI, Cloud, and Full-Stack development, passionate about delivering innovative and scalable solutions.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: 'Freelance',
                timeframe: 'April 2023 – Present',
                role: 'Full-Stack Developer',
                achievements: [
                    <>Developed scalable web applications using React, Angular, Next.js, and Node.js.</>,
                    <>Built a subscription-based restaurant platform, reducing manual workload by 100%.</>,
                    <>Created AI-integrated solutions for workflow optimization, reducing redundant proposals by 30%.</>
                ],
                images: [
                    {
                        src: '/images/projects/freelance/project-01.jpg',
                        alt: 'Scalable web solutions',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/freelance/project-02.jpg',
                        alt: 'Subscription-based platform',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/freelance/project-03.jpg',
                        alt: 'Ai-integrated solutions',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'McDonald’s (Arcos Dorados)',
                timeframe: 'October 2024 – January 2025',
                role: 'Crew Member',
                achievements: [
                    <>Provided high-quality customer service in a fast-paced environment.</>,
                    <>Developed teamwork and adaptability skills.</>
                ],
                images: [
                    {
                        src: '/images/projects/mcdonalds/project-01.jpg',
                        alt: 'Mcdonadls Customer Service',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/mcdonalds/project-02.jpg',
                        alt: 'Mcdonadls Teamwork',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    },
    studies: {
        display: true,
        title: 'Education',
        institutions: [
            {
                name: 'Pontificia Universidad Javeriana',
                description: <>Bachelor’s Degree in Software Engineering (January 2022 – December 2026)</>,
            },
            {
                name: 'Polytechnic University of Madrid',
                description: <>Software Architecture Exchange Program (January 2025 – July 2025)</>,
            },
            {
                name: 'Amazon Academy',
                description: <>AWS Academy Cloud Foundations (July 2024 – September 2024)</>,
            }
        ]
    },
    technical: {
        display: true,
        title: 'Technical Skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>JavaScript, TypeScript, Java, C++, Kotlin</>,
                images: [
                    {
                        src: '/images/projects/mcdonalds/project-01.jpg',
                        alt: 'Mcdonadls Customer Service',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/mcdonalds/project-02.jpg',
                        alt: 'Mcdonadls Teamwork',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Web Technologies',
                description: <>React, Angular, Next.js, Node.js, Tailwind, Spring Boot</>,
                images: [
                    {
                        src: '/images/projects/mcdonalds/project-01.jpg',
                        alt: 'Mcdonadls Customer Service',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/mcdonalds/project-02.jpg',
                        alt: 'Mcdonadls Teamwork',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Cloud Platforms',
                description: <>AWS, Azure</>,
                images: [
                    {
                        src: '/images/projects/mcdonalds/project-01.jpg',
                        alt: 'Mcdonadls Customer Service',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/mcdonalds/project-02.jpg',
                        alt: 'Mcdonadls Teamwork',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Database Systems',
                description: <>MySQL, PostgreSQL, MongoDB, Firebase, Supabase</>,
                images: [
                    {
                        src: '/images/projects/mcdonalds/project-01.jpg',
                        alt: 'Mcdonadls Customer Service',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/mcdonalds/project-02.jpg',
                        alt: 'Mcdonadls Teamwork',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]
    }
};

const work = {
    label: 'Work',
    title: 'My Projects',
    description: `Portfolio of projects by ${person.name}`
};

const gallery = {
    label: 'Gallery',
    title: 'My Portfolio Gallery',
    description: `A visual collection of projects and experiences by ${person.name}`
};

export { person, social, newsletter, home, about, work, gallery };
