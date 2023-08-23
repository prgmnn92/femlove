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

export async function getStaticProps({ params, preview = false }) {
  const config = await sanityClient.fetch(configQuery);
  return {
    props: {
      siteConfig: { ...config },
      preview,
    },
    revalidate: 100,
  };
}

export default Kontakt;
