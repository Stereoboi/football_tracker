import React from "react";
import { SearchTeam } from "../../../../types/searchType";
import Link from "next/link";

export default function FoundTeamsList({ data }: { data: SearchTeam }) {
  return (
    data && (
      <ul className="dark:text-white text-gray-600 grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  mt-6">
        {data.response.map((el) => {
          return (
            <Link key={el.team.id} href={`/team/${el.team.id}`}>
              <li className=" dark:bg-blue-gray-800 rounded-lg bg-gradient-custom hover:rounded-lg focus:rounded-lg transition-all duration-300 ">
                <div className="flex flex-col items-center justify-center p-2 rounded-lg  hover:shadow-lg hover:scale-98 bg-light-blue-100  dark:bg-blue-gray-800 hover:rounded-lg transition-all duration-300 ">
                  <img
                    src={el.team.logo}
                    alt={el.team.name}
                    className="w-20 h-20"
                  />
                  <p>{el.team.name}</p>
                  <p>{el.team.country}</p>
                </div>
              </li>
            </Link>
          );
        })}
      </ul>
    )
  );
}
