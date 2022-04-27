import React from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const ApexChart = () => {
  const chartData = {
    series: [44, 55, 13, 43, 22, 44, 55, 13, 43, 22, 11],
    options: {
      chart: {
        width: 500,
        type: "donut",
      },
      labels: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"],
      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        width={500}
      />
  );
};

export default ApexChart;
