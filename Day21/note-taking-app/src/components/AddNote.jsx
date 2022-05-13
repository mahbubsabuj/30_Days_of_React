import React, { useState, useRef } from "react";
import {
  FormErrorMessage,
  Button,
  Modal,
  Input,
  ModalFooter,
  FormControl,
  FormLabel,
  ModalCloseButton,
  ModalBody,
  ModalContent,
  ModalOverlay,
  ModalHeader,
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";

const AddNote = ({ isOpen, handleModalClose, note = null }) => {
  const [title, setTitle] = useState(note ? note.title : "");
  const [description, setDescription] = useState(note ? note.description : "");
  const initialRef = useRef();
  const finalRef = useRef();
  const saveExistingNote = async () => {
    await axios
      .put(`http://localhost:5000/notes/${note._id}`, {
        title: title,
        description: description,
        color: note.color,
      })
      .then(() => {
        handleModalClose();
      });
  };
  const saveNewNote = async () => {
    await axios
      .post("http://localhost:5000/notes", {
        title: title,
        description: description,
        color: "red.900",
      })
      .then(() => handleModalClose());
  };
  const handleSave = () => {
    if (note) {
      saveExistingNote();
    } else {
      saveNewNote();
    }
  };
  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={handleModalClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{note ? "Edit Note" : "Add Note"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder="Enter title"
              />
              {title.length === 0 && (
                <FormErrorMessage>Title should not be empty!</FormErrorMessage>
              )}
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="Enter description"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleSave} mr={3}>
              Save
            </Button>
            <Button onClick={handleModalClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNote;
