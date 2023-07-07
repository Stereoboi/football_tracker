import React from "react";
import FixturesTable from "@/app/components/StandingsComponents/FixturesTable";
import getCurrentMatches from "../../../../../lib/getCurrentMatches";
import RegularLap from "@/app/components/StandingsComponents/RegularLap";
import getListOfRounds from "../../../../../lib/getListOfRounds";

type Params = {
  params: {
    standingsId: string;
  };
};

export async function generateMetadata({ params: { standingsId } }: Params) {
  // const result = await getCurrentMatches(standingsId);
  // console.log(result.response[0].league);

  return {
    title: `fixtures`,
    description: `Fixtures `,
    // title: `${result.response[0].league.round}`,
    // description: `Fixtures for ${result.response[0].league.name} ${result.response[0].league.round}`,
  };
}

export default async function Fixtures({ params: { standingsId } }: Params) {
  const result = await getCurrentMatches(standingsId);

  const rounds: any = await getListOfRounds(standingsId);

  return (
    <>
      <RegularLap rounds={rounds} />
      <FixturesTable fixtures={result.response} />
    </>
  );
}
