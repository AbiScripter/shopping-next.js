"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { newArrivalsImages } from "../lib/images";

const NewArrivalsSwiper = () => {
  return (
    <div>
      <Swiper
        navigation
        pagination={{ type: "fraction" }}
        modules={[Navigation, Pagination]}
      >
        {newArrivalsImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex">
              <Image src={img.src} alt={img.alt} width={500} height={500} />
              <div>
                <h3>{img.title}</h3>
                <p>{img.price}</p>
                <p>{img.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default NewArrivalsSwiper;
