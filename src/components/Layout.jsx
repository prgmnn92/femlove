import React, { useState } from "react";
import { NextSeo } from "next-seo";
import Head from "next/head";

import Footer from "./Footer";
import Navigation from "./Navigation";
import Modal from "./Modal";
import { ModalContext } from "@/ModalContext";

const Layout = (props) => {
  const { children } = props;
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  //const ogimage = urlFor(props?.openGraphImage) ?? "";

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
        // twitter={{
        //   handle: "@xyz",
        //   site: "@xyz",
        //   cardType: "summary_large_image"
        // }}
      />

      <div className="flex flex-col min-h-screen antialiased">
        <div className="grow">
          <Navigation
            closeModal={closeModal}
            openModal={openModal}
            {...props}
          />
          <Modal isOpen={isOpen} closeModal={closeModal} />
          <ModalContext.Provider value={openModal}>
            <div>{children}</div>
          </ModalContext.Provider>
        </div>
        <Footer {...props} />
      </div>
    </>
  );
};

export default Layout;
