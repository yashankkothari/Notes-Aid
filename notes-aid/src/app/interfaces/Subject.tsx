import { LucideIcon } from 'lucide-react';

interface Module {
    [key: number]: {
      notesLink: string[];
      topics: Topic[];
    };
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
  
  export interface Subjects {
    [key: string]: Subject
  }

  