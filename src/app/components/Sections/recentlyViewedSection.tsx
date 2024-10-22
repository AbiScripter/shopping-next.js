"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { newArrivalsImages } from "@/app/lib/images";
import DressCard from "../Cards/dressCard";
import CustomSwiper from "./customSwiper";

const RecentViewedProducts = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold py-6 text-center text-lg">
        RECENTLY VIEWED PRODUCTS
      </p>
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
          }}
        >
          {newArrivalsImages.slice(0, 3).map((img, index) => (
            <SwiperSlide key={index}>
              <DressCard key={index} {...img} />
            </SwiperSlide>
          ))}
        </CustomSwiper>
      </div>
    </div>
  );
};

export default RecentViewedProducts;
