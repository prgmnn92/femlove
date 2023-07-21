import React from "react";

import Link from "next/link";

import Button from "../Button";
import Container from "../Container";
import Slider from "../Slider";

const SectionBlog = ({ posts }) => {
  return (
    <section>
      <Container className="px-5 py-24 ">
        <h2 className="pb-0 mb-2 text-3xl font-bold text-gray-900 lg:text-center lg:pb-4 lg:text-4xl title-font">
          Top Beiträge
        </h2>
        <Slider posts={posts} />
        <div className="flex pt-4 lg:justify-center">
          <Link href={"/blog"}>
            <Button isSecondary>Alle Beiträge</Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default SectionBlog;
