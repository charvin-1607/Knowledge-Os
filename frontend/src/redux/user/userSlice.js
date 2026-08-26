import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({

    name: "user",

    initialState: {

        userData: null,

        // FETCH USER
        fetchUserRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },
      

        // UPDATE USER
        updateUserRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },

        // DELETE USER
        deleteUserRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },

    },


    reducers: {

        // FETCH USER
        fetchUserRequestStart: (state) => {

            state.fetchUserRequest.loading = true;
            state.fetchUserRequest.success = false;
            state.fetchUserRequest.error = null;
            state.fetchUserRequest.message = "";

        },

        fetchUserRequestSuccess: (state, action) => {
                
                state.fetchUserRequest.loading = false;
                state.fetchUserRequest.success = true;
                state.fetchUserRequest.error = null;
                state.fetchUserRequest.message = action.payload.message;
    
                state.userData = action.payload.user;
                console.log("fetched data from userSlice = ",state.userData);
    
            },

        fetchUserRequestFail: (state, action) => {
                
                state.fetchUserRequest.loading = false;
                state.fetchUserRequest.success = false;
                state.fetchUserRequest.error = action.payload.error;
                state.fetchUserRequest.message = action.payload.message;
    
            },

      
        // UPDATE USER
       
        updateUserRequestStart: (state) => {

            state.updateUserRequest.loading = true;
            state.updateUserRequest.success = false;
            state.updateUserRequest.error = null;
            state.updateUserRequest.message = "";

        },

        updateUserRequestSuccess: (state, action) => {

            state.updateUserRequest.loading = false;
            state.updateUserRequest.success = true;
            state.updateUserRequest.error = null;
            state.updateUserRequest.message = action.payload.message;

            state.userData = action.payload.user;
            console.log("updated data from userSlcie = ",state.userData);

        },

        updateUserRequestFail: (state, action) => {

            state.updateUserRequest.loading = false;
            state.updateUserRequest.success = false;
            state.updateUserRequest.error = action.payload.error;
            state.updateUserRequest.message = action.payload.message;

        },


      
        // DELETE USER
       
        deleteUserRequestStart: (state) => {

            state.deleteUserRequest.loading = true;
            state.deleteUserRequest.success = false;
            state.deleteUserRequest.error = null;
            state.deleteUserRequest.message = "";

        },

        deleteUserRequestSuccess: (state, action) => {

            state.deleteUserRequest.loading = false;
            state.deleteUserRequest.success = true;
            state.deleteUserRequest.error = null;
            state.deleteUserRequest.message = action.payload.message;

            state.userData = null;

        },

        deleteUserRequestFail: (state, action) => {

            state.deleteUserRequest.loading = false;
            state.deleteUserRequest.success = false;
            state.deleteUserRequest.error = action.payload.error;
            state.deleteUserRequest.message = action.payload.message;

        },

    },

});


// EXPORT ACTIONS

export const {

    fetchUserRequestStart,
    fetchUserRequestSuccess,
    fetchUserRequestFail,

    updateUserRequestStart,
    updateUserRequestSuccess,
    updateUserRequestFail,

    deleteUserRequestStart,
    deleteUserRequestSuccess,
    deleteUserRequestFail,

} = userSlice.actions;


// EXPORT REDUCER

export default userSlice.reducer;