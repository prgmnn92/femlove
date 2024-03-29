import React from "react";

const Input = (props) => {
  return (
    <input
      {...props}
      className={
        "w-full bg-white bg-opacity-70 rounded border border-gray-300 focus:border-[#EBE9E5] focus:bg-transparent focus:ring-2 focus:ring-[#EBE9E5] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out " +
        props.className
      }
    />
  );
};

export default Input;
