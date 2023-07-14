import React from "react";

import { ArrowLongLeftIcon } from "@heroicons/react/20/solid";
import { PortableText, urlFor } from "@lib/sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import { useRouter } from "next/router";

import Container from "../Container";

const BlogPost = ({ post }) => {
  const router = useRouter();
  return (
    <article>
      <Container className={"block-text py-16 pt-20 max-w-3xl"}>
        <div>
          <div className="mb-4 cursor-pointer" onClick={() => router.back()}>
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
          <p className="pt-4 text-xs">
            *Anzeige: Bei den mit Sternchen markierten Links handelt es sich um
            Affiliate-Links, für die ich je nach Erfolg eine kleine Provision
            erhalte.
          </p>
        </div>
      </Container>
    </article>
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

export default BlogPost;
