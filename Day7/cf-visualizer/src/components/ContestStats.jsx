import React, { useState, useEffect } from "react";
import DataTable from "./DataTable";
import fetchUserContests from "../apis/fetchUserContests";
import { Link } from "@mui/material";
import { Button } from "@mui/material";

function createData(title, value) {
  return { title, value };
}

function createLink(contestLink, rank, contestId) {
  return (
    <div>
      {rank}
      (<a target="_blank" href={contestLink}>
        {contestId}
      </a>)
    </div>
  );
}

const ContestStats = ({ handle }) => {
  let rows = [
    createData("Number of Contests(Rated)", "N/A"),
    createData("Best rank", "N/A"),
    createData("Worst Rank", "N/A"),
    createData("Max Increment", "N/A"),
    createData("Max Decrement", "N/A"),
    createData("_", "_"),
  ];
  const [updatedRows, setUpdatedRows] = useState([]);
  const fetch = async () => {
    const results = await fetchUserContests(handle);
    console.log(results);
    let bestRank = Number.MAX_SAFE_INTEGER,
      worstRank = Number.MIN_SAFE_INTEGER,
      maxDelta = Number.MIN_SAFE_INTEGER,
      minDelta = Number.MAX_SAFE_INTEGER,
      bestRankContestId = null,
      worstRankContestId = null,
      maxDeltaContestId = null,
      minDeltaContestId = null;
    results.map((contest) => {
      if (bestRank > contest.rank) {
        bestRank = contest.rank;
        bestRankContestId = contest.contestId;
      }
      if (contest.rank > worstRank) {
        worstRank = contest.rank;
        worstRankContestId = contest.contestId;
      }
      if (maxDelta < contest.delta) {
        maxDelta = contest.delta;
        maxDeltaContestId = contest.contestId;
      }
      if (contest.delta < minDelta) {
        minDelta = contest.delta;
        minDeltaContestId = contest.contestId;
      }
    });
    setUpdatedRows([
      createData("Number of Contests(Rated)", results.length),
      createData("Best rank", createLink(`https://codeforces.com/contest/${bestRankContestId}`, bestRank, bestRankContestId)),
      createData("Worst Rank", createLink(`https://codeforces.com/contest/${worstRankContestId}`, worstRank, worstRankContestId)),
      createData("Max Increment", createLink(`https://codeforces.com/contest/${maxDeltaContestId}`, maxDelta, maxDeltaContestId)),
      createData("Max Decrement",createLink(`https://codeforces.com/contest/${minDeltaContestId}`, minDelta, minDeltaContestId)),
      createData("_", "_"),
    ]);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <React.Fragment>
      {updatedRows.length !== 0 ? (
        <DataTable
          rows={updatedRows}
          header={"Contest stats of "}
          handle={handle}
        />
      ) : (
        <DataTable rows={rows} header={"Contest stats of "} handle={handle} />
      )}
    </React.Fragment>
  );
};

export default ContestStats;
