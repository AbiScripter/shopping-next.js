import Image from "next/image";
import { paymentIcons } from "../lib/images";
import { AccordianFooterData } from "./accordianFooter";
import FooterFormSection from "./footerFormSection";

const Footer = () => {
  return (
    <div className="mt-5 bg-black xs:hidden md:block">
      <div className="flex gap-5 flex-col bg-black text-gray-300 xs:w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
        <div className="grid md:grid-cols-3 gap-10 lg:grid-cols-5 my-10">
          {/* footer links */}
          <>
            {AccordianFooterData.map((data, index) => (
              <div key={index} className="flex flex-col gap-4 col-span-1">
                <p className="font-bold">{data.title}</p>
                <div className="flex flex-col gap-2">
                  {data.contentArray.map((content) => (
                    <p
                      key={content}
                      className="text-sm  cursor-pointer  hover:underline hover:text-white"
                    >
                      {content}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </>

          {/* footer form */}
          <FooterFormSection />
        </div>

        <div className="flex justify-between items-center my-10">
          <p className="text-sm">
            © 2024, Ella Demo. All Rights Reserved. Themes By Halothemes
          </p>
          <div className="flex gap-2">
            {paymentIcons.map((icon, index) => (
              <Image key={index} src={icon.src} alt={icon.alt} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// const ListItem = ({ content }: { content: string }) => {
//   return (
//     <li className="text-sm  cursor-pointer  hover:underline hover:text-white">
//       {content}
//     </li>
//   );
// };

export default Footer;
