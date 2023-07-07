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
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
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
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
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
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
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
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
                : "text-gray-400"
            }`}
          >
            Away
          </Link>
        </li>
        <li>
          <Link
            href={`/standings/${path}/fixtures`}
            className={`inline-block p-4 rounded-t-lg ${
              isActive === "fixtures"
                ? "text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
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
{
  /* <div className=" flex justify-center align-middle items-center my-3">
      <div className=" rounded-md shadow-sm">
        <Link
          href={`/standings/${path}`}
          aria-current="page"
          className="px-4 py-2  text-blue-700 bg-white border border-gray-200 rounded-l-lg hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Standings
        </Link>
        <Link
          href={`/standings/${path}/topscorers`}
          className="px-4 py-2  text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Top Scorers
        </Link>
        <Link
          href={`/standings/${path}/homeresults`}
          className="px-4 py-2  text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Home results
        </Link>
        <Link
          href={`/standings/${path}/awayresults`}
          className="px-4 py-2  text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Away results
        </Link>
        <Link
          href={`/standings/${path}/fixtures`}
          className="px-4 py-2  text-gray-900 bg-white border border-gray-200 rounded-r-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          Fixtures
        </Link>
      </div>
    </div> */
}
