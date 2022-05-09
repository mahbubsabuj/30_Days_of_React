const express = require("express");
const router = express.Router();
const Notes = require("../model/Note");
const notesController = require("../controllers/notes-controller");

//getting the data
router.get("/", notesController.getAllNotes);

//post the data to database
router.post("/", notesController.addNote);

module.exports = router;
