import React from "react";

const Button = ({ children, className, onClick, type }) => {
  return (
    <button
      type={type || "button"}
      onClick={onClick}
      className={`rounded-full font-semibold px-7 py-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
