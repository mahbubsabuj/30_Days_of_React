import React from "react";
import { createRoot } from "react-dom/client";
import theme from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/provider";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
