import React from "react";

const InstagramIcon = () => {
  return (
    <a
      aria-label="Link to instagram account of femlove"
      href={"https://www.instagram.com/franziska.pargmann/"}
      target="_blank"
      rel="noreferrer"
      className="text-gray-700 "
    >
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-5 h-5"
        viewBox="0 0 24 24"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
      </svg>
    </a>
  );
};

export default InstagramIcon;
