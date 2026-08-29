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

            {
                path:"/profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                )
            },

            {
                path:'/notes',
                element: (
                    <ProtectedRoute>
                       <Notes />
                    </ProtectedRoute>
                )
            },

            {   
                path:"/html",
                element:(<ProtectedRoute>
                        <HTML />
                   </ProtectedRoute> 
                ),

            },

            {
                path:"/node",
                element:(
                    <ProtectedRoute>
                        <Node />
                    </ProtectedRoute>
                )
            },

            {
                path:'/react',
                element:(
                    <ProtectedRoute>
                        <React />
                    </ProtectedRoute>
                )
            },

            {
                path:'/javascript',
                element:(
                    <ProtectedRoute>
                        <JavaScript />
                    </ProtectedRoute>
                )
            }

        ]
    }

]);

function AppRoutes() {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes;