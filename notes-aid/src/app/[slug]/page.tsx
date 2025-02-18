"use client";
import React, { useState } from "react";
import { ChevronDown, BookOpen } from "lucide-react";

import subjects from "../subjects/comps/subjects";

interface Topic {
  title: string;
  description: string;
  videos?: {
    title: string;
    url: string;
  }[];
  notes?: {
    title: string;
    url: string;
  }[];
}

interface ModuleCardProps {
  module: number;
  topics: number;
  isActive: boolean;
  onClick: () => void;
}

interface TopicListProps {
  topics: Topic[];
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
      <h3 className=" text-black font-bold">Module {module}</h3>
      <ChevronDown
        className={`w-4 h-4 transition-transform ${
          isActive ? "rotate-180" : ""
        }`}
      />
    </div>
    <p className="text-sm text-slate-600">{topics} topics</p>
  </div>
);

const VideoAccordion: React.FC<{
  videos: { title: string; url: string }[];
}> = ({ videos }) => {
  const [openVideoIndex, setOpenVideoIndex] = useState<number | null>(null);

  const toggleVideo = (index: number) => {
    setOpenVideoIndex(openVideoIndex === index ? null : index);
  };

  return (
    <div className="space-y-2 pl-4">
      {videos.map((video, index) => (
        <div key={index} className="border rounded-lg overflow-hidden bg-white">
          <div
            onClick={() => toggleVideo(index)}
            className="p-2 cursor-pointer hover:bg-slate-50 flex justify-between items-center"
          >
            <span className="text-sm font-medium text-black">
              {video.title}
            </span>
            <ChevronDown
              className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                openVideoIndex === index ? "rotate-180" : ""
              }`}
            />
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openVideoIndex === index ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-2">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const TopicList: React.FC<TopicListProps> = ({ topics }) => {
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);

  const toggleTopic = (index: number) => {
    setOpenTopicIndex(openTopicIndex === index ? null : index);
  };

  if (!topics || topics.length === 0) {
    return (
      <div className="p-4 text-center bg-white rounded-lg border">
        <p className="text-slate-500">No topics available</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {topics.map((topic, index) => (
        <div key={index} className="bg-white rounded-lg border overflow-hidden">
          <div
            onClick={() => toggleTopic(index)}
            className="p-3 cursor-pointer hover:bg-slate-50 transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 rounded">
                <BookOpen className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-sm text-black">
                    {topic.title}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      openTopicIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <p className="text-sm text-slate-500 mt-1">
                  {topic.description}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out ${
              openTopicIndex === index ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="p-3 pt-0">
              {topic.videos && topic.videos.length > 0 && (
                <div className="mt-3 border-t pt-3">
                  <h5 className="text-sm font-medium text-black mb-2">
                    Lecture Videos
                  </h5>
                  <VideoAccordion videos={topic.videos} />
                </div>
              )}

              {topic.notes && topic.notes.length > 0 && (
                <div className="mt-3 border-t pt-3">
                  <h5 className="text-sm font-medium text-black mb-2">
                    Study Materials
                  </h5>
                  <div className=" flex flex-wrap gap-2">
                    {topic.notes.map((note, noteIndex) => (
                      <a
                        key={noteIndex}
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium hover:bg-blue-100 transition-colors"
                      >
                        <BookOpen className="w-4 h-4" />
                        {note.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import { useParams } from "next/navigation";

const EngineeringCurriculum: React.FC = () => {

  const [selectedSubject, setSelectedSubject] = useState<string>("ds");
  const [selectedModule, setSelectedModule] = useState<number>(1);
  const { slug } = useParams();


 



  return (
    <div className="w-full min-h-screen bg-slate-50 p-4 md:p-6">
      <div className="max-w-full mx-auto bg-white rounded-lg shadow-sm p-4 md:p-6">
        <div className="mb-6 md:mb-8">

          <h1 className="text-xl md:text-2xl font-bold mb-2 text-black">
            Engineering Curriculum of {slug}
          </h1>
          <p className="text-slate-600">
            Explore subjects and their module-wise topics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
          {Object.entries(subjects).map(([key, subject]) => {
            const Icon = subject.icon;
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
                  <h3 className="font-medium text-black">{subject.name}</h3>
                </div>
                <p className="text-sm text-slate-500">5 modules</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
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

          <div className="lg:col-span-2 bg-slate-50 rounded-lg p-4 md:p-6">
            <h2 className="text-lg font-bold mb-4 text-black">
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
