"use client";
import { useState } from "react";
import Image from "next/image";

import logo from "@/app/assets/brands/ella-logo.webp";
import bag from "@/app/assets/icons/bag.svg";
import heart from "@/app/assets/icons/heart.svg";
import search from "@/app/assets/icons/search.svg";
import burgermenu from "@/app/assets/icons/hamburger.svg";
import user from "@/app/assets/icons/user.svg";
import smallbag from "@/app/assets/icons/bagsmall.svg";

import Sidebar from "./sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <div className="text-sm py-5  ">
      <div className="xs:w-11/12 3xl:w-8/12  mx-auto">
        <MainNav />
        <UtilityNav toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </div>
  );
};

const UtilityNav = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
  return (
    <div className="bg-white left-0 flex items-center text-black w-full justify-between z-20 py-3 px-3 xs:flex lg:hidden">
      <div className="flex gap-8">
        <p onClick={toggleSidebar} className="cursor-pointer">
          <Image src={burgermenu} alt="menu" />
        </p>
        <p>
          <Image src={search} alt="search" />
        </p>
      </div>

      <p>
        <Image src={logo} alt="logo" width={60} />
      </p>

      <div className="flex gap-8">
        <p>
          <Image src={user} alt="user" />
        </p>
        <p>
          <Image src={bag} alt="cart" />
        </p>
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
      <div className="flex gap-6">
        <p className="flex gap-1 items-center">
          <span>
            <Image src={smallbag} alt="bag" />
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

export default Header;
