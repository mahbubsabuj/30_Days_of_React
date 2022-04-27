import React from "react";
import { colors } from "../utils/constants";
import ApexDonutChart from './charts/ApexDonutChart';
import DoughnutChart from "./charts/DoughnutChart";

const LanguagesChart = ({ submissionDetails, handle }) => {
  const reduced = Object.values(submissionDetails).reduce(
    (res, { language }) => {
      res[language] = res[language] || { key: language, count: 0 };
      res[language].count++;
      return res;
    },
    {}
  );
  const keys = [];
  const values = [];
  Object.keys(reduced).forEach((key) => {
    keys.push(reduced[key].key);
    values.push(reduced[key].count);
  });
  return (
    <ApexDonutChart series={values} labels={keys} title={`Language used by ${handle}`} />
  );
};

export default LanguagesChart;
