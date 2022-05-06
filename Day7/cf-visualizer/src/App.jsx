import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, CssBaseline, ScopedCssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ComparePage from "./components/ComparePage";
import ContestsPage from "./components/ContestsPage";
import AboutPage from "./components/AboutPage";
import MainAppBar from "./components/MainAppBar";
const themeOne = createTheme({
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
    mode: "light",
    buttonColor: "#FFFFFF",
    appBarColor: "#00695f"
  },
});

const themeTwo = createTheme({
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
    mode: "dark",
    buttonColor: "#272727",
    appBarColor: "#000000"
  },
});

const App = () => {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeProvider theme={theme === "light" ? themeOne : themeTwo}>
      <ScopedCssBaseline enableColorScheme>
        <CssBaseline />
        <Box>
          <Box sx={{ p: 1 }}>
            <MainAppBar changeTheme={setTheme} />
          </Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contests" element={<ContestsPage />} />
            <Route path="/compare" element={<ComparePage />} />
            {/* <Route path="/about" element={<AboutPage />} /> */}
          </Routes>
        </Box>
      </ScopedCssBaseline>
    </ThemeProvider>
  );
};
export default App;
