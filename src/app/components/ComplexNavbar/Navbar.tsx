"use client";
import { Session } from "next-auth";
import React, { useEffect } from "react";
import { Navbar, Collapse, IconButton } from "../MaterialTailwindReecsport";
import addUserToDatabase from "../../../../lib/addUserToDb";
import { Bars2Icon } from "@heroicons/react/24/outline";
import { ProfileMenu } from "./ProfileMenu";
import { NavList } from "./NavList";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import Link from "next/link";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ComplexNavbar({ user }: Session) {
  const { data: session, status } = useSession();
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const addUser = async () => {
      if (status === "authenticated") {
        try {
          await addUserToDatabase(session.user?.name, session.user?.email);
        } catch (error) {
          console.log(error);
        }
      }
    };
    addUser();
  }, [status]);

  const signInClick = async () => {
    signIn();
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className=" mx-auto max-w-screen-3xl rounded-none border-0 p-2  lg:pl-6 bg-transparent">
      <div className="relative mx-auto flex items-center text-light-blue-800 dark:text-white justify-between">
        <Link
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-bangers text-xl"
        >
          Football Tracker
        </Link>
        <div className=" absolute top-2/4 left-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block">
          <NavList />
        </div>

        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        <div className="flex items-center justify-center">
          <DarkModeToggle />
          {user ? (
            <ProfileMenu user={user} expires={session?.expires as string} />
          ) : (
            <div className="flex justify-center items-center my-auto">
              <button
                onClick={signInClick}
                type="button"
                className="text-white bg-light-blue-700 border-gray-300 focus:outline-none hover:bg-light-blue-100 hover:text-gray-600 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-transparent dark:text-white dark:border-0 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Sign in
              </button>
            </div>
          )}
        </div>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
    </Navbar>
  );
}
