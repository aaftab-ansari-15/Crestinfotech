import { useState } from "react";
import NoteContext from "./NoteContext";
const url = "http://localhost:5000/";
const NoteState = (props) => {
  const initialNote = [];
  const [notes, setNotes] = useState(initialNote);
  //Get all notes
  const getNotes = async () => {
    const response = await fetch(`${url}api/notes/getnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI",
      },
    });
    const jsonData = await response.json;
    console.log(jsonData);
    // setNotes(initialNote.push(jsonData));
  };
  //Add a note
  const addNote = async (title, description, tag) => {
    //logic
    console.log("adding new note");
    const note = {
      title: title,
      description: description,
      tag: tag,
    };

    //api call
    // const response = await fetch("http://localhost:5000/api/notes/addnote", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     "auth-token":
    //       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI",
    //   },
    //   body: JSON.stringify({ note }),
    // });
    try {
      const response = await fetch("http://localhost:5000/api/notes/addnote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI", // Use environment variable for auth-token
        },
        body: JSON.stringify({ note }),
      });

      // Check if the response is OK (status in the range 200-299)
      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        // const jsonData = await response;
        // console.log(jsonData);
        // setNotes(notes.concat(note));
        throw new Error(
          `HTTP error! status: ${response.status}, message: ${errorData.message}`
        );
      }

      // Parse and return the JSON data from the response
      const data = await response.json();
      return data;
    } catch (error) {
      // Handle errors, e.g., network issues or JSON parsing errors
      console.error("Fetch error:", error.message);
      throw error; // Re-throw the error if needed or handle it appropriately
    }
  };
  //Update a note
  const updateNote = async (id, title, description, tag) => {
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (notes._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  //Delete anote
  const deleteNote = async (id) => {
    console.log("delete note of id: ", id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNote);
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, getNotes, addNote, updateNote, deleteNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
