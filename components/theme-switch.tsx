"use client";

import { useTheme } from "@/context/theme-context";
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    toggleTheme();
    setClicked(true);
  };

  const buttonClassName = `fixed bottom-5 right-5 bg-white w-[3.5rem] h-[3.5rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-dashed border-red-600 border-x-[3px] border-y-[3px] border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 ${
    clicked ? "" : "animate-bounce"
  }`;

  return (
    <button className={buttonClassName} onClick={handleClick}>
      {theme === "light" ? <BsSun /> : <BsMoon />}
    </button>
  );
}
