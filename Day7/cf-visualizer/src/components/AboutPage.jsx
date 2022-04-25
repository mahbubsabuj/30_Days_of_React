import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Box
      sx={{
        width: 600,
        height: 200,
        backgroundColor: "whitesmoke",
        m: 1,
      }}
    >
      <Typography> From About Page </Typography>
    </Box>
  );
};

export default AboutPage;
