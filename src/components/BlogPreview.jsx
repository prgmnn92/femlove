import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";

import BlogCard from "./BlogCard";
import Container from "./Container";

const BlogPreview = ({ posts }) => {
  return (
    <section>
      <Container className="px-5 py-24 ">
        <div className="flex flex-col ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            viewport={{ once: true }}
            className="h-1 overflow-hidden rounded bg-opacity-20 bg-f-green"
          >
            <div className="w-24 h-full bg-f-green"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="flex flex-col flex-wrap py-6 mb-12 sm:flex-row"
          >
            <h2 className="mb-2 text-2xl font-medium text-gray-900 sm:w-2/5 title-font sm:mb-0">
              Aktuelle Beiträge
            </h2>
            <p className="pl-0 text-base leading-relaxed sm:w-3/5 sm:pl-10">
              In meinen Beiträgen lernst du alles, was du für ein ganzheitlich
              gesundes und zyklusbewusstes Leben brauchst - ich teile mein
              Wissen, meine Erfahrungen wie auch wertvolle Tipps & Tricks.
              <br />
              Mein Ziel ist es, dass du mit Hilfe eines ganzheitlichen Ansatzes
              ein gesundes & ausgeglichenes Leben führen kannst, dich selbst
              besser kennenlernst und Beschwerden gelindert werden (ciao PMS &
              Co.) Warum ich dabei den weiblichen Zyklus einbeziehe? Er macht
              uns als Frauen aus und hat einen großen Einfluss auf unser Leben.
              Jede Frau soll die Chance haben, sich und ihren Zyklus
              kennenzulernen. ❤️
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 0.25 }}
          className="flex flex-wrap items-stretch mt-4 mb-10 sm:m-4"
        >
          {posts
            .sort(function (a, b) {
              // Turn your strings into dates, and then subtract them
              // to get a value that is either negative, positive, or zero.
              return new Date(b._createdAt) - new Date(a._createdAt);
            })
            .slice(0, 3)
            .map((post) => (
              <BlogCard
                key={post._id}
                post={post}
                className="mb-6 md:w-1/3 sm:mb-0"
                category={post.categories}
              />
            ))}
        </motion.div>
        <div className="flex justify-center md:pt-4">
          <Link
            href={"/blog"}
            className="p-2 px-3 mx-auto font-semibold text-center text-white rounded-full bg-f-red"
          >
            Alle Beiträge
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
