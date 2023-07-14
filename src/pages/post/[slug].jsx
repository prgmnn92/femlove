import React, { lazy } from "react";

import { singlequery, pathquery, configQuery } from "@lib/groq";
import { sanityClient, getClient, urlFor } from "@lib/sanity";
import ErrorPage from "next/error";
import { previewData } from "next/headers";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

import BlogPost from "@/components/blog/BlogPost";
import CTA from "@/components/sections/CTA";
import Layout from "@/components/Layout";
import PreviewSuspense from "@/components/PreviewSuspense";

const PreviewBlogPost = lazy(() => import("@/components/blog/PreviewBlogPost"));

const Post = (props) => {
  const { postdata, siteconfig, preview, data } = props;
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
