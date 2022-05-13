import React, { useState } from "react";
import ThemeButton from "./ThemeButton";
import { useDisclosure } from "@chakra-ui/react";
import AddNote from "./AddNote";
import { Box, Grid, GridItem, Text, Button } from "@chakra-ui/react";
import SearchBar from "./SearchBar";

const Header = () => {
  //All Notes, changeTheme, AddNote Button
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
    onOpen();
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    onClose();
  };
  return (
    <Box sx={{ w: "100%", p: "2", bg: "inherit" }} boxShadow="md">
      {isModalOpen && (
        <AddNote handleModalClose={handleModalClose} isOpen={isOpen} />
      )}
      <Grid templateColumns="repeat(10, 1fr)" alignItems="center" gap={2}>
        <GridItem>
          <Text fontSize="" fontWeight="bold">
            All Notes
          </Text>
        </GridItem>
        <GridItem colStart={4} colEnd={7}>
          <SearchBar />
        </GridItem>
        <GridItem colStart={11} colEnd={12}>
          <ThemeButton />
        </GridItem>
        <GridItem colStart={12} colEnd={15}>
          <Button onClick={handleModalOpen}>Add New Note</Button>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
