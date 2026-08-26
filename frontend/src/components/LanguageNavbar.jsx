import React from "react";
import { NavLink } from "react-router-dom";

const LanguageNavbar = () => {

    return (

        <nav className="navbar navbar-expand-lg bg-dark border-top border-secondary">

            <div className="container">

                <div className="navbar-nav mx-auto gap-2">

                    <NavLink
                        to="/html"
                        className={({ isActive }) =>
                            `nav-link px-4 ${
                                isActive
                                    ? "active text-warning fw-bold"
                                    : "text-white"
                            }`
                        }
                    >
                        HTML
                    </NavLink>


                    <NavLink
                        to="/javascript"
                        className={({ isActive }) =>
                            `nav-link px-4 ${
                                isActive
                                    ? "active text-warning fw-bold"
                                    : "text-white"
                            }`
                        }
                    >
                        JavaScript
                    </NavLink>


                    <NavLink
                        to="/react"
                        className={({ isActive }) =>
                            `nav-link px-4 ${
                                isActive
                                    ? "active text-warning fw-bold"
                                    : "text-white"
                            }`
                        }
                    >
                        React
                    </NavLink>


                    <NavLink
                        to="/node"
                        className={({ isActive }) =>
                            `nav-link px-4 ${
                                    isActive
                                    ? "active text-warning fw-bold"
                                    : "text-white"
                            }`
                        }
                    >
                        Node.js
                    </NavLink>

                </div>

            </div>

        </nav>

    );
};

export default LanguageNavbar;