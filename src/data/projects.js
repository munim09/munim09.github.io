import devpulseSvg from "../assets/projects/devpulse.svg?raw";
import gearRentalSvg from "../assets/projects/gear-rental.svg?raw";
import oscmsSvg from "../assets/projects/oscms.svg?raw";

export const projects = [
    {
        slug: "online-customer-service-management-system",
        name: "Online Customer Service Management System",
        summary:
            "A paperless platform for new electricity connections, complaints, field inspection, billing, and payment collection.",
        image: oscmsSvg,
        stack: [
            "Spring Boot",
            "Hibernate ORM",
            "Oracle",
            "JavaScript",
            "jQuery",
            "BIRT",
        ],
        description:
            "A web-based customer service platform built for a utility company, replacing paper workflows with a digital one. Citizens apply for new electricity connections and submit complaints online; field engineers file inspection reports and generate bills directly in the system; and a bill collection module handles payment processing end to end. I worked on the backend services, Oracle SQL reporting, and BIRT-based report generation, alongside fixing and extending the customer service and inventory modules that feed into it.",
        live: "https://ocsms.desco.org.bd/",
        github: "",
        challenges: [
            "Reconciling correlated Oracle queries and CONNECT BY hierarchies against inconsistent data across environments.",
            "Coordinating UAT for the Bill Payment API with external banks and mobile financial service providers.",
            "Keeping report generation performant as historical billing data grew.",
        ],
        improvements: [
            "Move BIRT reports to a lighter-weight, web-native reporting layer.",
            "Add automated regression tests around the billing and payment reconciliation flows.",
            "Introduce caching for read-heavy inspection and complaint-status queries.",
        ],
    },
    {
        slug: "gear-rental-platform",
        name: "Gear Rental Platform",
        summary:
            "A rental marketplace backend with a full ERD, seeded database, and a booking-based payment flow.",
        image: gearRentalSvg,
        stack: ["Node.js", "TypeScript", "Prisma 7", "PostgreSQL"],
        description:
            "A backend for a gear rental marketplace — think cameras, tools, and outdoor equipment rented peer-to-peer. I designed the full entity-relationship model, wrote the migration SQL and a seed script, and documented the schema for future contributors. The API handles listings, availability, bookings, and deposit tracking, with a reconciliation job that keeps booking and payment-status records consistent. The backend source code is available on GitHub at https://github.com/munim09/next-level-gearup",
        live: "https://next-level-gearup-app-two.vercel.app",
        github: "https://github.com/munim09/next-level-gearup-app",
        challenges: [
            "Designing a deposit and refund model that works across different rental durations.",
            "Preventing double-bookings when multiple users try to reserve the same item concurrently.",
            "Designing a reconciliation job to catch payment-status updates that arrive late or out of order.",
        ],
        improvements: [
            "Add a dispute/damage-deposit workflow with partial refunds.",
            "Support recurring long-term rentals, not just fixed-period bookings.",
            "Add real-time availability updates for concurrent booking attempts.",
        ],
    },
    {
        slug: "devpulse",
        name: "DevPulse",
        summary:
            "An internal tech issue and feature tracker built to keep small engineering teams aligned.",
        image: devpulseSvg,
        stack: ["Node.js", "TypeScript", "Express", "PostgreSQL"],
        description:
            "DevPulse is an internal tool for tracking technical issues and feature requests across a small engineering team — lighter than a full project-management suite, focused on fast triage and clear ownership. Built with Express and TypeScript over PostgreSQL, with an emphasis on clean, spec-only documentation so the tool stays easy to hand off and extend.",
        live: "",
        github: "https://github.com/munim09/next-level-express-assignment-2",
        challenges: [
            "Keeping the data model simple enough for fast triage while still supporting labels, priority, and ownership.",
            "Writing documentation that stays strictly spec-accurate without drifting into speculative feature notes.",
        ],
        improvements: [
            "Add lightweight analytics on issue turnaround time per team.",
            "Support webhook notifications into Slack/Teams for status changes.",
            "Add a public API for integrating with other internal tools.",
        ],
    },
];
