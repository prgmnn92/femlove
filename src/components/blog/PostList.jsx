import React from "react";

import PostCard from "../PostCard";

const PostList = ({ posts, categoryFilter, searchPhrase }) => {
  let blogPosts = posts
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
        post.shortDescription.toLowerCase().includes(searchPhrase.toLowerCase())
      )
        return true;
      return false;
    });

  return (
    <div className="grid max-w-2xl grid-cols-1 mx-auto mt-16 gap-x-4 lg:gap-y-12 gap-y-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {blogPosts.map((post, idx) => (
        <PostCard
          index={idx}
          key={post._id}
          post={post}
          category={post.categories}
        />
      ))}
    </div>
  );
};

export default PostList;
