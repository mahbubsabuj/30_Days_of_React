import React from "react";
import { colors } from "../utils/constants";

const RatingChart = ({ submissionDetails, handle }) => {
  const acceptedProblems = submissionDetails.reduce((res, value) => {
    if (value.verdict === "OK") {
      res.push(value);
    }
    return res;
  }, []);

  const reduced = Object.values(acceptedProblems).reduce(
    (res, { index }) => {
        res[index] = res[index] || { key: index, count: 0 };
        res[index].count++;
        return res;
    },
    {}
  );
  const keys = [];
  const values = [];
  Object.keys(reduced).forEach((key) => {
    keys.push(key);
    values.push(reduced[key].count);
  });
  const chartData = {
    labels: keys,
    datasets: [
      {
        label: `Submissions of ${handle}`,
        data: values,
        backgroundColor: colors,
      },
    ],
  };
  return <div> </div>;
};

export default RatingChart;
