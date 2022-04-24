import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import RankList from "./components/RankList";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [rankList, setRankList] = useState(null);
  const onTermSubmit = async (searchTerm) => {
    const response = await axios.get(
      "https://codeforces.com/api/contest.ratingChanges",
      {
        params: {
          contestId: searchTerm,
        },
      }
    );
    const results = response.data.result;
    console.log(results.slice(0, 20));
    setRankList(results.slice(0, 20));
  };
  const init = async () => {
    const response = await axios.get(
      "https://codeforces.com/api/contest.list?gym=false",
      {}
    );
    const result = response.data.result.find((item) => {
      return item.phase === "FINISHED";
    });
    onTermSubmit(result.id);
  };
  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <SearchBar onTermSubmit={onTermSubmit} />
      {rankList && <RankList rankList={rankList} />}
    </div>
  );
};

export default App;
