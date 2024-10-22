"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { brandImages } from "@/app/lib/images";
import CustomSwiper from "./customSwiper";

const BrandsSection = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <CustomSwiper
        className="w-full"
        navigation={true}
        pagination={true}
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
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {brandImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default BrandsSection;
