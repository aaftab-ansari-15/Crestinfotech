import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <div class="card col-md-3 my-3 mx-3">
      <div class="card-body">
        <h5 class="card-title">{note.title}</h5>
        <p class="card-text">{note.desciption}</p>
      </div>
    </div>
  );
};

export default NoteItem;
