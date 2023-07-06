// process.env.NEXT_FOOTBALL_API_KEY;

export default async function getTeam(teamId: string, teamsId: string) {
  const res = await fetch(
    `https://v3.football.api-sports.io/teams?id=${teamId}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": `${process.env.NEXT_FOOTBALL_API_KEY}`,
      },
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
