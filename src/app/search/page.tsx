"use client";
import React, { useState, useEffect } from "react";
import SearchInput from "../components/SearchPageComponents/SearchInput";
import findTeamByName from "../../../lib/FindTeamByName";
import { SearchTeam } from "../../../types/searchType";
import FoundTeamsList from "../components/SearchPageComponents/FoundTeamsList";
import Error from "../components/Error/Error";

export default function SearchPage() {
  const [inputValue, setInputValue] = useState("");
  const [foundData, setFoundData] = useState<SearchTeam>();
  const [err, setErr] = useState(false);

  useEffect(() => {
    if (inputValue) {
      const fetchedSearchResult = async () => {
        const result = await findTeamByName(inputValue);

        if (result.errors.requests === process.env.NEXT_PUBLIC_ERROR) {
          setErr(true);
        }
        setFoundData(result);
      };
      fetchedSearchResult();
    }
  }, [inputValue]);

  return (
    <>
      {err ? (
        <Error error={process.env.NEXT_PUBLIC_ERROR} />
      ) : (
        <div>
          <SearchInput value={setInputValue} />
          {foundData && <FoundTeamsList data={foundData} />}
        </div>
      )}
    </>
  );
}
