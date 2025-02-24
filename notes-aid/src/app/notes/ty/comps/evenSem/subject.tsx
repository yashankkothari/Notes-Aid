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
            description: "Basic theoretical concepts",
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
            title: "1.1.2 Properties and operations on digital signals.",
            description: "Basic numerical based concepts",
            videos: [
              {
                title: "Operations on Signals",
                url: "https://www.youtube.com/embed/H5RZPorc1z4?si=6qCxBHZatmGmjSWF",
              },
            ],
          },
          {
            title: "1.2 Classification of signals, system, LTI system",
            description: "Important Topic for Exam ⭐ - Numerical based",
            videos: [
              {
                title: "Video 1 - Deterministic and Non Deterministic Signals",
                url: "https://www.youtube.com/embed/tu9TPkS0uZE?si=f7rqIaoD8EnfaSaL",
              },
              {
                title: "Video 1 - Periodic and Aperiodic",
                url: "https://www.youtube.com/embed/o6BHBjKQ8io?si=F6VFofnRs734JYl4",
              },
              {
                title: "Video 1 - Symmetric and Antisymmetric",
                url: "https://www.youtube.com/embed/wfnIbHHtfHM?si=jX5ETZGA7lHtruRZ",
              },
              {
                title: "Video 1 - Even and Odd",
                url: "https://www.youtube.com/embed/4R0vHEnUGug?si=qgLs-Td3jQDo7Up1",
              },
              {
                title: "Video 1 - Casual and Non-Casual",
                url: "https://www.youtube.com/embed/8qAPF9QbOi8?si=kbpY_E0XYXHkwqX1",
              },
              {
                title: "Video 1 - Energy and Power ",
                url: "https://www.youtube.com/embed/yGEEvn8CzrU?si=22aPNcgJR-FcKEQu",
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
                title: "Video 1 (Matrix Method for Linear Convolution)",
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
            description: "Important Topic for Exam ⭐- Numerical based",
            videos: [
              {
                title: "Video 1 (Matrix Method for Circular Convolution)",
                url: "https://www.youtube.com/embed/TrgfP7QD3Nk?si=i1wauBtCp5ioeTOm&amp;start=258",
              },
              {
                title: "Video 2 (Graph Method)",
                url: "https://www.youtube.com/embed/z2vH9uw_qjU?si=wArKeyKj0lcOdW2E",
              },
              {
                title: "Video 3 (Tabular Method)",
                url: "https://www.youtube.com/embed/HNYC26dxwNY?si=RtaaO-dQU4kC0L9x",
              },
            ],
          },
          {
            title: "1.3.3 Auto Correlation and Cross Correlation",
            description: "Important Topic for Exam ⭐- Numerical based",
            videos: [
              {
                title: "Auto Correlation and Cross Correlation Introduction",
                url: "https://www.youtube.com/embed/R7kVI3AS6LY?si=LtG8wNq1U57MCPR-",
              },
              {
                title: "Cross Correlation - Graphical Method",
                url: "https://www.youtube.com/embed/YtkDjm_oSxY?si=skuUStKrtWO94qWv",
              },
              {
                title: "Cross Correlation - Tabular Method",
                url: "https://www.youtube.com/embed/dCD5GVWT7BQ?si=koRmvPZ3egm1KHof",
              },
              {
                title: "Cross Correlation - Matrix Method",
                url: "https://www.youtube.com/embed/GEFvLJhlPNg?si=LF9jMxoc6kkU3_vl",
              },
              {
                title: "Auto Correlation - Numerical",
                url: "https://www.youtube.com/embed/gunRa-XSYU4?si=JQUrMSJPhz3gObBq",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/Chapter%202.pdf?alt=media&token=050c1cc3-45f5-425f-a1eb-a05c93d9e445",
        ],
        topics: [
          {
            title:
              "2.1.1 Digital image Representation, Elements of digital image processing systems",
            description: "Basic theoretical concepts",
            videos: [
              {
                title: "Introduction to Digital Image Processing",
                url: "https://www.youtube.com/embed/J-KxVvDRl18?si=srXPYdbpQAGLU5PD",
              },
              {
                title: "Key stages in digital image processing",
                url: "https://www.youtube.com/embed/8ekTeZD_lNY?si=qH5PtZ4UXvdPXXU8",
              },
            ],
          },
          {
            title:
              "2.1.2 Sampling and quantization and basic relationships between pixels, mathematical operations on images.",
            description: "Basic theoretical concepts",
            videos: [
              {
                title: "Sampling and quantization",
                url: "https://www.youtube.com/embed/KWc9SOOLfLw?si=Nj8R7fPo6ygm0R7o",
              },
              {
                title: "Basic relationships between pixels",
                url: "https://www.youtube.com/embed/AjFURMXJTbw?si=YSVpaJwLLwaf2dn_",
              },
              {
                title: "Mathematical operations on images",
                url: "https://www.youtube.com/embed/kTxKca5i5tQ?si=IBH0ndCJnwUX8uCS",
              },
            ],
          },
          {
            title:
              "2.2.1 Spatial domain enhancement techniques: Point processing, Neighbourhood processing, spatial domain filtering, zooming. ",
            description: "Important Topic for Exam ⭐- Numerical based",
            videos: [
              {
                title:
                  "Image Negative or Digital Negative,Thresholding, Bit Plane Slicing",
                url: "https://www.youtube.com/embed/FMDmXz6ynvk?si=7qKfBYj1VAyfMPzh",
              },
              {
                title: "Contrast Stretching or Contrast Adjustment",
                url: "https://www.youtube.com/embed/YJIgFMoC_yg?si=KVVwA_UX-rubmTJp",
              },
              {
                title: "Grey Level Slicing (Intensity slicing)",
                url: "https://www.youtube.com/embed/_roeBr60AP8?si=pj-sOZ781n9qXCZq",
              },
              {
                title: "Log Transformation & Power Law Transformation",
                url: "https://www.youtube.com/embed/jfoXoFoDb48?si=D-p6Yg2ec1Xu2zmQ",
              },
            ],
          },
          {
            title:
              "2.2.2 Neighborhood processing, spatial domain filtering, zooming. ",
            description: "Important Topic for Exam ⭐- Numerical based",
            videos: [
              {
                title: "Lowpass and Highpass Filter ",
                url: "https://www.youtube.com/embed/tcLJ3FQ2FqI?si=1ATrP-2LaV3CxXBM",
              },
              {
                title: "Weighted Averaging Filter and Median Filter",
                url: "https://www.youtube.com/embed/x6zoQ-a7A9U?si=2F7eqpvEiiSqaeOn",
              },
              {
                title: "Median Filter",
                url: "https://www.youtube.com/embed/IsMWGkhnHpo?si=WgL1qKkFoUa7Se-9",
              },
              {
                title: "Sum on Lowpass Filter",
                url: "https://www.youtube.com/embed/L7odWbdRutE?si=ZJEQNU1870ZiyspL",
              },
              {
                title: "Sum on Highpass Filter",
                url: "https://www.youtube.com/embed/Ow-i41-Tz9k?si=oM_-q3t7AXt-Rt0v",
              },
              {
                title: "Highboost Filter",
                url: "https://www.youtube.com/embed/Hutnurzr59o?si=l2McHv2YXFzHxTRR",
              },
              {
                title: "Replication & Zooming",
                url: "https://www.youtube.com/embed/gH4LA71_Ko0?si=YJq0OUcgKwpsxV1M",
              },
            ],
          },
          {
            title:
              "2.3 Spatial enhancement: Global processing: Histogram Equalization ",
            description: "Important Topic for Exam ⭐- Numerical based",
            videos: [
              {
                title: "Introduction to Histogram Plotting",
                url: "https://www.youtube.com/embed/m7NSfpfMshA?si=TCGTSLNHmXOw4sc3",
              },
              {
                title: "Histogram Stretching or Linear Contrast Stretching",
                url: "https://www.youtube.com/embed/j9lMwuCpzeM?si=K8m7mNxeJ2gHgHqL",
              },
              {
                title: "Histogram Equalization",
                url: "https://www.youtube.com/embed/_PjgOllbAxY?si=Op9s-onCtkIDmAY6",
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
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/Module%201%20(1).pdf?alt=media&token=728d59fb-f89c-4605-bd96-564ddd73c86c",
        ],
        topics: [
          {
            title:
              "1.1 History of Artificial Intelligence, The AI problem*, The AI technique*, Foundations of AI",
            description: "Theoretical concepts",
            videos: [
              {
                title: "History of AI",
                url: "https://www.youtube.com/embed/3qRJfUv7W_Y?si=cjelR7-yfd_FbOTL",
              },
              {
                title: "Introduction to AI",
                url: "https://www.youtube.com/embed/saNiKk06f1Y?si=dr4mgvMOsAaLGjHc",
              },
              {
                title: "Foundation of AI",
                url: "https://www.youtube.com/embed/b-YcALlUR6k?si=mrD84BxkNyLO9ff7",
              },
              {
                title:
                  "Acting Humanly & Rationally , Thinking Humanly & Rationally",
                url: "https://www.youtube.com/embed/aStninMO6E8?si=-6H34Mqdwwwabksk",
              },
              {
                title: "The AI problem (Refer Page 30 of the notes)",
                url: "https://www.youtube.com/embed/32QyFxFTqwg?si=B0Sy7YEIwUiTvgIx",
              },
              {
                title: "The AI Technique",
                url: "https://www.youtube.com/embed/HXGaabF6T7U?si=wMsokWwiwrmHWlt0",
              },
            ],
          },
          {
            title:
              "1.2 Categorization of Intelligent System, Components of AI Program.",
            description: "Theoretical concepts",
            videos: [
              {
                title:
                  "Components of AI Program (Refer Page 22-25 of the notes)",
                url: "https://www.youtube.com/embed/Cw-FqnU-QkA?si=rCxHpr-sOwMd15XK",
              },
            ],
          },
          {
            title:
              "1.3 Sub-areas of AI, Applications of AI, Current trends in AI. ",
            description: "Theoretical concepts",
            videos: [
              {
                title: "Applications of AI",
                url: "https://www.youtube.com/embed/U4t1qFteDjs?si=TW_hGGydb33R24BJ",
              },
              {
                title: "Applications of AI - Part 2",
                url: "https://www.youtube.com/embed/Oth_jnB5lOA?si=aHmFbVGetlyh8eil",
              },
            ],
          },
        ],
      },
      2: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/Module%202%20(1).pdf?alt=media&token=ab8162a7-3e38-4ffa-90e3-b2b5281383f5",
        ],
        topics: [
          {
            title: "2.1 Agents and Environments",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Introduction to Intelligent Agents and their types",
                url: "https://www.youtube.com/embed/BkedAnQfJ_U?si=mnVi1coeIJyuS-_z",
              },
              {
                title: "Classic Vacuum Cleaner Problem",
                url: "https://www.youtube.com/embed/KX09yGiPW70?si=ytZLlgDXTGKn-9CP",
              },
            ],
          },
          {
            title: "2.1 The concept of rationality",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Concept of Rationality",
                url: "https://www.youtube.com/embed/SE8kwTr-nmc?si=C6gc9g0c3hQ-1RRx",
              },
            ],
          },
          {
            title: "2.3 The Task environment and their properties",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Properties of Task Environments",
                url: "https://www.youtube.com/embed/yHXatUO6h28?si=Rw3atD12AFja9zgp",
              },
            ],
          },
          {
            title: "2.4 PEAS",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "PEAS (Performance, Environment, Actuators, Sensors)",
                url: "https://www.youtube.com/embed/n8z9HNV__OA?si=tNAFIaAesWSvv_dm",
              },
              {
                title: "PEAS (Self Driving Car) - Part 2",
                url: "https://www.youtube.com/embed/n9rwoA-36iY?si=Y3z18ACSZERAm5lK",
              },
              {
                title: "PEAS (More Examples) - Part 3",
                url: "https://www.youtube.com/embed/70qc0wPeJtQ?si=aDbUdqazdkxtQrve",
              },
            ],
          },
          {
            title: "2.5 The structure of Agents",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "2.6 Types of Agents",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "2.7 Learning Agent",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "2.8 Function of agent program",
            description: "Basic concepts and importance",
            videos: [],
          },
        ],
      },
      // 3: {
      //   notesLink: [
      //     "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/AI%20Module%203.pdf?alt=media&token=f0c4d4a0-f75e-4816-a3c2-471592794634",
      //   ],
      //   topics: [
      //     {
      //       title:
      //         " Knowledge based Agents, The Wumpus World, inference procedures, First Order Logic: Syntax and Semantic, Inference in FOL, Unification and lifting, Forward chaining, backward Chaining, Resolution, Answer set programming",
      //       description: "Basic concepts and importance",
      //       videos: [
      //         {
      //           title: "Basic Concepts - Part 1",
      //           url: "https://www.youtube.com/embed/example1",
      //         },
      //         {
      //           title: "Implementation Overview - Part 2",
      //           url: "https://www.youtube.com/embed/example2",
      //         },
      //       ],
      //     },
      //   ],
      // },
      4: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/Module%204.pdf?alt=media&token=b4beb656-97bf-480a-b8ae-c77fb95da5a4",
        ],
        topics: [
          {
            title: "Knowledge based Agents",
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
          {
            title: "The Wumpus World",
            description: "Basic concepts and importance",
            videos: [
              {
                title: "Wuspus World Example",
                url: "https://www.youtube.com/embed/xSy2nwae2no?si=3MhIy4YhD1kzz2WQ",
              },
            ],
          },
          {
            title: "Inference procedures",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "First Order Logic: Syntax and Semantic",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "Inference in FOL",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "Unification and lifting",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "Forward chaining",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "Backward Chaining",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "Resolution",
            description: "Basic concepts and importance",
            videos: [],
          },
          {
            title: "Answer set programming",
            description: "Basic concepts and importance",
            videos: [],
          },
        ],
      },
      // 5: {
      //   notesLink: [
      //     "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/AI%20Module%205.pdf?alt=media&token=d9402e5a-73a5-4f3b-9c0a-795613b2c277",
      //   ],
      //   topics: [
      //     {
      //       title:
      //         " Knowledge based Agents, The Wumpus World, inference procedures, First Order Logic: Syntax and Semantic, Inference in FOL, Unification and lifting, Forward chaining, backward Chaining, Resolution, Answer set programming",
      //       description: "Basic concepts and importance",
      //       videos: [
      //         {
      //           title: "Basic Concepts - Part 1",
      //           url: "https://www.youtube.com/embed/example1",
      //         },
      //         {
      //           title: "Implementation Overview - Part 2",
      //           url: "https://www.youtube.com/embed/example2",
      //         },
      //       ],
      //     },
      //   ],
      // },
    },
  },
  is: {
    name: "Information Security",
    icon: EarthLock,
    color: "blue",
    modules: {
      1: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/1%20Introduction.pdf?alt=media&token=f354e878-b2c2-46b9-a729-9181fd474eec",
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/2%20Cryptography.pdf?alt=media&token=287136ed-9315-4d4b-9945-063ee1b78c18",
        ],
        topics: [
          {
            title:
              "1.1 What Is Computer Security?,  Threats, Harm, Vulnerabilities, Controls ",
            description: "Basic concepts and importance",
            videos: [
              {
                title:
                  "Security Goals : Confidentiality, Integrity, Availability",
                url: "https://www.youtube.com/embed/CrLRFn5O_F8?si=spYdUV6zNiwX-BRa",
              },
              // {
              //   title: "Implementation Overview - Part 2",
              //   url: "https://www.youtube.com/embed/example2",
              // },
            ],
          },
          {
            title:
              "1.2 Use of Cryptography in System Security: Problems Addressed by Encryption, Terminology, ",
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
          {
            title: "1.2  DES: The Data Encryption Standard",
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
          {
            title:
              "1.2 Public Key Cryptography, Public Key Cryptography to Exchange Secret Keys",
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
          {
            title:
              "1.2 Error Detecting Codes, Trust, Certificates: Trustable Identities and Public Keys, Digital Signatures—All the Pieces",
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
      2: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/3%20Software%20Security-updated.pdf?alt=media&token=780f208d-7eaa-456c-a6c4-c8c99820ce88",
        ],
        topics: [
          {
            title:
              "2.1 Unintentional (Non-malicious) Programming: Oversights - Buffer Overflow,  Incomplete Mediation,  Time-ofCheck to Time-of-Use,  Undocumented Access Point Off-by-One,  Error Integer Overflow, Unterminated Null-Terminated String, Parameter Length, Type, and Number,  Unsafe Utility Program, Race Condition",
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
          {
            title:
              "2.2 Malicious Code—Malware- Malware—Viruses, Trojan Horses, and Worms,  Technical Details: Malicious Code ",
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
          {
            title:
              "2.3 Countermeasures: Countermeasures for Users, Countermeasures for Developers,  Countermeasure Specifically for Security, Countermeasures that Dont Work  ",
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
      3: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/4%20The%20Web%2C%20Management%20%26%20Incidents.pdf?alt=media&token=530951ec-c9e2-449e-ab3f-195b90fe9246",
        ],
        topics: [
          {
            title:
              "3.1 Browser Attacks: Browser Attack Types,  How Browser Attacks Succeed: Failed Identification and Authentication",
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
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/AC%20Module%201.pdf?alt=media&token=42db56c3-72f1-4758-acb8-8f3ecab36ff3",
        ],
        topics: [
          {
            title:
              "1.1 Information Security and its goals, Vulnerability Threats and Attacks ",
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
          {
            title:
              "1.2 Encryption and Decryption, Symmetric and Asymmetric Key Cryptography, Stream and Block Cipher, Cryptanalysis, Brute Force Attack",
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
          {
            title:
              "1.3 Mathematics of Cryptography: Integer Arithmetic, The Extended Euclidean Algorithm, Modular Arithmetic,  Matrices, Linear Congruence ",
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
          {
            title:
              "1.4 Classical Cryptography: Substitution and Transposition Techniques: Any two from each",
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
      2: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/AC%20Module%202.pdf?alt=media&token=e83fe56e-c1e6-4b86-935e-ff49986cad74",
        ],
        topics: [
          {
            title:
              "2.1 Mathematics of Symmetric Key Cryptography: Algebraic Structures, Group, Ring, Field, GF Fields",
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
          {
            title:
              "2.2 Modern Block Ciphers: Components of Modern Block Cipher, Product Ciphers, Diffusion and Confusion, Classes of Product Cipher DES: DES Structure, DES Analysis: Properties, Design Criteria, DES Strength and Weaknesses, DES Security, Multiple DES, 3DES ",
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
          {
            title:
              "2.3 AES:  AES Structure,   Transformations, Key Expansion in AES-128, Key Expansion in AES-192 and AES-256, KeyExpansion Analysis,   Analysis   of   AES: Security, Implementation, Simplicity and Cost ",
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
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%201.pdf?alt=media&token=5fdc10e7-7eef-41c1-a2a8-d5fac03bf238",
        ],
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
      2: {
        notesLink: [
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%202.1%2C%202.2%2C%202.3.pdf?alt=media&token=2e06924c-2866-4875-93b8-e110fcf1e284",
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%202%20Hardware-assisted%20CPU%20virtualization%20in%20KVM%20QEMU.pdf?alt=media&token=12fc3a59-97de-42b6-bbd4-1b356871fc4d",
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%202%20Virtualization.pdf?alt=media&token=e45c11af-8b7d-4b7d-8fe8-197ad96dd3c2",
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%202%20Virtualization%202.pdf?alt=media&token=48376b43-fe35-4d54-a424-b3101f861f9c",
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%202%20Parairtualization%20in%20Xen.pdf?alt=media&token=da1c8a39-0c00-46e6-bfa5-9a56db6493a1",
          "https://firebasestorage.googleapis.com/v0/b/acm-bruh.appspot.com/o/CC%20Module%202%20Full%20virtualization.pdf?alt=media&token=8afdc23b-9adb-4689-883f-be7b807f1cbe",
        ],

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
