"use client";
import { SwiperSlide } from "swiper/react";
import SectionHeading from "../sectionHeading";
import { featureImages } from "@/app/lib/images";
import FeatureCard from "../Cards/featureCard";
import CustomSwiper from "./customSwiper";

const FeaturesSection = () => {
  return (
    <div>
      <SectionHeading heading="featured on ella" />
      <CustomSwiper
        pagination={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {featureImages.map((img, index) => (
          <SwiperSlide className="" key={index}>
            <FeatureCard {...img} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default FeaturesSection;
