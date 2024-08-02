import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";

const AddNote = () => {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNotes] = useState({
    title: "",
    desciption: "",
    tag: "default",
  });
  const hanndleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.desciption);
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
            onChange={onChange}
          />
        </div>
        {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div> */}
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
