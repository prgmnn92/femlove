import React from "react";
import BlogCard from "./BlogCard";
import Container from "./Container";

const BlogPreview = ({ posts }) => {
  return (
    <section>
      <Container className=" px-5 py-24 ">
        <div className="flex flex-col">
          <div className="h-1 bg-gray-200 rounded overflow-hidden">
            <div className="w-24 h-full bg-f-green"></div>
          </div>
          <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
            <h2 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
              Aktuelle Beiträge
            </h2>
            <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
              In meinen Beiträgen dreht es sich um den Zyklus, Gesundheit und
              Selbstakzeptanz. Ich glaube, dass es wichtig ist, unseren Körper
              und dessen Funktionen zu verstehen und uns selbst zu lieben. Ich
              möchte dich ermutigen, stolz auf deinen Körper und deinen Zyklus
              zu sein und zu lernen, dich selbst zu akzeptieren. Gemeinsam
              können wir eine gesündere und selbstbewusstere Gesellschaft
              erschaffen.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {/* <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" />
          <BlogCard className="p-4 md:w-1/3 sm:mb-0 mb-6" /> */}
          {posts.map((post) => (
            <BlogCard
              key={post._id}
              post={post}
              className="p-4 md:w-1/3 sm:mb-0 mb-6"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogPreview;
