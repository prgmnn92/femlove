import React from "react";

import { usePreview } from "@lib/sanity";
import Link from "next/link";

import BlogList from "./BlogList";

const PreviewBlogList = ({ query, categoryFilter, searchPhrase }) => {
  const posts = usePreview(null, query);

  return (
    <>
      <BlogList
        posts={posts}
        categoryFilter={categoryFilter}
        searchPhrase={searchPhrase}
      />
      <Link
        className="fixed bottom-0 right-0 p-6 font-bold text-white bg-blue-500"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

export default PreviewBlogList;
