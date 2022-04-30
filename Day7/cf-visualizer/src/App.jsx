import React from "react";
import MenuBar from "./components/MenuBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ComparePage from "./components/ComparePage";
import ContestsPage from "./components/ContestsPage";
import AboutPage from "./components/AboutPage";
import PrimaryAppBar from "./components/MainAppBar";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffa500",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <PrimaryAppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contests" element={<ContestsPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
};
export default App;
