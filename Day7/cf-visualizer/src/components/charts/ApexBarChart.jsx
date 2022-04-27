import React from "react";
import Chart from "react-apexcharts";

const colors = [
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#00e676",
  "#64dd17",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#f57f17",
  "#ff6f00",
  "#ffd600",
  "#795548",
  "#9e9e9e",
  "#ff5722",
];

const ApexBarChart = ({ series, labels, title }) => {
  const chartData = {
    series: [
      {
        data: series,
      },
    ],
    options: {
      sparkline: {
        enabled: true,
      },
      title: {
        text: title,
        align: "left",
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      chart: {
        height: 350,
        type: "bar",
        events: {
          click: function (chart, w, e) {
            // console.log(chart, w, e)
          },
        },
      },
      colors: colors,
      plotOptions: {
        bar: {
          columnWidth: "45%",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
      },
      xaxis: {
        categories: labels,
        labels: {
          style: {
            fontSize: "12px",
          },
        },
      },
    },
  };
  return (
    <Chart
      options={chartData.options}
      series={chartData.series}
      type="bar"
      height={400}
    />
  );
};

export default ApexBarChart;
