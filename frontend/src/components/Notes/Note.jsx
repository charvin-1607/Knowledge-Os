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
    <>

      <h1>Notes</h1>

      {/* create note */}

      <div className='create-note-container'>

        <h2>Create Note</h2>

        <input
          type='text'
          name='title'
          placeholder='Title'
          value={noteData.title}
          onChange={handleChange}
        />
        <br /> <br />
        <input
          type='text'
          name='category'
          placeholder='Category'
          value={noteData.category}
          onChange={handleChange}
        />
        <br /> <br />

        <textarea
          placeholder='Content'
          name='content'
          value={noteData.content}
          onChange={handleChange}
        ></textarea>

        <br /> <br />

        <button type='submit'
          onClick={handleCreateNote}

          disabled={createNoteRequest.loading}
        >
          {createNoteRequest.loading ? 'Creating Note...' : 'Create Note'}

        </button>

      </div>


      <br /> <br />

      {/* display notes */}

      <div className="display-notes-container mt-4">

        <h2 className="mb-4">My Notes</h2>

        {notes.length !== 0 ? (

          <div className="row g-4">

            {notes.map((note) => (

              <div className="col-12 col-md-6 col-lg-4" key={note._id}>

                <div className="card h-100 rounded-1 shadow-sm">

                  <div className="card-body d-flex flex-column">

                    <h5 className="card-title mb-2">
                      {note.title}
                    </h5>

                    <p className="text-secondary small mb-3">
                      Category: {note.category}
                    </p>

                    <p className="card-text flex-grow-1">
                      {note.content}
                    </p>

                    <div className="d-flex justify-content-end gap-2 mt-3">

                      <button
                        type="button"
                        className="btn btn-primary btn-sm"
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
            
                        className="btn btn-danger"
                        onClick={() => handleDeleteNote(note._id)}
                      >

                        Delete Profile

                      </button>

                    </div>

                  </div>

                </div>

                  {
                    editModel && (

                      <div className="edit-note-modal">

                        <div className="edit-note-content">

                          <h3>Edit Note</h3>

                          <input
                            type='text'
                            name='title'
                            placeholder='Title'
                            value={editNoteData.title}
                            onChange={handleEditChange}
                          />
                          <br /> <br />
                          <input
                            type='text'
                            name='category'
                            placeholder='Category'
                            value={editNoteData.category}
                            onChange={handleEditChange}
                          />
                          <br /> <br />

                          <textarea
                            placeholder='Content'
                            name='content'
                            value={editNoteData.content}
                            onChange={handleEditChange}
                          ></textarea>

                          <br /> <br />

                          <button
                            type='submit'
                            onClick={() => {
                              handleUpdateNote(note._id);
                              setEditModel(false);
                            }}
                          >
                            Update Note
                          </button>

                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setEditModel(false)}
                          >
                            Cancel
                          </button>

                        </div>

                      </div>
                    )
                  }

              </div>

            ))}

          </div>

        ) : (

          <div className="alert alert-secondary">
            No notes found.
          </div>

        )}

      </div>
    </>


  )



}

export default Notes
