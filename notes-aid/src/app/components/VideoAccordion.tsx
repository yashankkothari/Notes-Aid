import React, { useState, useRef, useEffect } from "react";
import Video from "./Video";

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

  const [checked, setChecked] = useState<boolean[]>(videos.map(() => false));

  useEffect(() => {
    setChecked(videos.map(() => false));
  }, [videos]);

 


  return (
    <div className="space-y-2 pl-4">
      {videos.map((video, index) => (
        <div
          key={index}
          className="border dark:border-gray-700 rounded-lg dark:hover:bg-gray-700 justify-center overflow-hidden bg-white dark:bg-gray-800 p-2 w-full flex flex-col"
        >
          <Video
            checked={checked[index]}
            setChecked={(value) => {
              const newChecked = [...checked];
              newChecked[index] = typeof value === "function" ? value(newChecked[index]) : value;
              setChecked(newChecked);

             
              
            }}
            toggleVideo={toggleVideo}
            openVideoIndex={openVideoIndex}
            index={index}
            video={video}
            videoRefs={videoRefs}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoAccordion;
