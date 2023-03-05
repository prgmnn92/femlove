import { urlFor } from "@lib/sanity";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ className, post, category }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={className + " bg-f-offwhite shadow rounded"}
    >
      <Link href={"/post/" + post.slug.current}>
        <div className="h-64 overflow-hidden rounded-lg">
          <Image
            alt="content"
            className="object-cover object-center w-full h-full"
            src={urlFor(post.mainImage).url()}
            width={1200}
            height={500}
          />
        </div>
        <div className="px-6 py-3">
          {category.map((item) => (
            <div
              className="inline px-3 py-2 lg:text-xs font-bold text-white rounded-full bg-f-red text-[10px] mr-2"
              key={item}
            >
              {item}
            </div>
          ))}
          <h2 className="mt-3 text-xl font-semibold text-gray-900 title-font">
            {post.title}
          </h2>
          <p className="mt-2 text-sm leading-relaxed opacity-75 line-clamp-3">
            {post.shortDescription}
          </p>
          <div className="inline-flex items-center mt-3 text-f-green">
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
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default BlogCard;
