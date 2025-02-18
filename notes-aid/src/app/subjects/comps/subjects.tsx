import {
    GraduationCap,
    FlaskConical,
    Binary,
    LucideIcon,
  } from "lucide-react"

  interface Module {
    [key: number]: Topic[]
  }

  interface Topic {
    title: string
    description: string
    videos?: {
      title: string
      url: string
    }[]
    notes?: {
      title: string
      url: string
    }[]
  }
  


interface Subject {
  name: string
  icon: LucideIcon
  color: string
  modules: Module
}


interface Subjects {
    [key: string]: Subject
  }


const subjects: Subjects = {
    ds: {
      name: "Data Structures",
      icon: Binary,
      color: "blue",
      modules: {
        1: [
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/xLetJpcjHS0?si=cyr5y98BKyBWwRku"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
        ],
        2: [
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
         
        ],
        3: [
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
        ],
        4: [
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
        ],
        5: [
          {
            title: "Introduction to Data Structures",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1"
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2"
              }
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf"
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf"
              }
            ]
          },
        ],
      },
    },
    chemistry: {
      name: "Engineering Chemistry",
      icon: FlaskConical,
      color: "green",
      modules: {
        1: [
            {
                title: "Introduction to Data Structures",
                description: "Basic concepts and importance",
                videos: [
                  {
                    title: "Basic Concepts - Part 1",
                    url: "https://www.youtube.com/embed/example1"
                  },
                  {
                    title: "Implementation Overview - Part 2",
                    url: "https://www.youtube.com/embed/example2"
                  }
                ],
                notes: [
                  {
                    title: "Lecture Notes - Week 1",
                    url: "https://example.com/notes1.pdf"
                  },
                  {
                    title: "Practice Problems",
                    url: "https://example.com/practice1.pdf"
                  }
                ]
              },
        ],
        2: [
          { title: "Thermodynamics", description: "Laws and applications" },
          {
            title: "Chemical Kinetics",
            description: "Rate laws and mechanisms",
          },
          {
            title: "Chemical Equilibrium",
            description: "Equilibrium constants and factors",
          },
        ],
        3: [
          {
            title: "Electrochemistry",
            description: "Electrochemical cells and applications",
          },
          { title: "Corrosion", description: "Types and prevention" },
          { title: "Batteries", description: "Primary and secondary cells" },
        ],
        4: [
          {
            title: "Engineering Materials",
            description: "Polymers and composites",
          },
          { title: "Water Technology", description: "Treatment and analysis" },
          { title: "Fuels", description: "Types and combustion" },
        ],
        5: [
          { title: "Spectroscopy", description: "Principles and applications" },
          { title: "Nanomaterials", description: "Synthesis and applications" },
          { title: "Green Chemistry", description: "Sustainable processes" },
        ],
      },
    },
    math: {
      name: "Engineering Mathematics",
      icon: GraduationCap,
      color: "purple",
      modules: {
        1: [
          { title: "Matrices", description: "Operations and applications" },
          { title: "Determinants", description: "Properties and calculations" },
          { title: "Linear Equations", description: "Systems and solutions" },
        ],
        2: [
          {
            title: "Differential Calculus",
            description: "Limits and derivatives",
          },
          {
            title: "Applications of Derivatives",
            description: "Optimization and rates",
          },
          { title: "Partial Derivatives", description: "Multiple variables" },
        ],
        3: [
          { title: "Integration", description: "Techniques and applications" },
          {
            title: "Multiple Integrals",
            description: "Double and triple integrals",
          },
          {
            title: "Vector Calculus",
            description: "Gradient, divergence, curl",
          },
        ],
        4: [
          {
            title: "Differential Equations",
            description: "First and second order",
          },
          {
            title: "Laplace Transforms",
            description: "Properties and applications",
          },
          {
            title: "Fourier Series",
            description: "Expansions and applications",
          },
        ],
        5: [
          {
            title: "Complex Analysis",
            description: "Complex functions and integration",
          },
          {
            title: "Numerical Methods",
            description: "Interpolation and approximation",
          },
          { title: "Probability", description: "Distributions and statistics" },
        ],
      },
    },
  }

    export default subjects