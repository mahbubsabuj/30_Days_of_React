import React from "react";
import DataTable from "./DataTable";

function createData(title, value) {
  return { title, value };
}

const SubmissionStats = ({ submissionDetails, handle }) => {
  const reduced = submissionDetails.reduce(
    (res, { contestId, index, verdict }) => {
      res[contestId + index] = res[contestId + index] || {
        key: contestId + index,
        count: 0,
        acceptedCount: 0,
      };
      res[contestId + index].count++;
      if (verdict === "OK") {
        res[contestId + index].acceptedCount++;
      }
      return res;
    },
    {}
  );
  const totalAttempts = Object.keys(reduced).length;
  let solved = 0,
    maxAttepts = 0,
    solvedWithSingleSubmission = 0,
    maxAcceptedCount = 0,
    totalCount = 0;
  Object.keys(reduced).forEach((key) => {
    if (reduced[key].acceptedCount > 0) {
      solved++;
    }
    totalCount += reduced[key].count;
    maxAttepts = Math.max(maxAttepts, reduced[key].count);
    maxAcceptedCount = Math.max(maxAcceptedCount, reduced[key].acceptedCount);
    if (reduced[key].count === reduced[key].acceptedCount) {
      solvedWithSingleSubmission++;
    }
  });
  const rows = [
    createData("Tried", totalAttempts),
    createData("Solved", solved),
    createData("Average attempts", (totalCount / Math.max(1, solved)).toFixed(3)),
    createData("Max attempts", maxAttepts),
    createData("Solved with single submission", solvedWithSingleSubmission),
    createData("Max AC(s)", maxAcceptedCount),
  ];
  return (
    <DataTable rows={rows} header={"Submission stats of "} handle={handle} />
  );
};

export default SubmissionStats;
