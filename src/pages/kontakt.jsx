import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";

const Kontakt = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <section>
        <Container>
          <ContactForm />
        </Container>
      </section>
      <CTA />
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
