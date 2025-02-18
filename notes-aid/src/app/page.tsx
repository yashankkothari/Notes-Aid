"use client"
import React, { useState } from "react"
import {
  GraduationCap,
  BookOpen,
  ChevronDown,
  School,
  Calendar,
} from "lucide-react"

const branches = [
  "Computer Science",
  "Mechanical Engineering",
  "Electrical Engineering",
  "Civil Engineering",
  "Electronics and Communication",
  "Chemical Engineering",
]

const years = [
  { value: "1", label: "First Year" },
  { value: "2", label: "Second Year" },
  { value: "3", label: "Third Year" },
  { value: "4", label: "Fourth Year" },
]

export default function MainPage() {
  const [selectedBranch, setSelectedBranch] = useState("")
  const [selectedYear, setSelectedYear] = useState("")

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-8 h-8 text-blue-600" />
          <h1 className="text-2xl font-bold text-gray-800">Academic Details</h1>
        </div>

        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <School className="w-4 h-4" />
            Select Your Branch
          </label>
          <div className="relative">
            <select
              className="w-full p-3 pr-10 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              value={selectedBranch}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="" disabled >
                Choose a branch
              </option>
              {branches.map((branch, index) => (
                <option key={index} value={branch} >
                  {branch}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

      
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4" />
            Select Your Year
          </label>
          <div className="relative">
            <select
              className="w-full p-3 pr-10 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled>
                Choose your year
              </option>
              {years.map((year) => (
                <option key={year.value} value={year.value}>
                  {year.label}
                </option>
              ))}
            </select>
            <ChevronDown className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" />
          </div>
        </div>


        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          disabled={!selectedBranch || !selectedYear}
        >
          <BookOpen className="w-4 h-4" />
          Continue to Subjects
        </button>
      </div>
    </div>
  )
}