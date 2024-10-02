import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Nicolas',
    lastName: 'Calderon',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Full-Stack Developer | Cloud Solutions Architect | AI Enthusiast',
    avatar: '/images/avatar.jpg',
    location: 'America/Bogota',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Spanish']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/Ownnie',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/luis-nicol%C3%A1s-calder%C3%B3n-correa-449923251/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'nico.calderon.correa@gmail.com',
    },
]



const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full-Stack Developer and Cloud Architect Junior</>,
    subline: <>I'm Nicolas, a passionate and versatile <InlineCode>Software Engineer</InlineCode> from Bogotá, Colombia<br />  dedicated to exploring and implementing cutting-edge full-stack technologies</>
}

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
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hello! I'm Nicolas Calderon, a versatile Software Engineer deeply interested in exploring AI, Cloud and Full-Stack technologies, hailing from Bogotá, Colombia. With a robust background in full-stack development and driven by a passion for precision and delivering meaningful outcomes for customer satisfaction, which in turn drives business success.</>

    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'The Wine Cellar',
                timeframe: 'December 2023 - January 2024',
                role: 'Customer Service and Sales',
                achievements: [
                    <>Provided personalized customer service, ensuring a positive shopping experience and resolving inquiries promptly.</>,
                    <>Supported inventory management, ensuring products were always available for customers.</>,
                    <>Contributed to sales during peak season through product promotion and personalized recommendations.</>
                ],
                images: []
            },
            {
                company: 'Freelance',
                timeframe: 'November 2022 – June 2024',
                role: 'Web Developer',
                achievements: [
                    <>Provided Web App and Web Site development services for various clients, creating web and mobile applications using React, WordPress, Tailwind and Bootstrap.</>,
                    <>Designed and developed user interfaces, ensuring responsive and engaging applications tailored to client needs.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Pontificia Universidad Javeriana',
                description: <>Bachelor’s degree in Software Engineering (June 2022 – December 2026)</>,
            },
            {
                name: 'Amazon Academy',
                description: <>AWS Academy Cloud Foundations (July 2024 – September 2024, 20 hours)</>,
            },
            {
                name: 'Udemy',
                description: <>React desde cero: Hooks y State hasta TypeScript, Zod, Zustand, React Query, Next.js, React Router, MERN y PERN (April 2024 – November 2024, 60 hours)</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>JavaScript, TypeScript, Java, C++, Kotlin</>,
                images: [
                    {
                        src: '/images/projects/programming-languages.jpg',
                        alt: 'Programming Languages Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Web Technologies',
                description: <>React, Angular, Next.js, Node.js, Express, HTML, CSS, Tailwind, Spring boot</>,
                images: [
                    {
                        src: '/images/projects/web-technologies.jpg',
                        alt: 'Web Technologies Image',
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
                        src: '/images/projects/cloud-platforms.jpg',
                        alt: 'Cloud Platforms Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'DevOps Tools',
                description: <>Docker, Kubernetes</>,
                images: [
                    {
                        src: '/images/projects/devops-tools.jpg',
                        alt: 'DevOps Tools Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Database Systems',
                description: <>MySQL, MongoDB, PostgreSQL, AWS Databases</>,
                images: [
                    {
                        src: '/images/projects/database-systems.jpg',
                        alt: 'Database Systems Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Backend Technologies',
                description: <>RESTful APIs, Microservices Architecture</>,
                images: [
                    {
                        src: '/images/projects/backend-technologies.jpg',
                        alt: 'Backend Technologies Image',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                title: 'Soft Skills',
                description: <>Problem-solving, Communication, Team Collaboration, Adaptability, Customer Focus, Attention to Detail, Quick Learning, Willingness to Learn</>,
                images: [
                    {
                        src: '/images/projects/soft-skills.jpg',
                        alt: 'Soft Skills Image',
                        width: 16,
                        height: 9
                    }
                ]
            }
        ]

    }
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, work, gallery };