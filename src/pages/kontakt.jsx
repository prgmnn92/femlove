import React from "react";

import { configQuery } from "@lib/groq";
import { sanityClient } from "@lib/sanity";

import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";

const Kontakt = ({ siteConfig }) => {
  return (
    <Layout {...siteConfig}>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Schreibe mir eine Nachricht</HeadingH1>
        </Container>
      </section>
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
      siteconfig: { ...config },
      preview,
    },
    revalidate: 100,
  };
}

export default Kontakt;
