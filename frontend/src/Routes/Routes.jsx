
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";

import UserDashboard from "../components/UserDashboard";
import Home from "../commonPages/Home";
import About from "../commonPages/About";
import Layout from "../components/Layout";

import Profile from "../components/User/Profile";
import ProtectedRoute from "./ProtectedRoute";
import Notes from "../components/Notes/Note";
import LanguageLayout from "../components/LanguageLayout";

import HTML from "../components/Languages/HTML/HTML";
import Node from "../components/Languages/NodeJs/Node";
import React from "../components/Languages/ReactJs/React";
import JavaScript from "../components/Languages/JavaScript/JavaScript";

import UpdatePassword from "../components/User/UpdatePassword";

// ADMIN COMPONENTS
import AdminDashboard from "../components/Admin/AdminDashboard";
import UserNotes from "../components/Admin/UserNotes";

import AdminLayout from "../components/Admin/AdminLayout";
import Theme from "../components/Theme/Theme";



const router = createBrowserRouter([

    {
        element: <Layout />,

        children: [

            // HOME
            {
                path: "/",
                element: <Home />
            },

            // ABOUT
            {
                path: "/about",
                element: <About />
            },

            // SIGNUP
            {
                path: "/signup",
                element: <Signup />
            },

            // LOGIN
            {
                path: "/login",
                element: <Login />
            },

            // PROFILE
            {
                path: "/profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            },

            // NOTES
            {
                path: "/notes",
                element: (
                    <ProtectedRoute>
                        <Notes />
                    </ProtectedRoute>
                )
            },

            // HTML
            {
                path: "/html",
                element: (
                    <ProtectedRoute>
                        <HTML />
                    </ProtectedRoute>
                )
            },

            // NODE
            {
                path: "/node",
                element: (
                    <ProtectedRoute>
                        <Node />
                    </ProtectedRoute>
                )
            },

            // REACT
            {
                path: "/react",
                element: (
                    <ProtectedRoute>
                        <React />
                    </ProtectedRoute>
                )
            },

            // JAVASCRIPT
            {
                path: "/javascript",
                element: (
                    <ProtectedRoute>
                        <JavaScript />
                    </ProtectedRoute>
                )
            },

            // UPDATE PASSWORD
            {
                path: "/update-password",
                element: (
                    <ProtectedRoute>
                        <UpdatePassword />
                    </ProtectedRoute>
                )
            },



        ],

    },


    // ADMIN PANEL
    {
        path: "/admin",
        element: (
            <ProtectedRoute role="admin">
                <AdminLayout />
            </ProtectedRoute>
        ),
        children: [

            {
                path: "dashboard",
                element: <AdminDashboard />
            },

            {
                path: "user-notes",
                element: <UserNotes />
            },

            {
                path: "profile",
                element: <Profile />
            },

            {
                path: "update-password",
                element: <UpdatePassword />
            }
        

        ]
    },

]);


function AppRoutes() {
    return <RouterProvider router={router} />;
}

export default AppRoutes;
