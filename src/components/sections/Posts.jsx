import React from "react";

import Link from "next/link";

import Button from "../Button";
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
          <Link href={"/blog"}>
            <Button isSecondary title="Alle Beiträge" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Posts;
