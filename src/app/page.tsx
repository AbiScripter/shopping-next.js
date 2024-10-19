// import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Hero from "./components/hero";
import heroOneImg from "@/app/assets/hero-1.jpg";
import heroTwoImg from "@/app/assets/hero-2.webp";
import categoryImgOne from "@/app/assets/category-image-1.jpg";
import categoryImgTwo from "@/app/assets/category-image-2.jpg";
import categoryImgThree from "@/app/assets/category-image-3.jpg";
import featureImgOne from "@/app/assets/feature-1.webp";
import featureImgTwo from "@/app/assets/feature-2.webp";
import featureImgThree from "@/app/assets/feature-3.webp";
import DressCard from "./components/dressCard";
import CategoryCard from "./components/categoryCard";
import FeatureCard from "./components/featureCard";
import { newArrivalsImages } from "./lib/images";
import NewArrivalsSwiper from "./components/newArrivalsSwiper";
import InstaCardsSwiper from "./components/instaCardsSwiper";
import Footer from "./components/footer";
import AccordianFooter from "./components/accordianFooter";

export default function Home() {
  return (
    <div>
      <div className="xs:w-11/12 lg:w-10/12 xl:w-7/12 mx-auto relative">
        {/* Hero Wrapper */}
        <Hero
          imgsrc={heroOneImg}
          heading="cosmopolis"
          text="Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous."
          contentPosition="left"
        />
        {/* CategoryCards Wrapper */}
        <div className="grid grid-cols-3 gap-6 my-10">
          <CategoryCard imgsrc={categoryImgOne} title="editor's pick" />
          <CategoryCard imgsrc={categoryImgTwo} title="shoes" />
          <CategoryCard imgsrc={categoryImgThree} title="accessories" />
        </div>

        {/* New Arrivals Wrapper */}
        <div className="border border-black">
          {/* heading */}
          <div className="flex items-center justify-center my-4">
            <div className="border-t border-2 border-black flex-grow mx-4"></div>
            <p className="text-xl font-bold text-center mx-32">NEW ARRIVALS</p>
            <div className="border-t border-2 border-black flex-grow mx-4"></div>
          </div>
          {/* dress container */}
          <div className="grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xs:gap-4 sm:gap-4 md:gap-8 lg:gap-8  border border-purple-600">
            {newArrivalsImages.map((img) => (
              <DressCard key={img.alt} {...img} />
            ))}
          </div>
        </div>

        {/* Hero Wrapper */}
        <Hero
          imgsrc={heroTwoImg}
          heading="metropólis"
          text="Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo lacus meleifend menean diverra loremous."
          contentPosition="right"
        />

        {/* Trending Now Wrapper using SWIPER.JS*/}
        <NewArrivalsSwiper />

        {/* Featured On Wrapper */}
        <div className="grid grid-cols-3 gap-5">
          <FeatureCard
            imgsrc={featureImgOne}
            contentTitle="lore de dorus"
            content="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis."
          />
          <FeatureCard
            imgsrc={featureImgTwo}
            contentTitle="milancelos lanos"
            content="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis."
          />
          <FeatureCard
            imgsrc={featureImgThree}
            contentTitle="como a milano"
            content="Nullam aliquet vestibulum augue non varius. Cras cosmo congue an melitos. Dui del ante le maliquam. Praesent murna de tellus laoreet cosmopolis."
          />
        </div>

        {/* Insta Cards Swiper */}
        <InstaCardsSwiper />
      </div>
      <Footer />
      <AccordianFooter />
    </div>
  );
}
