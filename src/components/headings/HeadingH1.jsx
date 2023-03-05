import React from "react";

import { motion } from "framer-motion";

const HeadingH1 = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.05 }}
    >
      <h1 className="max-w-md py-6 mx-auto mb-4 text-4xl leading-none tracking-tight text-center md:text-5xl xl:text-6xl ">
        {children}
      </h1>
    </motion.div>
  );
};

export default HeadingH1;
