
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Logout from "../pages/auth/Logout";
import GlobalSearch from "./GlobalSearch";
import Theme from "./Theme/Theme";

const Navbar = () => {
    const { isAuthenticated } = useSelector((state) => state.auth);

    const navLinkClass = ({ isActive }) =>
        `nav-link px-3 py-2 rounded-3 fw-semibold ${
            isActive ? "active" : ""
        }`;

    const navLinkStyle = ({ isActive }) => ({
        color: isActive ? "#4F46E5" : "#64748B",
        background: isActive ? "#EEF2FF" : "transparent",
        transition: "all 0.2s ease"
    });

    return (
        <nav
            className="navbar navbar-expand-xl sticky-top"
            style={{
                background: "rgba(255,255,255,0.96)",
                borderBottom: "1px solid #E2E8F0",
                boxShadow: "0 3px 15px rgba(15,23,42,0.04)",
                backdropFilter: "blur(12px)",
                zIndex: 1030
            }}
        >
            <div className="container-fluid px-3 px-lg-4">

                {/* BRAND */}
                <NavLink
                    to="/"
                    className="navbar-brand d-flex align-items-center gap-2 me-4"
                    style={{ textDecoration: "none" }}
                >
                    <div
                        className="d-flex align-items-center justify-content-center rounded-3"
                        style={{
                            width: "42px",
                            height: "42px",
                            background: "linear-gradient(135deg, #6366F1, #4F46E5)",
                            color: "#FFFFFF",
                            fontSize: "21px",
                            boxShadow: "0 4px 12px rgba(79,70,229,0.22)"
                        }}
                    >
                        <i className="bi bi-layers-fill"></i>
                    </div>

                    <div className="d-flex flex-column">
                        <span
                            className="fw-bold"
                            style={{
                                color: "#1E293B",
                                fontSize: "19px",
                                lineHeight: "1.2",
                                letterSpacing: "-0.5px"
                            }}
                        >
                            Knowledge <span style={{ color: "#4F46E5" }}>OS</span>
                        </span>

                        <small
                            style={{
                                color: "#94A3B8",
                                fontSize: "10px",
                                letterSpacing: "1.1px",
                                fontWeight: "600"
                            }}
                        >
                            YOUR LEARNING SPACE
                        </small>
                    </div>
                </NavLink>

                {/* MOBILE TOGGLE */}
                <button
                    className="navbar-toggler border-0 shadow-none p-2"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#knowledgeNavbarContent"
                    aria-controls="knowledgeNavbarContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        background: "#F1F5F9",
                        borderRadius: "10px"
                    }}
                >
                    <i
                        className="bi bi-list"
                        style={{
                            fontSize: "26px",
                            color: "#334155"
                        }}
                    ></i>
                </button>

                {/* NAVBAR CONTENT */}
                <div
                    className="collapse navbar-collapse"
                    id="knowledgeNavbarContent"
                >

                    {/* NAVIGATION LINKS */}
                    <ul className="navbar-nav mx-auto align-items-xl-center gap-1 my-3 my-xl-0">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                end
                                className={navLinkClass}
                                style={navLinkStyle}
                            >
                                <i className="bi bi-house-door me-2"></i>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className={navLinkClass}
                                style={navLinkStyle}
                            >
                                <i className="bi bi-info-circle me-2"></i>
                                About
                            </NavLink>
                        </li>

                        {isAuthenticated && (
                            <li className="nav-item">
                                <NavLink
                                    to="/notes"
                                    className={navLinkClass}
                                    style={navLinkStyle}
                                >
                                    <i className="bi bi-journal-text me-2"></i>
                                    Notes
                                </NavLink>
                            </li>
                        )}

                    </ul>

                    {/* RIGHT SECTION */}
                    <div className="d-flex flex-column flex-xl-row align-items-stretch align-items-xl-center gap-2 py-3 py-xl-0">

                        {/* GLOBAL SEARCH */}
                        {isAuthenticated && (
                            <div
                                className="me-xl-2"
                                style={{
                                    minWidth: "210px",
                                    maxWidth: "280px",
                                    width: "100%"
                                }}
                            >
                                <GlobalSearch />
                            </div>
                        )}

                        {/* LOGGED OUT */}
                        {!isAuthenticated && (
                            <div className="d-flex flex-column flex-sm-row gap-2">

                                <NavLink
                                    to="/signup"
                                    className="btn fw-semibold px-4 py-2"
                                    style={{
                                        color: "#4F46E5",
                                        border: "1px solid #C7D2FE",
                                        background: "#FFFFFF",
                                        borderRadius: "10px"
                                    }}
                                >
                                    <i className="bi bi-person-plus me-2"></i>
                                    Signup
                                </NavLink>

                                <NavLink
                                    to="/login"
                                    className="btn text-white fw-semibold px-4 py-2"
                                    style={{
                                        background: "#4F46E5",
                                        border: "1px solid #4F46E5",
                                        borderRadius: "10px"
                                    }}
                                >
                                    <i className="bi bi-box-arrow-in-right me-2"></i>
                                    Login
                                </NavLink>

                            </div>
                        )}

                        {/* LOGGED IN */}
                        {isAuthenticated && (
                            <div className="d-flex flex-column flex-sm-row align-items-stretch align-items-sm-center gap-2">

                                {/* SETTINGS */}
                                <div className="dropdown">

                                    <button
                                        className="btn dropdown-toggle fw-semibold w-100"
                                        type="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                        style={{
                                            color: "#475569",
                                            background: "#F8FAFC",
                                            border: "1px solid #E2E8F0",
                                            borderRadius: "10px",
                                            padding: "9px 14px"
                                        }}
                                    >
                                        <i
                                            className="bi bi-gear me-2"
                                            style={{ color: "#4F46E5" }}
                                        ></i>
                                        Settings
                                    </button>

                                    <ul
                                        className="dropdown-menu dropdown-menu-end shadow border-0 p-2 mt-2"
                                        style={{
                                            minWidth: "220px",
                                            borderRadius: "13px"
                                        }}
                                    >
                                        <li>
                                            <div className="dropdown-item rounded-2 py-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <i
                                                        className="bi bi-palette"
                                                        style={{ color: "#4F46E5" }}
                                                    ></i>
                                                    <div className="flex-grow-1">
                                                        <Theme />
                                                    </div>
                                                </div>
                                            </div>
                                        </li>

                                        <li>
                                            <hr className="dropdown-divider my-2" />
                                        </li>

                                        <li>
                                            <NavLink
                                                to="/update-password"
                                                className="dropdown-item rounded-2 py-2 fw-medium"
                                                style={{ color: "#475569" }}
                                            >
                                                <i className="bi bi-shield-lock me-2 text-secondary"></i>
                                                Update Password
                                            </NavLink>
                                        </li>
                                    </ul>

                                </div>

                                {/* PROFILE */}
                                <NavLink
                                    to="/profile"
                                    className={({ isActive }) =>
                                        `btn fw-semibold px-3 py-2 ${
                                            isActive ? "text-white" : ""
                                        }`
                                    }
                                    style={({ isActive }) => ({
                                        color: isActive ? "#FFFFFF" : "#4F46E5",
                                        background: isActive ? "#4F46E5" : "#EEF2FF",
                                        border: "1px solid #E0E7FF",
                                        borderRadius: "10px",
                                        textDecoration: "none"
                                    })}
                                >
                                    <i className="bi bi-person-circle me-2"></i>
                                    Profile
                                </NavLink>

                                {/* EXISTING LOGOUT COMPONENT */}
                                <div className="navbar-logout">
                                    <Logout />
                                </div>

                            </div>
                        )}

                    </div>
                </div>
            </div>

            <style>{`
                .navbar .nav-link:hover {
                    color: #4F46E5 !important;
                    background: #F1F5F9;
                }

                .navbar .dropdown-item:hover {
                    background: #EEF2FF;
                    color: #4F46E5 !important;
                }

                .navbar .btn {
                    transition: all 0.2s ease;
                }

                .navbar .btn:focus-visible,
                .navbar .nav-link:focus-visible {
                    outline: 3px solid rgba(79,70,229,0.25);
                    outline-offset: 2px;
                }

                @media (max-width: 1199.98px) {
                    .navbar .navbar-collapse {
                        padding-top: 10px;
                    }

                    .navbar .navbar-nav {
                        align-items: stretch !important;
                    }

                    .navbar .navbar-nav .nav-link {
                        padding: 10px 14px !important;
                    }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
