import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "./Button";
import { josefineSans, sourceSerif } from "@/fonts";

const ProductCard = ({ title, category, text, href, imageSrc, cta }) => {
  return (
    <div className="rounded-[14px] bg-[#D0D9D7] p-3 flex lg:flex-row flex-col items-start gap-4">
      <Image
        width={250}
        height={180}
        src={imageSrc}
        alt=""
        className="object-cover w-full overflow-hidden rounded-[14px] lg:h-full h-60"
      />

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
        <div className="pt-4">
          <Link href={href}>
            <Button isSecondary title={cta} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
