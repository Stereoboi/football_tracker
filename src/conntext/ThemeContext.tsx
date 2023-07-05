"use client";

import { createContext, ReactNode, useState } from "react";
import React from "react";

type DarkThemeContextValue = {
  toggle: () => void;
  mode: string;
};

export const ThemeContext = createContext<DarkThemeContextValue>({
  toggle: () => {},
  mode: "dark",
});

export default function DarkThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ mode, toggle }}>
      <body
        className={`theme  ${mode} text-xs  sm:text-sm lg:text-base xl:text-lg font-rubick relative `}
      >
        {children}
      </body>
    </ThemeContext.Provider>
  );
}
