import { urlFor } from "@lib/sanity";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ index, post, category }) => {
  index = index + 1;

  let corner =
    index % 2 === 0
      ? "rounded-b-[50px] rounded-tr-[50px] hover:rounded-tl-[50px]  hover:rounded-tr-none"
      : "rounded-b-[50px] rounded-tl-[50px] hover:rounded-tr-[50px]  hover:rounded-tl-none";

  return (
    <article key={post.id} className="flex flex-col items-start justify-start">
      <div
        className={`relative w-full transition-all overflow-hidden ${corner} duration-300 border-2 border-black/5`}
      >
        <Link href={"/post/" + post.slug.current}>
          <Image
            src={urlFor(post.mainImage).url()}
            className={`aspect-[16/9] w-full bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2] hover:scale-110 transition-all duration-300`}
            alt=""
            width={1200}
            height={400}
          />
        </Link>
      </div>
      <div className="max-w-xl">
        <div className="flex items-center mt-4 text-xs gap-x-4">
          <time hidden dateTime={post._createdAt} className="text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            }).format(new Date(post._createdAt))}
          </time>
          <Link
            href={"/post/" + post.slug.current}
            className="relative z-10 rounded-full bg-f-green/20 px-3 py-1.5 font-medium text-gray-700 hover:bg-f-green/40"
          >
            {category[0].title}
          </Link>
        </div>
        <div className="relative group">
          <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={"/post/" + post.slug.current}>
              <span className="absolute inset-0" />
              {post.title}
            </Link>
          </h3>
          <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">
            {post.description}
          </p>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
