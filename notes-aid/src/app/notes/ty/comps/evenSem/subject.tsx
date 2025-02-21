import {
  Signal,
  Brain,
  EarthLock,
  MessageSquareLock,
  Server,
} from "lucide-react";

import { Subjects } from "@/app/interfaces/Subject";


const subjects: Subjects = {
  dsip: {
    name: "Digital Systems and Image Processing",
    icon: Signal,
    color: "blue",
    modules: {
      1: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/Chapter%201%20DSIP%202022.pptx.pdf?alt=media&token=7d6bd8e7-ce2a-4d1d-bf88-c38fee89642e",
        ],
        topics: [
          {
            title: "1.1.1 Introduction to digital signals and systems",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Introduction to Digital Signals and Systems",
                url: "https://www.youtube.com/embed/iCaDt9Esdv4?si=KFIJ7HSUSv-S6pRo",
              },
              {
                title: "Representation of Discrete Time Signals",
                url: "https://www.youtube.com/embed/ZU6YFD5NQ8E?si=kbEPUnYPRQ4WRj_i",
              },
             
              {
                title: "Types of Signals",
                url: "https://www.youtube.com/embed/N2qDknnckHc?si=86ur6m8GS9NLpm-p",
              },
              {
                title: "Sampling Theorem (Definition only) ",
                url: "https://www.youtube.com/embed/XyZerq7-IvA?si=5D4KVG8u27VPgHV-",
              }
            ],
            // notes: [
            //   {
            //     title: "Lecture Notes - Week 1",
            //     url: "https://example.com/notes1.pdf",
            //   },
            //   {
            //     title: "Practice Problems",
            //     url: "https://example.com/practice1.pdf",
            //   },
            // ],
          },
          {
            title: "1.1.2 Properties and operations on digital signals.",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Operations on Signals",
                url: "https://www.youtube.com/embed/H5RZPorc1z4?si=6qCxBHZatmGmjSWF",
              },
            ],
          },
          {
            title: "1.2 Classification of signals, system, LTI system",
            description: "Important Topic for Exam ⭐",
            videos: [
              {
                title: "Video 1 - Deterministic and Non Deterministic Signals",
                url: "https://www.youtube.com/embed/tu9TPkS0uZE?si=f7rqIaoD8EnfaSaL",
              },
              {
                title: "Video 2 (Classification of Discrete Time System) 1",
                url: "https://www.youtube.com/embed/ejKmKNujx7c?si=TCACor4C2mrW4Qqk",
              },
              {
                title: "Video 2 (Classification of Discrete Time System) 2",
                url: "https://www.youtube.com/embed/L2M1SE1GvNI?si=tUn_gY2AKx58dyRA",
              },
              {
                title:
                  "Video 3 (Classification of Linear Time Invariant Signals) 1",
                url: "https://www.youtube.com/embed/LezLNMznZm4?si=PZPuQJ4Xy0x1f1rQ",
              },
              {
                title:
                  "Video 4 (Linear Time Invariant Signals - Solved Example) 1",
                url: "https://www.youtube.com/embed/BZq7j2b-7Lw?si=e8WloXJp39DIt-RR",
              },
              {
                title:
                  "Video 5 (Linear Time Invariant Signals - Solved Example) 2",
                url: "https://www.youtube.com/embed/P4_iWrawCZs?si=KgmOoeyaCxd4Cf4x",
              },
            ],
          },
          {
            title: "1.3.1 Convolution in time domain - Linear Convolution.",
            description: "Important Topic for Exam ⭐",
            videos: [
              {
                title: "Video 1 (Matrix Method)",
                url: "https://www.youtube.com/embed/TrgfP7QD3Nk?si=MwfL3kmDN58h6vAi",
              },
              {
                title: "Video 2 (Graph Method)",
                url: "https://www.youtube.com/embed/uwpxL_NrAMA?si=Me_zJEP5V8UhHh4f",
              },
              {
                title: "Video 3 (Tabular Method)",
                url: "https://www.youtube.com/embed/27kJKCAiR8g?si=c8PS__xL0-CXDUo3",
              },
            ],
          },
          {
            title: "1.3.2 Convolution in time domain - Circular Convolution",
            description: "Numerical Based Topic ⭐",
            videos: [
              {
                title: "Video 1",
                url: "https://www.youtube.com/embed/2aSzBgJ0FCE?si=k2rQRMqcMet-FJKt",
              },
            ],
          },
          {
            title: "1.3.3 Auto Correlation and Cross Correlation",
            description: "Numerical Based Topic ⭐",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: ["https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/Chapter%202.pdf?alt=media&token=050c1cc3-45f5-425f-a1eb-a05c93d9e445"],
        topics: [
          {
            title:
              "Digital image Representation, Elements of digital image processing systems, sampling and quantization, basic relationships between pixels mathematical operations on images.",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
            ],
            // notes: [
            //   {
            //     title: "Lecture Notes - Week 1",
            //     url: "https://example.com/notes1.pdf",
            //   },
            //   {
            //     title: "Practice Problems",
            //     url: "https://example.com/practice1.pdf",
            //   },
            // ],
          },
          {
            title:
              "Digital image Representation, Elements of digital image processing systems, sampling and quantization, basic relationships between pixels mathematical operations on images.",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
            ],
          },
        ],
      },
    },
  },
  ai: {
    name: "Artificial Intelligence",
    icon: Brain,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/ai-module1-notes.pdf"],
        topics: [
          {
            title: "Introduction to AI",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
        ],
      },
    },
  },
  is: {
    name: "Information Security",
    icon: EarthLock,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/is-module1-notes.pdf"],
        topics: [
          {
            title: "Introduction to Security Concepts",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
        ],
      },
    },
  },
  ac: {
    name: "Applied Cryptography",
    icon: MessageSquareLock,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/ac-module1-notes.pdf"],
        topics: [
          {
            title: "Introduction to Cryptography",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
        ],
      },
    },
  },
  cc: {
    name: "Cloud Computing",
    icon: Server,
    color: "blue",
    modules: {
      1: {
        notesLink: ["https://example.com/cc-module1-notes.pdf"],
        topics: [
          {
            title: "Introduction to Cloud Computing",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/example1",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
        ],
      },
    },
  },
};

export default subjects;
