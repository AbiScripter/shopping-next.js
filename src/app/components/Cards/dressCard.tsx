import Image, { StaticImageData } from "next/image";

type DressCardProps = {
  src: StaticImageData;
  title: string;
  description: string;
  price: string;
  alt: string;
};

const DressCard = ({ src, title, description, price, alt }: DressCardProps) => {
  return (
    <div className="cursor-pointer flex flex-col gap-1   ">
      <div className="overflow-hidden">
        <Image
          src={src}
          alt={alt}
          className="transition-all duration-700 hover:scale-110"
        />
      </div>
      <p className="text-gray-400 text-sm text-center">{title.toUpperCase()}</p>
      <p className="text-sm text-center">{description}</p>
      <p className="text-sm font-bold text-center">${price}</p>
    </div>
  );
};

export default DressCard;
