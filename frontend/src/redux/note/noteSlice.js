import { createSlice } from "@reduxjs/toolkit";


const noteSlice = createSlice({

    name: "note",
    initialState: {
        notes: [],
        createNoteRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },
        fetchNotesRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },
        updateNoteRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },
        deleteNoteRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },
    },

    reducers: {

        // CREATE NOTE
        createNoteRequestStart: (state) => {
            state.createNoteRequest.loading = true;
            state.createNoteRequest.success = false;
            state.createNoteRequest.error = null;
            state.createNoteRequest.message = "";
        },

        createNoteRequestSuccess: (state, action) => {
            state.createNoteRequest.loading = false;
            state.createNoteRequest.success = true;
            state.createNoteRequest.error = null;
            state.createNoteRequest.message = action.payload.message;
            state.notes.push(action.payload.note);

            console.log("Note created successfully:", action.payload.note);
        },

        createNoteRequestFail: (state, action) => {
            state.createNoteRequest.loading = false;
            state.createNoteRequest.success = false;
            state.createNoteRequest.error = action.payload.error;
            state.createNoteRequest.message = action.payload.message;
        },

        // FETCH NOTES
        fetchNotesRequestStart: (state) => {
            state.fetchNotesRequest.loading = true;
            state.fetchNotesRequest.success = false;
            state.fetchNotesRequest.error = null;
            state.fetchNotesRequest.message = "";
        },

        fetchNotesRequestSuccess: (state, action) => {
            state.fetchNotesRequest.loading = false;
            state.fetchNotesRequest.success = true;
            state.fetchNotesRequest.error = null;
            state.fetchNotesRequest.message = action.payload.message;
            state.notes = action.payload.notes;

            console.log("from slices Notes fetched successfully:", action.payload.notes);
        },

        fetchNotesRequestFail: (state, action) => {
            state.fetchNotesRequest.loading = false;
            state.fetchNotesRequest.success = false;
            state.fetchNotesRequest.error = action.payload.error;
            state.fetchNotesRequest.message = action.payload.message;
        },



        //delete note

        deleteNoteRequestStart: (state) => {
            state.deleteNoteRequest.loading = true;
            state.deleteNoteRequest.success = false;
            state.deleteNoteRequest.error = null;
            state.deleteNoteRequest.message = "";
        },

        deleteNoteRequestSuccess: (state, action) => {
            state.deleteNoteRequest.loading = false;
            state.deleteNoteRequest.success = true;
            state.deleteNoteRequest.error = null;
            state.deleteNoteRequest.message = action.payload.message;

            // Remove the deleted note from the notes array
            state.notes = state.notes.filter(note => note._id !== action.payload.noteId);

            console.log("Note deleted successfully:", action.payload.noteId);
        },

        deleteNoteRequestFail: (state, action) => {
            state.deleteNoteRequest.loading = false;
            state.deleteNoteRequest.success = false;
            state.deleteNoteRequest.error = action.payload.error;
            state.deleteNoteRequest.message = action.payload.message;
        },

        // upadate note
        updateNoteRequestStart: (state) => {
            state.updateNoteRequest.loading = true;
            state.updateNoteRequest.success = false;
            state.updateNoteRequest.error = null;
            state.updateNoteRequest.message = "";
        },

        updateNoteRequestSuccess: (state, action) => {
                
                state.updateNoteRequest.loading = false;
                state.updateNoteRequest.success = true;
                state.updateNoteRequest.error = null;
                state.updateNoteRequest.message = action.payload.message;
    
                // Update the note in the notes array
                const index = state.notes.findIndex(note => note._id === action.payload.note._id);
                if (index !== -1) {
                    state.notes[index] = action.payload.note;
                }
    
                console.log("Note updated successfully:", action.payload.note);
            },

        updateNoteRequestFail: (state, action) => {
                
                state.updateNoteRequest.loading = false;
                state.updateNoteRequest.success = false;
                state.updateNoteRequest.error = action.payload.error;
                state.updateNoteRequest.message = action.payload.message;
            },


    },

});


export const {
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


} = noteSlice.actions;

export default noteSlice.reducer;