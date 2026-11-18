
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

    // REDUX STATE

    const {
        users,
        userNotes,
        selectedUser,
        getAllUsersRequest,
        getUserNotesRequest
    } = useSelector((state) => state.admin);


    // LOCAL STATE - SELECTED DROPDOWN VALUE

    const [selectedUserId, setSelectedUserId] = useState("");


    // FETCH USERS

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


    // FETCH USERS WHEN PAGE LOADS

    useEffect(() => {

        fetchUsers();

    }, []);


    // FETCH SELECTED USER NOTES

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


    // HANDLE USER SELECTION

    const handleUserChange = (e) => {

        setSelectedUserId(e.target.value);

    };


    // CHECK WHETHER DISPLAYED NOTES BELONG TO CURRENT SELECTION

    const showNotes =
        selectedUser &&
        selectedUser.id === selectedUserId &&
        getUserNotesRequest.success;


    return (

        <div className="container-fluid py-2">

            {/* PAGE HEADER */}

            <div className="mb-4">

                <h2 className="fw-bold">
                    <i className="bi bi-journal-text text-primary me-2"></i>
                    User Notes
                </h2>

                <p className="text-muted mb-0">
                    View learning notes created by registered users.
                </p>

            </div>


            {/* USER SELECTION CARD */}

            <div className="card border-0 shadow-sm rounded-4 mb-4">

                <div className="card-body p-4">

                    <h5 className="fw-bold mb-3">
                        <i className="bi bi-people me-2 text-primary"></i>
                        Select User
                    </h5>


                    <div className="row g-3 align-items-end">

                        <div className="col-md-8">

                            <label className="form-label fw-semibold">
                                Choose User
                            </label>

                            <select
                                className="form-select form-select-lg"
                                value={selectedUserId}
                                onChange={handleUserChange}
                                disabled={getAllUsersRequest.loading}
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

                                <small className="text-danger">
                                    {getAllUsersRequest.message}
                                </small>

                            )}

                        </div>


                        <div className="col-md-4">

                            <button
                                type="button"
                                className="btn btn-primary btn-lg w-100"
                                onClick={handleViewNotes}
                                disabled={
                                    !selectedUserId ||
                                    getUserNotesRequest.loading ||
                                    getAllUsersRequest.loading
                                }
                            >

                                {getUserNotesRequest.loading ? (

                                    <>
                                        <span className="spinner-border spinner-border-sm me-2"></span>
                                        Loading Notes...
                                    </>

                                ) : (

                                    <>
                                        <i className="bi bi-eye me-2"></i>
                                        View Notes
                                    </>

                                )}

                            </button>

                        </div>

                    </div>

                </div>

            </div>


            {/* NOTES ERROR */}

            {getUserNotesRequest.error && (

                <div className="alert alert-danger">
                    <i className="bi bi-exclamation-circle me-2"></i>
                    {getUserNotesRequest.message}
                </div>

            )}


            {/* SELECTED USER INFORMATION */}

            {showNotes && (

                <div className="card border-0 shadow-sm rounded-4 mb-4">

                    <div className="card-body p-4">

                        <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                            <div>

                                <h5 className="fw-bold mb-1">
                                    <i className="bi bi-person-circle text-primary me-2"></i>
                                    {selectedUser.name}
                                </h5>

                                <p className="text-muted mb-0">
                                    {selectedUser.email}
                                </p>

                            </div>


                            <div className="bg-primary bg-opacity-10 rounded-3 px-4 py-3 text-center">

                                <h3 className="fw-bold text-primary mb-0">
                                    {userNotes.length}
                                </h3>

                                <small className="text-muted">
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

                    <h5 className="fw-bold mb-3">
                        <i className="bi bi-collection text-primary me-2"></i>
                        Notes Collection
                    </h5>


                    {userNotes.length > 0 ? (

                        <div className="row g-3">

                            {userNotes.map((note) => (

                                <div
                                    className="col-md-6 col-xl-4"
                                    key={note._id}
                                >

                                    <div className="card h-100 border-0 shadow-sm rounded-4">

                                        <div className="card-body p-4">

                                            <div className="d-flex justify-content-between align-items-start gap-2 mb-3">

                                                <h5 className="fw-bold mb-0">
                                                    {note.title}
                                                </h5>

                                                <span className="badge bg-primary bg-opacity-10 text-primary">
                                                    {note.category}
                                                </span>

                                            </div>


                                            <p
                                                className="text-secondary mb-3"
                                                style={{
                                                    whiteSpace: "pre-wrap",
                                                    overflowWrap: "anywhere"
                                                }}
                                            >
                                                {note.content}
                                            </p>


                                            <hr />


                                            <small className="text-muted">

                                                <i className="bi bi-calendar3 me-2"></i>

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

                        <div className="card border-0 shadow-sm rounded-4">

                            <div className="card-body text-center py-5">

                                <i className="bi bi-journal-x text-secondary display-4"></i>

                                <h5 className="fw-bold mt-3">
                                    No Notes Found
                                </h5>

                                <p className="text-muted mb-0">
                                    This user has not created any notes yet.
                                </p>

                            </div>

                        </div>

                    )}

                </div>

            )}

        </div>

    );

};

export default UserNotes;
