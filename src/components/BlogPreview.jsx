import React from "react";

import { getCategoriesTitle } from "@utils/getCategoriesTitle";
import { motion } from "framer-motion";

import BlogCard from "./BlogCard";
import Container from "./Container";

const BlogPreview = ({ posts, categories }) => {
  return (
    <section>
      <Container className="px-5 py-24 ">
        <div className="flex flex-col ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            viewport={{ once: true }}
            className="h-1 overflow-hidden rounded bg-opacity-20 bg-f-green"
          >
            <div className="w-24 h-full bg-f-green"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row"
          >
            <h2 className="mb-2 text-2xl font-medium text-gray-900 sm:w-2/5 title-font sm:mb-0">
              Aktuelle Beiträge
            </h2>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
              In meinen Beiträgen dreht es sich um den Zyklus, Gesundheit und
              Selbstakzeptanz. Ich glaube, dass es wichtig ist, unseren Körper
              und dessen Funktionen zu verstehen und uns selbst zu lieben. Ich
              möchte dich ermutigen, stolz auf deinen Körper und deinen Zyklus
              zu sein und zu lernen, dich selbst zu akzeptieren. Gemeinsam
              können wir eine gesündere und selbstbewusstere Gesellschaft
              erschaffen.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex flex-wrap items-stretch mx-4 mt-4 mb-10 sm:-m-4"
        >
          {posts
            .sort(function (a, b) {
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(b._createdAt) - new Date(a._createdAt);
            })
            .slice(0, 3)
            .map((post) => (
              <BlogCard
                key={post._id}
                post={post}
                className="mb-6 md:w-1/3 sm:mb-0"
                category={getCategoriesTitle(categories, post.categories)}
              />
            ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default BlogPreview;
