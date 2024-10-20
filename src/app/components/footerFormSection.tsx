import Image from "next/image";
import { socialMediaIcons } from "../lib/images";

const FooterFormSection = () => {
  return (
    <div className="flex flex-col gap-4 md:col-span-2 ">
      <h4 className="font-bold">NEWSLETTER SIGN UP</h4>
      <p className="text-sm">
        Sign up for exclusive updates, new arrivals & insider only discounts
      </p>
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="enter your email address"
          className="p-2 w-2/3 bg-black  border border-white"
        />
        <button className="w-44 py-2 px-5 bg-white text-black font-semibold hover:bg-black hover:text-white transition-all duration-500 border border-black ">
          SUBMIT
        </button>
      </div>

      {/* social media icons */}
      <div className="flex gap-4">
        {socialMediaIcons.map((icon, index) => (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            className="bg-white rounded-full p-2 w-8 cursor-pointer"
            height={100}
            width={100}
          />
        ))}
      </div>
    </div>
  );
};

export default FooterFormSection;
