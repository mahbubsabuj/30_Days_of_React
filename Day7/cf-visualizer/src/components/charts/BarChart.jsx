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
          pan: {
            enabled: true,
            mode: "x",
            speed: 10,
            threshold: 10,
            rangeMin: {
              x: null,
              y: null
            },
            rangeMax: {
              x: null,
              y: null
            }
          },
          zoom: {
            enabled: true,
            mode: ""
          }
        },
      }}
    />
  );
};

export default BarChart;
