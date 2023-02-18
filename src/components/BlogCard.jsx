import Image from "next/image";

import { urlFor } from "lib/sanity";

const BlogCard = ({ className, post }) => {
  return (
    <div className={className}>
      <div className="rounded-lg h-64 overflow-hidden">
        <Image
          alt="content"
          className="object-cover object-center h-full w-full"
          src={urlFor(post.mainImage).url()}
          width={1200}
          height={500}
        />
      </div>
      <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
        {post.title}
      </h2>
      <p className="text-base leading-relaxed mt-2 truncate ...">
        {post.shortDescription}
      </p>
      <a className="text-f-green inline-flex items-center mt-3">
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
      </a>
    </div>
  );
};

export default BlogCard;
