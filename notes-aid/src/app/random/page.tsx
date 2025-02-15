"use client"
import React, { useState } from "react"
import {
  Book,
  ChevronDown,
  Clock,
  BookOpen,
  GraduationCap,
  FlaskConical,
  Binary,
  LucideIcon,
} from "lucide-react"

interface Topic {
  title: string
  description: string
}

interface Module {
  [key: number]: Topic[]
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

interface ModuleCardProps {
  module: number
  topics: number
  isActive: boolean
  onClick: () => void
}

interface TopicListProps {
  topics: Topic[]
}

const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  topics,
  isActive,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`p-4 rounded-lg border transition-all cursor-pointer
      ${
        isActive
          ? "border-blue-500 bg-blue-50"
          : "border-slate-200 hover:border-blue-200"
      }
    `}
  >
    <div className="flex justify-between items-center mb-2">
      <h3 className="font-medium">Module {module}</h3>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </div>
    <p className="text-sm text-slate-600">{topics} topics</p>
  </div>
)

const TopicList: React.FC<TopicListProps> = ({ topics }) => (
  <div className="space-y-2">
    {topics.map((topic, index) => (
      <div key={index} className="p-3 bg-white rounded-lg border">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-blue-50 rounded">
            <BookOpen className="w-4 h-4 text-blue-500" />
          </div>
          <div>
            <h4 className="font-medium text-sm">{topic.title}</h4>
            <p className="text-sm text-slate-500 mt-1">{topic.description}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

const EngineeringCurriculum: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("ds")
  const [selectedModule, setSelectedModule] = useState<number>(1)

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
          },
          {
            title: "Arrays and Strings",
            description: "Operations and implementations",
          },
          {
            title: "Time Complexity Analysis",
            description: "Big O notation and analysis",
          },
        ],
        2: [
          {
            title: "Linked Lists",
            description: "Single, double and circular linked lists",
          },
          {
            title: "Stacks and Queues",
            description: "LIFO and FIFO data structures",
          },
          {
            title: "Applications",
            description: "Real-world applications and problems",
          },
        ],
        3: [
          { title: "Trees", description: "Binary trees and tree traversals" },
          {
            title: "Binary Search Trees",
            description: "BST operations and balancing",
          },
          { title: "AVL Trees", description: "Self-balancing tree structures" },
        ],
        4: [
          {
            title: "Graphs",
            description: "Graph representation and traversals",
          },
          { title: "Graph Algorithms", description: "Shortest path and MST" },
          {
            title: "Hash Tables",
            description: "Hashing techniques and collision resolution",
          },
        ],
        5: [
          {
            title: "Advanced Tree Structures",
            description: "B-trees and Red-Black trees",
          },
          {
            title: "Advanced Graph Algorithms",
            description: "Network flow and matching",
          },
          { title: "Case Studies", description: "Complex problem solving" },
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
            title: "Atomic Structure",
            description: "Quantum mechanics and electron configuration",
          },
          {
            title: "Chemical Bonding",
            description: "Ionic, covalent and metallic bonds",
          },
          { title: "Periodic Properties", description: "Trends and patterns" },
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

  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-sm p-4 md:p-6">
        <div className="mb-6 md:mb-8">
          <h1 className="text-xl md:text-2xl font-bold mb-2">
            Engineering Curriculum
          </h1>
          <p className="text-slate-600">
            Explore subjects and their module-wise topics
          </p>
        </div>

        {/* Subject Selection */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {Object.entries(subjects).map(([key, subject]) => {
            const Icon = subject.icon
            return (
              <div
                key={key}
                onClick={() => setSelectedSubject(key)}
                className={`p-4 rounded-lg border cursor-pointer transition-all
                  ${
                    selectedSubject === key
                      ? "border-blue-500 bg-blue-50"
                      : "border-slate-200 hover:border-blue-200"
                  }
                `}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="w-5 h-5 text-blue-500" />
                  <h3 className="font-medium">{subject.name}</h3>
                </div>
                <p className="text-sm text-slate-500">5 modules</p>
              </div>
            )
          })}
        </div>

        {/* Module Grid and Topics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Modules */}
          <div className="space-y-3">
            {[1, 2, 3, 4, 5].map((module) => (
              <ModuleCard
                key={module}
                module={module}
                topics={subjects[selectedSubject].modules[module].length}
                isActive={selectedModule === module}
                onClick={() => setSelectedModule(module)}
              />
            ))}
          </div>

          {/* Topics */}
          <div className="lg:col-span-2 bg-slate-50 rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4">
              {subjects[selectedSubject].name} - Module {selectedModule}
            </h2>
            <TopicList
              topics={subjects[selectedSubject].modules[selectedModule]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EngineeringCurriculum
