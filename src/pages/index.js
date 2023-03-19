import { useState } from "react";

import { configQuery, postqueryHome } from "@lib/groq";
import { sanityClient } from "@lib/sanity";
import { motion } from "framer-motion";
import Image from "next/image";

import AboutMe from "@/components/AboutMe";
import BlogPreview from "@/components/BlogPreview";
import Button from "@/components/Button";
import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Input from "@/components/Input";
import Layout from "@/components/Layout";
import ThankYou from "@/components/ThankYou";

export default function Home({ posts, siteConfig }) {
  const [email, setEmail] = useState("");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const newsletterHandler = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = () => {
    handleCreateNewsletter(email);
    setEmail("");
  };

  const handleCreateNewsletter = async (email) => {
    try {
      const response = await fetch("/api/createNewsletterEntry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      setNewsletterSubmitted(true);
      const newsletterEntry = await response.json();
      console.log(newsletterEntry);
    } catch (error) {
      console.log("Error creating appointment", error);
    }
  };
  return (
    <>
      <Layout {...siteConfig}>
        <Container className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-md mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl ">
              Zyklus, Lifestyle & Gesundheit.
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
              Femlove ist ein Blog, bei dem sich alles um ein gesundes und
              zyklusgerechtes Leben dreht.
            </p>
            <div className="flex flex-col items-end w-full px-8 space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
              {newsletterSubmitted ? (
                <ThankYou isNewsletter={true} />
              ) : (
                <>
                  <div className="relative flex-grow w-full">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-7 text-gray-600"
                    >
                      Email
                    </label>
                    <Input
                      className={"lg:min-w-[240px]"}
                      type="email"
                      id="email"
                      name="email"
                      value={email}
                      onChange={newsletterHandler}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="px-8 py-2 text-lg text-white border-0 rounded bg-f-main focus:outline-none"
                    onClick={handleSubmit}
                  >
                    Abonnieren
                  </Button>
                </>
              )}
            </div>
          </motion.div>
          {/* <script
          async
          data-uid="ce9e319eaf"
          src="https://femlove-by-franzi.ck.page/ce9e319eaf/index.js"
        ></script> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="hidden lg:mt-0 lg:col-span-5 lg:flex"
          >
            <Image
              src="/images/woman.webp"
              alt="mockup"
              width={400}
              height={600}
              priority={true}
            />
          </motion.div>
        </Container>
        <BlogPreview posts={posts} />
        <AboutMe />
        <CTA />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(postqueryHome);
  const config = await sanityClient.fetch(configQuery);

  return {
    props: {
      siteConfig: { ...config },
      posts,
    },
  };
}
