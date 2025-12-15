import React from "react";

export interface IconTextProps {
  icon: string;
  label: string;
  body: React.ReactNode;
}

const IconText = ({ icon, label, body }: IconTextProps) => {
  return (
    <div className="mt-4 flex flex-col gap-3">
      <h4 className="text-xl font-medium">
        <i className={`bi ${icon} text-2xl!`}></i> {label}
      </h4>
      <span className="text-lg text-gray-300 max-md:text-base">{body}</span>
    </div>
  );
};

export default IconText;
