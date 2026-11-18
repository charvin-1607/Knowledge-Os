import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/auth/authSlice';
import userReducer from '../redux/user/userSlice';
import noteReducer from '../redux/note/noteSlice';
import adminReducer from "../redux/admin/adminSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        note: noteReducer,
        admin: adminReducer

    },
});

export default store;