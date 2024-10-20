import Image from "next/image";
import bag from "@/app/assets/icons/bag.svg";
import home from "@/app/assets/icons/home.svg";
import collection from "@/app/assets/icons/collection.svg";
import search from "@/app/assets/icons/search.svg";
import account from "@/app/assets/icons/account.svg";

const FooterNavBar = () => {
  return (
    <div className="bg-white fixed bottom-0 left-0 flex items-center text-black w-full justify-between z-20 shadow-xl py-5 px-5 xs:fixed md:hidden">
      <p className="flex flex-col items-center">
        <span>
          <Image src={home} alt="home" />
        </span>
        <span>Home</span>
      </p>

      <p className="flex flex-col items-center">
        <span>
          <Image src={search} alt="search" />
        </span>
        <span>Search</span>
      </p>
      <p className="flex flex-col items-center">
        <span>
          <Image src={collection} alt="collection" />
        </span>
        <span>Collection</span>
      </p>
      <p className="flex flex-col items-center">
        <span>
          <Image src={account} alt="account" />
        </span>
        <span>Account</span>
      </p>
      <p className="flex flex-col items-center">
        <span>
          <Image src={bag} alt="cart" />
        </span>
        <span>Cart</span>
      </p>
    </div>
  );
};

export default FooterNavBar;
