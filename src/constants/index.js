import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    estate,
    github,
    linkedin,
    pricewise,
    snapgram,
    summiz,
    threads,
} from "../assets/icons";

export const experiences = [
    {
        title: "Senior Software Engineer",
        company_name: "SyscoLabs Sri Lanka",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Dec 2024 - Present",
        teams: [
            {
                name: "Global Supply Chain division’s Merchandising team",
                technologies: "Java-Spring Boot, Python, Nodejs, Reactjs, Postgresql, Terraform, AWS, Sonarqube, Jenkins ",
                points: [
                    "Fullstack engineer delivering end-to-end features, driving the development of scalable and maintainable solutions across the stack, from designing resilient APIs to crafting intuitive UIs ",
                    "Committed to clean architecture, comprehensive testing, continuous improvement of engineering practices",
                    "Mentoring junior team members",
                    "Migrated data visualization dashboards in React front-end to Tableau embedded APIv3"
                ]
            }
        ],
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "Pelican Cube",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Oct 2022 – Dec 2024",
        teams: [
            {
                name: "Sri Lanka Railways Project",
                technologies: "Nestjs, Reactjs, Postgresql, Github actions, Kubernetes, Elasticsearch, Keycloak",
                points: [
                    "Created a ticket validation service in a microservice architecture with NestJs, (Postgresql database and redis cache)",
                    "Used graphs to store Sri lanka railway station map and graph algorithms to perform functions. ",
                    "JWT token authentication and role based authorization was done using Nest Guards and Keycloak. Request payload sanitization middleware for APIs was implemented",
                    "Elasticsearch logging (with winston) was integrated across all microservices.",
                    "Implemented Email and SMS Notification service with NestJs and RabbitMQ as the message broker",
                ]
            },
            {
                name: "Webio Team",
                technologies: "Java (Sping Boot), AWS, MySQL, Redis, Docker, Gitlab, Websockets",
                points: [
                    "Integrated Google OAuth2.0 to the existing authentication API using Authorization Code flow",
                    "Built a monitoring system for the APIs to send metrics to AWS Cloudwatch using Micrometer and Spring AOP",
                    "Implemented an automated data deletion service with AWS ECS, lambda, SQS and Eventbridge",
                    "Set up AWS ECS autoscaling for backend services based on SQS queue size",
                    "Introduced Websockets to the company and built a websocket server with Netty-Socket.io on Springboot",
                    "Built a Rest API with Dynamodb to store user settings configuration data",
                    "Gradle java libraries as a means to reuse persistence layer code across microservices was introduced by myself.",
                    "Implemented a message delivery system for third party clients using AWS SNS, S3 and Firebase",
                    "Worked on Rich Communication Systems messaging integration to the application",
                ]
            }

        ],
    },
    {
        title: "Mobile Developer Intern",
        company_name: "Wollstra Tech",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Nov 2021 - Apr 2022",
        teams: [
            {
                technologies: ".NET Xamarin, Syncfusion Charts",
                points: [
                    "Worked on a mobile application for a real time data visualization project using .NET Xamarin (MVVM pattern) and Syncfusion charts",
                ]
            }
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];