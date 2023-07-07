import React from "react";
import { Match } from "../../../../types/fixturesTypes";

export default function FixturesTable({ fixtures }: { fixtures: Match[] }) {
  return (
    <div>
      <h1 className="dark:text-white text-center mt-2">
        {fixtures[0].league.round}
      </h1>
      <ul className="mt-5  dark:text-white">
        {fixtures.map((el, index) => {
          return (
            <li key={el.fixture.id}>
              <div
                className={`flex flex-row items-center justify-between ${
                  index % 2 !== 0 && "dark:bg-blue-gray-800 bg-light-blue-400"
                }`}
              >
                <div className=" flex items-center justify-between w-1/2">
                  <img
                    src={el.teams.away.logo}
                    alt={el.teams.away.name}
                    className="m-2 sm:w-12 sm:h-12 w-8 h-8"
                  />

                  <p className="w-1/4 truncate ...">{el.teams.away.name}</p>
                  <p className="w-1/4 text-center ">{el.goals.away}</p>
                </div>

                <div className=" flex items-center justify-between w-1/2">
                  <p className="w-1/4 text-center">{el.goals.home}</p>
                  <p className="w-1/4 text-end truncate ...">
                    {el.teams.home.name}
                  </p>

                  <img
                    src={el.teams.home.logo}
                    alt={el.teams.home.name}
                    className="m-2 sm:w-12 sm:h-12 w-8 h-8"
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
