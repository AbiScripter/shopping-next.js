"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import lightIcon from "@/app/assets/icons/sun.svg";
import darkIcon from "@/app/assets/icons/moon.svg";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState<string>("light");

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.body.classList.add("dark");
      }
    }
  }, []);

  const darkModeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div
      onClick={darkModeHandler}
      className="w-6 md:w-8 cursor-pointer absolute right-3 top-2"
    >
      {theme === "light" ? (
        <Image src={lightIcon} alt="light theme icon" />
      ) : (
        <Image src={darkIcon} alt="dark theme icon" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
