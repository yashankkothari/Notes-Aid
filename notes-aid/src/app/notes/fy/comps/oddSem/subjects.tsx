import {
  GraduationCap,
  FlaskConical,
  Binary,
} from "lucide-react"

import { Subjects } from "@/app/interfaces/Subject"


const subjects: Subjects = {
  ds: {
    name: "Data Structures",
    icon: Binary,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/dsip-module1-notes.pdf"],
        topics: [
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
        ]
      },
      2: {
        notesLink: ["https://example.com/dsip-module2-notes.pdf"],
        topics: [
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
          }
        ]
      },
      3: {
        notesLink: ["https://example.com/dsip-module3-notes.pdf"],
        topics: [
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
          }
        ]
      },
      4: {
        notesLink: ["https://example.com/dsip-module4-notes.pdf"],
        topics: [
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
          }
        ]
      },
      5: {
        notesLink: ["https://example.com/dsip-module5-notes.pdf"],
        topics: [
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
          }
        ]
      }
    }
  },
  chemistry: {
    name: "Engineering Chemistry",
    icon: FlaskConical,
    color: "green",
    modules: {
      1: {
        notesLink: ["https://example.com/chemistry-module1-notes.pdf"],
        topics: [
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
          }
        ]
      },
      2: {
        notesLink: ["https://example.com/chemistry-module2-notes.pdf"],
        topics: [
          { title: "Thermodynamics", description: "Laws and applications" },
          {
            title: "Chemical Kinetics",
            description: "Rate laws and mechanisms",
          },
          {
            title: "Chemical Equilibrium",
            description: "Equilibrium constants and factors",
          }
        ]
      },
      3: {
        notesLink: ["https://example.com/chemistry-module3-notes.pdf"],
        topics: [
          {
            title: "Electrochemistry",
            description: "Electrochemical cells and applications",
          },
          { title: "Corrosion", description: "Types and prevention" },
          { title: "Batteries", description: "Primary and secondary cells" }
        ]
      },
      4: {
        notesLink: ["https://example.com/chemistry-module4-notes.pdf"],
        topics: [
          {
            title: "Engineering Materials",
            description: "Polymers and composites",
          },
          { title: "Water Technology", description: "Treatment and analysis" },
          { title: "Fuels", description: "Types and combustion" }
        ]
      },
      5: {
        notesLink: ["https://example.com/chemistry-module5-notes.pdf"],
        topics: [
          { title: "Spectroscopy", description: "Principles and applications" },
          { title: "Nanomaterials", description: "Synthesis and applications" },
          { title: "Green Chemistry", description: "Sustainable processes" }
        ]
      }
    }
  },
  math: {
    name: "Engineering Mathematics",
    icon: GraduationCap,
    color: "purple",
    modules: {
      1: {
        notesLink: ["https://example.com/math-module1-notes.pdf"],
        topics: [
          { title: "Matrices", description: "Operations and applications" },
          { title: "Determinants", description: "Properties and calculations" },
          { title: "Linear Equations", description: "Systems and solutions" }
        ]
      },
      2: {
        notesLink: ["https://example.com/math-module2-notes.pdf"],
        topics: [
          {
            title: "Differential Calculus",
            description: "Limits and derivatives",
          },
          {
            title: "Applications of Derivatives",
            description: "Optimization and rates",
          },
          { title: "Partial Derivatives", description: "Multiple variables" }
        ]
      },
      3: {
        notesLink: ["https://example.com/math-module3-notes.pdf"],
        topics: [
          { title: "Integration", description: "Techniques and applications" },
          {
            title: "Multiple Integrals",
            description: "Double and triple integrals",
          },
          {
            title: "Vector Calculus",
            description: "Gradient, divergence, curl",
          }
        ]
      },
      4: {
        notesLink: ["https://example.com/math-module4-notes.pdf"],
        topics: [
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
          }
        ]
      },
      5: {
        notesLink: ["https://example.com/math-module5-notes.pdf"],
        topics: [
          {
            title: "Complex Analysis",
            description: "Complex functions and integration",
          },
          {
            title: "Numerical Methods",
            description: "Interpolation and approximation",
          },
          { title: "Probability", description: "Distributions and statistics" }
        ]
      }
    }
  },
  ds2: {
    name: "Test",
    icon: Binary,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/test-module1-notes.pdf"],
        topics: [
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
          }
        ]
      },
      2: {
        notesLink: ["https://example.com/test-module2-notes.pdf"],
        topics: [
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
          }
        ]
      },
      3: {
        notesLink: ["https://example.com/test-module3-notes.pdf"],
        topics: [
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
          }
        ]
      },
      4: {
        notesLink:["https://example.com/test-module4-notes.pdf"],
        topics: [
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
          }
        ]
      },
      5: {
        notesLink: ["https://example.com/test-module5-notes.pdf"],
        topics: [
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
          }
        ]
      }
    }
  }
}

export default subjects