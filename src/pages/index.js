/* eslint-disable react/no-unescaped-entities */

import { configQuery, postqueryHome } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import ModalForm from "@/components/forms/ModalForm";
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import InTouch from "@/components/sections/InTouch";
import Posts from "@/components/sections/Posts";
import Products from "@/components/sections/Products";

export default function Home({ posts, siteConfig }) {
  return (
    <>
      <Layout {...siteConfig}>
        <Hero />
        <Posts posts={posts} />
        <About />
        <Products />
        <InTouch />
        <ModalForm />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postqueryHome);
  const config = await sanityClient.fetch(configQuery);

  return {
    props: {
      siteConfig: { ...config },
      posts,
    },
  };
}
