import { useState } from "react";
import NoteContext from "./NoteContext";
// const url = "http://localhost:5000/";
const NoteState = (props) => {
  const [notes, setNotes] = useState([]);
  //Get all notes
  const getNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/notes/getnotes", {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI",
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }

      const data = await response.json(); // Parse the JSON from the response
      setNotes(data);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };

  //Add a note
  const addNote = async (title, description, tag) => {
    //logic
    const newNote = {
      title: title,
      description: description,
      tag: tag,
    };
    //api call
    console.log("newNote: ", newNote);
    try {
      const request1 = new Request("http://localhost:5000/api/notes/addnote", {
        method: "POST",
        headers: new Headers({
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI",
        }),
        body: JSON.stringify(newNote),
      });

      const request2 = request1.clone();

      const response = await fetch(request2);
      if (!response.ok) {
        const data = await response.json(); // Parse the JSON from the response
        console.log("data", data); // Do something with the data here

        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      console.log(response.status);
      const data = await response.json(); // Parse the JSON from the response
      console.log("data", data); // Do something with the data here
      setNotes(notes.concat(data));
      console.log(notes);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  //Update a note
  const updateNote = async (id, formValues) => {
    //logic
    console.log("upodate note", id, formValues);
    const newNote = {
      title: formValues.title,
      description: formValues.description,
      tag: formValues.tag,
    };
    //api call
    try {
      const request1 = new Request(
        `http://localhost:5000/api/notes/updatenote/${id}`,
        {
          method: "PUT",
          headers: new Headers({
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI",
          }),
          body: JSON.stringify(newNote),
        }
      );

      const request2 = request1.clone();

      const response = await fetch(request2);
      if (!response.ok) {
        const data = await response.json(); // Parse the JSON from the response
        console.log("data", data); // Do something with the data here

        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      console.log(response.status);
      const data = await response.json(); // Parse the JSON from the response
      console.log("data", data); // Do something with the data here
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note._id === id ? { ...note, ...data } : note))
      );
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  };
  //Delete anote
  const deleteNote = async (id) => {
    //logic
    console.log("delete note of id: ", id);
    const newNote = notes.filter((note) => {
      return note._id !== id;
    });
    //api call
    try {
      const request = new Request(
        `http://localhost:5000/api/notes/deletenote/${id}`,
        {
          method: "DELETE",
          headers: new Headers({
            "Content-Type": "application/json",
            "auth-token":
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2YWI0ZDU1N2M2YmJlNGY0NmNmNGNjMiIsImlhdCI6MTcyMjUwNDYwNH0.DI_GugRExUm-5mVtaacUfzEYtehii_J5O7YT6dJxDGI",
          }),
        }
      );

      const response = await fetch(request);
      if (!response.ok) {
        const data = await response.json(); // Parse the JSON from the response
        console.log("data", data); // Do something with the data here
        throw new Error(
          `Network response was not ok. Status: ${response.status}`
        );
      }
      console.log(response.status);
      const data = await response.json(); // Parse the JSON from the response
      console.log("data", data); // Do something with the data here
      setNotes(newNote);
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
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
