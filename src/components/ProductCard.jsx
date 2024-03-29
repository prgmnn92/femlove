import React from "react";

import Image from "next/image";
import Link from "next/link";

import { josefineSans, sourceSerif } from "@/fonts";

const ProductCard = ({
  title,
  category,
  text,
  href,
  imageSrc,
  cta,
  bodyContent,
}) => {
  return (
    <div className="rounded-[14px] relative bg-[#D0D9D7] p-3 flex-col flex">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="relative lg:min-w-[250px] min-w-full lg:px-24 min-h-[200px] max-h-[200px] rounded-[14px] overflow-hidden max-w-xs">
          <Image
            width={250}
            height={180}
            src={imageSrc}
            alt=""
            className="absolute top-0 bottom-0 left-0 right-0 object-cover min-w-full min-h-full"
          />
        </div>
        <div>
          <div className="flex flex-row items-end pt-2 pb-2">
            <div className="h-[1px] w-[16px] mr-2 bg-black mb-3"></div>
            <div>
              <p
                style={josefineSans.style}
                className="text-xs font-light uppercase lg:text-sm"
              >
                {category}
              </p>
              <h2
                style={sourceSerif.style}
                className="text-lg font-light lg:text-xl"
              >
                {title}
              </h2>
            </div>
          </div>
          <p className="pb-10 text-sm font-light lg:text-normal">{text}</p>
          {!bodyContent && (
            <div className="absolute pt-4 bottom-4">
              <Link
                href={href}
                className="relative  duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-f-brown  bg-transparent font-medium hover:text-white hover:bg-f-brown"
                aria-label={title}
              >
                {cta}
              </Link>
            </div>
          )}
        </div>
      </div>
      {bodyContent && (
        <div className="relative flex-1 max-w-full pb-8 -mt-10 lg:mt-0 ">
          <div className="py-4 text-sm font-light lg:text-normal">
            {bodyContent}
          </div>
          <div className="absolute left-0 bottom-2">
            <Link
              href={href}
              className="relative  duration-300 rounded-[14px] transition-colors focus:outline-none focus:ring-2 focus:ring-white/10 focus:ring-offset-2  border-[1px] border-solid border-f-brown cursor-pointer px-5 py-2 text-sm text-f-brown  bg-transparent font-medium hover:text-white hover:bg-f-brown"
              aria-label={title}
            >
              {cta}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
