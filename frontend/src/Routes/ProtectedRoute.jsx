
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {

    const {
        isAuthenticated,
        checkAuthRequest,
        user
    } = useSelector((state) => state.auth);

    // Wait until authentication check completes
    if (checkAuthRequest.loading) {
        return <h3>Checking authentication...</h3>;
    }

    // User is not logged in
    if (!isAuthenticated || !user) {
        return <Navigate to="/login" replace />;
    }

    // Role authorization
    if (role && user.role !== role) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;
