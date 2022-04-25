import React from "react";
import { colors } from "../utils/constants";
import DoughnutChart from "./DoughnutChart";

const LanguagesChart = ({ submissionDetails, handle }) => {
  const reduced = Object.values(submissionDetails).reduce(
    (res, { language }) => {
      {
        res[language] = res[language] || { key: language, count: 0 };
        res[language].count++;
        return res;
      }
    },
    {}
  );
  console.log(reduced);
  const keys = [];
  const values = [];
  Object.keys(reduced).forEach((key) => {
      keys.push(reduced[key].key);
      values.push(reduced[key].count)
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
  return <DoughnutChart chartData={chartData} title={`Language used by ${handle}`}/>
};

export default LanguagesChart;
