import React from "react";
import BarChart from './charts/BarChart';
import PieChart from './charts/PieChart';
import LineChart from "./charts/LineChart";
import { colors } from "../utils/constants";

const TagChart = ({ submissionDetails, handle }) => {
  const tagList = [];
  submissionDetails.map((submission) => {
    if (submission.tags.length !== 0 && submission.verdict === "OK") {
      submission.tags.forEach((tag) => {
        tagList.push(tag);
      });
    }
    return 0;
  });
  const count = new Map();
  tagList.map((tag) => {
    if (count[tag] === undefined) {
      count[tag] = 1;
    } else {
      count[tag]++;
    }
    return 0;
  });
  const keys = [];
  const values = [];
  Object.keys(count).forEach((key) => {
    keys.push(key);
    values.push(count[key]);
  });
  const chartData = {
    labels: keys,
    datasets: [
      {
        label: `Tags of ${handle}`,
        data: values,
        backgroundColor: colors,
      },
    ],
  };
  return <PieChart chartData={chartData} title={`Tags of ${handle}`} />;
};

export default TagChart;