import React from "react";
import { colors } from "../utils/constants";
import DoughnutChart from "./charts/DoughnutChart";
import LineChart from "./charts/LineChart";
import BarChart from "./charts/BarChart";

const RatingChart = ({ submissionDetails, handle }) => {
  const acceptedProblems = submissionDetails.reduce((res, value) => {
    if (value.verdict === "OK") {
      res.push(value);
    }
    return res;
  }, []);

  const reduced = Object.values(acceptedProblems).reduce((res, { rating }) => {
    res[rating] = res[rating] || { key: rating, count: 0 };
    res[rating].count++;
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
  return (
    <BarChart chartData={chartData} title={`Problem ratings of ${handle}`} />
  );
};

export default RatingChart;
