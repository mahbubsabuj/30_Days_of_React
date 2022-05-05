import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { colors } from "../../utils/constants";

const MultiBarChart = ({
  labels,
  data1,
  data2,
  title,
  cfHandle1,
  cfHandle2,
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: cfHandle1,
        backgroundColor: colors[0],
        data: data1,
      },
      {
        label: cfHandle2,
        backgroundColor: colors[1],
        data: data2,
      },
    ],
  };
  const options = {
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
        display: false,
        position: "bottom",
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default MultiBarChart;
