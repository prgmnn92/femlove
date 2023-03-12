import React from "react";

import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { singlequery, pathquery, configQuery } from "@lib/groq";
import {
  sanityClient,
  getClient,
  // usePreview,
  PortableText,
  urlFor,
} from "@lib/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import GetImage from "@utils/getImage";
import { motion } from "framer-motion";
import ErrorPage from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import Container from "@/components/Container";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";

const Post = (props) => {
  const { postdata, siteconfig, preview, category } = props;

  const post = postdata;
  const siteConfig = siteconfig;

  const router = useRouter();
  const { slug } = router.query;
  // console.log(post);
  // console.log(props);

  // const { data: post } = usePreview(singlequery, {
  //   params: { slug: slug },
  //   initialData: postdata,
  //   enabled: preview || router.query.preview !== undefined,
  // });

  // const { data: siteConfig } = usePreview(configQuery, {
  //   initialData: siteconfig,
  //   enabled: preview || router.query.preview !== undefined,
  // });

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  // console.log(post);

  return (
    <>
      {post && siteConfig && (
        <Layout {...siteConfig}>
          <NextSeo
            title={`${post.title} - ${siteConfig.title}`}
            description={post.excerpt || ""}
            canonical={`${siteConfig?.url}/post/${post.slug.current}`}
            openGraph={{
              url: `${siteConfig?.url}/post/${post.slug.current}`,
              title: `${post.title} - ${siteConfig.title}`,
              description: post.excerpt || "",
              images: [
                {
                  url: GetImage(post?.mainImage).src || ogimage,
                  width: 800,
                  height: 600,
                  alt: "",
                },
              ],
              site_name: siteConfig.title,
            }}
            twitter={{
              cardType: "summary_large_image",
            }}
          />
          <article>
            <Container className={"block-text py-16 pt-20 max-w-3xl"}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                delay={0.1}
              >
                <div
                  className="mb-4 cursor-pointer"
                  onClick={() => router.back()}
                >
                  <ArrowLongLeftIcon width={24} height={24} />
                </div>

                <div className="pb-4">
                  {post.categories.map((item) => (
                    <div
                      className="inline px-3 py-2 lg:text-xs font-bold text-white rounded-full bg-f-red text-[10px] mr-2"
                      key={item._id}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
                <h1>{post.title}</h1>
                <p>{post.shortDescription}</p>
                <MainImage post={post} />
                {post.body && <PortableText value={post.body} />}
              </motion.div>
            </Container>
          </article>
          <CTA />
        </Layout>
      )}
    </>
  );
};

const MainImage = ({ post }) => {
  const { width, height } = getImageDimensions(urlFor(post.mainImage).url());

  return (
    <Image
      src={urlFor(post.mainImage).url()}
      alt="hero image with description"
      width={width}
      height={height}
      priority
    />
  );
};

export async function getStaticProps({ params, preview = false }) {
  const post = await getClient(preview).fetch(singlequery, {
    slug: params.slug,
  });
  const config = await getClient(preview).fetch(configQuery);
  return {
    props: {
      postdata: { ...post },
      siteconfig: { ...config },
      preview,
    },
    revalidate: 86400, // every 36h
  };
}

export async function getStaticPaths() {
  const allPosts = await sanityClient.fetch(pathquery);
  return {
    paths:
      allPosts?.map((page) => ({
        params: {
          slug: page.slug,
        },
      })) || [],
    fallback: true,
  };
}

export default Post;
