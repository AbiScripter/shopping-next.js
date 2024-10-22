"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../sectionHeading";
import { trendingImages } from "@/app/lib/images";
import DressCard from "../Cards/dressCard";
import CustomSwiper from "./customSwiper";

const TrendingSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading heading={"trending now"} />
      <div>
        <CustomSwiper
          pagination={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {trendingImages.map((img, index) => (
            <SwiperSlide key={index}>
              <DressCard {...img} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
};

export default TrendingSection;
