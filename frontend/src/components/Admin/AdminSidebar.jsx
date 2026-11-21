import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Theme from "../Theme/Theme";

import Logout from "../../pages/auth/Logout";



const AdminSidebar = () => {

    const navigate = useNavigate();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/admin/dashboard",
            icon: "bi bi-grid"
        },
        {
            name: "User Notes",
            path: "/admin/user-notes",
            icon: "bi bi-journal-text"
        },
        {
            name: "Profile",
            path: "/admin/profile",
            icon: "bi bi-person-circle"
        },
        {
            name: "Update Password",
            path: "/admin/update-password",
            icon: "bi bi-lock"
        },

    ];

    return (

        <div
            className="d-flex flex-column text-white p-3"
            style={{
                width: "260px",
                minHeight: "100vh",
                background: "#172033"
            }}
        >

            {/* BRAND */}

            <h4 className="fw-bold text-primary mb-4">
                <i className="bi bi-mortarboard-fill me-2"></i>
                Knowledge OS
            </h4>

            <p className="text-secondary small fw-semibold">
                ADMIN PANEL
            </p>

            {/* NAVIGATION */}

            <ul className="nav nav-pills flex-column gap-2">

                {menuItems.map((item) => (

                    <li className="nav-item" key={item.path}>

                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `nav-link text-white ${isActive ? "active" : ""
                                }`
                            }
                            style={({ isActive }) => ({
                                background: isActive ? "#34517D" : "transparent"
                            })}
                        >

                            <i className={`${item.icon} me-3`}></i>
                            {item.name}

                        </NavLink>

                    </li>

                ))}



                <li className="list-unstyled mt-3">

                    {/* THEME SETTINGS */}

                    <div className="border-top border-white pt-3 mt-2">

                        <div className="text-uppercase text-info     small fw-bold mb-3">
                            <i className="bi bi-palette me-2"></i>
                            Appearance
                        </div>

                        <div className="nav-link text-white d-flex align-items-center gap-3 px-3">
                            <Theme />
                        </div>

                        <div className="border-top border-white pt-3 mt-2">
                        </div>  
                    </div>

                </li>


            </ul>



            {/* LOGOUT */}

            {/* LOGOUT */}

            <div className="mt-auto pt-4">

                <div className="border-top border-secondary pt-3">

                    <Logout />

                </div>

            </div>

        </div>

    );
};

export default AdminSidebar;
