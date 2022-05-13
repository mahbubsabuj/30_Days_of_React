const express = require("express");
const router = express.Router();
const Notes = require("../model/Note");
const notesController = require("../controllers/notes-controller");

//getting the data
router.get("/", notesController.getAllNotes);

//post the data to database
router.post("/", notesController.addNote);

//get note by id
router.get("/:id", notesController.getNoteById);

//update note by id

router.put("/:id", notesController.updateNote);

//delete note by id

router.delete("/:id", notesController.deleteNote);

module.exports = router;
