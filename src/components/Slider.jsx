import React from "react";

// Import Swiper React components
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import BlogCard from "./blog/BlogCard";

const Slider = ({ posts }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      console.log(className);
      return "<span class=" + className + "></span>";
    },
  };
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={pagination}
      modules={[Pagination]}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      onSlideChange={() => {}}
      onSwiper={(swiper) => {}}
    >
      {posts.map((post, idx) => (
        <SwiperSlide key={post._id}>
          <BlogCard
            index={idx}
            post={post}
            className="mb-6 md:w-1/3 sm:mb-4"
            category={post.categories}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
