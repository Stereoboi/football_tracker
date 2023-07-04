export default async function getNewsById(id: string) {
  const res = await fetch(`http://localhost:3000/api/getposts/${id}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return console.log("i fucked up");
  }

  return res.json();
}
