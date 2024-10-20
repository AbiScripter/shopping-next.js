"use client";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import { featureImages } from "../lib/images";
import FeatureCard from "./featureCard";
import SectionHeading from "./sectionHeading";
import { Pagination } from "swiper/modules";

const FeaturesSwiper = () => {
  return (
    <div>
      <SectionHeading heading="featured on ella" />
      <Swiper
        // className="w-full"
        // navigation
        // modules={[Navigation]}
        pagination={true}
        modules={[Pagination]}
        spaceBetween={5}
        loop={true}
        breakpoints={{
          // When the screen width is >= 640px (sm)
          320: {
            slidesPerView: 1,
          },
          // When the screen width is >= 768px (md)
          768: {
            slidesPerView: 2,
          },
          // When the screen width is >= 1024px (lg)
          1024: {
            slidesPerView: 3,
          },
          // When the screen width is >= 1280px (xl)
        }}
      >
        {featureImages.map((img, index) => (
          <SwiperSlide className="" key={index}>
            <FeatureCard {...img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturesSwiper;
