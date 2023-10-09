import { NextResponse } from "next/server";
import { ResponseItem } from "../../../../types/leagueTypes";

export async function GET() {
  const res = await fetch(
    `https://v3.football.api-sports.io/leagues?season=2022`,
    {
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.NEXT_PUBLIC_FOOTBALL_API_KEY}`,
      },
      next: { revalidate: 600 },
    }
  );
  const data = await res.json();

  const leaguesIds = [39, 78, 135, 140, 61, 88];

  const filteredData = data.response.filter((el: ResponseItem) =>
    leaguesIds.includes(el.league.id)
  );

  if (!res.ok) return undefined;

  return NextResponse.json(filteredData);
}
