export default async function getAllNewsFromDb() {
  const res = await fetch(`http://localhost:3000/api/getallposts`, {
    method: "GET",
  });

  if (!res.ok) return undefined;

  return res.json();
}
