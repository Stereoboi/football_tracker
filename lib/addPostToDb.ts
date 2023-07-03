export default async function addPostToDatabase(value: any) {
  const { img, title, description, content, username } = value;

  const res = await fetch("http://localhost:3000/api/addpost", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      img,
      title,
      description,
      content,
      username,
    }),
  });
}
