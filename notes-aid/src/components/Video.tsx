"use client";
import React from "react";
import { RefObject, Dispatch, SetStateAction } from "react";
import { CheckSquare, Square, ChevronDown } from "lucide-react";

interface VideoProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
  toggleVideo: (index: number) => void;
  openVideoIndex: number | null;
  index: number;
  video: { title: string; url: string };
  videoRefs: RefObject<(HTMLIFrameElement | null)[]>;
  videoKey: string;
  updateVideoProgress: (
    moduleIndex: string,
    videoIndex: string,
    topicName: string
  ) => void;
  moduleKey: string;
  topicKey: string;
  subjectName: string;
}

function Video({
  toggleVideo,
  openVideoIndex,
  index,
  video,
  videoRefs,
  videoKey,
  updateVideoProgress,
  moduleKey,
  topicKey,
  subjectName,
}: VideoProps) {
  // console.log(videoKey)

  const storedProgress = typeof window !== 'undefined' ? localStorage.getItem(subjectName + "-progress") : null;
  const progressData = storedProgress ? JSON.parse(storedProgress): { completeVideos: {} };

  const key = `${subjectName}-module${moduleKey}-topic${topicKey}-video${videoKey}`;
  const isCompleted = progressData.completeVideos[key] === true;



  return (
    <>
      <div className="flex items-center gap-2">
        <button
          onClick={() => {
            updateVideoProgress(moduleKey, videoKey, topicKey);
            // setChecked((prev) => !prev);
          }}
          className="w-6 h-6"
        >
          {isCompleted ? (
            <CheckSquare className="text-blue-500" />
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
    </>
  );
}

export default Video;
