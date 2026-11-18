
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getAllUsersAPI,
    getUserNotesAPI
} from "../../Services/adminFunctions";

import {
    getAllUsersRequestStart,
    getAllUsersRequestSuccess,
    getAllUsersRequestFail,
    getUserNotesRequestStart,
    getUserNotesRequestSuccess,
    getUserNotesRequestFail
} from "../../redux/admin/adminSlice";

const UserNotes = () => {
    const dispatch = useDispatch();

    const {
        users,
        userNotes,
        selectedUser,
        getAllUsersRequest,
        getUserNotesRequest
    } = useSelector((state) => state.admin);

    const [selectedUserId, setSelectedUserId] = useState("");

    const fetchUsers = async () => {
        dispatch(getAllUsersRequestStart());

        try {
            const response = await getAllUsersAPI(1, 100);

            if (!response || !response.success) {
                dispatch(getAllUsersRequestFail({
                    message: response?.message || "Failed to fetch users"
                }));
                return;
            }

            dispatch(getAllUsersRequestSuccess(response));
        } catch (error) {
            dispatch(getAllUsersRequestFail({
                message: error.message || "Failed to fetch users"
            }));
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleViewNotes = async () => {
        if (!selectedUserId) {
            alert("Please select a user first");
            return;
        }

        dispatch(getUserNotesRequestStart());

        try {
            const response = await getUserNotesAPI(selectedUserId);

            if (!response || !response.success) {
                dispatch(getUserNotesRequestFail({
                    message: response?.message || "Failed to fetch user notes"
                }));
                return;
            }

            dispatch(getUserNotesRequestSuccess(response));
        } catch (error) {
            dispatch(getUserNotesRequestFail({
                message: error.message || "Something went wrong"
            }));
        }
    };

    const handleUserChange = (e) => {
        setSelectedUserId(e.target.value);
    };

    const showNotes =
        selectedUser &&
        selectedUser.id === selectedUserId &&
        getUserNotesRequest.success;

    const styles = {
        page: {
            background: "#F1F5F9",
            minHeight: "100%",
            color: "#1E293B"
        },
        card: {
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            borderRadius: "16px",
            boxShadow: "0 4px 18px rgba(15,23,42,0.04)"
        },
        primary: "#4F46E5",
        muted: "#64748B",
        border: "#E2E8F0"
    };

    const iconBox = {
        width: "46px",
        height: "46px",
        borderRadius: "13px",
        background: "#EEF2FF",
        color: "#4F46E5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "21px",
        flexShrink: 0
    };

    return (
        <div
            className="container-fluid px-2 px-md-3 py-3"
            style={styles.page}
        >
            {/* PAGE HEADER */}
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">

                <div>
                    <span
                        className="badge rounded-pill px-3 py-2 mb-2"
                        style={{
                            background: "#E0E7FF",
                            color: "#4338CA",
                            fontWeight: "600"
                        }}
                    >
                        ADMIN MANAGEMENT
                    </span>

                    <h2 className="fw-bold mb-2" style={{ color: "#1E293B" }}>
                        <i
                            className="bi bi-journal-richtext me-2"
                            style={{ color: styles.primary }}
                        />
                        User Notes
                    </h2>

                    <p className="mb-0" style={{ color: styles.muted }}>
                        View and explore learning notes created by registered users.
                    </p>
                </div>

                <div
                    className="d-flex align-items-center gap-2 px-3 py-2 rounded-pill"
                    style={{
                        background: "#ECFDF5",
                        border: "1px solid #D1FAE5"
                    }}
                >
                    <span
                        className="rounded-circle"
                        style={{
                            width: "8px",
                            height: "8px",
                            background: "#10B981"
                        }}
                    />
                    <small className="fw-semibold" style={{ color: "#047857" }}>
                        Admin Workspace
                    </small>
                </div>
            </div>

            {/* USER SELECTION */}
            <div className="p-3 p-md-4 mb-4" style={styles.card}>

                <div className="d-flex align-items-center gap-3 mb-4">
                    <div style={iconBox}>
                        <i className="bi bi-people-fill" />
                    </div>

                    <div>
                        <h5 className="fw-bold mb-1">
                            Select User
                        </h5>
                        <small style={{ color: styles.muted }}>
                            Choose an account to view its notes.
                        </small>
                    </div>
                </div>

                <div className="row g-3 align-items-end">

                    <div className="col-12 col-lg-8">
                        <label className="form-label fw-semibold">
                            User Account
                        </label>

                        <select
                            className="form-select form-select-lg"
                            value={selectedUserId}
                            onChange={handleUserChange}
                            disabled={getAllUsersRequest.loading}
                            style={{
                                borderRadius: "11px",
                                borderColor: "#CBD5E1",
                                fontSize: "15px",
                                backgroundColor: "#F8FAFC"
                            }}
                        >
                            <option value="">
                                {getAllUsersRequest.loading
                                    ? "Loading users..."
                                    : "Select a user"}
                            </option>

                            {users.map((user) => (
                                <option
                                    key={user._id}
                                    value={user._id}
                                >
                                    {user.name} - {user.email}
                                </option>
                            ))}
                        </select>

                        {getAllUsersRequest.error && (
                            <small className="text-danger d-block mt-2">
                                <i className="bi bi-exclamation-circle me-1" />
                                {getAllUsersRequest.message}
                            </small>
                        )}
                    </div>

                    <div className="col-12 col-lg-4">
                        <button
                            type="button"
                            className="btn btn-lg w-100 fw-semibold text-white"
                            onClick={handleViewNotes}
                            disabled={
                                !selectedUserId ||
                                getUserNotesRequest.loading ||
                                getAllUsersRequest.loading
                            }
                            style={{
                                background: styles.primary,
                                border: "none",
                                borderRadius: "11px",
                                minHeight: "48px"
                            }}
                        >
                            {getUserNotesRequest.loading ? (
                                <>
                                    <span className="spinner-border spinner-border-sm me-2" />
                                    Loading Notes...
                                </>
                            ) : (
                                <>
                                    <i className="bi bi-eye me-2" />
                                    View Notes
                                </>
                            )}
                        </button>
                    </div>

                </div>
            </div>

            {/* ERROR */}
            {getUserNotesRequest.error && (
                <div
                    className="alert mb-4"
                    style={{
                        background: "#FEF2F2",
                        border: "1px solid #FECACA",
                        color: "#B91C1C",
                        borderRadius: "12px"
                    }}
                >
                    <i className="bi bi-exclamation-circle-fill me-2" />
                    {getUserNotesRequest.message}
                </div>
            )}

            {/* SELECTED USER */}
            {showNotes && (
                <div
                    className="p-3 p-md-4 mb-4"
                    style={styles.card}
                >
                    <div className="row align-items-center g-3">

                        <div className="col-12 col-md">
                            <div className="d-flex align-items-center gap-3">

                                <div
                                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold text-white"
                                    style={{
                                        width: "58px",
                                        height: "58px",
                                        minWidth: "58px",
                                        fontSize: "23px",
                                        background: "linear-gradient(135deg, #6366F1, #4F46E5)"
                                    }}
                                >
                                    {selectedUser.name?.charAt(0)?.toUpperCase()}
                                </div>

                                <div>
                                    <small
                                        className="fw-semibold text-uppercase"
                                        style={{
                                            color: styles.primary,
                                            letterSpacing: "0.8px"
                                        }}
                                    >
                                        Selected Account
                                    </small>

                                    <h5 className="fw-bold mb-1 mt-1">
                                        {selectedUser.name}
                                    </h5>

                                    <p className="mb-0" style={{ color: styles.muted }}>
                                        <i className="bi bi-envelope me-2" />
                                        {selectedUser.email}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-auto">
                            <div
                                className="text-center px-4 py-3"
                                style={{
                                    background: "#EEF2FF",
                                    border: "1px solid #E0E7FF",
                                    borderRadius: "13px",
                                    minWidth: "135px"
                                }}
                            >
                                <h3
                                    className="fw-bold mb-0"
                                    style={{ color: styles.primary }}
                                >
                                    {userNotes.length}
                                </h3>
                                <small className="fw-medium" style={{ color: "#64748B" }}>
                                    Total Notes
                                </small>
                            </div>
                        </div>

                    </div>
                </div>
            )}

            {/* NOTES COLLECTION */}
            {showNotes && (
                <div>

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">

                        <div>
                            <h5 className="fw-bold mb-1">
                                <i
                                    className="bi bi-collection-fill me-2"
                                    style={{ color: styles.primary }}
                                />
                                Notes Collection
                            </h5>

                            <small style={{ color: styles.muted }}>
                                All notes created by this user.
                            </small>
                        </div>

                        <span
                            className="badge rounded-pill px-3 py-2"
                            style={{
                                background: "#EEF2FF",
                                color: "#4338CA"
                            }}
                        >
                            {userNotes.length} Notes
                        </span>
                    </div>

                    {userNotes.length > 0 ? (

                        <div className="row g-3">

                            {userNotes.map((note) => (

                                <div
                                    className="col-12 col-md-6 col-xl-4"
                                    key={note._id}
                                >
                                    <div
                                        className="h-100 p-3 p-md-4"
                                        style={{
                                            ...styles.card,
                                            transition: "all 0.2s ease",
                                            minHeight: "220px"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "translateY(-4px)";
                                            e.currentTarget.style.boxShadow = "0 10px 25px rgba(79,70,229,0.10)";
                                            e.currentTarget.style.borderColor = "#C7D2FE";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "translateY(0)";
                                            e.currentTarget.style.boxShadow = "0 4px 18px rgba(15,23,42,0.04)";
                                            e.currentTarget.style.borderColor = "#E2E8F0";
                                        }}
                                    >
                                        <div className="d-flex justify-content-between align-items-start gap-2 mb-3">

                                            <div
                                                className="d-flex align-items-center justify-content-center rounded-3"
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                    background: "#EEF2FF",
                                                    color: styles.primary,
                                                    fontSize: "19px",
                                                    flexShrink: 0
                                                }}
                                            >
                                                <i className="bi bi-journal-text" />
                                            </div>

                                            <span
                                                className="badge rounded-pill px-3 py-2"
                                                style={{
                                                    background: "#ECFDF5",
                                                    color: "#047857",
                                                    border: "1px solid #D1FAE5",
                                                    maxWidth: "65%",
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis"
                                                }}
                                            >
                                                {note.category}
                                            </span>
                                        </div>

                                        <h5
                                            className="fw-bold mb-3"
                                            style={{
                                                color: "#1E293B",
                                                overflowWrap: "anywhere"
                                            }}
                                        >
                                            {note.title}
                                        </h5>

                                        <p
                                            className="mb-4"
                                            style={{
                                                color: "#64748B",
                                                whiteSpace: "pre-wrap",
                                                overflowWrap: "anywhere",
                                                lineHeight: "1.7"
                                            }}
                                        >
                                            {note.content}
                                        </p>

                                        <div
                                            className="d-flex align-items-center gap-2 pt-3 mt-auto"
                                            style={{
                                                borderTop: "1px solid #E2E8F0",
                                                color: "#94A3B8"
                                            }}
                                        >
                                            <i className="bi bi-calendar3" />

                                            <small>
                                                {note.createdAt
                                                    ? new Date(note.createdAt).toLocaleDateString("en-IN")
                                                    : "Date unavailable"}
                                            </small>
                                        </div>

                                    </div>
                                </div>

                            ))}

                        </div>

                    ) : (

                        <div
                            className="text-center py-5 px-3"
                            style={styles.card}
                        >
                            <div
                                className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                                style={{
                                    width: "76px",
                                    height: "76px",
                                    background: "#EEF2FF",
                                    color: styles.primary,
                                    fontSize: "32px"
                                }}
                            >
                                <i className="bi bi-journal-x" />
                            </div>

                            <h5 className="fw-bold mb-2">
                                No Notes Found
                            </h5>

                            <p className="mb-0" style={{ color: styles.muted }}>
                                This user has not created any notes yet.
                            </p>
                        </div>

                    )}

                </div>
            )}

        </div>
    );
};

export default UserNotes;
