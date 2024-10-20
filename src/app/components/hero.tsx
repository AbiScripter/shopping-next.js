"use client";
import { StaticImageData } from "next/image";
import Button from "./button";

type HeroProps = {
  imgMobile: StaticImageData;
  imgDesktop: StaticImageData;
  heading: string;
  text: string;
  contentPosition: "start" | "end";
};

const Hero = ({
  imgMobile,
  imgDesktop,
  heading,
  text,
  contentPosition,
}: HeroProps) => {
  return (
    <div className="py-5">
      <style jsx>{`
        @media (width >= 768px) {
          .hero-wrapper {
            background-image: url(${imgDesktop.src}); // Change to desktop image for larger screens
          }
        }
        @media (width < 768px) {
          .hero-wrapper {
            background-image: url(${imgMobile.src}); // Change to mobile image for smaller screens
          }
        }
      `}</style>
      <div
        className={`hero-wrapper relative w-full xs:h-[800px] md:h-[500px]  bg-cover bg-no-repeat bg-center flex xs:justify-center md:justify-${contentPosition} items-center xs:text-white md:text-custom-black`}
      >
        <div className="flex flex-col items-center gap-5 lg:w-2/3">
          <h1 className="text-3xl font-bold uppercase tracking-wide ">
            {heading}
          </h1>
          <p className="text-sm w-2/3 text-center">{text}</p>
          <Button text="SHOP NOW" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
