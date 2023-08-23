import React from "react";

import { josefineSans, sourceSerif } from "@/fonts";

const Heading = ({ title, subtitle }) => {
  return (
    <div className="flex flex-row items-end pb-4 lg:pb-8">
      <div className="h-[1px] lg:w-[80px] w-[40px] mr-4 bg-black mb-4"></div>
      <div>
        <p
          style={josefineSans.style}
          className="text-xs font-light uppercase lg:text-sm"
        >
          {subtitle}
        </p>
        <h2
          style={sourceSerif.style}
          className="text-2xl font-light lg:text-4xl"
        >
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Heading;
