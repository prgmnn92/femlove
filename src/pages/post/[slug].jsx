"use client";
import React, { lazy } from "react";

import GetImage from "@lib/getImage";
import { singlequery, pathquery, configQuery } from "@lib/groq";
import { sanityClient, getClient } from "@lib/sanity";
import ErrorPage from "next/error";
import { previewData } from "next/headers";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import BlogPost from "@/components/BlogPost";
import CTA from "@/components/CTA";
import Layout from "@/components/Layout";
import PreviewSuspense from "@/components/PreviewSuspense";

const PreviewBlogPost = lazy(() => import("@/components/PreviewBlogPost"));

export const Post = (props) => {
  const { postdata, siteconfig, preview, data } = props;

  const post = postdata;
  const siteConfig = siteconfig;

  return (
    <>
      {preview ? (
        <Layout>
          <PreviewSuspense
            fallback={
              <div role={"status"}>
                <p className="text-lg text-center animate-pulse">
                  Loading Preview Data...
                </p>
              </div>
            }
          >
            <PreviewBlogPost
              query={singlequery}
              queryParams={data.queryParams}
            />
          </PreviewSuspense>
          )
          <CTA />
        </Layout>
      ) : (
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
          <BlogPost post={post} />
          <CTA />
        </Layout>
      )}
    </>
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
