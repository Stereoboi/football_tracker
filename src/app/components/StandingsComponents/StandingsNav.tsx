"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type StandingsNavProps = {
  path: string;
};

export default function StandingsNav({ path }: StandingsNavProps) {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    const active = pathname.split("/");

    setIsActive(active[active.length - 1]);
  }, [pathname]);

  return (
    <div className=" flex justify-center align-middle items-center my-3">
      <ul className="flex flex-wrap  text-center  border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="mr-2">
          <Link
            href={`/standings/${path}`}
            className={`inline-block p-4 rounded-t-lg ${
              isActive === path
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-white"
                : "text-gray-400"
            }`}
          >
            Standing
          </Link>
        </li>
        <li className="mr-2">
          <Link
            prefetch={false}
            href={`/standings/${path}/topscorers`}
            className={`inline-block p-4 rounded-t-lg ${
              isActive === "topscorers"
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-white"
                : "text-gray-400"
            }`}
          >
            Top scorers
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href={`/standings/${path}/homeresults`}
            className={`inline-block p-4 rounded-t-lg ${
              isActive === "homeresults"
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-white"
                : "text-gray-400"
            }`}
          >
            Home
          </Link>
        </li>
        <li className="mr-2">
          <Link
            href={`/standings/${path}/awayresults`}
            className={`inline-block p-4 rounded-t-lg ${
              isActive === "awayresults"
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-white"
                : "text-gray-400"
            }`}
          >
            Away
          </Link>
        </li>
        <li>
          <Link
            prefetch={false}
            href={`/standings/${path}/fixtures`}
            className={`inline-block p-4 rounded-t-lg ${
              isActive === "fixtures"
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-white"
                : "text-gray-400"
            }`}
          >
            Fixtures
          </Link>
        </li>
      </ul>
    </div>
  );
}
