const express = require("express");
const Notes = require("../models/Notes");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");

const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
//Routesample
router.get("/", () => {
  console.log("notes in");
});

//Route1: get all notes, login required
router.get("/getnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("internal server error");
  }
});

//Route2: add notes, login required

router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description mush be 5 charachter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      // Validate the request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { title, description, tag } = req.body;
      const note = new Notes({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const saveNote = await note.save();
      res.json(saveNote);
    } catch (error) {
      return res.status(400).json({ error: "error" });
    }
  }
);

//Route3: update notes, login required
router.put(
  "/updatenote/:id",
  fetchuser,
  [
    body("title", "Enter a valid title").isLength({ min: 3 }),
    body("description", "Description mush be 5 charachter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // Validate the request body
    const errors = validationResult(req);
    console.log(errors.isEmpty());
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const { title, description, tag } = req.body;

      // Find the note by ID
      let note = await Notes.findById(req.params.id);

      // Check if the note exists
      if (!note) {
        return res.status(404).send("Note not found");
      }

      // Check if the user is authorized to update this note
      if (note.user.toString() !== req.user.id) {
        return res.status(401).send("Not allowed");
      }

      // Prepare the update fields
      const updateFields = {};
      if (title) updateFields.title = title;
      if (description) updateFields.description = description;
      if (tag) updateFields.tag = tag;

      // Update the note
      note = await Notes.findByIdAndUpdate(
        req.params.id,
        { $set: updateFields },
        { new: true }
      );

      // Send the updated note as the response
      res.json(note);
    } catch (error) {
      console.error(error);
      res
        .status(400)
        .json({ error: "An error occurred while updating the note" });
    }
  }
);

//Route4: delete notes, login required
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  try {
    let note = await Notes.findById(req.params.id);
    // Check if the note exists
    if (!note) {
      return res.status(404).send("Note not found");
    }
    // Check if the user is authorized to update this note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).send("Not allowed");
    }
    note = await Notes.findByIdAndDelete(req.params.id);
    res.json({ success: "note is deleted", note: note });
  } catch (error) {
    return res.status(400).json({ error: "error" });
  }
});

module.exports = router;
