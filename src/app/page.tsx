import { getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Link from "next/link";
import {
  Carousel,
  Typography,
  Button,
} from "./components/MaterialTailwindReecsport";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Football Tracker",
  description: "Best football portal",
};

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <div className="absolute right-0 top-0  -z-10 h-screen">
      <Carousel className="">
        <div className="relative h-full w-full">
          <img
            src="https://res.cloudinary.com/dlrl668wu/image/upload/v1686042832/111174-Borussia_Dortmund_mcymgg.jpg"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                The Beauty of Game
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Are you a football enthusiast? Dive into the world of football
                on our football tracker. Explore the latest matches, team
                profiles, and more. Join us now and experience the excitement of
                the beautiful game!
              </Typography>
              <div className="flex justify-center gap-2">
                <Link
                  href={"/leagues"}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://res.cloudinary.com/dlrl668wu/image/upload/v1686042831/Etihad-Stadium_t5bygg.jpg"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Are you interested in football?
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Do you follow your favorite team but forgot something about
                them? No worries, you can easily find any football club on the
                planet and discover what you are looking for. Come and explore!
              </Typography>
              <div className="flex gap-2">
                <Link
                  href={"/leagues"}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src="https://res.cloudinary.com/dlrl668wu/image/upload/v1686043078/0ee77203a222b74929b7f7c028250f08_xh81i2.jpg"
            alt="image 3"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
            <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Create and share
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Do you follow football news but wish to express your own point
                of view? Join us and publish your articles or thoughts about
                football.
              </Typography>
              <div className="flex gap-2">
                <Link
                  href={"/leagues"}
                  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:bg-transparent dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
