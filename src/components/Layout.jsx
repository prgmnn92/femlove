import React, { useState } from "react";

import Head from "next/head";
import { NextSeo } from "next-seo";

import Footer from "./sections/Footer";
import Modal from "./Modal";
import Navigation from "./sections/Navigation";
import { ModalContext } from "@/ModalContext";

const Layout = (props) => {
  const { children } = props;
  let [isOpen, setOpenModal] = useState(false);

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
      />

      <div className="flex flex-col min-h-screen antialiased">
        <div className="grow">
          <Navigation {...props} />
          <Modal isOpen={isOpen} setOpenModal={setOpenModal} />
          <ModalContext.Provider value={{ setOpenModal }}>
            <div>{children}</div>
          </ModalContext.Provider>
        </div>
        <Footer {...props} />
      </div>
    </>
  );
};
export default Layout;
