import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token: null,
        isAuthenticated: false,

        signupRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },

        loginRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },

        logoutRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",

        },

        checkAuthRequest: {
            loading: false,
            success: false,
            error: null,
            message: "",
        },

    },

    reducers: {

        // SIGNUP
        signupRequestStart: (state) => {
            state.signupRequest.loading = true;
            state.signupRequest.success = false;
            state.signupRequest.error = null;
            state.signupRequest.message = "";
        },

        signupRequestSuccess: (state, action) => {
            state.signupRequest.loading = false;
            state.signupRequest.success = true;
            state.signupRequest.error = null;
            state.signupRequest.message = action.payload.message;
        },

        signupRequestFail: (state, action) => {
            state.signupRequest.loading = false;
            state.signupRequest.success = false;
            state.signupRequest.error = action.payload.error;
            state.signupRequest.message = action.payload.message;
        },


        // LOGIN
        loginRequestStart: (state) => {
            state.loginRequest.loading = true;
            state.loginRequest.success = false;
            state.loginRequest.error = null;
            state.loginRequest.message = "";
        },

        loginRequestSuccess: (state, action) => {
            state.loginRequest.loading = false;
            state.loginRequest.success = true;
            state.loginRequest.error = null;
            state.loginRequest.message = action.payload.message;

            // Set user and token on successful login
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
        },

        loginRequestFail: (state, action) => {
            state.loginRequest.loading = false;
            state.loginRequest.success = false;
            state.loginRequest.error = action.payload.error;
            state.loginRequest.message = action.payload.message;

            // Clear user and token on failed login
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },

        // logout 

        logoutRequestStart: (state) => {
            state.logoutRequest.loading = true;
            state.logoutRequest.success = false;
            state.logoutRequest.error = null;
            state.logoutRequest.message = "";
        },

        logoutRequestSuccess: (state, action) => {
            state.logoutRequest.loading = false;
            state.logoutRequest.success = true;
            state.logoutRequest.error = null;
            state.logoutRequest.message = action.payload.message;

            // Clear user and token on successful logout
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
        },


        logoutRequestFail: (state, action) => {
            state.logoutRequest.loading = false;
            state.logoutRequest.success = false;
            state.logoutRequest.error = action.payload.error;
            state.logoutRequest.message = action.payload.message;
        },


        // check auth
        checkAuthRequestStart: (state) => {
            state.checkAuthRequest.loading = true;
            state.checkAuthRequest.success = false;
            state.checkAuthRequest.error = null;
            state.checkAuthRequest.message = "";
        },

        checkAuthRequestSuccess: (state, action) => {
                
                state.checkAuthRequest.loading = false;
                state.checkAuthRequest.success = true;
                state.checkAuthRequest.error = null;
                
                state.checkAuthRequest.message = action.payload.message;
    
                // Set user and token on successful auth check
                state.user = action.payload.user;
                state.isAuthenticated = true;

                console.log("Auth check successful:", state.user);
            },

        checkAuthRequestFail: (state, action) => {
                
                state.checkAuthRequest.loading = false;
                state.checkAuthRequest.success = false;
                state.checkAuthRequest.error = action.payload.error;
                state.checkAuthRequest.message = action.payload.message;
    
                // Clear user and token on failed auth check
                state.user = null;
                state.token = null;
                state.isAuthenticated = false;
            }

        

       
    },

});


//exports
export const {
    signupRequestStart,
    signupRequestSuccess,
    signupRequestFail,

    loginRequestStart,
    loginRequestSuccess,
    loginRequestFail,

    logoutRequestStart,
    logoutRequestSuccess,
    logoutRequestFail,

    checkAuthRequestStart,
    checkAuthRequestSuccess,
    checkAuthRequestFail

} = authSlice.actions;

export default authSlice.reducer;