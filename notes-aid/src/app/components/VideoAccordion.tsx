import { ChevronDown } from "lucide-react";
import React, { useState, useRef } from "react";
import { CheckSquare, Square } from "lucide-react";

const VideoAccordion: React.FC<{
  videos: { title: string; url: string }[];
}> = ({ videos }) => {
  const [openVideoIndex, setOpenVideoIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLIFrameElement | null)[]>([]);

  const toggleVideo = (index: number) => {
    if (openVideoIndex !== null && videoRefs.current[openVideoIndex]) {
      videoRefs.current[openVideoIndex]?.contentWindow?.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        "*"
      );
    }
    setOpenVideoIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-2 pl-4">
      {videos.map((video, index) => (
        <div
          key={index}
          className="border dark:border-gray-700 rounded-lg dark:hover:bg-gray-700 justify-center overflow-hidden bg-white dark:bg-gray-800 p-2 w-full flex flex-col  "
        >
          <div className="flex items-center gap-2">
            <button onClick={() => setChecked(!checked)} className="w-6 h-6">
              {checked ? (
                <CheckSquare className="text-blue-600" />
              ) : (
                <Square className="text-gray-400" />
              )}
            </button>

            <div
              onClick={() => toggleVideo(index)}
              className="p-2 cursor-pointer hover:bg-slate-50 dark:hover:bg-gray-700 flex justify-between items-center flex-1 gap-2"
            >
              <span className="text-sm font-medium text-black dark:text-white">
                {video.title}
              </span>
              <ChevronDown
                className={`w-4 h-4 text-slate-500 dark:text-slate-400 transition-transform duration-200 ${
                  openVideoIndex === index ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
          <div
            className={`overflow-hidden transition-all duration-200 ease-in-out  ${
              openVideoIndex === index
                ? "opacity-100 max-h-[900px]"
                : "max-h-0 opacity-0"
            }`}
          >
            {openVideoIndex === index && (
              <div className="p-2">
                <div className="aspect-video">
                  <iframe
                    ref={(el) => {
                      videoRefs.current[index] = el;
                    }}
                    width="100%"
                    height="100%"
                    src={`${video.url}?enablejsapi=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoAccordion;
