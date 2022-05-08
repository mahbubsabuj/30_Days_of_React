import React, { useEffect, useState } from "react";
import ThemeButton from "./components/ThemeButton";
import SearchBar from "./components/SearchBar";
import { Grid, Center, Box, GridItem } from "@chakra-ui/react";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
      console.log(searchTerm)
  })
  return (
    <Box p={5}>
      <Center>
        <Grid templateColumns="repeat(10, 1fr)" gap={3}>
          <GridItem colSpan={7}>
            <SearchBar setSearchTerm={setSearchTerm} />
          </GridItem>
          <GridItem colSpan={3}>{<ThemeButton />}</GridItem>
        </Grid>
      </Center>
    </Box>
  );
};

export default App;
