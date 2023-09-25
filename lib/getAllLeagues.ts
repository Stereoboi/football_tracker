// process.env.NEXT_FOOTBALL_API_KEY;

export default async function getAllLeagues() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/leaguesId`
  );
  if (!res.ok) return undefined;
  return res.json();
}
