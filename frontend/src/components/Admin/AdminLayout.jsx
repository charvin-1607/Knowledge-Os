
import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = () => {

    return (

        <div className="d-flex">

            {/* ADMIN SIDEBAR */}

            <AdminSidebar />

            {/* PAGE CONTENT */}

            <main
                className="flex-grow-1 p-4"
                style={{
                    minHeight: "100vh",
                    backgroundColor: "#f5f7fb"
                }}
            >

                <Outlet />

            </main>

        </div>

    );
};

export default AdminLayout;
