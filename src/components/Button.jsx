import React from "react";

const Button = ({ children, className, onClick, type, isSecondary }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`flex-none rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm hover:bg-f-red-light 
      focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-f-red transition-all ${className} ${
        isSecondary
          ? "bg-tranparent text-f-red border-f-red border-2 hover:text-white hover:border-f-red-light"
          : " bg-f-red text-white"
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
