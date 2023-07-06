import React from "react";
import { ResponseItem } from "../../../types/leagueTypes";
import LeagueCard from "../components/LeaguesComponents/LeagueCard";
import getAllLeagues from "../../../lib/getAllLeagues";
import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leagues",
  description: "Best EU football leagues",
};

type Params = {
  params: {
    standingsId: string;
  };
};

export default async function Leagues() {
  const leaguesData: ResponseItem[] = await getAllLeagues();

  return (
    <div className="">
      <main className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3  ">
        {leaguesData.map((el: ResponseItem) => {
          return <LeagueCard dataLeague={el} key={el.league.id} />;
        })}
      </main>
    </div>
  );
}
