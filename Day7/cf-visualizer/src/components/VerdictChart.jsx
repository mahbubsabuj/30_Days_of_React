import React from "react";
import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";
import { colors } from "../utils/constants";
const VerdictChart = ({ submissionDetails, handle }) => {
  console.log(submissionDetails);
  const reduced = Object.values(
    submissionDetails.reduce((res, { verdict }) => {
      res[verdict] = res[verdict] || { key: verdict, count: 0 };
      res[verdict].count++;
      return res;
    }, {})
  );
  console.log(colors);
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
  console.log(keys.length);
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
  return <Doughnut data={chartData} options={{
    plugins: {
      title: {
        display: true,
        text: `Verdicts of ${handle}`,
        color:"black"
      },
      legend: {
        display: true,
        position: "bottom"
     }
    }
  }}/>;
};

export default VerdictChart;
