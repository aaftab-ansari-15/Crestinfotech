import NoteContext from "../context/NoteContext";
import React, { useContext } from "react";
import NoteItem from "./NoteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, setNotes } = context;

  return (
    <div className="container my-3">
      <h2>This is Your Notes</h2>
      <div className="row">
        {notes.length === 0 ? (
          <p>No notes available</p>
        ) : (
          notes.map((note) => {
            return <NoteItem note={note} />;
          })
        )}
      </div>
    </div>
  );
};

export default Notes;
