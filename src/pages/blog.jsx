import BlogCard from "@/components/BlogCard";
import Container from "@/components/Container";
import HeadingH1 from "@/components/headings/HeadingH1";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import React, { useState } from "react";
import { sanityClient } from "../../lib/sanity";

const Blog = ({ posts }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const filters = [
    "Alle Beiträge", // First element will always set categoryFilter to  = ""
    "Weiblicher Zyklus",
    "Menstruation",
    "Ernährung",
    "Hormonfreie Verhütung",
  ];

  return (
    <Layout>
      <Container className="px-4 py-8 lg:py-16">
        <HeadingH1>Alle Beiträge</HeadingH1>
        <div className="my-2">
          <Input
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
            placeholder="Search..."
            className="max-w-sm"
          />
        </div>
        <div className="flex pb-8">
          {filters?.map((item) => {
            return (
              <div
                className="p-2 mr-4 cursor-pointer"
                key={item}
                onClick={() => {
                  if (item === filters[0]) {
                    setCategoryFilter("");
                    return;
                  }
                  setCategoryFilter(item);
                }}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {posts.map((post) => (
            <BlogCard
              key={post._id}
              post={post}
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            />
          ))}

          {/* <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" /> */}
        </div>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
