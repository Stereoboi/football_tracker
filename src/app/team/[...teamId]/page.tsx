import React from "react";
import getTeam from "../../../../lib/getTeam";
import getPlayers from "../../../../lib/getPlayers";
import { Suspense } from "react";
import { ApiResponse, Params } from "../../../../types/teamDetailsType";
import PlayersList from "@/app/components/TeamPageComponents/PlayersList";
import TeamCard from "@/app/components/TeamPageComponents/TeamCard";

export async function generateMetadata({ params: { teamId } }: Params) {
  const teamData = await getTeam(teamId[0], teamId[1]);
  return {
    title: `team`,
    description: `team`,
    // title: `${teamData.response[0].team.name} page`,
    // description: `Information about ${teamData.response[0].team.name} squad and venue`,
  };
}

export default async function TeamPage({ params: { teamId } }: Params) {
  const teamData = await getTeam(teamId[0], teamId[1]);
  const playersData = await getPlayers(teamId[0]);
  console.log(playersData);

  const data = teamData.response;
  const players = playersData;

  return (
    <section className="px-12  2xl:px-48  lg:grid lg:grid-cols-2 lg:gap-6 mt-5 ">
      <TeamCard data={data} />
      <PlayersList data={players} />
    </section>
  );
}
