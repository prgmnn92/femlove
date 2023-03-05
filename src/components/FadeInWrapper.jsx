import React, { useRef } from "react";

import { motion, useInView } from "framer-motion";

const FadeInWrapper = (props) => {
  const { children, delay, className, ...propsLeft } = props;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView && { opacity: 1 }}
      transition={{ duration: 0.2, delay: delay }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
