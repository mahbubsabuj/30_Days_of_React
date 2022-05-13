const Note = require("../model/Note");

const getAllNotes = async (request, response, next) => {
  let notes;
  try {
    notes = await Note.find();
  } catch (error) {
    console.log(error);
  }
  if (!notes) {
    return response.status(404).json({ message: "No notes found!" });
  }
  return response.status(200).json({ notes });
};

const getNoteById = async (request, response, next) => {
  const id = request.params.id;
  let note;
  try {
    note = await Note.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!note) {
    return response.status(404).json({ message: "No note found!" });
  }
  return response.status(200).json({ note });
};

const addNote = async (request, response, next) => {
  const { title, description, color } = request.body;
  let note;
  try {
    note = new Note({
      title,
      description,
      color,
    });
    await note.save();
  } catch (error) {
    console.log(error);
  }
  if (!note) {
    return response.status(500).json({ message: "Unable to add!" });
  }
  return response.status(201).json({ note });
};

const updateNote = async (request, response, next) => {
  const id = request.params.id;
  const { title, description, color } = request.body;
  let note;
  try {
    note = await Note.findByIdAndUpdate(id, {
      title,
      description,
      color,
    });
    note = await note.save();
  } catch (error) {
    console.log(error);
  }
  if (!note) {
    return response
      .status(404)
      .json({ message: "Unable to update note by this Id!" });
  }
  return response.status(200).json({ note });
};

const deleteNote = async (request, response, next) => {
  const id = request.params.id;
  let note;
  try {
    note = await Note.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  if (!note) {
    return response
      .status(404)
      .json({ message: "Unable to delete note by this Id!" });
  }
  return response.status(200).json({ message: "Sucessfully deleted! " });
};

exports.getAllNotes = getAllNotes;
exports.addNote = addNote;
exports.getNoteById = getNoteById;
exports.updateNote = updateNote;
exports.deleteNote = deleteNote;
