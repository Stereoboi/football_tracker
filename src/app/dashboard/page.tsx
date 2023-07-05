import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { SWRProvider } from "../swr-provider";
import { Metadata } from "next";
import ListOfUserPostss from "../components/Dashboard/ListOfUserPosts";
import CreateFormPost from "../components/Dashboard/CreatePostForm";
export const metadata: Metadata = {
  title: "Dashboard page",
  description: "Dashboard page",
};

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <div className="grid grid-cols-2 gap-8">
      <SWRProvider>
        <ListOfUserPostss />
        <CreateFormPost />
      </SWRProvider>
    </div>
  );
}
