import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/provider";
import App from "./App";
import theme from "./utils/theme";

createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
);
