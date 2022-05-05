import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const DoughnutChart = ({ chartData, title }) => {
  return (
    <Doughnut
      data={chartData}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        animations: {
          tension: {
            duration: 1000,
            easing: "linear",
            from: 1,
            to: 0,
            loop: true,
          },
        },
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
