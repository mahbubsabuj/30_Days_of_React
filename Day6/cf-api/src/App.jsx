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
    console.log(response.data.result.slice(0, 10));
    setRankList(response.data.result.slice(0, 10));
  };
  const init = async () => {
    const response = await axios.get(
      "https://codeforces.com/api/contest.list?gym=false",
      {}
    );
    const results = response.data.result;
    for (let i = 0; i < results.length; ++i) {
        if (results[i].phase === "FINISHED") {
            onTermSubmit(results[i].id);
            break;
        }
    }
  };
  useEffect(() => {
      init();
  }, []);
  return (
    <div>
      <SearchBar onTermSubmit={onTermSubmit} />
      {rankList && <RankList rankList={rankList} />}
    </div>
  );
};

export default App;
