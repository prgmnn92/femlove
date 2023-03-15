"use client";
import React from "react";

import { usePreview } from "@lib/sanity";
import Link from "next/link";

import BlogPost from "./BlogPost";

const PreviewBlogPost = ({ query, queryParams }) => {
  const post = usePreview(null, query, queryParams);

  return (
    <>
      <BlogPost post={post} />
      <Link
        className="fixed bottom-0 right-0 p-6 font-bold text-white bg-blue-500"
        href="/api/exit-preview"
      >
        Exit Preview
      </Link>
    </>
  );
};

export default PreviewBlogPost;
