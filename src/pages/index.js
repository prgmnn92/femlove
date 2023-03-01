import Image from "next/image";
import Layout from "@/components/Layout";
import Container from "@/components/Container";
import Button from "@/components/Button";
import BlogPreview from "@/components/BlogPreview";
import CTA from "@/components/CTA";
import AboutMe from "@/components/AboutMe";
import { sanityClient } from "@lib/sanity";
import Input from "@/components/Input";
import { motion } from "framer-motion";
import FadeInWrapper from "@/components/fadeInWrapper";

export default function Home({ posts }) {
  return (
    <>
      <Layout>
        <Container className="grid px-4 py-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            delay={0.1}
            className="mr-auto place-self-center lg:col-span-7"
          >
            <h1 className="max-w-md mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl ">
              Zyklus, Gesundheit, Selbstakzeptanz.
            </h1>
            <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl ">
              Ein Blog, bei dem sich alles rund um den Zyklus, deine Gesundheit
              und deinem Weg zu mehr Selbstakzeptanz dreht.
            </p>
            <div className="flex flex-col items-end w-full px-8 space-y-4 lg:w-2/3 sm:flex-row sm:space-x-4 sm:space-y-0 sm:px-0">
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
                />
              </div>
              <Button
                type="submit"
                className="px-8 py-2 text-lg text-white border-0 rounded bg-f-main focus:outline-none"
              >
                Abonnieren
              </Button>
            </div>
          </motion.div>
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
  const posts = await sanityClient.fetch(`*[_type == "post"]`);

  return {
    props: {
      posts,
    },
  };
}
