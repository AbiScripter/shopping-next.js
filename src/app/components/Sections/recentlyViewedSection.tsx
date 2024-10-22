"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import SectionHeading from "../sectionHeading";
import { newArrivalsImages } from "@/app/lib/images";
import DressCard from "../Cards/dressCard";

const RecentViewedProducts = () => {
  return (
    <div className="flex flex-col gap-5">
      <p className="font-bold py-6 text-center text-lg">
        RECENTLY VIEWED PRODUCTS
      </p>
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
            // 1024: {
            //   slidesPerView: 4
            // },
          }}
        >
          {newArrivalsImages.slice(0, 3).map((img, index) => (
            <SwiperSlide key={index}>
              <DressCard key={index} {...img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RecentViewedProducts;

{
  /* <div className="py-6">
  <p className="font-semibold py-6 text-center">RECENTLY VIEWED PRODUCTS</p>
  <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 w-3/4 mx-auto">
    {newArrivalsImages.slice(0, 3).map((img, index) => (
      <SwiperSlide key={index}>
        <DressCard key={index} {...img} />
      </SwiperSlide>
    ))}
  </div>
</div>; */
}
