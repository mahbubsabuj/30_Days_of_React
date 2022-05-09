const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//title, description, color => color of the background of note

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("note", noteSchema);
