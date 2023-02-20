import React from "react";

const HeadingH1 = ({ children }) => {
  return (
    <h1 className="max-w-md mb-4 text-4xl tracking-tight leading-none md:text-5xl xl:text-6xl text-center mx-auto lg:py-16 pt-16">
      {children}
    </h1>
  );
};

export default HeadingH1;
