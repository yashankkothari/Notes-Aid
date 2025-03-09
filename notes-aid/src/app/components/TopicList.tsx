import React, {  useEffect, useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import VideoAccordion from "./VideoAccordion";
import ProgressBar from "./ProgressBar";
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

interface TopicListProps {
  topics: Topic[];
  notesLink: string[];
  moduleNumber: number;
}

const TopicList: React.FC<TopicListProps> = ({
  topics,
  notesLink,
  moduleNumber,
}) => {
  const [openTopicIndex, setOpenTopicIndex] = useState<number | null>(null);
  // const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({});

  const toggleTopic = (index: number) => {
    setOpenTopicIndex(openTopicIndex === index ? null : index);
    // setDone((x)=>x+10);
  };

  useEffect(() => {
    setOpenTopicIndex(null);
  }, [topics]);

  if (!topics || topics.length === 0) {
    return (
      <div className="p-4 text-center bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700">
        <p className="text-slate-500 dark:text-slate-400">
          No topics available
        </p>
      </div>
    );
  }
  // const total = 100; 
  // const [done, setDone] = useState(70);
  


  return (
    <div className="space-y-3">
      {Object.keys(notesLink).length > 0 && (
        <h5 className="text-sm font-medium text-black dark:text-white mb-2">
          Study Materials for Module {moduleNumber}
        </h5>
      )}
      <div className="flex flex-wrap gap-2">
      {notesLink.map((note: string, noteIndex: number) => (
        <React.Fragment key={`note-${noteIndex}`}>
          <a
            key={noteIndex}
            href={note}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Notes {noteIndex + 1}
          </a>
        </React.Fragment>
        
      ))}
      </div>
      
      {Object.keys(topics).length>0 && <h5 className="text-sm font-medium text-black dark:text-white my-2">Videos</h5>}
      {Object.keys(topics).length>0 && topics.map((topic, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 overflow-hidden"
        >
            <ProgressBar total={topic.videos?.length ?? 0} completed={1}  />
          <div
            onClick={() => toggleTopic(index)}
            className="p-3 cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-700 transition-colors"
          >
             
            <div className="flex items-start gap-3">
              <div className="p-2 bg-blue-50 dark:bg-blue-900 rounded">
                <BookOpen className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-sm text-black dark:text-white">
                    {topic.title}
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                      openTopicIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
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
              {topic.videos && topic.videos.length > 0 ? (
                <div className="mt-3 border-t dark:border-gray-700 pt-3">
                  <h5 className="text-sm font-medium text-black dark:text-white mb-2">
                    Lecture Videos
                  </h5>
                  <VideoAccordion videos={topic.videos} />
                </div>
              ):(
                <div className="mt-3 border-t dark:border-gray-700 pt-3">
                  <h5 className="text-sm font-medium text-black dark:text-white mb-2">
                    No videos available, We will update soon, Till then refer the notes
                  </h5>
                </div>
              )}

             

              {topic.notes && topic.notes.length > 0 && (
                <div className="mt-3 border-t dark:border-gray-700 pt-3">
                  <h5 className="text-sm font-medium text-black dark:text-white mb-2">
                    Study Materials
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {topic.notes.map((note, noteIndex) => (
                      <a
                        key={noteIndex}
                        href={note.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors"
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

export default TopicList;
