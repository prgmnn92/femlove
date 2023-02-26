import Image from "next/image";

import { urlFor } from "@lib/sanity";
import Link from "next/link";

const BlogCard = ({ className, post }) => {
  // console.log(post);
  return (
    <div className={className}>
      <div className="h-64 overflow-hidden rounded-lg">
        <Image
          alt="content"
          className="object-cover object-center w-full h-full"
          src={urlFor(post.mainImage).url()}
          width={1200}
          height={500}
        />
      </div>
      <h2 className="mt-5 text-xl font-medium text-gray-900 title-font">
        {post.title}
      </h2>
      <p className="mt-2 text-base leading-relaxed line-clamp-3">
        {post.shortDescription}
      </p>
      <Link
        href={"/post/" + post.slug.current}
        className="inline-flex items-center mt-3 text-f-green"
      >
        Erfahre Mehr
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-4 h-4 ml-2"
          viewBox="0 0 24 24"
        >
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </Link>
    </div>
  );
};

export default BlogCard;
