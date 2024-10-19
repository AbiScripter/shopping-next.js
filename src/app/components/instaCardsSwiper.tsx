"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { instaImages } from "../lib/images";

const InstaCardsSwiper = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation]}
        // className="w-1/2 h-48"
        slidesPerView={5}
        spaceBetween={5}
        loop={true}
      >
        {instaImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img.src} alt={img.alt} width={500} height={500} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InstaCardsSwiper;
