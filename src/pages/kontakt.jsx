import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import ContactForm from "@/components/forms/ContactForm";
import Layout from "@/components/Layout";
import Banner from "@/components/sections/Banner";

const Kontakt = ({ siteConfig }) => {
  const contactConfig = {
    ...siteConfig,
    title: "Kontakt | Femlove - Zyklusbewusstsein x Selbstverwirklichung",
    description:
      "Fragen? Wünsche? Feedback? Anfragen? Was auch immer du loswerden möchtest: Hier ist Platz für deine Nachricht",
    url: siteConfig.url + "/kontakt",
  };

  return (
    <Layout {...contactConfig}>
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
  const config = await sanityClient.fetch(configQuery);
  return {
    props: {
      siteConfig: { ...config },
    },
  };
}

export default Kontakt;
