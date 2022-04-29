import React from "react";
import { colors } from "../utils/constants";
import BarChart from "./charts/BarChart";

const LevelChart = ({ submissionDetails, handle }) => {
  const acceptedProblems = submissionDetails.reduce((res, value) => {
    if (value.verdict === "OK") {
      res.push(value);
    }
    return res;
  }, []);
  const reduced = Object.values(acceptedProblems).reduce((res, { index }) => {
    res[index[0]] = res[index[0]] || { key: index[0], count: 0 };
    res[index[0]].count++;
    return res;
  }, {});
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
        label: `Solved`,
        data: values,
        backgroundColor: colors,
      },
    ],
  };
  return <BarChart chartData={chartData} title={`Problem levels of ${handle}`} />
};

export default LevelChart;
