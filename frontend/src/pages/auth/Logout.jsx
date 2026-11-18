
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
    logoutRequestStart,
    logoutRequestSuccess,
    logoutRequestFail
} from "../../redux/auth/authSlice";

import { logoutAPI } from "../../Services/authFunctions";

const Logout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { loading } = useSelector(
        (state) => state.auth.logoutRequest
    );

    const handleLogout = async () => {

        if (!window.confirm("Are you sure you want to logout?")) {
            return;
        }

        dispatch(logoutRequestStart());

        try {

            const response = await logoutAPI();

            if (!response || !response.success) {

                dispatch(logoutRequestFail(response));

                alert(response?.message || "Logout failed");

                return;
            }

            dispatch(logoutRequestSuccess(response));

            navigate("/login", { replace: true });

        } catch (error) {

            dispatch(
                logoutRequestFail({
                    message: error.message || "Logout failed"
                })
            );

            alert(error.message || "Something went wrong");

        }
    };

    return (
        <button
            type="button"
            className="btn btn-outline-danger w-100 d-flex align-items-center justify-content-center gap-2 py-2 fw-semibold"
            onClick={handleLogout}
            disabled={loading}
        >
            <i className="bi bi-box-arrow-right fs-5"></i>

            {loading ? "Logging out..." : "Logout"}
        </button>);
};

export default Logout;
