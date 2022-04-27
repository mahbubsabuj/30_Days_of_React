import React from "react";
import { colors } from "../utils/constants";
import DoughnutChart from "./charts/DoughnutChart";
import ApexDonutChart from './charts/ApexDonutChart';
const VerdictChart = ({ submissionDetails, handle }) => {
  const reduced = Object.values(submissionDetails).reduce(
    (res, { verdict }) => {
      {
        res[verdict] = res[verdict] || { key: verdict, count: 0 };
        res[verdict].count++;
        return res;
      }
    },
    {}
  );
  const keys = [];
  const values = [];
  Object.keys(reduced).forEach((key) => {
    if (reduced[key].key === "OK") {
      keys.push("ACCEPTED");
    } else {
      keys.push(reduced[key].key);
    }
    values.push(reduced[key].count);
  });
  return (
    <ApexDonutChart series={values} labels={keys} title={`Submissions of ${handle}`} />
  );
};

export default VerdictChart;
