import React from "react";

const H1 = ({ children }) => {
  return (
    <>
      <h1 className="max-w-md py-6 mx-auto mb-4 text-4xl leading-none tracking-tight text-center md:text-5xl xl:text-6xl ">
        {children}
      </h1>
    </>
  );
};

export default H1;
