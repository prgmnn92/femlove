import React from "react";

import BlogCard from "@/components/blog/BlogCard";

const BlogList = ({ posts, categoryFilter, searchPhrase }) => {
  return (
    <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
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
        .map((post, idx) => (
          <BlogCard
            index={idx}
            key={post._id}
            post={post}
            className="mb-6 md:w-1/3 sm:mb-4"
            category={post.categories}
          />
        ))}
    </div>
  );
};

export default BlogList;
