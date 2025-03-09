
import { useState, useEffect } from "react";
import NotesData from "../notes/data";
import { Subjects } from "../interfaces/Subject";

interface ProgressData {
    completeVideos: {
        [key: string]: boolean;
    };
    moduleProgress: {
        [key: string]: number;
    };
    topicProgress: {
        [key: string]: number;
    };
    subjectProgress: number;
}

const useProgress=(subjectName:string,subjectSchema:Subjects)=>{
    const key=subjectName+"-progress";

    
    
    const [progressData,setProgressData]=useState({
        completeVideos:{},
        moduleProgress:{},
        topicProgress:{},
        subjectProgress:0
    })

    useEffect(() => {
        const storedProgress = localStorage.getItem(key);
        if (storedProgress) {
          try {
            setProgressData(JSON.parse(storedProgress));
          } catch {
            console.error("Failed to parse stored progress data");
          }
        }
      }, [key]);

      const updateModuleProgress = (moduleIndex: string, instruction:string) => {
        if(instruction==="add")
        {
            const newProgressData = {
                ...progressData,
                moduleProgress: {
                  ...progressData.moduleProgress,
                  [moduleIndex]: (progressData.moduleProgress[moduleIndex] || 0) + 1,
                },
              };
              setProgressData(newProgressData);
              localStorage.setItem(key, JSON.stringify(newProgressData));
        }
        else
        {
            const newProgressData = {
                ...progressData,
                moduleProgress: {
                  ...progressData.moduleProgress,
                  [moduleIndex]: (progressData.moduleProgress[moduleIndex] || 0) - 1,
                },
              };
              setProgressData(newProgressData);
              localStorage.setItem(key, JSON.stringify(newProgressData));
        }
      }

      const updateTopicProgress = (moduleIndex: string, topicName: string, instruction:string) => {
        const topicKey=`${subjectName}-module${moduleIndex}-topic${topicName}`;

        if(instruction==="add")
        {
            const newProgressData = {
                ...progressData,
                topicProgress: {
                  ...progressData.topicProgress,
                  [topicKey]: (progressData.topicProgress[topicKey] || 0) + 1,
                },
              };
              setProgressData(newProgressData);
              localStorage.setItem(key, JSON.stringify(newProgressData));
        }
        else
        {
            const newProgressData = {
                ...progressData,
                topicProgress: {
                  ...progressData.topicProgress,
                  [topicKey]: (progressData.topicProgress[topicKey] || 0) - 1,
                },
              };
              setProgressData(newProgressData);
              localStorage.setItem(key, JSON.stringify(newProgressData));
        }


      }

      const updateVideoProgress = (moduleIndex: string, videoIndex: string ,topicName:string) => {
        const videoKey=`${subjectName}-module${moduleIndex}-topic${topicName}-video${videoIndex}`;

        if(!(videoKey in progressData.completeVideos)){

            const newProgressData = {
                ...progressData,
                completeVideos: {
                  ...progressData.completeVideos,
                  [videoKey]: true,
                },
              };
              setProgressData(newProgressData);
              localStorage.setItem(key, JSON.stringify(newProgressData));
              updateModuleProgress(moduleIndex,"add");
              updateTopicProgress(moduleIndex,topicName,"add");
                updateSubjectProgress("add");
        }
        else
        {
            const newProgressData = {
                ...progressData,
                completeVideos: {
                  ...progressData.completeVideos,
                  [videoKey]: false,
                },
              };
              setProgressData(newProgressData);
              localStorage.setItem(key, JSON.stringify(newProgressData));
              updateModuleProgress(moduleIndex,"sub");
              updateTopicProgress(moduleIndex,topicName,"sub");
              updateSubjectProgress("sub");

        } 

     
      
      }

        const updateSubjectProgress = (instruction:string) => {
            if(instruction==="add")
            {
                const newProgressData = {
                    ...progressData,
                    subjectProgress: progressData.subjectProgress + 1,
                };
                setProgressData(newProgressData);
                localStorage.setItem(key, JSON.stringify(newProgressData));
            }
            else
            {
                const newProgressData = {
                    ...progressData,
                    subjectProgress: progressData.subjectProgress - 1,
                };
                setProgressData(newProgressData);
                localStorage.setItem(key, JSON.stringify(newProgressData));
            }
        }



        const resetProgress = () => {
            setProgressData({
              completeVideos: {},
              moduleProgress: {},
              topicProgress: {},
              subjectProgress: 0,
            });
            localStorage.removeItem(key);
          };

            return {
                progressData,
                updateVideoProgress,
                resetProgress,
            };

            

}
