import React from "react";

const Button = ({ title, small, isSecondary, onClick, type = "button" }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`relative  duration-300 rounded-[14px] transition-all focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  cursor-pointer 
      ${small ? "px-3 py-1 text-xs" : "px-5 py-2 text-sm"}
      ${
        isSecondary
          ? "text-black  bg-white hover:text-white hover:bg-f-brown"
          : "text-white bg-f-brown hover:text-black hover:bg-white"
      }
      
      `}
    >
      {title}
    </button>
  );
};

export default Button;
