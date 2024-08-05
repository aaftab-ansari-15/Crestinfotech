import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNotes] = useState({
    title: "",
    description: "",
    tag: "default",
  });
  const hanndleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNotes({ title: "", description: "", tag: "default" });
  };
  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div className="col-md-8">
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={note.title}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            className="form-control"
            value={note.description}
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button
          onClick={hanndleClick}
          type="submit"
          className="btn btn-primary my-2"
        >
          AddNote
        </button>
      </form>
    </div>
  );
};

export default AddNote;
