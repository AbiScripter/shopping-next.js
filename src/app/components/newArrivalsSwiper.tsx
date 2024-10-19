"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { newArrivalsImages } from "../lib/images";
import DressCard from "./dressCard";

const NewArrivalsSwiper = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation]}
        // className="w-1/2 h-48"
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
      >
        {newArrivalsImages.map((img, index) => (
          <SwiperSlide key={index}>
            <DressCard {...img} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivalsSwiper;
