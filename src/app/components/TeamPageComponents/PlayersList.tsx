import React from "react";
import { SquadAPIResponse } from "../../../../types/PlayerType";
export default function PlayersList({ data }: { data: SquadAPIResponse }) {
  console.log(data);

  return (
    <div>
      <ul className="dark:text-white text-gray-600 bg-light-blue-100 dark:bg-gray-800 rounded-lg mt-10 lg:mt-0 max-w-md lg:max-w-xl mx-auto">
        {data.response[0].players.map((el) => {
          return (
            <li key={el.id} className="flex p-4  ">
              <div className="flex w-full justify-between items-center text-center rounded-lg bg-light-blue-400  dark:bg-gray-600">
                <img
                  src={el.photo}
                  alt={el.name}
                  className="rounded-lg w-10 h-10 sm:w-20 sm:h-20"
                />
                <p className="w-1/5">{el.name}</p>
                <p className="w-1/5">{el.position}</p>
                <p className="w-1/5">Age:{el.age}</p>
                <p className="w-1/5">#{el.number}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
