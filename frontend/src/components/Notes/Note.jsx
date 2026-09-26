import React, { useEffect, useState } from 'react'

import { createNote, getNotesByUserId, deleteNoteById,updateNoteById } from '../../Services/noteFunctions'

import {
  createNoteRequestStart,
  createNoteRequestSuccess,
  createNoteRequestFail,

  fetchNotesRequestStart,
  fetchNotesRequestSuccess,
  fetchNotesRequestFail,

  deleteNoteRequestStart,
  deleteNoteRequestSuccess,
  deleteNoteRequestFail,

  updateNoteRequestStart,
  updateNoteRequestSuccess,
  updateNoteRequestFail


} from '../../redux/note/noteSlice'


import { useDispatch, useSelector } from 'react-redux'




const Notes = () => {

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { createNoteRequest, notes } = useSelector((state) => state.note);

  const [noteData, setNoteData] = useState({
    title: '',
    category: '',
    content: '',
  });


  const [editModel, setEditModel] = useState(false);
  const [editNoteData, setEditNoteData] = useState({
    title: '',
    category: '',
    content: '',
  });

  useEffect(() => {
    fetchNotesByUserId();
  }, [dispatch]);


  // fetch notes by user id

  const fetchNotesByUserId = async () => {

    dispatch(fetchNotesRequestStart());

    try {

      const res = await getNotesByUserId();

      if (!res || !res.success) {

        dispatch(fetchNotesRequestFail(res.message || 'Failed to fetch notes'));
        alert("fetch Notes error alert = " || res.message || 'Failed to fetch notes');
        return;
      }

      dispatch(fetchNotesRequestSuccess(res));
     // alert("fetch Notes success alert = " + res.message);

    } catch (error) {

      dispatch(
        fetchNotesRequestFail({
          success: false,
          message: error.message,
        })
      );

    }

  }







  // handle onchange for create note 

  const handleChange = (e) => {

    setNoteData({
      ...noteData,
      [e.target.name]: e.target.value,
    });

  }



  //Create Note

  const handleCreateNote = async () => {

    dispatch(createNoteRequestStart());

    try {
      const res = await createNote(user.id, noteData.title, noteData.category, noteData.content);

      if (!res || !res.success) {
        dispatch(createNoteRequestFail(res.message || 'Failed to create note'));
        alert("create Note error alert = " || res.message || 'Failed to create note');
      }

      dispatch(createNoteRequestSuccess(res));
      alert("create Note success alert = " + res.message);

    } catch (error) {
      dispatch(
        createNoteRequestFail({
          success: false,
          message: error.message,
        })
      );
    }

  }


  // delete note function

  const handleDeleteNote = async (noteId) => {

    dispatch(deleteNoteRequestStart());

    try {

      const res = await deleteNoteById(user.id, noteId);

      if (!res || !res.success) {
        dispatch(deleteNoteRequestFail(res.message || 'Failed to delete note'));
        alert("delete Note error alert = " || res.message || 'Failed to delete note');
      }

      dispatch(deleteNoteRequestSuccess(res));
      alert("delete Note success alert = " + res.message);

    } catch (error) {
      dispatch(
        deleteNoteRequestFail({
          success: false,
          message: error.message,
        })
      );
    }

  }


  // handle change for update note

  const handleEditChange = (e) => {
      
      setEditNoteData({
        ...editNoteData,
        [e.target.name]: e.target.value,
      });
  
    }


    // update note function

    const handleUpdateNote = async (noteId) => {

      dispatch(updateNoteRequestStart());

      try {

        const res = await updateNoteById(user.id, noteId, editNoteData);

        if (!res || !res.success) {
          dispatch(updateNoteRequestFail(res.message || 'Failed to update note'));
          alert("update Note error alert = " || res.message || 'Failed to update note');
        }

        dispatch(updateNoteRequestSuccess(res));

        // alert("update Note success alert = " + res.message);

      } catch (error) {
          
          dispatch(
            updateNoteRequestFail({
              success: false,
              message: error.message,
            })
          );
        }

    }





  return (
    <div className="container py-5">
  
      {/* HEADER */}
      <div className="text-center mb-5">
  
        <h1 className="fw-bold mb-2">
          📝 My Notes
        </h1>
  
        <p className="text-muted mb-0">
          Create and manage your personal notes
        </p>
  
      </div>
  
  
      {/* CREATE NOTE */}
      <div className="card border border-dark shadow-sm rounded-4 mb-5">
  
        {/* Header */}
        <div className="card-header bg-dark text-white border-dark rounded-top-4 py-3 px-4">
  
          <h4 className="mb-0 fw-semibold">
            Create New Note
          </h4>
  
        </div>
  
  
        {/* Body */}
        <div className="card-body p-4">
  
          <div className="row g-4">
  
            {/* Title */}
            <div className="col-md-6">
  
              <label className="form-label fw-semibold">
                Note Title
              </label>
  
              <input
                type="text"
                name="title"
                className="form-control border border-secondary rounded-3"
                placeholder="Enter note title"
                value={noteData.title}
                onChange={handleChange}
              />
  
            </div>
  
  
            {/* Category */}
            <div className="col-md-6">
  
              <label className="form-label fw-semibold">
                Category
              </label>
  
              <input
                type="text"
                name="category"
                className="form-control border border-secondary rounded-3"
                placeholder="Enter category"
                value={noteData.category}
                onChange={handleChange}
              />
  
            </div>
  
  
            {/* Content */}
            <div className="col-12">
  
              <label className="form-label fw-semibold">
                Note Content
              </label>
  
              <textarea
                name="content"
                rows="5"
                className="form-control border border-secondary rounded-3"
                placeholder="Write your note here..."
                value={noteData.content}
                onChange={handleChange}
              ></textarea>
  
            </div>
  
  
            {/* Button */}
            <div className="col-12">
  
              <button
                type="button"
                className="btn btn-dark px-4 py-2 rounded-3"
                onClick={handleCreateNote}
                disabled={createNoteRequest.loading}
              >
  
                {createNoteRequest.loading
                  ? "Creating Note..."
                  : "＋ Create Note"
                }
  
              </button>
  
            </div>
  
          </div>
  
        </div>
  
      </div>
  
  
      {/* MY NOTES HEADER */}
  
      <div className="d-flex justify-content-between align-items-center mb-4">
  
        <div>
  
          <h2 className="fw-bold mb-1">
            My Notes
          </h2>
  
          <p className="text-muted mb-0">
            All your saved notes
          </p>
  
        </div>
  
  
        <span className="badge text-dark border border-dark rounded-pill px-3 py-2">
          {notes.length} Notes
        </span>
  
      </div>
  
  
      {/* DISPLAY NOTES */}
  
      {notes.length !== 0 ? (
  
        <div className="row g-4">
  
          {notes.map((note) => (
  
            <div
              className="col-12 col-md-6 col-lg-4"
              key={note._id}
            >
  
              {/* NOTE CARD */}
  
              <div className="card h-100 border border-secondary shadow-sm rounded-4">
  
                <div className="card-body p-4 d-flex flex-column">
  
  
                  {/* Note Title */}
                  <h5 className="fw-bold mb-2">
                   Title :  {note.title}
                  </h5>
  
  
                  {/* Category */}
                  <div className="mb-3">
  
                    <span className="badge bg-light text-dark border border-secondary rounded-pill px-3 py-2">
  
                     Category : {note.category}
  
                    </span>
  
                  </div>
  
  
                  {/* Divider */}
                  <hr className="my-2" />
  
  
                  {/* Content */}
                  <p className="text-secondary mt-3 mb-4 flex-grow-1">
  
                    {note.content}
  
                  </p>
  
  
                  {/* Buttons */}
                  <div className="d-flex gap-2 pt-3 border-top">
  
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm flex-fill rounded-3"
                      onClick={() => {
  
                        setEditModel(true);
  
                        setEditNoteData({
                          title: note.title,
                          category: note.category,
                          content: note.content,
                        });
  
                      }}
                    >
                      Update
                    </button>
  
  
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm flex-fill rounded-3"
                      onClick={() => handleDeleteNote(note._id)}
                    >
                      Delete
                    </button>
  
                  </div>
  
                </div>
  
              </div>
  
  
              {/* EDIT MODAL*/}
  
              {editModel && (
  
                <div
                  className="modal d-block"
                  tabIndex="-1"
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.65)"
                  }}
                >
  
                  <div className="modal-dialog modal-dialog-centered">
  
                    <div className="modal-content border border-dark rounded-4 shadow-lg">
  
  
                      {/* Modal Header */}
                      <div className="modal-header bg-dark text-white rounded-top-4">
  
                        <h5 className="modal-title fw-semibold">
                          Edit Note
                        </h5>
  
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          onClick={() => setEditModel(false)}
                        ></button>
  
                      </div>
  
  
                      {/* Modal Body */}
                      <div className="modal-body p-4">
  
                        {/* Title */}
                        <div className="mb-3">
  
                          <label className="form-label fw-semibold">
                            Note Title
                          </label>
  
                          <input
                            type="text"
                            name="title"
                            className="form-control border border-secondary rounded-3"
                            placeholder="Title"
                            value={editNoteData.title}
                            onChange={handleEditChange}
                          />
  
                        </div>
  
  
                        {/* Category */}
                        <div className="mb-3">
  
                          <label className="form-label fw-semibold">
                            Category
                          </label>
  
                          <input
                            type="text"
                            name="category"
                            className="form-control border border-secondary rounded-3"
                            placeholder="Category"
                            value={editNoteData.category}
                            onChange={handleEditChange}
                          />
  
                        </div>
  
  
                        {/* Content */}
                        <div className="mb-3">
  
                          <label className="form-label fw-semibold">
                            Content
                          </label>
  
                          <textarea
                            name="content"
                            rows="5"
                            className="form-control border border-secondary rounded-3"
                            placeholder="Content"
                            value={editNoteData.content}
                            onChange={handleEditChange}
                          ></textarea>
  
                        </div>
  
                      </div>
  
  
                      {/* Modal Footer */}
                      <div className="modal-footer border-top">
  
                        <button
                          type="button"
                          className="btn btn-outline-secondary rounded-3 px-4"
                          onClick={() => setEditModel(false)}
                        >
                          Cancel
                        </button>
  
  
                        <button
                          type="button"
                          className="btn btn-dark rounded-3 px-4"
                          onClick={() => {
  
                            handleUpdateNote(note._id);
                            setEditModel(false);
  
                          }}
                        >
                          Update Note
                        </button>
  
                      </div>
  
                    </div>
  
                  </div>
  
                </div>
  
              )}
  
            </div>
  
          ))}
  
        </div>
  
      ) : (
  
        /* EMPTY STATE */
  
        <div className="card border border-secondary rounded-4 shadow-sm">
  
          <div className="card-body text-center py-5">
  
            <div className="fs-1 mb-3">
              📝
            </div>
  
            <h5 className="fw-bold">
              No Notes Found
            </h5>
  
            <p className="text-muted mb-0">
              Create your first note to get started.
            </p>
  
          </div>
  
        </div>
  
      )}
  
    </div>
  );

}

export default Notes
