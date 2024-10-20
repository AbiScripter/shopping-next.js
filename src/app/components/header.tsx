import logo from "@/app/assets/ella-logo-black-home-5_65x.webp";
import Image from "next/image";
import bag from "@/app/assets/bag.svg";
import heart from "@/app/assets/heart.svg";
import search from "@/app/assets/search.svg";
import burgermenu from "@/app/assets/hamburger.svg";
import user from "@/app/assets/user.svg";

const Header = () => {
  return (
    <div className="text-sm py-5  ">
      <div className="xs:w-11/12 lg:w-10/12 2xl:w-8/12 mx-auto">
        <MainNav />
        <UtilityNav />
      </div>
    </div>
  );
};

const MainNav = () => {
  return (
    <div className="flex justify-between items-center xs:hidden lg:flex">
      <p className="bg-red text-red-500">
        <Image width={70} src={logo} alt="logo" className="logo" />
      </p>
      <div className="flex gap-4">
        <p className="flex gap-1 items-center">
          <span>
            <Image src={bag} alt="bag" />
          </span>
          <span>Shopping cart</span>
        </p>
        <p className="flex gap-1 items-center">
          <span>
            <Image src={heart} alt="heart" />
          </span>
          <span> My wish list</span>
        </p>
        <p>Sign in or Create an account</p>
      </div>
    </div>
  );
};

const UtilityNav = () => {
  return (
    <div className="bg-white left-0 flex items-center text-black w-full justify-between z-20 py-3 px-3 xs:flex lg:hidden">
      <p>
        <Image src={burgermenu} alt="menu" />
      </p>
      <p>
        <Image src={search} alt="search" />
      </p>
      <p>
        <Image src={logo} alt="logo" width={60} />
      </p>
      <p>
        <Image src={user} alt="user" />
      </p>
      <p>
        <Image src={bag} alt="cart" />
      </p>
    </div>
  );
};

export default Header;
