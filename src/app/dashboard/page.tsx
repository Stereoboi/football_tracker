import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Dashboard from "../components/Dashboard/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard page",
  description: "Dashboard page",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  // const data: Post[] = await getNews();

  // console.log(data.filter((el) => el.username === session?.user?.name));

  // const posts: Post[] = data.filter((el) => el.username === "Богдан Піщак");

  // const posts: Post[] = await getNewsByName("Богдан Піщак");

  // className = "grid grid-cols-2 gap-8";

  return <div>{<Dashboard />}</div>;
}
