import Image, { StaticImageData } from "next/image";
import Button from "./button";

type heroProps = {
  imgsrc: StaticImageData;
  heading: string;
  text: string;
  contentPosition: "left" | "right";
};

const Hero = ({ imgsrc, heading, text, contentPosition }: heroProps) => {
  return (
    <div className="border border-red-600 relative">
      <Image src={imgsrc} alt="hero-one" />
      <div
        className={`absolute top-0 ${contentPosition}-0 flex justify-center items-center flex-col gap-5`}
      >
        <p className="text-3xl font-bold ">{heading.toUpperCase()}</p>
        <p className="text-sm text-center w-4/6">{text}</p>
        <Button text="SHOP NOW" />
      </div>
    </div>
  );
};

export default Hero;
