import React from "react";
import { TeamType, TeamResponse } from "../../../../types/teamType";

export default function TeamCard({ data }: { data: TeamResponse[] }) {
  return (
    <div>
      <div className="text-gray-600 dark:text-white max-w-fit bg-light-blue-100 dark:bg-gray-800 rounded-lg mx-auto">
        <h1 className="text-center font-bold text-lg sm:text-2xl p-1">
          {data[0].team.name}
        </h1>
        <div className="flex flex-col p-2">
          <div className="sm:flex">
            <img
              src={data[0].team.logo}
              alt={data[0].team.name}
              className="mx-auto sm:my-auto w-30 h-30 "
            />
            <img
              src={data[0].venue.image}
              alt={data[0].venue.name}
              className="rounded-lg  w-72 h-36 p-1 mx-auto"
            />
          </div>
          <div className="flex pt-2">
            <div className="w-1/2 sm:w-1/3">
              <p>
                Country: <span className="italic">{data[0].team.country}</span>
              </p>
              <p>
                City: <span className="italic">{data[0].venue.city}</span>
              </p>
              <p>
                Founded: <span className="italic">{data[0].team.founded}</span>
              </p>
            </div>
            <div className=" w-1/2 sm:w-2/3">
              <h2>
                Stadium: <span className="italic">{data[0].venue.name}</span>
              </h2>
              <p>
                Capacity:{" "}
                <span className="italic">{data[0].venue.capacity}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
