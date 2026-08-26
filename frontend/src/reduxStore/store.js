import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/auth/authSlice';
import userReducer from '../redux/user/userSlice';
import noteReducer from '../redux/note/noteSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        note: noteReducer,

    },
});

export default store;