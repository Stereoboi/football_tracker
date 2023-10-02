import React from "react";
import ScorersList from "@/app/components/StandingsComponents/ScorersList";
import getTopScorers from "../../../../../lib/getTopScorrers";
import { ScorersApiResponse } from "../../../../../types/topScorers";
import Error from "../../../components/Error/Error";
type Params = {
  params: {
    standingsId: string;
  };
};

export async function generateMetadata({ params: { standingsId } }: Params) {
  const result: ScorersApiResponse = await getTopScorers(standingsId);

  const error = result.errors.requests;

  if (error) {
    return {
      title: `REACHED THE REQUEST LIMIT`,
      description: `REACHED THE REQUEST LIMIT`,
    };
  } else {
    return {
      title: `${result.response[0].statistics[0].league.name} top scorers`,
      description: `Search results for ${result.response[0].statistics[0].league.name} top scorers `,
    };
  }
}

export default async function TopScorers({ params: { standingsId } }: Params) {
  const result: ScorersApiResponse = await getTopScorers(standingsId);

  const error = result.errors.requests;

  return (
    <>
      {error === process.env.NEXT_PUBLIC_ERROR ? (
        <Error error={error} />
      ) : (
        <ScorersList scorers={result} />
      )}
    </>
  );
}
