import React from "react";
import HomeResultsTable from "@/app/components/StandingsComponents/HomeResultsTable";
import getStanding from "../../../../../lib/getStanding";

type Params = {
  params: {
    standingsId: string;
  };
};

export async function generateMetadata({ params: { standingsId } }: Params) {
  // const standingData = await getStanding(standingsId);

  return {
    title: `home`,
    description: `home`,
    // title: `${standingData.response[0].league.name} home results`,
    // description: `Search results for ${standingData.response[0].league.name} home results `,
  };
}

export default async function page({ params: { standingsId } }: Params) {
  const standingData = await getStanding(standingsId);

  return <HomeResultsTable standings={standingData} />;
}
