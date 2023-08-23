import React from "react";

import { urlFor } from "@lib/sanity";
import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";

import { josefineSans, sourceSerif } from "@/fonts";

const PostCard = ({ index, post, category }) => {
  return (
    <Link href={"/post/" + post.slug.current} className="pb-4">
      <div className="rounded-[14px] p-4 bg-white w-full h-full relative">
        <Image
          width={370}
          height={280}
          src={urlFor(post.mainImage).url()}
          className="object-cover rounded-[14px] overflow-hidden aspect-[16/9] w-full min-h-[280px]"
          alt=""
        />

        <div>
          <div className="flex flex-row justify-between pt-4 pb-2">
            <div
              style={josefineSans.style}
              className="text-xs font-light uppercase lg:text-sm"
            >
              {category[0].title}
            </div>
            <div
              style={josefineSans.style}
              className="text-xs font-light lg:text-sm"
            >
              {format(new Date(post._createdAt), "d MMMM, yyyy")}
            </div>
          </div>
          <div className="pb-1 mb-2">
            <h3 style={sourceSerif.style} className="text-normal lg:text-lg">
              {post.title}
            </h3>
          </div>
        </div>
        <div className="w-[calc(100%-(2*1rem))] border-b-[1px] border-[#111827]/30  absolute bottom-4"></div>
      </div>
    </Link>
  );
};

export default PostCard;
