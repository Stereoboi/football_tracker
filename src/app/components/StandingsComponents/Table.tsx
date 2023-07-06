import React from "react";
import { StandingsResponse } from "../../../../types/types";
import Image from "next/image";
import Link from "next/link";
import getRankColor from "../../../../util/getRankColor";
import ToolTip from "./ToolTip";

export default function Table({ standings }: { standings: StandingsResponse }) {
  console.log(standings);

  return (
    <div className="flex justify-center align-middle dark:text-white ">
      <table>
        <tbody>
          <tr>
            <th></th>
            <th></th>

            <th>
              <p>MP</p>
            </th>
            <th>
              <p className="hidden md:block">W</p>
            </th>
            <th>
              <p className="hidden md:block">D</p>
            </th>
            <th>
              <p className="hidden md:block">L</p>
            </th>
            <th>
              <p>G</p>
            </th>
            <th className="hidden lg:block ">
              <p>+/-</p>
            </th>
            <th>
              <p>Points</p>
            </th>
            <th></th>
          </tr>

          {standings.response[0].league.standings[0].map((el) => {
            const rankColor = getRankColor(el.description || "");

            return (
              <tr key={el.team.id}>
                <td>
                  <p className={`relative `}>
                    {el.rank}.
                    {rankColor !== "bg-transparent" && (
                      <span
                        className={`absolute top-0 right-full w-2 h-full ${rankColor} `}
                      ></span>
                    )}
                  </p>
                </td>
                <td>
                  <div className="flex items-center">
                    <div style={{ width: "30px", height: "30px" }}>
                      <Image
                        src={el.team.logo}
                        alt="team logo"
                        width={30}
                        height={30}
                      />
                    </div>
                    <Link
                      href={`/team/${el.team.id}/${standings.response[0].league.id}`}
                      passHref
                      replace
                      scroll={false}
                      shallow={true}
                      legacyBehavior={true}
                    >
                      <a className="ml-2 block truncate">{el.team.name}</a>
                    </Link>
                  </div>
                </td>
                <td>
                  <p className=" flex justify-center ">{el.all.played}</p>
                </td>
                <td>
                  <p className="hidden md:flex justify-center ml-2 ">
                    {el.all.win}
                  </p>
                </td>
                <td>
                  <p className="hidden md:flex justify-center ml-2 ">
                    {el.all.draw}
                  </p>
                </td>
                <td>
                  <p className="hidden md:flex justify-center ml-2 ">
                    {el.all.lose}
                  </p>
                </td>
                <td>
                  <p className="md:flex justify-center ml-2 ">
                    {el.all.goals.for}/{el.all.goals.against}
                  </p>
                </td>
                <td className="hidden lg:flex justify-center ml-2 ">
                  <p className="">{el.goalsDiff}</p>
                </td>
                <td>
                  <p className="ml-2 flex justify-center ">{el.points}</p>
                </td>
                <td className="hidden xl:md:flex justify-center ml-2">
                  <div className="flex flex-row align-middle">
                    <div
                      className={` rounded-full w-5 h-5 ${
                        el.form[0] === "W"
                          ? "bg-green-700"
                          : el.form[0] === "D"
                          ? "bg-yellow-400"
                          : "bg-red-700"
                      }`}
                    >
                      <p
                        className={`flex justify-center align-middle  text-center  text-sm  `}
                      >
                        {el.form[0]}
                      </p>
                    </div>
                    <div
                      className={`ml-3 rounded-full w-5 h-5 ${
                        el.form[1] === "W"
                          ? "bg-green-700"
                          : el.form[1] === "D"
                          ? "bg-yellow-400"
                          : "bg-red-700"
                      }`}
                    >
                      <p
                        className={`flex justify-center align-middle  text-center  text-sm  `}
                      >
                        {el.form[1]}
                      </p>
                    </div>
                    <div
                      className={`ml-3 rounded-full w-5 h-5 ${
                        el.form[2] === "W"
                          ? "bg-green-700"
                          : el.form[2] === "D"
                          ? "bg-yellow-400"
                          : "bg-red-700"
                      }`}
                    >
                      <p
                        className={`flex justify-center align-middle  text-center  text-sm  `}
                      >
                        {el.form[2]}
                      </p>
                    </div>
                    <div
                      className={`ml-3 rounded-full w-5 h-5 ${
                        el.form[3] === "W"
                          ? "bg-green-700"
                          : el.form[3] === "D"
                          ? "bg-yellow-400"
                          : "bg-red-700"
                      }`}
                    >
                      <p
                        className={`flex justify-center align-middle  text-center  text-sm  `}
                      >
                        {el.form[3]}
                      </p>
                    </div>
                    <div
                      className={`ml-3 rounded-full w-5 h-5 ${
                        el.form[4] === "W"
                          ? "bg-green-700"
                          : el.form[4] === "D"
                          ? "bg-yellow-400"
                          : "bg-red-700"
                      }`}
                    >
                      <p
                        className={`flex justify-center align-middle  text-center  text-sm  `}
                      >
                        {el.form[4]}
                      </p>
                    </div>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
