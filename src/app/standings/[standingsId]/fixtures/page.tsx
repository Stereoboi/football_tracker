import React from "react";
import FixturesTable from "@/app/components/StandingsComponents/FixturesTable";
import getCurrentMatches from "../../../../../lib/getCurrentMatches";
import RegularLap from "@/app/components/StandingsComponents/RegularLap";
import getListOfRounds from "../../../../../lib/getListOfRounds";
import Error from "@/app/components/Error/Error";

type Params = {
  params: {
    standingsId: string;
  };
};

export async function generateMetadata({ params: { standingsId } }: Params) {
  const result = await getCurrentMatches(standingsId);
  const error = result.errors.requests;

  if (error) {
    return {
      title: `REACHED THE REQUEST LIMIT`,
      description: `REACHED THE REQUEST LIMIT`,
    };
  } else {
    return {
      title: `${result.response[0].league.round}`,
      description: `Fixtures for ${result.response[0].league.name} ${result.response[0].league.round}`,
    };
  }
}

export default async function Fixtures({ params: { standingsId } }: Params) {
  const result = await getCurrentMatches(standingsId);
  const rounds = await getListOfRounds(standingsId);

  const filteredData = rounds.response.filter((el: string[]) =>
    el.includes("Regular Season -")
  );
  const error = rounds.errors.requests;

  return (
    <>
      {error === process.env.NEXT_PUBLIC_ERROR ? (
        <Error error={error} />
      ) : (
        <>
          <RegularLap rounds={filteredData} />
          <FixturesTable fixtures={result.response} />
        </>
      )}
    </>
  );
}
