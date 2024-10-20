"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { brandImages } from "@/app/lib/images";

const BrandsSection = () => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <Swiper
        className="w-full"
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation]}
        slidesPerView={5}
        spaceBetween={5}
        loop={true}
        breakpoints={{
          // When the screen width is >= 640px (sm)
          320: {
            slidesPerView: 2,
          },
          // When the screen width is >= 768px (md)
          768: {
            slidesPerView: 3,
          },
          // When the screen width is >= 1024px (lg)
          1024: {
            slidesPerView: 4,
          },
          // When the screen width is >= 1280px (xl)
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
      </Swiper>
    </div>
  );
};

export default BrandsSection;
