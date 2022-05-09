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

exports.getAllNotes = getAllNotes;
exports.addNote = addNote;
