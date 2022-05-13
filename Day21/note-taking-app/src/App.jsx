import React from "react";
import Header from "./components/Header";
import NotesContainer from "./components/Note/NotesContainer";
import { Box } from "@chakra-ui/react";

const App = () => {
  return (
    <Box sx={{p: 3, w: "100%"}}>
      <Header />
      <NotesContainer />
    </Box>
  );
};

export default App;
