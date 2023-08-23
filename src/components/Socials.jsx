import React from "react";

import InstagramIcon from "./icons/InstagramIcon";
import PinterestIcon from "./icons/PinterestIcon";

const Socials = () => {
  return (
    <div className="flex flex-row gap-2">
      <InstagramIcon />
      <PinterestIcon />
    </div>
  );
};

export default Socials;
