import React from "react";

export interface ColouredIconCardProps {
  label: string;
  body: React.ReactNode;
  icon: string;
}

const ColouredIconCard = ({ label, body, icon }: ColouredIconCardProps) => {
  return (
    <div className="reveal-up flex h-50 w-112.5 gap-8 rounded-xl border border-outlineColor bg-secondary p-8 max-md:w-[320px]">
      <div className="text-4xl max-md:text-2xl">
        <i className={`bi ${icon}`}></i>
      </div>

      <div className="flex flex-col gap-4">
        <h3 className="text-2xl max-md:text-xl">{label}</h3>
        <p className="text-gray-300 max-md:text-sm">{body}</p>
      </div>
    </div>
  );
};

export default ColouredIconCard;
