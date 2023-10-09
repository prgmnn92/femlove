import React from "react";

import Link from "next/link";

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
          <div className="container pt-4 mx-auto text-center">
            <Link
              className={`relative z-20 duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-white bg-f-brown hover:text-f-brown font-medium  hover:bg-white`}
              href="/"
              aria-label="zur startseite"
            >
              Zurück zur Startseite
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default FourOhFour;
