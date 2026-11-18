
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getAllUsersAPI
} from "../../Services/adminFunctions";

import {
    updateUserAPI,
    deleteUserAPI
} from "../../Services/userFunctions";

import {
    getAllUsersRequestStart,
    getAllUsersRequestSuccess,
    getAllUsersRequestFail
} from "../../redux/admin/adminSlice";


const AdminDashboard = () => {

    const dispatch = useDispatch();

    // REDUX STATE

    const {
        users,
        stats,
        pagination,
        getAllUsersRequest
    } = useSelector((state) => state.admin);

    const { user: loggedInUser } = useSelector((state) => state.auth);


    // LOCAL STATE

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const [showEditModal, setShowEditModal] = useState(false);
    const [updating, setUpdating] = useState(false);
    const [deletingUserId, setDeletingUserId] = useState(null);

    const [editUserData, setEditUserData] = useState({
        _id: "",
        name: "",
        email: "",
        role: "user"
    });


    // FETCH ALL USERS

    const fetchAllUsers = async () => {

        dispatch(getAllUsersRequestStart());

        try {

            const response = await getAllUsersAPI(page, limit);

            if (!response || !response.success) {

                dispatch(getAllUsersRequestFail({
                    message: response?.message || "Failed to fetch users"
                }));

                return;
            }

            dispatch(getAllUsersRequestSuccess(response));

        } catch (error) {

            dispatch(getAllUsersRequestFail({
                message: error.message || "Something went wrong"
            }));

        }

    };


    // FETCH USERS ON PAGE / LIMIT CHANGE

    useEffect(() => {

        fetchAllUsers();

    }, [page, limit]);


    // HANDLE LIMIT CHANGE

    const handleLimitChange = (e) => {

        setLimit(Number(e.target.value));
        setPage(1);

    };


    // OPEN EDIT MODAL

    const handleEditClick = (user) => {

        setEditUserData({
            _id: user._id,
            name: user.name || "",
            email: user.email || "",
            role: user.role || "user"
        });

        setShowEditModal(true);

    };


    // HANDLE EDIT INPUT

    const handleEditChange = (e) => {

        setEditUserData({
            ...editUserData,
            [e.target.name]: e.target.value
        });

    };


    // UPDATE USER

    const handleUpdateUser = async (e) => {

        e.preventDefault();

        if (
            !editUserData.name.trim() ||
            !editUserData.email.trim()
        ) {

            alert("Name and email are required");
            return;

        }

        setUpdating(true);

        try {

            const response = await updateUserAPI(
                editUserData._id,
                {
                    name: editUserData.name.trim(),
                    email: editUserData.email.trim(),
                    role: editUserData.role
                }
            );

            if (!response || !response.success) {

                alert(response?.message || "User update failed");
                return;

            }

            alert(response.message || "User updated successfully");

            setShowEditModal(false);

            await fetchAllUsers();

        } catch (error) {

            alert(error.message || "Something went wrong");

        } finally {

            setUpdating(false);

        }

    };


    // DELETE USER

    const handleDeleteUser = async (user) => {

        if (user._id === loggedInUser?.id) {

            alert("You cannot delete your own admin account.");
            return;

        }

        const confirmDelete = window.confirm(
            `Are you sure you want to delete ${user.name}'s account?`
        );

        if (!confirmDelete) return;

        setDeletingUserId(user._id);

        try {

            const response = await deleteUserAPI(user._id);

            if (!response || !response.success) {

                alert(response?.message || "User deletion failed");
                return;

            }

            alert(response.message || "User deleted successfully");

            // HANDLE EMPTY PAGE AFTER DELETE

            if (users.length === 1 && page > 1) {

                setPage((prev) => prev - 1);

            } else {

                await fetchAllUsers();

            }

        } catch (error) {

            alert(error.message || "Something went wrong");

        } finally {

            setDeletingUserId(null);

        }

    };


    // FORMAT DATE

    const formatDate = (date) => {

        if (!date) return "N/A";

        return new Date(date).toLocaleDateString("en-IN");

    };


    return (

        <div className="container-fluid py-2">

            {/* PAGE HEADER */}

            <div className="mb-4">

                <h2 className="fw-bold">
                    Admin Dashboard
                </h2>

                <p className="text-muted">
                    Manage users and monitor Knowledge OS.
                </p>

            </div>


            {/* STATISTICS CARDS */}

            <div className="row g-3 mb-4">

                <div className="col-md-4">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4">

                            <p className="text-muted mb-2">
                                Total Admins
                            </p>

                            <h2 className="fw-bold text-primary mb-0">
                                {stats.totalAdmins}
                            </h2>

                        </div>

                    </div>

                </div>


                <div className="col-md-4">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4">

                            <p className="text-muted mb-2">
                                Normal Users
                            </p>

                            <h2 className="fw-bold text-success mb-0">
                                {stats.totalUsers}
                            </h2>

                        </div>

                    </div>

                </div>


                <div className="col-md-4">

                    <div className="card border-0 shadow-sm rounded-4 h-100">

                        <div className="card-body p-4">

                            <p className="text-muted mb-2">
                                Total Accounts
                            </p>

                            <h2 className="fw-bold text-info mb-0">
                                {stats.totalAccounts}
                            </h2>

                        </div>

                    </div>

                </div>

            </div>


            {/* USERS MANAGEMENT */}

            <div className="card border-0 shadow-sm rounded-4">

                <div className="card-header bg-white border-0 p-3">

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                        <h5 className="fw-bold mb-0">
                            Users Management
                        </h5>

                        <div className="d-flex align-items-center gap-2">

                            <label className="text-muted">
                                Show:
                            </label>

                            <select
                                className="form-select"
                                style={{ width: "85px" }}
                                value={limit}
                                onChange={handleLimitChange}
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                            </select>

                        </div>

                    </div>

                </div>


                {/* TABLE */}

                <div className="table-responsive">

                    <table className="table table-hover align-middle mb-0">

                        <thead className="table-light">

                            <tr>

                                <th className="px-3">#</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Joined Date</th>
                                <th>Total Notes</th>
                                <th>Action</th>
                                <th>Delete</th>

                            </tr>

                        </thead>


                        <tbody>

                            {getAllUsersRequest.loading ? (

                                <tr>
                                    <td colSpan="8" className="text-center py-5">

                                        <div className="spinner-border text-primary"></div>

                                        <p className="text-muted mt-2 mb-0">
                                            Loading users...
                                        </p>

                                    </td>
                                </tr>

                            ) : getAllUsersRequest.error ? (

                                <tr>
                                    <td colSpan="8" className="text-center text-danger py-4">
                                        {getAllUsersRequest.message}
                                    </td>
                                </tr>

                            ) : users.length > 0 ? (

                                users.map((user, index) => (

                                    <tr key={user._id}>

                                        <td className="px-3">
                                            {(page - 1) * limit + index + 1}
                                        </td>

                                        <td className="fw-semibold">
                                            {user.name}
                                        </td>

                                        <td>
                                            {user.email || "N/A"}
                                        </td>

                                        <td>

                                            <span className={`badge ${
                                                user.role === "admin"
                                                    ? "bg-primary"
                                                    : "bg-success"
                                            }`}>
                                                {user.role}
                                            </span>

                                        </td>

                                        <td>
                                            {formatDate(user.createdAt)}
                                        </td>

                                        <td>
                                            {user.totalNotes ?? 0}
                                        </td>


                                        {/* EDIT BUTTON */}

                                        <td>

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-primary"
                                                onClick={() => handleEditClick(user)}
                                            >
                                                <i className="bi bi-pencil-square me-1"></i>
                                                Edit
                                            </button>

                                        </td>


                                        {/* DELETE BUTTON */}

                                        <td>

                                            <button
                                                type="button"
                                                className="btn btn-sm btn-outline-danger"
                                                onClick={() => handleDeleteUser(user)}
                                                disabled={
                                                    deletingUserId === user._id ||
                                                    user._id === loggedInUser?.id
                                                }
                                                title={
                                                    user._id === loggedInUser?.id
                                                        ? "You cannot delete your own account"
                                                        : "Delete user"
                                                }
                                            >

                                                {deletingUserId === user._id ? (

                                                    <span className="spinner-border spinner-border-sm"></span>

                                                ) : (

                                                    <>
                                                        <i className="bi bi-trash me-1"></i>
                                                        Delete
                                                    </>

                                                )}

                                            </button>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>
                                    <td colSpan="8" className="text-center py-4 text-muted">
                                        No users found.
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* PAGINATION */}

                <div className="card-footer bg-white border-0 p-3">

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3">

                        <span className="text-muted small">
                            Page {pagination.currentPage} of {pagination.totalPages}
                        </span>

                        <div className="d-flex gap-2">

                            <button
                                className="btn btn-outline-primary btn-sm"
                                disabled={
                                    page <= 1 ||
                                    getAllUsersRequest.loading
                                }
                                onClick={() => setPage((prev) => prev - 1)}
                            >
                                Previous
                            </button>

                            <button
                                className="btn btn-primary btn-sm"
                                disabled={
                                    page >= pagination.totalPages ||
                                    getAllUsersRequest.loading
                                }
                                onClick={() => setPage((prev) => prev + 1)}
                            >
                                Next
                            </button>

                        </div>

                    </div>

                </div>

            </div>


            {/* EDIT USER MODAL */}

            {showEditModal && (

                <div
                    className="modal d-block"
                    tabIndex="-1"
                    style={{
                        backgroundColor: "rgba(0,0,0,0.5)"
                    }}
                >

                    <div className="modal-dialog modal-dialog-centered">

                        <div className="modal-content border-0 shadow rounded-4">

                            <div className="modal-header">

                                <h5 className="modal-title fw-bold">
                                    <i className="bi bi-pencil-square text-primary me-2"></i>
                                    Edit User
                                </h5>

                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowEditModal(false)}
                                    disabled={updating}
                                ></button>

                            </div>


                            <form onSubmit={handleUpdateUser}>

                                <div className="modal-body">

                                    {/* NAME */}

                                    <div className="mb-3">

                                        <label className="form-label fw-semibold">
                                            User Name
                                        </label>

                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            value={editUserData.name}
                                            onChange={handleEditChange}
                                            required
                                        />

                                    </div>


                                    {/* EMAIL */}

                                    <div className="mb-3">

                                        <label className="form-label fw-semibold">
                                            Email Address
                                        </label>

                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            value={editUserData.email}
                                            onChange={handleEditChange}
                                            required
                                        />

                                    </div>


                                    {/* ROLE */}

                                    <div className="mb-3">

                                        <label className="form-label fw-semibold">
                                            User Role
                                        </label>

                                        <select
                                            className="form-select"
                                            name="role"
                                            value={editUserData.role}
                                            onChange={handleEditChange}
                                        >

                                            <option value="user">
                                                Normal User
                                            </option>

                                            <option value="admin">
                                                Admin
                                            </option>

                                        </select>

                                        <small className="text-muted">
                                            Changing a user's role changes their access permissions.
                                        </small>

                                    </div>

                                </div>


                                {/* MODAL FOOTER */}

                                <div className="modal-footer">

                                    <button
                                        type="button"
                                        className="btn btn-light"
                                        onClick={() => setShowEditModal(false)}
                                        disabled={updating}
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        disabled={updating}
                                    >

                                        {updating ? (

                                            <>
                                                <span className="spinner-border spinner-border-sm me-2"></span>
                                                Updating...
                                            </>

                                        ) : (

                                            <>
                                                <i className="bi bi-check-circle me-2"></i>
                                                Save Changes
                                            </>

                                        )}

                                    </button>

                                </div>

                            </form>

                        </div>

                    </div>

                </div>

            )}

        </div>

    );

};

export default AdminDashboard;
