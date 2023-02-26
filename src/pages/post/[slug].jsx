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

const Post = (props) => {
  const { postdata, siteconfig, preview } = props;

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
              <h1>{post.title}</h1>
              <p>{post.shortDescription}</p>
              <MainImage post={post} />
              {post.body && <PortableText value={post.body} />}
            </Container>
          </article>
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
  //console.log(params);
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
    revalidate: 86400, // every 24h
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
