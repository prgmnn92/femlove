import React, { useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { InView } from "react-intersection-observer";

import Button from "../Button";
import { BackgroundCircleImage } from "../shapes";
import { josefineSans, sourceSerif } from "@/fonts";
const Hero = () => {
  const image = useRef(null);
  const [imageInView, setImageInView] = useState(false);

  return (
    <section className="bg-[#EBE9E5] rounded-[56px]  lg:min-h-[calc(90vh-140px)] min-h-[400px] flex flex-col items-center lg:mt-[140px] mt-20 relative px-4">
      <div className="container text-center lg:pt-[22vh] pt-24 max-w-xl mx-auto relative z-10">
        <p
          style={josefineSans.style}
          className="text-xs font-light uppercase lg:text-sm"
        >
          step into your power
        </p>
        <div className="w-8 h-[1px] bg-black/40 mx-auto my-4 rounded"></div>
        <h1
          style={sourceSerif.style}
          className="text-3xl font-light lg:text-5xl"
        >
          Zyklusbewusstsein trifft Selbstverwirklichung
        </h1>
        <p className="max-w-md pt-4 pb-8 mx-auto text-sm lg:max-w-lg lg:text-lg text-black/50">
          Femlove ist ein Blog für Frauen, die mehr wollen: Wachstum. Erfüllung.
          Selbstbestimmtheit. Mit einer tiefen Verbindung zu sich selbst und
          ihren Bedürfnissen.
        </p>
        <Link href="/" className="opacity-0">
          <Button title="Newsletter" />
        </Link>
        <InView
          as="div"
          onChange={(inView, entry) => {
            console.log(inView);
            setImageInView(inView);
          }}
          className="rounded-[14px] absolute left-[-350px] bottom-[50px] overflow-hidden max-w-[180px] max-h-[300px] min-w-[180px] min-h-[300px]"
        >
          <Image
            ref={image}
            src="/images/hero-3.jpg"
            width={180}
            height={300}
            className={`min-h-[300px] min-w-[180px] max-w-[180px] max-h-[300px] object-cover duration-2000 transition-all lg:block hidden`}
            // ${imageInView ? "scale-100" : "scale-125"}
            //           `}
            alt="placeholder-hero-image"
          />
        </InView>
        <Image
          src="/images/hero-1.jpg"
          width={290}
          height={230}
          className="rounded-[14px] absolute left-[-270px] bottom-[-80px] object-cover lg:block hidden"
          alt="placeholder-hero-image"
        />
        <Image
          src="/images/hero-2.jpg"
          width={300}
          height={400}
          className="rounded-t-full absolute right-[-370px] bottom-[-30px] min-h-[400px] min-w-[300px] object-cover lg:block hidden"
          alt="placeholder-hero-image"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <BackgroundCircleImage />
      </div>
    </section>
  );
};

export default Hero;
