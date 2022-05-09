import React, { useEffect, useState } from "react";
import wikipediaAPI from "./api/wikipediaAPI";
import AppBar from "./components/AppBar";
import ThemeButton from "./components/ThemeButton";
import SearchBar from "./components/SearchBar";
import {
  Grid,
  Center,
  Box,
  GridItem,
  Accordion,
  AccordionPanel,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
} from "@chakra-ui/react";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const onTermSubmit = async (event, term) => {
    event.preventDefault();
    const response = await wikipediaAPI(term);
    console.log(response);
    if (response) {
      setSearchResults(response);
    } else {
      console.log("Getting errors...");
    }
  };
  return (
    <Box p={5}>
      <AppBar />
      <Center  sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0', }}>
        <Grid templateColumns="repeat(10, 1fr)" gap={3}>
          <GridItem colSpan={7}>
            <SearchBar onTermSubmit={onTermSubmit} />
          </GridItem>
          <GridItem colSpan={3}>{<ThemeButton />}</GridItem>
        </Grid>
      </Center>
      <Box height={5} />
      {searchResults && (
        <Accordion pl={5} pr={5} defaultIndex={[0]} allowMultiple>
          {searchResults.map((result, index) => {
            return (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      {result.title}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>{result.snippet.replace(/<[^>]*>/g, '')}</AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      )}
    </Box>
  );
};

export default App;
