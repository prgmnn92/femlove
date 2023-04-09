import React, { lazy, useState } from "react";

import { motion } from "framer-motion";

// import Button from "./Button";
import Container from "./Container";
import CTAForm from "./convertkit/CTAForm";

const CTA = () => {
  return (
    <section>
      <Container className="px-5 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="flex flex-col w-full mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-medium text-gray-900 sm:text-3xl title-font">
            Femlove Newsletter
          </h2>
          <p className="mx-auto text-base leading-relaxed lg:w-2/3">
            Tipps & News direkt in deinem Postfach.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex flex-col w-full px-8 mx-auto space-y-4 lg:w-2/3 sm:space-y-0 sm:px-0"
        >
          <CTAForm />
        </motion.div>
      </Container>
    </section>
  );
};

export default CTA;
