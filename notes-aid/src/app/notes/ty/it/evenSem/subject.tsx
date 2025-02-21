import { GraduationCap, FlaskConical, Binary, Cloud } from "lucide-react"

import { Subjects } from "@/app/interfaces/Subject"

const subjects: Subjects = {
  oose: {
    name: "Object-Oriented Software Engineering",
    icon: Binary,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/oose-module1-notes.pdf"],
        topics: [
          {
            title: "Software Engineering Basics",
            description: "Layered Technology, Process Framework.",
          },
          {
            title: "Capability Maturity Model (CMMI)",
            description:
              "Understanding process maturity in software development.",
          },
          {
            title: "Prescriptive Models",
            description:
              "Waterfall, Incremental, RAD, Evolutionary Models, Prototyping, Spiral, TDD.",
          },
          {
            title: "Agile, Scrum & DevOps",
            description: "Modern software development methodologies.",
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/oose-module2-notes.pdf"],
        topics: [
          {
            title: "Software Estimation",
            description: "LOC, FP, COCOMO Model, SPMP.",
          },
          {
            title: "Project Scheduling & Risk Management",
            description:
              "Work Breakdown Structure, Gantt Chart, Risk Identification, RMMM Plan.",
          },
          {
            title: "Software Configuration Management",
            description:
              "SCM process, Version Control, Change Control, Configuration Audit.",
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/oose-module3-notes.pdf"],
        topics: [
          {
            title: "Requirements Engineering",
            description:
              "Functional & Non-Functional Requirements, Elicitation Techniques.",
          },
          {
            title: "Software Requirements Specification (SRS)",
            description: "Structuring & defining software requirements.",
          },
        ],
      },
      4: {
        notesLink: ["https://example.com/oose-module4-notes.pdf"],
        topics: [
          {
            title: "UML & Software Modeling",
            description:
              "Use Case Diagram, Class Diagram, DFD, Sequence Diagram, State Diagram.",
          },
          {
            title: "Software Design Principles",
            description:
              "Modular design, Cohesion & Coupling, MVC Architecture.",
          },
          {
            title: "Design Patterns",
            description:
              "Singleton, Observer, Adapter, Façade patterns in software design.",
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/oose-module5-notes.pdf"],
        topics: [
          {
            title: "Software Testing",
            description:
              "OO Testing Methods, Test Case Design, Class & Interclass Testing.",
          },
          {
            title: "Software Maintenance",
            description: "Types, Reverse Engineering, Reengineering.",
          },
        ],
      },
    },
  },

  ms: {
    name: "Modeling and Simulation",
    icon: FlaskConical,
    color: "green",
    modules: {
      1: {
        notesLink: ["https://example.com/modeling-module1-notes.pdf"],
        topics: [
          {
            title: "Introduction to Modeling & Simulation",
            description: "Model Characterization, Model Development.",
          },
          {
            title: "Simulation Studies",
            description:
              "Programming Languages, Terminology, Inventory System.",
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/modeling-module2-notes.pdf"],
        topics: [
          {
            title: "Random Number Generation",
            description: "Lehmer RNG, Monte Carlo Simulation.",
          },
          {
            title: "Empirical Tests of Randomness",
            description: "Kolmogorov-Smirnov, Chi-Square, Gap Test.",
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/modeling-module3-notes.pdf"],
        topics: [
          {
            title: "Discrete Event Simulation",
            description: "Multi-Stream Lehmer RNG, Event List Management.",
          },
          {
            title: "Sample Statistics",
            description: "Histograms, Correlation, Next-Event Simulation.",
          },
        ],
      },
      4: {
        notesLink: ["https://example.com/modeling-module4-notes.pdf"],
        topics: [
          {
            title: "Random Variables & Variates",
            description:
              "Discrete & Continuous Distributions, Sampling Techniques.",
          },
          {
            title: "Poisson Processes & Markov Chains",
            description: "Birth-Death Models, Finite-State Markov Chains.",
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/modeling-module5-notes.pdf"],
        topics: [
          {
            title: "Verification & Validation",
            description: "Calibration & Validation of Simulation Models.",
          },
          {
            title: "Output Analysis",
            description:
              "Monte Carlo Estimation, Finite & Infinite Horizon Statistics.",
          },
        ],
      },
    },
  },

  cc: {
    name: "Cloud Computing",
    icon: Cloud,
    color: "purple",
    modules: {
      1: {
        notesLink: ["https://example.com/cloud-module1-notes.pdf"],
        topics: [
          {
            title: "Virtualization Basics",
            description: "CPU, Storage, OS Virtualization, Abstraction.",
          },
          {
            title: "Hypervisors & Security",
            description:
              "Type 1 & 2 Hypervisors, Virtualization Security Threats.",
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/cloud-module2-notes.pdf"],
        topics: [
          {
            title: "Evolution of Cloud Computing",
            description: "Comparison with Cluster & Grid Computing.",
          },
          {
            title: "Cloud Service Models",
            description: "SaaS, PaaS, IaaS, XaaS, Deployment Models.",
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/cloud-module3-notes.pdf"],
        topics: [
          {
            title: "Cloud & IoT Architecture",
            description: "AWS, Azure, OpenStack, Role of Cloud in IoT.",
          },
        ],
      },
      4: {
        notesLink: ["https://example.com/cloud-module4-notes.pdf"],
        topics: [
          {
            title: "Cloud Security",
            description: "Threats, IAM, Cloud Security Frameworks.",
          },
          {
            title: "Data & Host Security",
            description: "Security in SaaS, PaaS, IaaS.",
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/cloud-module5-notes.pdf"],
        topics: [
          {
            title: "Research Topics",
            description: "Self-learning & Internal Assessments.",
          },
        ],
      },
    },
  },

  df: {
    name: "Development Frameworks",
    icon: GraduationCap,
    color: "orange",
    modules: {
      1: {
        notesLink: ["https://example.com/frameworks-module1-notes.pdf"],
        topics: [
          {
            title: "Basics of Frameworks",
            description: "History, Need for Frameworks.",
          },
          {
            title: "Introduction to Laravel",
            description: "Installation, Architecture, Components.",
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/frameworks-module2-notes.pdf"],
        topics: [
          {
            title: "Laravel Fundamentals",
            description: "MVC, Blade Templates, Middleware, Controllers.",
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/frameworks-module3-notes.pdf"],
        topics: [
          {
            title: "Database in Laravel",
            description: "Query Builder, Migrations, Eloquent ORM.",
          },
        ],
      },
      4: {
        notesLink: ["https://example.com/frameworks-module4-notes.pdf"],
        topics: [
          {
            title: "Introduction to Django",
            description: "MVT Pattern, Folder Structure, Configurations.",
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/frameworks-module5-notes.pdf"],
        topics: [
          {
            title: "Django Advanced Features",
            description: "REST API, Admin Site, Email Handling.",
          },
        ],
      },
    },
  },
}

export default subjects
