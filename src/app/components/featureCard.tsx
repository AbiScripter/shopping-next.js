import Image, { StaticImageData } from "next/image";
import Button from "./button";

type FeatureCardProps = {
  imgsrc: StaticImageData;
  contentTitle: string;
  content: string;
};

const FeatureCard = ({ imgsrc, contentTitle, content }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="overflow-hidden relative w-full border border-green-600">
        <Image
          src={imgsrc}
          alt="feature-card"
          className="transition-all duration-700 hover:scale-110 cursor-pointer"
        />
      </div>
      <p className="text-xl font-semibold">{contentTitle.toUpperCase()}</p>
      <p className="text-sm text-center">{content}</p>
      <Button text="shop now" />
    </div>
  );
};

export default FeatureCard;
