import Image from "next/image";
import { paymentIcons } from "../lib/images";
import Accordian from "./accodian";
import FooterFormSection from "./footerFormSection";

export const AccordianFooterData = [
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
    <div className="mt-5 bg-black md:hidden">
      {/* footer content */}
      <div className="flex gap-10 flex-col bg-black text-white xs:w-11/12 mx-auto py-10">
        {/* Accordian */}
        <div className="flex flex-col gap-8">
          {AccordianFooterData.map((data, index) => (
            <Accordian key={index} {...data} />
          ))}
        </div>

        {/* footer form */}
        <FooterFormSection />

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
