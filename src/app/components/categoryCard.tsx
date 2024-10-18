import Image, { StaticImageData } from "next/image";

type CategoryCardProps = {
  imgsrc: StaticImageData;
  title: string;
};

const CategoryCard = ({ imgsrc, title }: CategoryCardProps) => {
  return (
    <div className="overflow-hidden relative w-full border border-green-600">
      <Image
        src={imgsrc}
        alt="category-card"
        className="transition-all duration-700 hover:scale-110 cursor-pointer"
      />
      <p className="text-white font-semibold  text-center absolute top-1/2 left-auto w-full hover:underline cursor-pointer">
        {title.toUpperCase()}
      </p>
    </div>
  );
};

export default CategoryCard;
