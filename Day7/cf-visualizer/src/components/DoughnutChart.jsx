import React from "react";
import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ chartData, title }) => {
  return (
    <Doughnut
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: title,
            color: "black",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        },
      }}
    />
  );
};

export default DoughnutChart;
