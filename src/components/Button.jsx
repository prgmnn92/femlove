import React from "react";

const Button = ({ children, className }) => {
  return (
    <button className={`rounded-full font-semibold px-7 py-2 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
