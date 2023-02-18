import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "./Container";

const AboutMe = () => {
  return (
    <section>
      <Container className=" px-5 py-24 flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src="https://dummyimage.com/1200x500"
              width={1200}
              height={500}
            />
          </div>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full rounded-full"
                  src="/images/femlove_me.webp"
                  width={100}
                  height={100}
                />
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                  Franziska
                </h2>
                <div className="w-12 h-1 bg-f-green rounded mt-2 mb-4"></div>
                <p className="text-base">
                  Raclette knausgaard hella meggs normcore williamsburg enamel
                  pin sartorial venmo tbh hot chicken gentrify portland.
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
              <p className="leading-relaxed text-lg mb-4">
                Herzlich Willkommen auf meinem Blog! Ich freue mich, dass du her
                gefunden hast und wünsche dir viel Spaß beim Rumstöbern. Lerne
                mehr über deinen Zyklus, deine Gesundheit und finde deinen Weg
                zu mehr Selbstakzeptanz.
              </p>
              <Link
                href={"/ueber-mich"}
                className="text-f-green inline-flex items-center"
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
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
