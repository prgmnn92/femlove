import React from "react";

// Import Swiper React components
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";
import PostCard from "./PostCard";

const Slider = ({ posts }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return "<span class=" + className + "></span>";
    },
  };
  return (
    <Swiper
      spaceBetween={16}
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
          <PostCard index={idx} post={post} category={post.categories} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
