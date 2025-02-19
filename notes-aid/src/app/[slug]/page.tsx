"use client";
import React, { useState } from "react";
import { useParams,useSearchParams } from "next/navigation";
import ModuleCard from "../components/ModuleCard";
import TopicList from "../components/TopicList";
import NotesData from "../notes/data";


const EngineeringCurriculum: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>("ds");
  const [selectedModule, setSelectedModule] = useState<number>(1);
  const { slug } = useParams<{ slug: string }>();
  const searchParam = useSearchParams();
  const branch = searchParam.get("branch") || "";
  const sem = searchParam.get("sem") || "";

  console.log(branch,sem);

  const subjects = (NotesData as any)[slug]?.[branch]?.[sem];


  // const subjects = NotesData.fy.comps.oddSem;

  if (!subjects || Object.keys(subjects).length === 0) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center bg-slate-50 p-4 md:p-6">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-sm p-6 text-center">
          <h2 className="text-lg md:text-2xl font-bold mb-4 text-black">
            No Subjects Found
          </h2>
          <p className="text-slate-600">
            It seems there are no subjects available for the selected curriculum. Will be added soon
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-sm p-4 md:p-6">
        <div className="mb-6 md:mb-8 text-center md:text-left">
          <h1 className="text-lg md:text-2xl font-bold mb-2 text-black">
            Engineering Curriculum of {branch.toUpperCase()} / {slug.toUpperCase()} / {sem.charAt(0).toUpperCase() + sem.slice(1)}
          </h1>
          <p className="text-slate-600">
            Explore subjects and their module-wise topics
          </p>
        </div>

   
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8">
          {Object.entries(subjects).map(([key, subject]) => {
            const Icon = (subject as any).icon;
            return (
              <div
                key={key}
                onClick={() => setSelectedSubject(key)}
                className={`p-4 rounded-lg border cursor-pointer transition-all flex-1 max-w-[120px] sm:max-w-[150px] md:max-w-none text-center 
                  ${
                    selectedSubject === key
                      ? "border-blue-500 bg-blue-50"
                      : "bg-blue-200 hover:border-blue-200"
                  }
                `}
              >
                <div className="flex items-center justify-center gap-2 mb-2 flex-col">
                  <Icon className="w-6 h-6 text-blue-500" />
                  <h3 className="font-medium text-black text-sm md:text-base">
                    {(subject as any).name}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 md:text-sm">5 modules</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="space-y-3">
            {Object.keys(subjects[selectedSubject].modules).map((moduleKey) => {
              const moduley = parseInt(moduleKey);
              return (
                <ModuleCard
                  key={moduley}
                  module={moduley}
                  topics={subjects[selectedSubject].modules[moduley].length}
                  isActive={selectedModule === moduley}
                  onClick={() => setSelectedModule(moduley)}
                />
              );
            })}
          </div>


          <div className="md:col-span-2 bg-slate-50 rounded-lg p-4 md:p-6">
            <h2 className="text-base md:text-lg font-bold mb-4 text-black">
              {subjects[selectedSubject].name} - Module {selectedModule}
            </h2>
            <TopicList
              topics={subjects[selectedSubject].modules[selectedModule]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringCurriculum;
