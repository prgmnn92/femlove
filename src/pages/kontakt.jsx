import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import ContactForm from "@/components/forms/ContactForm";
import Layout from "@/components/Layout";
import Banner from "@/components/sections/Banner";

const Kontakt = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <Banner
        title="Schreibe mir eine Nachricht"
        subtitle="Kontakt"
        text="Fragen? Wünsche? Feedback? Anfragen? Was auch immer du loswerden möchtest: Hier ist Platz für deine Nachricht"
      />
      <ContactForm />
    </Layout>
  );
};

export async function getStaticProps() {
  const configs = await sanityClient.fetch(configQuery);
  const siteConfig =
    configs.find((config) => config.url == "https://femlove.blog/kontakt") ||
    configs[0];
  return {
    props: {
      siteConfig: { ...siteConfig },
    },
  };
}

export default Kontakt;
