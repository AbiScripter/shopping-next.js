"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { instaImages, socialMediaIcons } from "@/app/lib/images";
import Button from "../button";
import CustomSwiper from "./customSwiper";

const InstagramSection = () => {
  return (
    <div className="flex flex-col gap-5 items-center ">
      <p className="text-lg font-bold flex items-center gap-4">
        <span>
          <Image src={socialMediaIcons[1].src} alt={socialMediaIcons[1].alt} />
        </span>
        <span>#ELLA ON INSTAGRAM</span>
      </p>
      <p className="text-sm font-thin">
        Phasellus lorem malesuada ligula pulvinar commodo maecenas
      </p>
      <CustomSwiper
        className={"w-full"}
        navigation={true}
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
        {instaImages.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
      <Button text="view gallery" />
    </div>
  );
};

export default InstagramSection;
