import Image from "next/image";
import { paymentIcons, socialMediaIcons } from "../lib/images";
import Accordian from "./accodian";

const AccordianFooterData = [
  {
    title: "SHOP",
    contentArray: [
      "New In",
      "Women",
      "Men",
      "Shoes",
      "Bags & Accessories",
      "Top Brands",
      "Sale & Special Offers",
    ],
  },
  {
    title: "INFORMATION",
    contentArray: ["About", "Blog"],
  },
  {
    title: "CUSTOMER SERVICE",
    contentArray: [
      "Search Terms",
      "Advanced Search",
      "Orders And Returns",
      "Contact Us",
      "Theme FAQs",
      "Consultant",
      "Store Locations",
    ],
  },
];

const AccordianFooter = () => {
  return (
    //this div is just for outer layering
    <div className="mt-20 bg-black">
      {/* footer content */}
      <div className="flex gap-10 flex-col bg-black text-white md:hidden xs:w-11/12 mx-auto py-10">
        {/* Accordian */}
        <div className="flex flex-col gap-8">
          {AccordianFooterData.map((data, index) => (
            <Accordian key={index} {...data} />
          ))}
        </div>

        {/* footer form */}
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
              />
            ))}
          </div>
        </div>

        {/* Payment icons and copyright */}
        <div className="flex  flex-col gap-4 items-center my-10">
          <p className="text-sm">
            © 2024, Ella Demo. All Rights Reserved. Themes By Halothemes
          </p>
          <div className="flex gap-2">
            {paymentIcons.map((icon, index) => (
              <Image key={index} src={icon.src} alt={icon.alt} height={30} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordianFooter;
