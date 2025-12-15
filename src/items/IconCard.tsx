import React from "react";

export interface IconCardProps {
  label: string;
  body: React.ReactNode;
  icon: string;
}

const IconCard = ({ label, body, icon }: IconCardProps) => {
  return (
    <div className="reveal-up flex h-100 w-112.5 flex-col gap-3 text-center max-md:w-[320px]">
      <div className="border-gradient h-50 w-full overflow-hidden max-md:h-37.5">
        <div className="flex h-full w-full place-content-center place-items-end p-2">
          <i
            className={`bi ${icon} text-7xl text-gray-200 max-md:text-5xl`}
          ></i>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-2">
        <h3 className="mt-8 text-2xl font-normal max-md:text-xl">{label}</h3>
        <div className="text-gray-300">{body}</div>
      </div>
    </div>
  );
};

export default IconCard;
