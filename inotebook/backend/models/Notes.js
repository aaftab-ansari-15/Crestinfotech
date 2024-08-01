const mongoose = require("mongoose");
const { Schema } = mongoose;
const NoteSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, default: "genral" },
  date: { type: Date, default: Date.now },
});
const Notes = mongoose.model("Notes", NoteSchema);
module.exports = Notes;
