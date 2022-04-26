import React from "react";
import { Pie, Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import zoomPlugin from "chartjs-plugin-zoom";

const PieChart = ({ chartData, title }) => {
  return (
    <Pie
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
          zoom: {
            zoom: {
              wheel: {
                enabled: true,
              },
              pinch: {
                enabled: true,
              },
              mode: "xy",
            },
          },
        },
      }}
    />
  );
};

export default PieChart;
