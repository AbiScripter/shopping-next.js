// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import Hero from "./components/hero";

import DressCard from "./components/dressCard";
import CategoryCard from "./components/categoryCard";
import {
  categoryImages,
  newArrivalsImages,
  heroOneDesktop,
  heroTwoDesktop,
  heroOneMobile,
  heroTwoMobile,
} from "./lib/images";
import InstaCardsSwiper from "./components/instaCardsSection";
import Footer from "./components/footer";
import AccordianFooter from "./components/accordianFooter";
import FeaturesSwiper from "./components/featuredSection";
import SectionHeading from "./components/sectionHeading";
import TrendingNowSwiper from "./components/trendingSection";
import Hero from "./components/hero";
import BrandsSwiper from "./components/brandsSection";

export default function Home() {
  return (
    <div>
      <div className="xs:w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto relative">
        {/* Hero Wrapper */}
        <Hero
          imgDesktop={heroOneDesktop}
          imgMobile={heroOneMobile}
          heading="cosmopolis"
          text="Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous."
          contentPosition="start"
        />

        {/* CategoryCards Wrapper */}
        <div className="grid xs:grid-cols-1 md:grid-cols-3 gap-6 py-5">
          {categoryImages.map((cat, index) => (
            <CategoryCard key={index} {...cat} />
          ))}
        </div>

        {/* New Arrivals Wrapper */}
        <div className="py-5">
          <SectionHeading heading={"new arrivals"} />
          {/* dress container */}
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 sm:gap-4 md:gap-8 lg:gap-8 ">
            {newArrivalsImages.map((data) => (
              <DressCard key={data.alt} {...data} />
            ))}
          </div>
        </div>

        {/* Hero Wrapper */}
        <Hero
          imgMobile={heroTwoMobile}
          imgDesktop={heroTwoDesktop}
          heading="metropólis"
          text="Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous."
          contentPosition="end"
        />

        {/* Trending Now Wrapper using SWIPER.JS*/}
        <section className="py-5">
          <TrendingNowSwiper />
        </section>

        {/* Featured On Wrapper */}
        <section className="pt-5 pb-10">
          <FeaturesSwiper />
        </section>

        {/* Brand cards swiper */}
        <section className="py-5 border-t-2">
          <BrandsSwiper />
        </section>

        {/* Insta Cards Swiper */}
        <section className="py-5 ">
          <InstaCardsSwiper />
        </section>
      </div>

      <Footer />
      <AccordianFooter />
    </div>
  );
}
