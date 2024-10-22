import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DressCard from "./components/Cards/dressCard";
import CategoryCard from "./components/Cards/categoryCard";
import {
  categoryImages,
  newArrivalsImages,
  heroOneDesktop,
  heroTwoDesktop,
  heroOneMobile,
  heroTwoMobile,
} from "./lib/images";

import Footer from "./components/Footer/footer";
import SectionHeading from "./components/sectionHeading";
import Hero from "./components/hero";
import FooterNavBar from "./components/Footer/footerNavBar";
import CategoryNavBar from "./components/Header/categoryNavbar";
import MobileFooter from "./components/Footer/mobileFooter";
import Header from "./components/Header/header";
import TrendingSection from "./components/Sections/trendingSection";
import FeaturesSection from "./components/Sections/featuredSection";
import BrandsSection from "./components/Sections/brandsSection";
import InstagramSection from "./components/Sections/instaCardsSection";

export default function Home() {
  return (
    <div className="relative">
      {/* <Header />
      <CategoryNavBar /> */}
      <div className="xs:w-11/12 3xl:w-8/12 mx-auto relative">
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
          <TrendingSection />
        </section>

        {/* Featured On Wrapper */}
        <section className="pt-5 pb-10">
          <FeaturesSection />
        </section>

        {/* Brand cards swiper */}
        <section className="py-5 border-t-2">
          <BrandsSection />
        </section>

        {/* Insta Cards Swiper */}
        <section className="py-5 ">
          <InstagramSection />
        </section>
      </div>
      {/* 
      <Footer />
      <MobileFooter />
      <FooterNavBar /> */}
    </div>
  );
}
