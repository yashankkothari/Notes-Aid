
import React, { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import VideoAccordion from "./VideoAccordion";

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
}


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

  export default TopicList;