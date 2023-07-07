import React from "react";
import getStanding from "../../../../lib/getStanding";
import Table from "@/app/components/StandingsComponents/Table";
import { Teams } from "../../../../types/types";
import { StandingApiResponse } from "../../../../types/standingsType";

type Params = {
  params: {
    standingsId: string;
  };
};

export async function generateMetadata({ params: { standingsId } }: Params) {
  const standingData: StandingApiResponse = await getStanding(standingsId);

  return {
    title: `${standingData.response[0].league.name} standing`,
    description: `Search results for ${standingData.response[0].league.name} standing `,
  };
  // return {
  //   title: `title`,
  //   description: `desc title`,
  // };
}

export default async function TeamsPage({ params: { standingsId } }: Params) {
  const dataStanding = await await getStanding(standingsId);

  return (
    <main>
      <Table standings={dataStanding} />
    </main>
  );
}
