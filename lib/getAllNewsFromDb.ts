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

// export default async function getAllNewsFromDb() {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_DEPLOY_URL}/api/getposts`,
//     {
//       method: "GET",
//       next: { revalidate: 0 },
//     }
//   );

//   if (!res.ok) {
//     console.log("error from fetch", res.status);
//   }

//   return res.json();
// }
