import Image, { StaticImageData } from "next/image";
import Button from "../button";

type FeatureCardProps = {
  src: StaticImageData;
  title: string;
  content: string;
};

const FeatureCard = ({ src, title, content }: FeatureCardProps) => {
  return (
    <div className="flex flex-col gap-5 items-center">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt="feature-card"
          className="transition-all duration-700 hover:scale-110 cursor-pointer "
        />
      </div>

      <p className="text-xl font-semibold">{title.toUpperCase()}</p>
      <p className="text-sm text-center">{content}</p>
      <Button text="shop now" />
    </div>
  );
};

export default FeatureCard;
