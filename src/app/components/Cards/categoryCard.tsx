import Image, { StaticImageData } from "next/image";

type CategoryCardProps = {
  src: StaticImageData;
  title: string;
};

const CategoryCard = ({ src, title }: CategoryCardProps) => {
  return (
    <div className="overflow-hidden relative w-full">
      <Image
        src={src}
        alt="category-card"
        className="transition-all duration-700 hover:scale-110 cursor-pointer w-full"
      />
      <p className="text-white text-lg font-semibold  text-center absolute top-1/2 left-auto w-full hover:underline cursor-pointer">
        {title.toUpperCase()}
      </p>
    </div>
  );
};

export default CategoryCard;
