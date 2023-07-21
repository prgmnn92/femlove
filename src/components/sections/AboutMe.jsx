import React from "react";

import Image from "next/image";
import Link from "next/link";

import Button from "../Button";

const AboutMe = () => {
  return (
    <div className="pt-16 pb-8 bg-white lg:pt-32">
      <div className="px-6 mx-auto max-w-7xl lg:flex lg:px-8">
        <div className="grid max-w-2xl mx-auto lg:grid-cols-2 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="flex-auto w-0 lg:mr-auto lg:w-auto lg:flex-none lg:self-start">
              <Image
                width={300}
                height={450}
                src="/images/franzi_athen.webp"
                alt=""
                className="aspect-[1] w-[37rem] max-w-full lg:max-w-none  object-contain relative lg:top-[-2rem] lg:left-[-2rem]"
              />
            </div>
          </div>
          <div className="lg:col-end-2 lg:col-start-2 lg:row-start-1 lg:w-full lg:max-w-lg lg:pb-8 lg:pt-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Herzlich Willkommen<br></br>bei Femlove!
            </h2>
            <p className="mt-4 text-xl leading-8 text-gray-600">
              Ich freue mich, dass du hergefunden hast! Auf meinem Blog erwartet
              dich ganz viel Zykluswissen und Tipps rund um deine Gesundheit.
              Ich wünsche dir viel Spaß beim Rumstöbern und Lesen - erfahre hier
              gleich mehr über mich und wie ich zu Femlove kam:
            </p>
            <div className="flex mt-10">
              <Link href="/ueber-mich">
                <Button>
                  Über mich <span aria-hidden="true">&rarr;</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
