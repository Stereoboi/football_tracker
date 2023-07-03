"use client";

import React, { useContext } from "react";
import { ThemeContext } from "@/app/conntext/ThemeContext";

const DarkModeToggle = () => {
  const { mode, toggle } = useContext(ThemeContext);

  return (
    <div
      className="w-[42px] h-[24px] border-2 dark:border-white border-light-blue-800 rounded-full flex items-center justify-between p-[2px] relative cursor-pointer mr-3"
      onClick={toggle}
    >
      <div className="text-[12px]">🌙</div>
      <div className="text-[12px]">🔆</div>
      <div
        className={`w-[16px] h-[16px] dark:bg-white bg-light-blue-800 rounded-full absolute dark:left-[20px]`}
      />
    </div>
  );
};

export default DarkModeToggle;
