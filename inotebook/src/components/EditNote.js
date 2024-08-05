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
    addNote(note.title, note.description);
  };
  const onChange = (e) => {
    setNotes({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNote;
