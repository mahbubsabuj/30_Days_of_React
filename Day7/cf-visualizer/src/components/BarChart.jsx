import React from "react";
import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const BarChart = ({ chartData, title }) => {
  return (
    <Bar
      data={chartData}
      options={{
        plugins: {
          title: {
            display: true,
            text: title,
            color: "black",
          },
          legend: {
            display: false,
            position: "bottom",
          },
        },
      }}
    />
  );
};

export default BarChart;
