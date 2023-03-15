import React from "react";

import { motion } from "framer-motion";

import BlogCard from "@/components/BlogCard";

const BlogList = ({ posts, categoryFilter, searchPhrase }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.2, delay: 0.15 }}
      delay={0.1}
      className="flex flex-wrap mt-4 mb-10 sm:my-4"
    >
      {posts
        .filter((post) => {
          let categorieList = post.categories.reduce((acc, item, index) => {
            acc.push(item.title);
            return acc;
          }, []);

          return categoryFilter ? categorieList.includes(categoryFilter) : true;
        })
        .filter((post) => {
          if (!searchPhrase) return true;
          if (post.title.toLowerCase().includes(searchPhrase.toLowerCase()))
            return true;
          if (
            post.shortDescription
              .toLowerCase()
              .includes(searchPhrase.toLowerCase())
          )
            return true;
          return false;
        })
        .map((post) => (
          <BlogCard
            key={post._id}
            post={post}
            className="mb-6 md:w-1/3 sm:mb-0"
            category={post.categories}
          />
        ))}
    </motion.div>
  );
};

export default BlogList;
