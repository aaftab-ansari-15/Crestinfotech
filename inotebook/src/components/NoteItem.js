import React, { useState, useContext } from "react";
import NoteContext from "../context/NoteContext";
import Modal from "./Modal";

const NoteItem = (props) => {
  const { note } = props;
  const context = useContext(NoteContext);
  const { setNotes, deleteNote, updateNote } = context;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    title: note.title,
    description: note.description,
    tag: note.tag,
  });

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true); // Open the modal
  };
  const hanndleClick = (e) => {
    e.preventDefault();
    updateNote(note._id, formValues);
    handleCloseModal(); // Close the modal after saving
  };
  const onChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <>
      <div className="card col-md-3 my-3 mx-3">
        <div className="card-body">
          <span className="badgend badge-success fa-border rounded">
            {note.tag}
          </span>
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <div className="d-flex justify-content-end">
            <i
              className="fa-solid fa-pen-to-square mx-2"
              onClick={handleEditClick}
              style={{ cursor: "pointer" }}
            ></i>
            <i
              className="fa-solid fa-trash mx-2"
              onClick={() => {
                deleteNote(note._id);
              }}
            ></i>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal}>
        <h2>Edit Note</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="etitle"
              name="etitle"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              id="edescription"
              name="edescription"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Tag
            </label>
            <input
              type="text"
              id="etag"
              name="etag"
              className="form-control"
              onChange={onChange}
            />
          </div>
          <button
            onClick={hanndleClick}
            type="submit"
            className="btn btn-primary mx-2 my-2"
          >
            Update
          </button>
          <button
            className="btn btn-primary mx-2 my-2"
            type="button"
            onClick={handleCloseModal}
          >
            Close
          </button>
        </form>
      </Modal>
    </>
  );
};

export default NoteItem;
