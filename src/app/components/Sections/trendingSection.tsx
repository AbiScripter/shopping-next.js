"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import SectionHeading from "../sectionHeading";
import { trendingImages } from "@/app/lib/images";
import DressCard from "../Cards/dressCard";

const TrendingSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <SectionHeading heading={"trending now"} />
      <div>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={30}
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
          }}
        >
          {trendingImages.map((img, index) => (
            <SwiperSlide key={index}>
              <DressCard {...img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingSection;
