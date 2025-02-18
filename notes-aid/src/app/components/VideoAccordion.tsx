
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

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

export default VideoAccordion;