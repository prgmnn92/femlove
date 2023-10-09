import React from "react";

import Link from "next/link";

import Heading from "../Heading";
import Slider from "../Slider";

const Posts = ({ posts }) => {
  return (
    <section id="blog" className="py-32 mt-[-64px] bg-[#F4F4F4] px-4">
      <div className="container relative z-10 mx-auto">
        <Heading title="Beliebteste Beiträge" subtitle="on the blog" />
        {/* BLOG POSTS  */}
        <div>
          <Slider posts={posts} />
        </div>
        <div className="flex justify-center w-full pt-4">
          <Link
            className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
            href="/blog"
            aria-label="zu meinem blog"
          >
            Alle Beiträge
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Posts;
