/* eslint-disable react/no-unescaped-entities */

import { configQuery, homeContentQuery, postqueryHome } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

// import ModalForm from "@/components/forms/ModalForm";
import Layout from "@/components/Layout";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import InTouch from "@/components/sections/InTouch";
import Posts from "@/components/sections/Posts";
import Products from "@/components/sections/Products";

export default function Home({ posts, siteConfig, homeContent }) {
  const {
    hero_h1: heroHeading,
    hero_paragraph: heroParagraph,
    about_text: aboutText,
  } = homeContent;
  return (
    <>
      <Layout {...siteConfig}>
        <Hero heading={heroHeading} text={heroParagraph} />
        <Posts posts={posts} />
        <About text={aboutText} />
        <Products />
        <InTouch />
        {/* <ModalForm /> */}
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postqueryHome);
  const homeContent = await sanityClient.fetch(homeContentQuery);
  const configs = await sanityClient.fetch(configQuery);
  const siteConfig =
    configs.find((config) => config.url == "https://femlove.blog/") ||
    configs[0];

  return {
    props: {
      siteConfig: { ...siteConfig },
      posts,
      homeContent,
    },
    revalidate: 120,
  };
}
