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
            videos: [
              {
                title: "Software Engineering Basics",
                url: "https://www.youtube.com/embed/example1",
              },
            ],
          },
          {
            title: "Capability Maturity Model (CMMI)",
            description:
              "Understanding process maturity in software development.",
            videos: [
              {
                title: "CMMI Explained",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
          {
            title: "Prescriptive Models",
            description:
              "Waterfall, Incremental, RAD, Evolutionary Models, Prototyping, Spiral, TDD.",
            videos: [
              {
                title: "Software Development Models",
                url: "https://www.youtube.com/embed/example3",
              },
            ],
          },
          {
            title: "Agile, Scrum & DevOps",
            description: "Modern software development methodologies.",
            videos: [
              {
                title: "Agile & Scrum Overview",
                url: "https://www.youtube.com/embed/example4",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/oose-module2-notes.pdf"],
        topics: [
          {
            title: "Software Estimation",
            description: "LOC, FP, COCOMO Model, SPMP.",
            videos: [
              {
                title: "Software Estimation Techniques",
                url: "https://www.youtube.com/embed/example5",
              },
            ],
          },
          {
            title: "Project Scheduling & Risk Management",
            description:
              "Work Breakdown Structure, Gantt Chart, Risk Identification, RMMM Plan.",
            videos: [
              {
                title: "Project Scheduling & Risk",
                url: "https://www.youtube.com/embed/example6",
              },
            ],
          },
          {
            title: "Software Configuration Management",
            description:
              "SCM process, Version Control, Change Control, Configuration Audit.",
            videos: [
              {
                title: "Software Configuration Management",
                url: "https://www.youtube.com/embed/example7",
              },
            ],
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
            videos: [
              {
                title: "Requirements Engineering Overview",
                url: "https://www.youtube.com/embed/example8",
              },
            ],
          },
          {
            title: "Software Requirements Specification (SRS)",
            description: "Structuring & defining software requirements.",
            videos: [
              {
                title: "SRS Explained",
                url: "https://www.youtube.com/embed/example9",
              },
            ],
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
            videos: [
              {
                title: "UML Overview",
                url: "https://www.youtube.com/embed/example10",
              },
            ],
          },
          {
            title: "Software Design Principles",
            description:
              "Modular design, Cohesion & Coupling, MVC Architecture.",
            videos: [
              {
                title: "Software Design Principles",
                url: "https://www.youtube.com/embed/example11",
              },
            ],
          },
          {
            title: "Design Patterns",
            description:
              "Singleton, Observer, Adapter, Façade patterns in software design.",
            videos: [
              {
                title: "Design Patterns Overview",
                url: "https://www.youtube.com/embed/example12",
              },
            ],
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
            videos: [
              {
                title: "Software Testing Methods",
                url: "https://www.youtube.com/embed/example13",
              },
            ],
          },
          {
            title: "Software Maintenance",
            description: "Types, Reverse Engineering, Reengineering.",
            videos: [
              {
                title: "Software Maintenance & Reverse Engineering",
                url: "https://www.youtube.com/embed/example14",
              },
            ],
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
            videos: [
              {
                title: "What is Modeling & Simulation?",
                url: "https://www.youtube.com/embed/example15",
              },
            ],
          },
          {
            title: "Simulation Studies & Terminology",
            description: "Programming Languages, Inventory System.",
            videos: [
              {
                title: "Simulation Terminology Explained",
                url: "https://www.youtube.com/embed/example16",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/modeling-module2-notes.pdf"],
        topics: [
          {
            title: "Random Number Generation",
            description: "Lehmer RNG, Monte Carlo Simulation.",
            videos: [
              {
                title: "Random Number Generators in Simulation",
                url: "https://www.youtube.com/embed/example17",
              },
            ],
          },
          {
            title: "Empirical Tests of Randomness",
            description: "Kolmogorov-Smirnov, Chi-Square, Gap Test.",
            videos: [
              {
                title: "Empirical Tests for Randomness",
                url: "https://www.youtube.com/embed/example18",
              },
            ],
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/modeling-module3-notes.pdf"],
        topics: [
          {
            title: "Discrete Event Simulation",
            description: "Multi-Stream Lehmer RNG, Event List Management.",
            videos: [
              {
                title: "Understanding Discrete Event Simulation",
                url: "https://www.youtube.com/embed/example27",
              },
            ],
          },
          {
            title: "Sample Statistics",
            description: "Histograms, Correlation, Next-Event Simulation.",
            videos: [
              {
                title: "Statistical Analysis in Simulation",
                url: "https://www.youtube.com/embed/example28",
              },
            ],
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
            videos: [
              {
                title: "Random Variables in Simulation",
                url: "https://www.youtube.com/embed/example29",
              },
            ],
          },
          {
            title: "Poisson Processes & Markov Chains",
            description: "Birth-Death Models, Finite-State Markov Chains.",
            videos: [
              {
                title: "Poisson Processes & Markov Chains Explained",
                url: "https://www.youtube.com/embed/example30",
              },
            ],
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/modeling-module5-notes.pdf"],
        topics: [
          {
            title: "Verification & Validation",
            description: "Calibration & Validation of Simulation Models.",
            videos: [
              {
                title: "Model Verification & Validation",
                url: "https://www.youtube.com/embed/example31",
              },
            ],
          },
          {
            title: "Output Analysis",
            description:
              "Monte Carlo Estimation, Finite & Infinite Horizon Statistics.",
            videos: [
              {
                title: "Output Analysis in Simulation",
                url: "https://www.youtube.com/embed/example32",
              },
            ],
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
            videos: [
              {
                title: "Introduction to Virtualization",
                url: "https://www.youtube.com/embed/example19",
              },
            ],
          },
          {
            title: "Hypervisors & Security",
            description:
              "Type 1 & 2 Hypervisors, Virtualization Security Threats.",
            videos: [
              {
                title: "Understanding Hypervisors",
                url: "https://www.youtube.com/embed/example20",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/cloud-module2-notes.pdf"],
        topics: [
          {
            title: "Evolution of Cloud Computing",
            description: "Comparison with Cluster & Grid Computing.",
            videos: [
              {
                title: "History & Evolution of Cloud Computing",
                url: "https://www.youtube.com/embed/example21",
              },
            ],
          },
          {
            title: "Cloud Service Models",
            description: "SaaS, PaaS, IaaS, XaaS, Deployment Models.",
            videos: [
              {
                title: "Cloud Computing Service Models",
                url: "https://www.youtube.com/embed/example22",
              },
            ],
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/cloud-module3-notes.pdf"],
        topics: [
          {
            title: "Cloud & IoT Architecture",
            description: "AWS, Azure, OpenStack, Role of Cloud in IoT.",
            videos: [
              {
                title: "Cloud Architecture Explained",
                url: "https://www.youtube.com/embed/example33",
              },
            ],
          },
        ],
      },
      4: {
        notesLink: ["https://example.com/cloud-module4-notes.pdf"],
        topics: [
          {
            title: "Cloud Security",
            description: "Threats, IAM, Cloud Security Frameworks.",
            videos: [
              {
                title: "Cloud Security Overview",
                url: "https://www.youtube.com/embed/example34",
              },
            ],
          },
          {
            title: "Data & Host Security",
            description: "Security in SaaS, PaaS, IaaS.",
            videos: [
              {
                title: "Data Security in Cloud",
                url: "https://www.youtube.com/embed/example35",
              },
            ],
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/cloud-module5-notes.pdf"],
        topics: [
          {
            title: "Research Topics",
            description: "Self-learning & Internal Assessments.",
            videos: [
              {
                title: "Emerging Trends in Cloud Computing",
                url: "https://www.youtube.com/embed/example36",
              },
            ],
          },
        ],
      },
    },
  },
  df2: {
    name: "Development Frameworks 2",
    icon: GraduationCap,
    color: "orange",
    modules: {
      1: {
        notesLink: ["https://example.com/frameworks-module1-notes.pdf"],
        topics: [
          {
            title: "Basics of Frameworks",
            description: "History, Need for Frameworks.",
            videos: [
              {
                title: "Why Use Development Frameworks?",
                url: "https://www.youtube.com/embed/example23",
              },
            ],
          },
          {
            title: "Introduction to Laravel",
            description: "Installation, Architecture, Components.",
            videos: [
              {
                title: "Getting Started with Laravel",
                url: "https://www.youtube.com/embed/example24",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: ["https://example.com/frameworks-module2-notes.pdf"],
        topics: [
          {
            title: "Laravel Fundamentals",
            description: "MVC, Blade Templates, Middleware, Controllers.",
            videos: [
              {
                title: "Laravel MVC Explained",
                url: "https://www.youtube.com/embed/example25",
              },
            ],
          },
          {
            title: "Request & Response Handling",
            description: "Cookies, Sessions, Middleware.",
            videos: [
              {
                title: "Handling Requests in Laravel",
                url: "https://www.youtube.com/embed/example26",
              },
            ],
          },
        ],
      },
      3: {
        notesLink: ["https://example.com/frameworks-module3-notes.pdf"],
        topics: [
          {
            title: "Database in Laravel",
            description: "Query Builder, Migrations, Eloquent ORM.",
            videos: [
              {
                title: "Database Operations in Laravel",
                url: "https://www.youtube.com/embed/example27",
              },
            ],
          },
          {
            title: "Error Handling & Redirections",
            description: "Handling errors, response redirections.",
            videos: [
              {
                title: "Error Handling in Laravel",
                url: "https://www.youtube.com/embed/example28",
              },
            ],
          },
        ],
      },
      4: {
        notesLink: ["https://example.com/frameworks-module4-notes.pdf"],
        topics: [
          {
            title: "Introduction to Django",
            description: "MVT Pattern, Folder Structure, Configurations.",
            videos: [
              {
                title: "Getting Started with Django",
                url: "https://www.youtube.com/embed/example29",
              },
            ],
          },
          {
            title: "Django Database Setup",
            description: "Migrations, ORM, Database Models.",
            videos: [
              {
                title: "Setting Up Database in Django",
                url: "https://www.youtube.com/embed/example30",
              },
            ],
          },
        ],
      },
      5: {
        notesLink: ["https://example.com/frameworks-module5-notes.pdf"],
        topics: [
          {
            title: "Views, Templates & Models in Django",
            description: "Templates, Context Objects, URL Configuration.",
            videos: [
              {
                title: "Django Views & Templates",
                url: "https://www.youtube.com/embed/example31",
              },
            ],
          },
          {
            title: "Advanced Django Features",
            description: "REST API, Django Admin, Email Handling.",
            videos: [
              {
                title: "Building REST APIs in Django",
                url: "https://www.youtube.com/embed/example32",
              },
            ],
          },
        ],
      },
    },
  },
}

export default subjects
