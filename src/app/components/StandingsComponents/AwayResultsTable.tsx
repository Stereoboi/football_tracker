import React from "react";
import { StandingsResponse } from "../../../../types/types";
import Image from "next/image";
import Link from "next/link";

export default function AwayResultsTable({
  standings,
}: {
  standings: StandingsResponse;
}) {
  return (
    <div className="flex justify-center align-middle dark:text-white">
      <table className="table-auto">
        <tbody>
          <tr>
            <th></th>
            <th></th>

            <th>
              <p className="ml-2">MP</p>
            </th>
            <th>
              <p className="ml-2">W</p>
            </th>
            <th>
              <p className="ml-2">D</p>
            </th>
            <th>
              <p className="ml-2">L</p>
            </th>
            <th className="hidden md:block">
              <p>G</p>
            </th>
            <th>
              <p className="ml-2">Points</p>
            </th>
            <th></th>
          </tr>

          {standings.response[0].league.standings[0].map((el) => {
            return (
              <tr key={el.team.id}>
                <td>
                  <p className="relative mr-2">{el.rank}</p>
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
                  <p className="ml-2 flex justify-center">{el.away.played}</p>
                </td>
                <td>
                  <p className="ml-2 flex justify-center">{el.away.win}</p>
                </td>
                <td>
                  <p className="ml-2 flex justify-center">{el.away.draw}</p>
                </td>
                <td>
                  <p className="ml-2 flex justify-center">{el.away.lose}</p>
                </td>
                <td className="hidden md:block">
                  <p className="ml-2 flex justify-center">
                    {el.home.goals.for}/{el.home.goals.against}
                  </p>
                </td>
                <td>
                  <p className="ml-2 flex justify-center">{el.points}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
