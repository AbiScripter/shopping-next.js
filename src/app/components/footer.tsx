import Image from "next/image";
import { paymentIcons, socialMediaIcons } from "../lib/images";

const Footer = () => {
  return (
    <div className="mt-20 bg-black xs:hidden md:block">
      <div className="flex gap-5 flex-col bg-black text-gray-300 xs:w-11/12 lg:w-10/12 xl:w-7/12 mx-auto">
        <div className="grid md:grid-cols-3 gap-10 lg:grid-cols-5 my-10">
          <div className="flex flex-col gap-4 col-span-1">
            <p className="font-bold">SHOP</p>
            <ul className="flex flex-col gap-2">
              <ListItem content="New In" />
              <ListItem content="Women" />
              <ListItem content="Men" />
              <ListItem content="Shoes" />
              <ListItem content="Bags & Accessories" />
              <ListItem content="Top Brands" />
              <ListItem content="Sale & Special Offers" />
            </ul>
          </div>

          <div className="flex flex-col gap-4 col-span-1">
            <p className="font-bold">INFORMATION</p>
            <ul className="flex flex-col gap-2">
              <ListItem content="About" />
              <ListItem content="Blog" />
            </ul>
          </div>

          <div className="flex flex-col gap-4 col-span-1">
            <p className="font-bold">CUSTOMER SERVICE</p>
            <ul className="flex flex-col gap-2">
              <ListItem content="Search Terms" />
              <ListItem content="Advanced Search" />
              <ListItem content="Orders And Returns" />
              <ListItem content="Contact Us" />
              <ListItem content="Theme FAQs" />
              <ListItem content="Consultant" />
              <ListItem content="Store Locations" />
            </ul>
          </div>

          <div className="flex flex-col gap-4 md:col-span-2 ">
            <h4 className="font-bold">NEWSLETTER SIGN UP</h4>
            <p className="text-sm">
              Sign up for exclusive updates, new arrivals & insider only
              discounts
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
        </div>

        <div className="flex justify-between items-center my-10">
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

const ListItem = ({ content }: { content: string }) => {
  return (
    <li className="text-sm  cursor-pointer  hover:underline hover:text-white">
      {content}
    </li>
  );
};

export default Footer;
