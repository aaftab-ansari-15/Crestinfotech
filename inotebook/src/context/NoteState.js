import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNote = [
    {
      _id: "66ab7cc5819bf3356ca62293",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title",
      description: "please goto sleep early",
      tag: "personal",
      date: "2024-08-01T12:17:09.190Z",
      __v: 0,
    },
    {
      _id: "66ac7fb72189b08cf125c2a5",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title 2",
      description: "please goto sleep early 2",
      tag: "personal",
      date: "2024-08-02T06:41:59.214Z",
      __v: 0,
    },
    {
      _id: "66ac7fbe2189b08cf125c2a7",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title 3",
      description: "please goto sleep early 3",
      tag: "personal",
      date: "2024-08-02T06:42:06.687Z",
      __v: 0,
    },
    {
      _id: "66ac7fb72189b08cf125c2a5",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title 2",
      description: "please goto sleep early 2",
      tag: "personal",
      date: "2024-08-02T06:41:59.214Z",
      __v: 0,
    },
    {
      _id: "66ac7fbe2189b08cf125c2a7",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title 3",
      description: "please goto sleep early 3",
      tag: "personal",
      date: "2024-08-02T06:42:06.687Z",
      __v: 0,
    },
    {
      _id: "66ac7fb72189b08cf125c2a5",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title 2",
      description: "please goto sleep early 2",
      tag: "personal",
      date: "2024-08-02T06:41:59.214Z",
      __v: 0,
    },
    {
      _id: "66ac7fbe2189b08cf125c2a7",
      user: "66ab4d557c6bbe4f46cf4cc2",
      title: "my title 3",
      description: "please goto sleep early 3",
      tag: "personal",
      date: "2024-08-02T06:42:06.687Z",
      __v: 0,
    },
  ];
  const [notes, setNotes] = useState(initialNote);
  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
