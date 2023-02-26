import ContactForm from "@/components/ContactForm";
import Container from "@/components/Container";
import HeadingH1 from "@/components/headings/HeadingH1";
import Layout from "@/components/Layout";
import React from "react";

const Kontakt = () => {
  return (
    <Layout>
      <section>
        <Container className="px-4 py-8 lg:py-12">
          <HeadingH1>Schreibe mir eine Nachricht</HeadingH1>
        </Container>
      </section>
      <section className="bg-rose-50/20">
        <Container>
          <ContactForm />
        </Container>
      </section>
    </Layout>
  );
};

export default Kontakt;
