import React from "react";
import FixturesTable from "@/app/components/StandingsComponents/FixturesTable";
import getFixtures from "../../../../../../lib/getFixtures";
import { Fixtures } from "../../../../../../types/fixturesTypes";
import RegularLap from "@/app/components/StandingsComponents/RegularLap";
import getListOfRounds from "../../../../../../lib/getListOfRounds";
type Params = {
  params: {
    fixturesId: string;
    standingsId: string;
  };
};

export async function generateMetadata({
  params: { fixturesId, standingsId },
}: Params) {
  const fixturesFetch = await getFixtures(fixturesId, standingsId);

  return {
    title: `fixtures id`,
    description: `Fixtures id`,
    // title: `${fixturesFetch.response[0].league.round}`,
    // description: `Fixtures for ${fixturesFetch.response[0].league.name} ${fixturesFetch.response[0].league.round}`,
  };
}

export default async function FixtureByRound({
  params: { fixturesId, standingsId },
}: Params) {
  const fixturesFetch: Promise<Fixtures> = await getFixtures(
    fixturesId,
    standingsId
  );
  const fixturesData = (await fixturesFetch).response;
  const rounds: any = await getListOfRounds(standingsId);

  return (
    <>
      <RegularLap rounds={rounds} />
      <FixturesTable fixtures={fixturesData} />
    </>
  );
}
