
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    fetchUserAPI,
    updateUserAPI,
    deleteUserAPI
} from "../../Services/userFunctions";

import {
    fetchUserRequestStart,
    fetchUserRequestSuccess,
    fetchUserRequestFail,
    updateUserRequestStart,
    updateUserRequestSuccess,
    updateUserRequestFail,
    deleteUserRequestStart,
    deleteUserRequestSuccess,
    deleteUserRequestFail
} from "../../redux/user/userSlice";

import { useNavigate } from "react-router-dom";

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        userData,
        updateUserRequest,
        deleteUserRequest
    } = useSelector((state) => state.user);

    const { checkAuthRequest, user } = useSelector(
        (state) => state.auth
    );

    const [editUser, setEditUser] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const updateData = {};

    if (formData.name.trim() !== "") {
        updateData.name = formData.name;
    }

    if (formData.email.trim() !== "") {
        updateData.email = formData.email;
    }

    // FETCH USER PROFILE
    useEffect(() => {
        fetchUserDetails();
    }, []);

    const fetchUserDetails = async () => {
        dispatch(fetchUserRequestStart());

        try {
            const res = await fetchUserAPI();

            if (!res || res.error) {
                dispatch(fetchUserRequestFail(
                    res?.message || "Authentication check failed"
                ));
                return;
            }

            dispatch(fetchUserRequestSuccess(res));
        } catch (error) {
            dispatch(fetchUserRequestFail(
                error.message || "Something went wrong during authentication check"
            ));
        }
    };

    // HANDLE INPUT CHANGE
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // UPDATE USER
    const handleUpdateUser = async (e) => {
        e.preventDefault();

        dispatch(updateUserRequestStart());

        try {
            const res = await updateUserAPI(userData._id, updateData);

            if (!res || res.error) {
                dispatch(updateUserRequestFail(
                    res?.message || "Update user failed"
                ));
                return;
            }

            dispatch(updateUserRequestSuccess(res));
            alert("User updated successfully");
            setEditUser(false);

        } catch (error) {
            dispatch(updateUserRequestFail(
                error.message || "Something went wrong during update user"
            ));
        }
    };

    // DELETE USER
    const handleDeleteUser = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to permanently delete your profile?"
        );

        if (!confirmed) return;

        dispatch(deleteUserRequestStart());

        try {
            const res = await deleteUserAPI(userData.id);

            if (!res || res.error) {
                dispatch(deleteUserRequestFail(
                    res?.message || "Delete user failed"
                ));
                return;
            }

            dispatch(deleteUserRequestSuccess(res));
            navigate("/signup");

        } catch (error) {
            dispatch(deleteUserRequestFail(
                error.message || "Something went wrong during delete user"
            ));
        }
    };

    const cardStyle = {
        background: "#FFFFFF",
        border: "1px solid #E2E8F0",
        borderRadius: "18px",
        boxShadow: "0 5px 22px rgba(15,23,42,0.05)"
    };

    const primary = "#4F46E5";
    const muted = "#64748B";

    return (
        <div
            className="container-fluid py-4 px-3 px-md-4"
            style={{
                background: "#F1F5F9",
                minHeight: "100%"
            }}
        >
            {/* PAGE HEADER */}
            <div className="mb-4">
                <span
                    className="badge rounded-pill px-3 py-2 mb-2"
                    style={{
                        background: "#E0E7FF",
                        color: "#4338CA"
                    }}
                >
                    ACCOUNT SETTINGS
                </span>

                <h2 className="fw-bold mb-2" style={{ color: "#1E293B" }}>
                    <i
                        className="bi bi-person-circle me-2"
                        style={{ color: primary }}
                    />
                    My Profile
                </h2>

                <p className="mb-0" style={{ color: muted }}>
                    View and manage your personal account information.
                </p>
            </div>

            {/* PROFILE CONTENT */}
            <div className="row justify-content-center">
                <div className="col-12 col-xl-9">

                    <div style={cardStyle}>

                        {/* PROFILE HEADER */}
                        <div
                            className="p-4 p-md-5 text-center"
                            style={{
                                background: "linear-gradient(135deg, #EEF2FF, #F8FAFC)",
                                borderBottom: "1px solid #E2E8F0",
                                borderRadius: "18px 18px 0 0"
                            }}
                        >
                            <div
                                className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3 text-white fw-bold"
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    fontSize: "34px",
                                    background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                                    boxShadow: "0 8px 20px rgba(79,70,229,0.2)"
                                }}
                            >
                                {userData?.name?.charAt(0)?.toUpperCase() || (
                                    <i className="bi bi-person-fill" />
                                )}
                            </div>

                            <h3 className="fw-bold mb-1" style={{ color: "#1E293B" }}>
                                {userData?.name || "My Profile"}
                            </h3>

                            <p className="mb-3" style={{ color: muted }}>
                                {userData?.email || "Account Information"}
                            </p>

                            <span
                                className="badge rounded-pill px-3 py-2"
                                style={{
                                    background: "#DCFCE7",
                                    color: "#15803D"
                                }}
                            >
                                <i className="bi bi-shield-check me-1" />
                                Account Active
                            </span>
                        </div>

                        {/* PROFILE BODY */}
                        <div className="p-3 p-md-4">

                            {userData && (
                                <>
                                    <h5 className="fw-bold mb-3">
                                        Profile Information
                                    </h5>

                                    <div className="row g-3">

                                        {/* NAME */}
                                        <div className="col-12 col-md-6">
                                            <div
                                                className="p-3 h-100"
                                                style={{
                                                    background: "#F8FAFC",
                                                    border: "1px solid #E2E8F0",
                                                    borderRadius: "13px"
                                                }}
                                            >
                                                <div className="d-flex align-items-center gap-3">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center rounded-3"
                                                        style={{
                                                            width: "45px",
                                                            height: "45px",
                                                            background: "#EEF2FF",
                                                            color: primary,
                                                            fontSize: "20px"
                                                        }}
                                                    >
                                                        <i className="bi bi-person-fill" />
                                                    </div>

                                                    <div style={{ minWidth: 0 }}>
                                                        <small
                                                            className="d-block"
                                                            style={{ color: muted }}
                                                        >
                                                            Full Name
                                                        </small>

                                                        <div
                                                            className="fw-semibold"
                                                            style={{
                                                                color: "#1E293B",
                                                                overflowWrap: "anywhere"
                                                            }}
                                                        >
                                                            {userData?.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* EMAIL */}
                                        <div className="col-12 col-md-6">
                                            <div
                                                className="p-3 h-100"
                                                style={{
                                                    background: "#F8FAFC",
                                                    border: "1px solid #E2E8F0",
                                                    borderRadius: "13px"
                                                }}
                                            >
                                                <div className="d-flex align-items-center gap-3">
                                                    <div
                                                        className="d-flex align-items-center justify-content-center rounded-3"
                                                        style={{
                                                            width: "45px",
                                                            height: "45px",
                                                            background: "#EEF2FF",
                                                            color: primary,
                                                            fontSize: "20px"
                                                        }}
                                                    >
                                                        <i className="bi bi-envelope-fill" />
                                                    </div>

                                                    <div style={{ minWidth: 0 }}>
                                                        <small
                                                            className="d-block"
                                                            style={{ color: muted }}
                                                        >
                                                            Email Address
                                                        </small>

                                                        <div
                                                            className="fw-semibold"
                                                            style={{
                                                                color: "#1E293B",
                                                                overflowWrap: "anywhere"
                                                            }}
                                                        >
                                                            {userData?.email}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    {/* ACTIONS */}
                                    <hr className="my-4" style={{ borderColor: "#E2E8F0" }} />

                                    <div className="d-flex flex-column flex-sm-row gap-3">

                                        <button
                                            type="button"
                                            className="btn text-white fw-semibold px-4 py-2"
                                            style={{
                                                background: primary,
                                                borderRadius: "10px"
                                            }}
                                            onClick={() => {
                                                setEditUser(true);

                                                setFormData({
                                                    name: userData?.name || "",
                                                    email: userData?.email || ""
                                                });
                                            }}
                                        >
                                            <i className="bi bi-pencil-square me-2" />
                                            Edit Profile
                                        </button>

                                        <button
                                            type="button"
                                            className="btn fw-semibold px-4 py-2"
                                            style={{
                                                background: "#FFF1F2",
                                                color: "#BE123C",
                                                border: "1px solid #FECDD3",
                                                borderRadius: "10px"
                                            }}
                                            onClick={handleDeleteUser}
                                            disabled={deleteUserRequest.loading}
                                        >
                                            {deleteUserRequest.loading ? (
                                                <>
                                                    <span className="spinner-border spinner-border-sm me-2" />
                                                    Deleting...
                                                </>
                                            ) : (
                                                <>
                                                    <i className="bi bi-trash3 me-2" />
                                                    Delete Profile
                                                </>
                                            )}
                                        </button>

                                    </div>

                                    {deleteUserRequest.error && (
                                        <div className="alert alert-danger mt-3 mb-0">
                                            {deleteUserRequest.message}
                                        </div>
                                    )}
                                </>
                            )}

                        </div>
                    </div>

                    {/* EDIT PROFILE */}
                    {editUser && (
                        <div
                            className="mt-4 p-3 p-md-4"
                            style={cardStyle}
                        >
                            <div className="d-flex align-items-center gap-3 mb-4">

                                <div
                                    className="d-flex align-items-center justify-content-center rounded-3"
                                    style={{
                                        ...{
                                            width: "46px",
                                            height: "46px"
                                        },
                                        background: "#EEF2FF",
                                        color: primary,
                                        fontSize: "21px"
                                    }}
                                >
                                    <i className="bi bi-pencil-square" />
                                </div>

                                <div>
                                    <h5 className="fw-bold mb-1">
                                        Edit Profile
                                    </h5>
                                    <small style={{ color: muted }}>
                                        Update your account details.
                                    </small>
                                </div>
                            </div>

                            <form onSubmit={handleUpdateUser}>

                                <div className="mb-3">
                                    <label
                                        htmlFor="name"
                                        className="form-label fw-semibold"
                                    >
                                        Full Name
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <i className="bi bi-person" />
                                        </span>

                                        <input
                                            type="text"
                                            className="form-control py-2"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Enter your name"
                                        />
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="email"
                                        className="form-label fw-semibold"
                                    >
                                        Email Address
                                    </label>

                                    <div className="input-group">
                                        <span className="input-group-text bg-light">
                                            <i className="bi bi-envelope" />
                                        </span>

                                        <input
                                            type="email"
                                            className="form-control py-2"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                {updateUserRequest.error && (
                                    <div className="alert alert-danger">
                                        {updateUserRequest.message}
                                    </div>
                                )}

                                <div className="d-flex flex-column flex-sm-row gap-2">

                                    <button
                                        type="submit"
                                        className="btn text-white fw-semibold px-4"
                                        style={{ background: primary }}
                                        disabled={updateUserRequest.loading}
                                    >
                                        {updateUserRequest.loading ? (
                                            <>
                                                <span className="spinner-border spinner-border-sm me-2" />
                                                Updating...
                                            </>
                                        ) : (
                                            <>
                                                <i className="bi bi-check2-circle me-2" />
                                                Update Profile
                                            </>
                                        )}
                                    </button>

                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary px-4"
                                        onClick={() => setEditUser(false)}
                                    >
                                        Cancel
                                    </button>

                                </div>

                            </form>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default Profile;
