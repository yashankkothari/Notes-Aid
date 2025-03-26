import React from "react";

interface ProgressBarProps {
  total: number;
  completed: number;
}

export default function ProgressBar({ total, completed }: ProgressBarProps) {
  const percentage = total > 0 ? (completed / total) * 100 : 0;

  return (
    <div className="w-full bg-gray-200 rounded-full h-1 overflow-hidden">
      <div
        className="h-full bg-blue-500 transition-all duration-500"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
}
