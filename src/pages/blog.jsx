import React, { useState, Fragment, lazy } from "react";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { configQuery, postqueryBlogs } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import classNames from "classnames";
import { motion } from "framer-motion";

import BlogList from "@/components/BlogList";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import PreviewSuspense from "@/components/PreviewSuspense";

const PreviewBlogList = lazy(() => import("@/components/PreviewBlogList"));

const Blog = ({ posts, siteConfig, preview }) => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchPhrase, setSearchPhrase] = useState("");
  const filters = [
    "Alle Beiträge", // First element will always set categoryFilter to  = ""
    "Weiblicher Zyklus",
    "Menstruation",
    "Ernährung",
    "Hormonfreie Verhütung",
    "Sonstiges",
  ];

  return (
    <Layout {...siteConfig}>
      <Container className="px-4 py-8 lg:py-12">
        <HeadingH1>Alle Beiträge</HeadingH1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          delay={0.1}
          className="my-2"
        >
          <Input
            value={searchPhrase}
            onChange={(e) => setSearchPhrase(e.target.value)}
            placeholder="Search..."
            className="max-w-sm"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          delay={0.1}
          className="flex-wrap hidden pb-8 md:flex"
        >
          {filters?.map((item) => {
            let isActive = categoryFilter == item;
            // Set all to active if nothing is selected
            if (!categoryFilter && item === filters[0]) isActive = true;
            return (
              <div
                className={classNames({
                  "p-2 mr-4 cursor-pointer transition-all": true,
                  "bg-f-red text-white rounded-full": isActive,
                })}
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          delay={0.1}
          className="block pb-8 md:hidden"
        >
          <FilterDropdown
            filters={filters}
            handleCategoryFilter={setCategoryFilter}
            categoryFilter={categoryFilter}
          />
        </motion.div>
        {preview ? (
          <PreviewSuspense fallback="Loading...">
            <PreviewBlogList
              query={postqueryBlogs}
              categoryFilter={categoryFilter}
              searchPhrase={searchPhrase}
            />
          </PreviewSuspense>
        ) : (
          <BlogList
            posts={posts}
            categoryFilter={categoryFilter}
            searchPhrase={searchPhrase}
          />
        )}
      </Container>
      <CTA />
    </Layout>
  );
};

function FilterDropdown({ filters, handleCategoryFilter, categoryFilter }) {
  return (
    <div className="relative z-5">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white rounded-md bg-f-green hover:bg-opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            Kategorien
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              {filters.map((filterItem) => {
                let isActive = categoryFilter == filterItem;
                // Set all to active if nothing is selected
                if (!categoryFilter && filterItem === filters[0])
                  isActive = true;
                return (
                  <Menu.Item key={filterItem}>
                    {({ active }) => (
                      <button
                        onClick={() => {
                          if (filterItem === filters[0]) {
                            handleCategoryFilter("");
                            return;
                          }
                          handleCategoryFilter(filterItem);
                        }}
                        className={`${
                          active ? "bg-f-green text-white" : "text-gray-900"
                        } ${
                          isActive ? "bg-f-green text-white" : ""
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        {filterItem}
                      </button>
                    )}
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export async function getStaticProps({ preview }) {
  if (preview) {
    return { props: { preview } };
  }

  const posts = await sanityClient.fetch(postqueryBlogs);
  const config = await sanityClient.fetch(configQuery);

  return {
    props: {
      siteConfig: { ...config },
      posts,
    },
  };
}

export default Blog;
