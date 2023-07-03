export default async function addUserToDatabase(name: any, email: any) {
  const res = await fetch("http://localhost:3000/api/addusertodb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  });
}
