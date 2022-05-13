import React, { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AddNote from "../AddNote";
import {
  Text,
  Box,
  Grid,
  GridItem,
  IconButton,
  SimpleGrid,
} from "@chakra-ui/react";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import axios from "axios";
const NotesContainer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [note, setNote] = useState(null);
  const [notes, setNotes] = useState([]);
  const handleModalOpen = ({ currentNote }) => {
    setNote(currentNote);
    onOpen();
  };
  const handleModalClose = () => {
    setNote(null);
    onClose();
  };
  const handleDelete = async ({ id }) => {
    await axios.delete(`http://localhost:5000/notes/${id}`);
    fetchNotes();
  };
  const fetchNotes = async () => {
    const response = await axios
      .get("http://localhost:5000/notes")
      .then((notes) => notes);
    setNotes(response.data.notes);
  };
  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <Box padding={5}>
      {note && (
        <AddNote
          handleModalClose={handleModalClose}
          isOpen={isOpen}
          note={note}
        />
      )}
      <SimpleGrid gap={2} minChildWidth="300px">
        {notes.map((note) => {
          return (
            <Box bgColor={note.color} borderRadius="5px" key={note._id}>
              <Box padding={2}>
                <Grid templateColumns="repeat(10, 1fr)" gap={2}>
                  <GridItem colSpan={8}>
                    <Text
                      value={note._id}
                      mb={3}
                      fontSize="2xl"
                      fontWeight="bold"
                    >
                      {note.title}
                    </Text>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <IconButton
                      onClick={() => handleModalOpen({ currentNote: note })}
                      icon={<EditIcon />}
                    ></IconButton>
                  </GridItem>
                  <GridItem colSpan={1}>
                    <IconButton
                      onClick={() => handleDelete({ id: note._id })}
                      icon={<DeleteIcon />}
                    ></IconButton>
                  </GridItem>
                </Grid>
                <Text value={note._id} fontSize="xl">
                  {note.description}
                </Text>
              </Box>
            </Box>
          );
        })}
      </SimpleGrid>
    </Box>
  );
};

export default NotesContainer;
