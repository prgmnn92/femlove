import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";
import React from "react";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import {
  sanityClient,
  getClient,
  // usePreview,
  PortableText,
  urlFor,
} from "@lib/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import { singlequery, pathquery, configQuery } from "@lib/groq";
import Container from "@/components/Container";
import Image from "next/image";
import GetImage from "@utils/getImage";
import { getCategoriesTitle } from "@utils/getCategoriesTitle";
import { motion } from "framer-motion";
import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import CTA from "@/components/CTA";

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
                  {category.map((item) => (
                    <div
                      className="inline px-3 py-2 lg:text-xs font-bold text-white rounded-full bg-f-red text-[10px] mr-2"
                      key={item}
                    >
                      {item}
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
  const categories = await sanityClient.fetch(`*[_type == "category"]`);
  const config = await getClient(preview).fetch(configQuery);
  const category = await getCategoriesTitle(categories, post.categories);
  return {
    props: {
      postdata: { ...post },
      siteconfig: { ...config },
      preview,
      category,
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
