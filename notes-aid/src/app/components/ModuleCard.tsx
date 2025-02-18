
import React from "react";
import { ChevronDown } from "lucide-react";

interface ModuleCardProps {
    module: number;
    topics: number;
    isActive: boolean;
    onClick: () => void;
  }

const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  topics,
  isActive,
  onClick,
}) => (
  <div
    onClick={onClick}
    className={`mb:p-4 p-2 rounded-lg border transition-all cursor-pointer flex flex-row lg:flex-col justify-between gap-2
      ${
        isActive
          ? "border-blue-500 bg-blue-50"
          : "border-slate-200 hover:border-blue-200"
      }
    `}
  >
    <div className="flex justify-between items-center mb-2  ">
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

export default ModuleCard;