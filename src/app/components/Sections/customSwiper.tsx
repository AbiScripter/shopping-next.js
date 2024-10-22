"use client"; // Swiper is a client-side library, and using it in server-side rendering (SSR) can cause issues
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

type CustomSwiperProps = {
  breakpoints: {}; // Pass the breakpoints as an object
  children: React.ReactNode; // Accept children to render SwiperSlides
  navigation?: boolean; // Optional prop for navigation
  pagination?: boolean;
  spaceBetween?: number;
  className?: string;
};

const CustomSwiper = ({
  breakpoints,
  children,
  navigation,
  pagination,
  spaceBetween,
  className,
}: CustomSwiperProps) => {
  return (
    <Swiper
      className={className}
      navigation={navigation}
      pagination={pagination}
      spaceBetween={spaceBetween || 5}
      loop={true}
      breakpoints={breakpoints}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
