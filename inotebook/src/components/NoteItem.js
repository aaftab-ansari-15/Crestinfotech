import React, { useContext } from "react";
import NoteContext from "../context/NoteContext";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  return (
    <div className="card col-md-3 my-3 mx-3">
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.description}</p>
        <div className="d-flex justify-content-end">
          <i className="fa-solid fa-pen-to-square mx-2"></i>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deleteNote(note._id);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
