import React from "react";

import Link from "next/link";

import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Banner from "@/components/sections/Banner";

const FourOhFour = () => {
  return (
    <>
      <Layout>
        <Banner
          title={"404 - Seite nicht gefunden"}
          subtitle={"404"}
          text={"Leider gibt es diese Seite nicht."}
        />
        <section className="py-16 mt-[-64px] bg-[#F4F4F4] px-4 rounded-[56px] relative z-20">
          <div className="container mx-auto text-center">
            <Link className="mt-4" href="/">
              <Button title="Zurück zur Startseite" />
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FourOhFour;
