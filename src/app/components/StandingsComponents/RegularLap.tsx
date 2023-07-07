"use client";
import React, { ChangeEvent } from "react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import getListOfRounds from "../../../../lib/getListOfRounds";
import { Select, Option } from "../MaterialTailwindReecsport";

export default function RegularLap({ rounds }: any) {
  const router = useRouter();
  const pathname = usePathname();
  const [numberOfRounds, setNumberOfRounds] = useState([]);
  const [selectedOption, setSelectedOption] = useState<any>("Choose a round");
  const [, , number] = pathname.split("/");

  const standingsId = Number(number);

  useEffect(() => {
    setNumberOfRounds(rounds.response);
  }, [rounds.response]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event);

    if (pathname.length > 23) {
      return router.push(`/standings/${standingsId}/fixtures/${event}`);
    }
    router.push(`${pathname}/${event}`);
  };

  return (
    <div className="pr-3 pl-3">
      <Select
        value={selectedOption}
        onChange={(event: any) => handleSelectChange(event)}
        color="orange"
        className=""
        label="Select Round"
      >
        {numberOfRounds.map((el, index) => {
          return (
            <Option key={index} value={String(index + 1)} className="">
              {el}-Round
            </Option>
          );
        })}
      </Select>
    </div>
  );
}
