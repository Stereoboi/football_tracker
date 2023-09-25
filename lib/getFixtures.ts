export default async function getFixtures(
  fixturesId: string,
  standingsId: string
) {
  const params = {
    league: standingsId,
    season: 2022,
    round: `Regular Season - ${fixturesId}`,
  };

  const url = new URL("https://v3.football.api-sports.io/fixtures?");
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, String(value));
  });

  const res = await fetch(url, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": `${process.env.NEXT_PUBLIC_FOOTBALL_API_KEY}`,
    },
    next: { revalidate: 86400 },
  });

  if (!res.ok) return undefined;

  return res.json();
}
