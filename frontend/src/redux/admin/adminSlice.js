
import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({

    name: "admin",

    initialState: {

        users: [],

        stats: {
            totalAdmins: 0,
            totalUsers: 0,
            totalAccounts: 0
        },

        pagination: {
            currentPage: 1,
            totalPages: 0,
            totalAccounts: 0,
            limit: 10
        },

        getAllUsersRequest: {
            loading: false,
            success: false,
            error: null,
            message: ""
        },

        // USER NOTES STATE

        userNotes: [],

        selectedUser: null,

        getUserNotesRequest: {
            loading: false,
            success: false,
            error: null,
            message: ""
        },

    },

    reducers: {

        // GET ALL USERS START
        getAllUsersRequestStart: (state) => {

            state.getAllUsersRequest.loading = true;
            state.getAllUsersRequest.success = false;
            state.getAllUsersRequest.error = null;
            state.getAllUsersRequest.message = "";

        },

        // GET ALL USERS SUCCESS
        getAllUsersRequestSuccess: (state, action) => {

            state.getAllUsersRequest.loading = false;
            state.getAllUsersRequest.success = true;
            state.getAllUsersRequest.error = null;
            state.getAllUsersRequest.message = action.payload.message;

            state.users = action.payload.users;

            state.stats = action.payload.stats;

            state.pagination = action.payload.pagination;

        },

        // GET ALL USERS FAIL
        getAllUsersRequestFail: (state, action) => {

            state.getAllUsersRequest.loading = false;
            state.getAllUsersRequest.success = false;
            state.getAllUsersRequest.error = true;

            state.getAllUsersRequest.message =
                action.payload?.message || "Failed to fetch users";

        },

        // GET USER NOTES START

        getUserNotesRequestStart: (state) => {

            state.getUserNotesRequest.loading = true;
            state.getUserNotesRequest.success = false;
            state.getUserNotesRequest.error = null;
            state.getUserNotesRequest.message = "";

            state.userNotes = [];
            state.selectedUser = null;

        },

        // GET USER NOTES SUCCESS

        getUserNotesRequestSuccess: (state, action) => {

            state.getUserNotesRequest.loading = false;
            state.getUserNotesRequest.success = true;
            state.getUserNotesRequest.error = null;

            state.getUserNotesRequest.message = action.payload.message;

            state.userNotes = action.payload.notes;
            state.selectedUser = action.payload.user;

        },

        // GET USER NOTES FAIL

        getUserNotesRequestFail: (state, action) => {

            state.getUserNotesRequest.loading = false;
            state.getUserNotesRequest.success = false;
            state.getUserNotesRequest.error = true;

            state.getUserNotesRequest.message =
                action.payload?.message || "Failed to fetch user notes";

            state.userNotes = [];
            state.selectedUser = null;

        },

    }

});


// EXPORT ACTIONS

export const {
    getAllUsersRequestStart,
    getAllUsersRequestSuccess,
    getAllUsersRequestFail,

    getUserNotesRequestStart,
    getUserNotesRequestSuccess,
    getUserNotesRequestFail
    
} = adminSlice.actions;


// EXPORT REDUCER

export default adminSlice.reducer;
