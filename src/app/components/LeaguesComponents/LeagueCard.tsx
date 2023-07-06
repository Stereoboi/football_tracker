import React from "react";
import Link from "next/link";
import Image from "next/image";

type League = {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
    flag: string;
  };
  seasons: any[];
};

export default function LeagueCard({ dataLeague }: { dataLeague: League }) {
  return (
    <Link href={`/standings/${dataLeague.league.id}`}>
      <div className="bg-gradient-custom rounded-lg hover:rounded-lg focus:rounded-lg transition-all duration-300 dark:text-white">
        <div className="flex flex-col items-center rounded-lg  hover:shadow-lg hover:scale-98 bg-white  dark:bg-blue-gray-800 hover:rounded-lg transition-all duration-300 ">
          <Image
            src={dataLeague.league.logo}
            alt={dataLeague.league.name}
            width={500}
            height={500}
            className="w-fit h-28 object-cover rounded-lg p-2"
            priority={true}
          />

          <div className="flex flex-col items-center mt-2 p-2">
            <p>{dataLeague.league.name}</p>
            <div className="flex items-baseline">
              <p>{dataLeague.country.name}</p>
              <Image
                src={dataLeague.country.flag}
                alt={dataLeague.country.flag}
                width={15}
                height={15}
                priority={true}
                className="ml-2"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
