import React, { useState } from "react";

import Head from "next/head";
import { NextSeo } from "next-seo";

import Modal from "./Modal";
import Navigation from "./Navigation";
import Footer from "./sections/Footer";
import { montserrat } from "@/fonts";
import { ModalContext } from "@/ModalContext";

const Layout = (props) => {
  const { children } = props;
  let [isOpen, setOpenModal] = useState(false);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://cdn.sanity.io/" />
        <link rel="dns-prefetch" href="https://cdn.sanity.io//" />
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: "", //ogimage || "",
              width: 800,
              height: 600,
              alt: props.title,
            },
          ],
          site_name: props.title,
        }}
      />

      <div className="flex flex-col min-h-screen antialiased">
        <div style={montserrat.style} className="overflow-hidden grow">
          <Navigation {...props} />
          <Modal isOpen={isOpen} setOpenModal={setOpenModal} />
          <ModalContext.Provider value={{ setOpenModal }}>
            {children}
          </ModalContext.Provider>
          <Footer {...props} />
        </div>
      </div>
    </>
  );
};
export default Layout;
