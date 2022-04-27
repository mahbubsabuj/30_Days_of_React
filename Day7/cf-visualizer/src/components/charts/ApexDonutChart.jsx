import React from "react";
import Chart from "react-apexcharts";

const ApexDonutChart = ({ series, labels, title }) => {
  const chartData = {
    series: series,
    options: {
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
        width: 500,
        type: "pie",
      },
      labels: labels,

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
      height={500}
    />
  );
};

export default ApexDonutChart;
