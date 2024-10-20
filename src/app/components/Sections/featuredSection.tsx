"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import SectionHeading from "../sectionHeading";
import { featureImages } from "@/app/lib/images";
import FeatureCard from "../Cards/featureCard";

const FeaturesSection = () => {
  return (
    <div>
      <SectionHeading heading="featured on ella" />
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={5}
        loop={true}
        breakpoints={{
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

export default FeaturesSection;
