import React, { use } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {

    const {
        isAuthenticated,
        checkAuthRequest,
        user
    } = useSelector((state) => state.auth);


    // ✅ STEP 1: WAIT first
    if (!isAuthenticated) {
        return <h3>Checking authentication...please login </h3>;
    }

    // ✅ STEP 2: now check login
    if (!user) {
        return <Navigate to="/login" />;
    }




    //  Allowed
    return children;

};


export default ProtectedRoute;