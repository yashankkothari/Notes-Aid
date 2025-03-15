# Contributing to Notes Aid

Welcome to Notes Aid! We appreciate your interest in contributing. This document provides guidelines for both **developers** and **notes contributors**.

## Table of Contents
- [For Developers](#for-developers)
  - [Project Setup](#project-setup)
  - [Development Guidelines](#development-guidelines)
  - [Submitting a Pull Request](#submitting-a-pull-request)
- [For Notes Contributors](#for-notes-contributors)
  - [Notes Format](#notes-format)
  - [Adding Notes](#adding-notes)
  - [Submitting a Pull Request](#submitting-a-pull-request-1)

---

## For Developers

### Project Setup
1. **Fork the Repository**: Click the 'Fork' button on GitHub.
2. **Clone Your Fork**:
   ```bash
   git clone https://github.com/<Your Github ID>/Notes-Aid.git
   cd Notes-Aid/notes-aid
   ```
3. **Install Dependencies**:
   ```bash
   npm install
   ```
4. **Start Development Server**:
   ```bash
   npm run dev
   ```

### Development Guidelines
- Use **TypeScript** for consistency.
- Follow the **existing folder structure** and coding conventions.
- Ensure all **components use Lucide Icons** for UI consistency.
- Validate JSON data before committing.
- Run **prettier and eslint** before pushing:
  ```bash
  npm run build
  ```

_Note: Do not commit service-worker.js or workbox-*.js files._

### Submitting a Pull Request
1. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
2. Make your changes and commit:
   ```bash
   git commit -m "Added feature-name"
   ```
3. Push your branch:
   ```bash
   git push origin feature-name
   ```
4. Open a Pull Request (PR) on GitHub.

---

## For Notes Contributors

### Notes Format
Notes should follow the structured TypeScript format:

You need to contribute in `Notes-Aid\Notes-Aid\notes-aid\src\app\notes` folder where you will find:

There are 4 folder for each year
```
📂fy/
📂sy/
📂ty/
📂ly/
```

Each year has folders of various branches within it:
```
📂fy/
├──📂comps/
├──📂it/
..
📂sy/
├──📂comps/
├──📂it/
..
.
.
similar for each folder
```

```
📂fy/
├──📂comps/
│  ├── 📂evenSem
│  ├── 📂oddSem
├──📂it/
│  ├── 📂evenSem
│  ├── 📂oddSem
.
.
similar for each folder
```

Each evenSem and oddSem Folder has <subject>/data.tsx
```
📂ty/
├──📂comps/
│  ├──📂evenSem/
│  │  ├──📂 dsip/📄data.tsx
│  │  ├──📂 ai/📄data.tsx
│  │  ├──📂 cc/📄data.tsx
│  │  ├──📂 is/📄data.tsx
│  │  ├──📄subject.tsx
│  ├── oddSem
...
.
.
```



```ts
import { LucideIcon } from 'lucide-react';

interface Video {
  title: string;
  url: string;
  completed?: boolean;
}

interface Note {
  title: string;
  url: string;
}

interface NotesLink {
  title: string;
  url: string;
}

interface Module {
  [key: number]: {
    progress?: number;
    notesLink: NotesLink[];
    topics: Topic[];
  };
}

interface Topic {
  title: string;
  description: string;
  progress?: number;
  videos?: Video[];
  notes?: Note[];
}

interface Subject {
  name: string;
  icon: LucideIcon;
  color: string;
  modules: Module;
}

export interface Subjects {
  [key: string]: Subject;
}
```

### Adding Notes
1. Navigate to `data/subjects.ts`.
2. Find the appropriate subject or add a new one following the above format.
3. Include:
   - **Videos** (if available)
   - **Notes** (as URLs in markdown or PDFs)
   - **Description** of the topic

Example:
```ts
const dsa: Subject = {
  name: "Data Structures & Algorithms",
  icon: SomeLucideIcon,
  color: "#ff5733",
  modules: {
    1: {
      progress: 50,
      notesLink: [
        { title: "Introduction to DSA", url: "https://example.com/dsa-intro" },
      ],
      topics: [
        {
          title: "Arrays & Linked Lists",
          description: "Understanding the basics of arrays and linked lists.",
          progress: 70,
          videos: [
            { title: "Array Basics", url: "https://youtube.com/array-basics" }
          ],
          notes: [
            { title: "Array Notes", url: "https://example.com/array-notes" }
          ],
        },
      ],
    },
  },
};
```

### Submitting a Pull Request
1. Fork the repository.
2. Clone it and create a new branch:
   ```bash
   git checkout -b add-notes-subject
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Added notes for subject XYZ"
   ```
4. Push your branch:
   ```bash
   git push origin add-notes-subject
   ```
5. Open a Pull Request (PR) on GitHub.

---

Thank you for contributing! 🎉

