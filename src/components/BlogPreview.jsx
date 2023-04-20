import React from "react";

import Image from "next/image";
import Link from "next/link";

import BlogCard from "./BlogCard";
import BlogList from "./BlogList";
import Button from "./Button";
import Container from "./Container";

const BlogPreview = ({ posts }) => {
  posts = posts
    .sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b._createdAt) - new Date(a._createdAt);
    })
    .slice(0, 3);

  return (
    <section>
      <Container className="px-5 py-24 ">
        <h2 className="pb-0 mb-2 text-3xl font-bold text-gray-900 lg:text-center lg:pb-4 lg:text-4xl title-font">
          Aktuelle Beiträge
        </h2>
        <BlogList posts={posts} />
        <div className="flex pt-4 lg:justify-center">
          <Link href={"/blog"}>
            <Button isSecondary>Alle Beiträge</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
