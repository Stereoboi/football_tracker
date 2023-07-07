export default async function getAllNewsFromDb() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getallposts`,
    {
      method: "GET",
    }
  );

  if (!res.ok) return undefined;

  return res.json();
}
