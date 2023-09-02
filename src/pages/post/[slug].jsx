import React from "react";

import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { singlequery, pathquery, configQuery } from "@lib/groq";
import { sanityClient, getClient, urlFor, PortableText } from "@lib/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import Layout from "@/components/Layout";
import { josefineSans, sourceSerif } from "@/fonts";

const Post = (props) => {
  const { postdata, siteconfig } = props;
  const router = useRouter();
  const post = postdata;
  const siteConfig = siteconfig;

  if (router.isFallback) {
    return (
      <Layout>
        <div>Loading</div>
      </Layout>
    );
  }
  return (
    <>
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
                url: urlFor(post?.mainImage).url() || "",
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
        <section className="px-6 pb-20 lg:pt-[22vh] pt-24 bg-white sm:pt-32 lg:px-8 ">
          <div className="relative max-w-2xl mx-auto text-left lg:text-center">
            <div
              className="absolute mb-4 cursor-pointer lg:-top-2 -top-8 lg:-left-8 -left-0"
              onClick={() => router.back()}
            >
              <ArrowLongLeftIcon width={24} height={24} />
            </div>
            <p
              style={josefineSans.style}
              className="text-xs font-light uppercase lg:text-sm"
            >
              {post.categories[0].title}
            </p>
            <h1
              style={sourceSerif.style}
              className="max-w-xl mx-auto text-xl font-light lg:text-2xl"
            >
              {post.title}
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-gray-600 lg:mt-6 lg:text-base">
              {post.shortDescription}
            </p>
          </div>
        </section>

        <article className="py-8 mt-[-64px] bg-[#F4F4F4] px-4 rounded-[56px] relative z-20">
          <div className="container max-w-2xl mx-auto ">
            <div>
              <MainImage post={post} />
              {post.body && <PortableText value={post.body} />}
            </div>
          </div>
        </article>
      </Layout>
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
      className="rounded-[14px] mb-8"
    />
  );
};

export async function getStaticProps({ params, preview = false }) {
  const queryParams = { slug: params?.slug ?? `` };

  if (preview) {
    return { props: { preview, data: { queryParams } } };
  }
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
    revalidate: 1,
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
