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
        notesLink: ["https://example.com/dsip-module1-notes.pdf"],
        topics: [
          {
            title: "1.1.1 Introduction to digital signals and systems",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/iCaDt9Esdv4?si=KFIJ7HSUSv-S6pRo",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
          {
            title: "1.1.2 Properties and operations on digital signals.",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Basic Concepts - Part 1",
                url: "https://www.youtube.com/embed/xLetJpcjHS0?si=cyr5y98BKyBWwRku",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
          },
          {
            title: "1.2 Classification of signals, system, LTI system",
            description: "Important Topic for Exam ⭐",
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
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf",
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf",
              },
            ],
          },
          {
            title: "1.3 Convolution in time domain (linear & circular), Correlation.",
            description: "Important Topic for Exam ⭐",
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
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf",
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf",
              },
            ],
          },
        ],
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
                url: "https://www.youtube.com/embed/example1",
              },
              {
                title: "Implementation Overview - Part 2",
                url: "https://www.youtube.com/embed/example2",
              },
            ],
            notes: [
              {
                title: "Lecture Notes - Week 1",
                url: "https://example.com/notes1.pdf",
              },
              {
                title: "Practice Problems",
                url: "https://example.com/practice1.pdf",
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
