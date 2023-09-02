import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
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
    <div className="rounded-[14px] bg-[#D0D9D7] p-3 flex-col flex">
      <div className="flex flex-col gap-4 lg:flex-row">
        <div className="relative lg:min-w-[250px] min-w-full lg:px-24 min-h-[200px] rounded-[14px] overflow-hidden max-w-xs">
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
          <p className="text-sm font-light lg:text-normal">{text}</p>
          {!bodyContent && (
            <div className="pt-4">
              <Link href={href}>
                <Button isSecondary title={cta} />
              </Link>
            </div>
          )}
        </div>
      </div>
      {bodyContent && (
        <div className="relative flex-1 max-w-full pb-8">
          <div className="py-4 text-sm font-light lg:text-normal">
            {bodyContent}
          </div>
          <div className="absolute bottom-0 left-0">
            <Link href={href}>
              <Button isSecondary title={cta} />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
