import React from "react";

import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

import Button from "../Button";
import Heading from "../Heading";
import { ArrowIcon, HorizontalShape, VerticalShape } from "../shapes";

const About = ({ text }) => {
  const defaultText = (
    <>
      <p className="pb-4 text-sm lg:text-base">
        Reisende, Sunset-Lover, Foodie, Good-Mood-Girl.
      </p>
      <p className="pb-4 text-sm lg:text-base">
        Vor ca. einem Jahr startete ich mit Femlove - einem Blog rund um den
        weiblichen Zyklus.
      </p>
      <p className="pb-4 text-sm lg:text-base">
        Mit der Zeit durfte ich lernen, dass ich so viel mehr mit dir teilen
        möchte. Ich bin fest davon überzeugt, dass uns ein zyklusbewusster
        Lifestyle - also die Verbindung zu unserem Zyklus - einen Schritt weiter
        zu uns selbst bringt. Zyklusbewusstsein hilft dir eine tiefere
        Verbindung zu dir und deinen Bedürfnissen herzustellen - dich besser zu
        verstehen.
      </p>
      <p className="pb-4 text-sm lg:text-base">
        Ich nutze diesen Ansatz und gehe einen Schritt weiter. Es geht nun um
        dich und dein Leben: Um Selbstverwirklichung. Hol das Beste aus dir
        heraus, step into your real power und lebe ein erfülltes,
        selbstbestimmtes und ausgeglichenes Leben.
      </p>
      <p className="pb-4 text-sm lg:text-base">
        Erfahre direkt mehr über mich und meinen Weg:
      </p>
    </>
  );

  return (
    <section className="lg:py-24 py-12 mt-[-64px] bg-[#EBE9E5] rounded-[56px] relative px-4 overflow-hidden">
      <div className="absolute left-[50%] h-full top-0 lg:block hidden">
        <VerticalShape />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col-reverse gap-8 lg:flex-row lg:gap-24">
          <div className="lg:w-1/2 w-full max-w-[550px]">
            <Heading title={"Ich bin Franziska"} subtitle={"über mich"} />
            <div className="lg:pl-[96px] pl-[56px]">
              {text ? <PortableText value={text} /> : defaultText}
              <div className="relative inline-block pt-8">
                <Link href={"/ueber-mich"} className="relative z-20">
                  <Button title={"Über mich"} />
                </Link>
                <div className="absolute top-[-8px] left-[115%]">
                  <ArrowIcon />
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-row items-center justify-center w-full lg:w-1/2">
            <Image
              src="/images/franziska-2.webp"
              className="object-cover rounded-[14px] w-full lg:min-h-[560px] min-h-[280px] overflow-hidden max-w-[450px] z-10"
              height={480}
              width={400}
              alt=""
            />
            <div className="absolute right-12 max-w-[38vw]">
              <HorizontalShape />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
