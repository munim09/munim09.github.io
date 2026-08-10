export const profile = {
    name: "Shahiduz Zaman",
    designation: "Backend & Full-Stack Software Engineer",
    tagline:
        "I build the systems that run quietly underneath — connection workflows, billing engines, and APIs that utilities and businesses depend on every day.",
    location: "Dhaka, Bangladesh",
    email: "sz.munim@gmail.com",
    phone: "+8801675444100",
    whatsapp: "+8801675444100",
    github: "https://github.com/munim09",
    linkedin: "https://www.linkedin.com/in/shahiduz-zaman",
    resumeFile: "/resume.pdf",
};

export const about = {
    journey: [
        "I started out writing Java for Android apps and embedded C for network hardware — the kind of work where you learn to respect a system by watching it fail in front of you. That habit of digging past the surface stuck with me.",
        "Since 2020 I've worked as an Assistant Engineer at DESCO, one of Dhaka's electricity distribution utilities, building the backend for customer service, billing, and inventory platforms that field engineers and citizens use daily. In parallel, I've been building my own stack — Node.js, TypeScript, Prisma, PostgreSQL — shipping marketplace-style backends and untangling the deployment quirks that come with them.",
    ],
    enjoy: "I like the unglamorous middle layer of software — schema design, query correctness, the migration that has to run cleanly at 2am. Give me a gnarly CONNECT BY query or a Prisma adapter that refuses to resolve in production, and I'm genuinely having a good time.",
    outside:
        "Away from the keyboard, I'm usually reading up on new hardware and comparing PC builds, tinkering with side projects that have no deadline, and following anything related to Linux and open systems.",
};

export const skills = [
    {
        category: "Languages",
        items: ["Java", "TypeScript", "JavaScript", "SQL", "Shell"],
    },
    {
        category: "Backend",
        items: [
            "Spring Boot",
            "Spring MVC",
            "Hibernate ORM",
            "Spring Data JPA",
            "Node.js",
            "Express",
            "TypeScript",
            "Prisma",
        ],
    },
    {
        category: "Frontend",
        items: ["React.js", "Next.js", "jQuery"],
    },
    {
        category: "Databases",
        items: ["Oracle SQL", "PostgreSQL", "MySQL", "SQLite"],
    },
    {
        category: "Tools & Platforms",
        items: [
            "Git",
            "Vercel",
            "Apache Tomcat",
            "Ansible",
            "BIRT",
            "Linux",
            "Docker basics",
        ],
    },
];

export const education = [
    {
        school: "Bangladesh University of Engineering and Technology (BUET)",
        degree: "B.Sc. in Computer Science and Engineering",
        location: "Dhaka, Bangladesh",
        period: "2010 — 2015",
        detail: "CGPA: 3.59 / 4.00",
    },
];

export const experience = [
    {
        company: "Dhaka Electric Supply Company Limited (DESCO)",
        role: "Assistant Engineer",
        location: "Dhaka, Bangladesh",
        period: "Mar 2020 — Present",
        points: [
            "Designed and developed custom reports using BIRT.",
            "Built the Contractor Management module for the Inventory System using Java, Spring MVC, Hibernate, and Oracle.",
            "Fixed bugs and improved functionality across Inventory and Customer Service Management Systems.",
            "Added new features to the Customer Service System using Java, Spring Boot, JPA, JavaScript, jQuery, and Oracle.",
            "Conducted UAT with banks and MFS providers for the Bill Payment API.",
            "Performed data analysis and built custom reports using Oracle SQL.",
        ],
        stack: [
            "Java",
            "Spring Boot",
            "Spring MVC",
            "Hibernate",
            "JPA",
            "Oracle SQL",
            "BIRT",
        ],
    },
    {
        company: "Commlink Info Tech Ltd",
        role: "Member, Research and Development",
        location: "Dhaka, Bangladesh",
        period: "Oct 2015 — Feb 2020",
        points: [
            "Developed Android apps using Android (Java), SQLite, REST APIs, and Firebase.",
            "Built a Document Management System with Java, Spring MVC, Hibernate, jQuery, and MySQL.",
            "Implemented serial communication protocols for embedded systems.",
            "Wrote unit tests for legacy C code to improve reliability.",
            "Performed manual testing of Layer 2 and Layer 3 network protocols.",
        ],
        stack: [
            "Android",
            "Java",
            "SQLite",
            "Firebase",
            "REST APIs",
            "Hibernate",
            "MySQL",
            "C",
        ],
    },
];
