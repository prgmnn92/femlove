import React from "react";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Container from "./Container";

const AboutMe = () => {
  return (
    <section>
      <Container className="flex flex-col px-5 ">
        <div className="mx-auto lg:w-4/6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="flex justify-end h-1 overflow-hidden rounded bg-opacity-20 bg-f-green"
          >
            <div className="w-24 h-full bg-f-green"></div>
          </motion.div>

          <div className="flex flex-col mt-10 sm:flex-row">
            <div className="text-center sm:w-1/3 sm:pr-8 sm:py-8">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                className="inline-flex items-center justify-center w-20 h-20 text-gray-400 rounded-full bg-opacity-20 bg-f-green"
              >
                <Image
                  alt="content"
                  className="object-cover object-center w-full h-full rounded-full"
                  src="/images/femlove_me.webp"
                  width={100}
                  height={100}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="flex flex-col items-center justify-center text-center"
              >
                <h2 className="mt-4 text-lg font-medium text-gray-900 title-font">
                  Franziska
                </h2>
                <div className="w-12 h-1 mt-2 mb-4 rounded bg-f-green"></div>
                <p className="text-base">
                  @femlovebyfranzi
                  <br />
                  Holistic Health & Wellness Coachin
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.2, delay: 0.35 }}
              className="pt-4 mt-4 text-center border-t border-gray-200 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left"
            >
              <p className="mb-4 text-lg leading-relaxed">
                Herzlich Willkommen auf femlove.blog! Freut mich, dass du
                hergefunden hast. 😍 Ich wünsche dir ganz viel Freude beim
                Rumstöbern und lesen! 📖 Bei Fragen oder Anregungen kannst du
                mich gerne über mein Kontaktformular erreichen. Erfahre gleich
                mehr über mich. Deine Franzi 💖
              </p>
              <Link
                href={"/ueber-mich"}
                className="inline-flex items-center text-f-green"
              >
                Über mich
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
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;
