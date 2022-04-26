import React from "react";
import Chart from "react-apexcharts";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";

const ApexChart = () => {
  const chartData = {
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: "pie",
      },
      labels: ["Team A", "Team B", "Team C", "Team D", "Team E"],
      responsive: [
        {
          breakpoint: 500,
          options: {
            chart: {
              width: 380,
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
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      <Paper>
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="pie"
          width={380}
        />
      </Paper>
    </Box>
  );
};

export default ApexChart;
