import React from "react";
import { ScorersApiResponse } from "../../../../types/topScorers";
import Error from "../Error/Error";

export default function ScorersList({
  scorers,
}: {
  scorers: ScorersApiResponse;
}) {
  const result = scorers.response;
  const error = scorers.errors.requests;
  console.log(error);

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {error === process.env.NEXT_PUBLIC_ERROR ? (
        <Error error={error} />
      ) : (
        result.map((el, index) => (
          <div
            key={el.player.id}
            className="relative bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg"
          >
            <div className="flex flex-col items-center w-auto h-auto justify-center p-2">
              <img
                src={el.player.photo}
                alt={el.player.name}
                className="rounded-full shadow-md"
              />

              <p className="absolute top-2 left-2 rounded-full  flex justify-center items-center z-10 text-black">
                #{index + 1}
              </p>
            </div>
            <div className="p-2">
              <div className=" rounded-lg">
                <p className="text-gray-900 text-center">{el.player.name}</p>
                <div className="flex flex-col items-center">
                  <p className="text-gray-900 text-center pt-2">
                    {el.statistics[0].team.name}
                  </p>
                  <img
                    src={el.statistics[0].team.logo}
                    alt={el.statistics[0].team.name}
                    width={40}
                    height={40}
                    className=""
                  />
                </div>
                <div className="text-center">
                  <p className="text-gray-900 pt-2">
                    Games: {el.statistics[0].games.appearences}
                  </p>
                  <div className="flex justify-center">
                    <p className="text-gray-900 pt-2 mr-1">
                      Goals: {el.statistics[0].goals.total}
                    </p>
                    <p className="text-gray-900 pt-2 ml-1">
                      Assists: {el.statistics[0].goals.assists}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
