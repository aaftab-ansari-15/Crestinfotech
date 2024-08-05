import NoteContext from "../context/NoteContext";
import React, { useContext, useEffect } from "react";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(NoteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);
  return (
    <div className="container my-3">
      <AddNote />
      <h2 className="my-2">This is Your Notes</h2>
      <div className="row">
        {notes.length === 0 ? (
          <p>No notes available</p>
        ) : (
          notes.map((note) => {
            return <NoteItem key={note._id} note={note} />;
          })
        )}
      </div>
    </div>
  );
};

export default Notes;
