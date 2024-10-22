"use client";
import React, { useState } from "react";
import { Swiper as SwiperClass } from "swiper"; // Import the Swiper class for typing
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { galleryImages, galleryImageThumbs } from "../lib/images";
import Image from "next/image";

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null); // Correct typing here

  return (
    <div>
      <Swiper
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {galleryImages.map((img, index) => (
          <SwiperSlide key={index} className=" gallery-image-container">
            <Image src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        navigation={true}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper m-8"
        breakpoints={{
          320: {
            slidesPerView: 4,
          },

          1900: {
            slidesPerView: 3,
          },
        }}
      >
        {galleryImageThumbs.map((img, index) => (
          <SwiperSlide key={index}>
            <Image src={img.src} alt={img.alt} className="cursor-pointer" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
