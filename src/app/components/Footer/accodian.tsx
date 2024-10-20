"use client";
import { useState } from "react";
import plus from "@/app/assets/icons/plus.svg";
import minus from "@/app/assets/icons/minus.svg";
import Image from "next/image";

type accordianProps = {
  title: string;
  contentArray: string[];
};

const Accordian = ({ title, contentArray }: accordianProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <div
        onClick={handleClick}
        className="flex justify-between items-center border-b-2 mb-4 pb-4"
      >
        <p className="font-semibold">{title}</p>
        <p className="">
          {isOpen ? (
            <Image src={minus} alt="minus" />
          ) : (
            <Image src={plus} alt="plus" />
          )}
        </p>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-2 transition-all duration-500">
          {contentArray.map((content, index) => (
            <p className="text-sm" key={index}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
