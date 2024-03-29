import React, { useState } from "react";

import { categoryQuery, configQuery, postqueryBlogs } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import CategoryFilter from "@/components/blog/CategoryFilter";
import PostList from "@/components/blog/PostList";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import Banner from "@/components/sections/Banner";

const Blog = ({ posts, categories, siteConfig, preview }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const filters = ["Alle Beiträge", ...categories.map((item) => item.title)];

  return (
    <Layout {...siteConfig}>
      <Banner
        title={"Femlove-Blog"}
        subtitle={"Das Herzstück"}
        text={"Hier findest du alle meine Beiträge."}
      />
      <section className="py-16 mt-[-64px] bg-[#F4F4F4] px-4 rounded-[56px] relative z-20">
        <div className="container mx-auto ">
          <div className="flex">
            <div className="mr-6">
              <div className="block text-sm font-medium leading-6 text-gray-900">
                Suche
              </div>
              <div className="mt-2">
                <Input
                  value={searchPhrase}
                  onChange={(e) => setSearchPhrase(e.target.value)}
                  className="max-w-sm"
                />
              </div>
            </div>
            <div>
              <CategoryFilter
                categories={filters}
                setCategoryFilter={setCategoryFilter}
              />
            </div>
          </div>
          <PostList
            posts={posts}
            categoryFilter={categoryFilter}
            searchPhrase={searchPhrase}
          />
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ preview }) {
  if (preview) {
    return { props: { preview } };
  }

  const posts = await sanityClient.fetch(postqueryBlogs);
  const categories = await sanityClient.fetch(categoryQuery);
  const configs = await sanityClient.fetch(configQuery);
  const siteConfig =
    configs.find((config) => config.url == "https://femlove.blog/blog") ||
    configs[0];

  return {
    props: {
      siteConfig: { ...siteConfig },
      posts,
      categories,
    },
    revalidate: 60,
  };
}

export default Blog;
