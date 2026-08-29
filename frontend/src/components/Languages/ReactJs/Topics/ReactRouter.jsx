import React from "react";

const ReactRouter = () => {

    return (
        <div>

            <h1 className="mb-4">
                React Router
            </h1>


            {/* Introduction */}

            <h2>What is React Router?</h2>

            <p>
                React Router is a routing library used in React
                applications to create navigation between different
                pages or views. It allows users to move between URLs
                without requiring a complete browser page reload.
            </p>

            <p>
                In a React application, different URLs can display
                different components. React Router provides the tools
                required to define and manage these routes.
            </p>


            {/* Installation */}

            <h2 className="mt-4">
                Installing React Router
            </h2>

            <p>
                React Router can be installed using npm.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install react-router-dom`}
            </pre>


            {/* BrowserRouter */}

            <h2 className="mt-4">
                BrowserRouter
            </h2>

            <p>
                BrowserRouter is a router component that uses the browser
                history API to keep the UI synchronized with the URL.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { BrowserRouter } from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

}`}
            </pre>


            {/* Routes */}

            <h2 className="mt-4">
                Routes and Route
            </h2>

            <p>
                Routes are used to define which component should be
                rendered for a particular URL.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

            </Routes>

        </BrowserRouter>

    );

}`}
            </pre>


            {/* Route */}

            <h2 className="mt-4">
                Route Path
            </h2>

            <p>
                The path property defines the URL for a route, while the
                element property defines the React component that should
                be displayed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<Route
    path="/about"
    element={<About />}
/>`}
            </pre>


            {/* Link */}

            <h2 className="mt-4">
                Link
            </h2>

            <p>
                The Link component is used to navigate between routes
                without performing a full browser page reload.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { Link } from "react-router-dom";

<Link to="/about">
    About
</Link>`}
            </pre>


            {/* NavLink */}

            <h2 className="mt-4">
                NavLink
            </h2>

            <p>
                NavLink works similarly to Link but provides information
                about whether the current route is active. It is useful
                for navigation menus and sidebars.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { NavLink } from "react-router-dom";

<NavLink to="/about">
    About
</NavLink>`}
            </pre>


            {/* Active Class */}

            <h2 className="mt-4">
                Active Navigation
            </h2>

            <p>
                NavLink can use a function to apply a different class
                when the link represents the currently active route.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<NavLink
    to="/about"
    className={({ isActive }) =>
        isActive
            ? "active"
            : ""
    }
>
    About
</NavLink>`}
            </pre>


            {/* useNavigate */}

            <h2 className="mt-4">
                useNavigate
            </h2>

            <p>
                The useNavigate Hook allows a component to navigate
                programmatically.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const handleLogin = () => {

        navigate("/dashboard");

    };

}`}
            </pre>


            {/* Navigate */}

            <h2 className="mt-4">
                Navigate Component
            </h2>

            <p>
                The Navigate component can be used when navigation should
                happen as part of rendering logic.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { Navigate } from "react-router-dom";

return (
    <Navigate to="/login" />
);`}
            </pre>


            {/* Dynamic Routes */}

            <h2 className="mt-4">
                Dynamic Routes
            </h2>

            <p>
                Dynamic routes allow a portion of the URL to represent a
                changing value, such as a user ID or product ID.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<Route
    path="/users/:id"
    element={<User />}
/>`}
            </pre>


            {/* useParams */}

            <h2 className="mt-4">
                useParams
            </h2>

            <p>
                The useParams Hook allows a component to read dynamic
                parameters from the current URL.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useParams } from "react-router-dom";

function User() {

    const { id } = useParams();

    return (
        <h1>
            User ID: {id}
        </h1>
    );

}`}
            </pre>


            {/* Nested Routes */}

            <h2 className="mt-4">
                Nested Routes
            </h2>

            <p>
                Nested routes allow routes to be placed inside another
                route. This is useful when multiple pages share a common
                layout.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<Route
    path="/dashboard"
    element={<Dashboard />}
>

    <Route
        path="profile"
        element={<Profile />}
    />

    <Route
        path="settings"
        element={<Settings />}
    />

</Route>`}
            </pre>


            {/* Outlet */}

            <h2 className="mt-4">
                Outlet
            </h2>

            <p>
                The Outlet component is used inside a parent layout to
                display the component associated with the currently
                matched child route.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { Outlet } from "react-router-dom";

function Dashboard() {

    return (

        <div>

            <h1>Dashboard</h1>

            <Outlet />

        </div>

    );

}`}
            </pre>


            {/* createBrowserRouter */}

            <h2 className="mt-4">
                createBrowserRouter
            </h2>

            <p>
                React Router also provides createBrowserRouter for
                defining routes using a route configuration object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import {
    createBrowserRouter
} from "react-router-dom";

const router = createBrowserRouter([

    {
        path: "/",
        element: <Home />
    },

    {
        path: "/about",
        element: <About />
    }

]);`}
            </pre>


            {/* RouterProvider */}

            <h2 className="mt-4">
                RouterProvider
            </h2>

            <p>
                RouterProvider connects a router configuration to the
                React application.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import {
    RouterProvider
} from "react-router-dom";

<RouterProvider router={router} />`}
            </pre>


            {/* Protected Routes */}

            <h2 className="mt-4">
                Protected Routes
            </h2>

            <p>
                Protected routes are routes that should only be accessible
                to authenticated users. A common example is a profile
                or dashboard page that requires login.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{
    path: "/profile",

    element: (
        <ProtectedRoute>
            <Profile />
        </ProtectedRoute>
    )
}`}
            </pre>


            {/* Layout */}

            <h2 className="mt-4">
                Layout Routes
            </h2>

            <p>
                A layout route allows common UI elements such as a
                navbar, footer or sidebar to remain shared while the
                child route changes.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{
    element: <Layout />,

    children: [

        {
            path: "/",
            element: <Home />
        },

        {
            path: "/about",
            element: <About />
        }

    ]
}`}
            </pre>


            {/* Router Flow */}

            <h2 className="mt-4">
                React Router Flow
            </h2>

            <pre className="bg-light border p-3 rounded">
{`URL
 ↓
Router
 ↓
Find Matching Route
 ↓
Render Component
 ↓
Update UI`}
            </pre>


            {/* Common Components */}

            <h2 className="mt-4">
                Common React Router APIs
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>API</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>BrowserRouter</td>
                            <td>
                                Provides browser-based routing.
                            </td>
                        </tr>

                        <tr>
                            <td>Routes</td>
                            <td>
                                Contains route definitions.
                            </td>
                        </tr>

                        <tr>
                            <td>Route</td>
                            <td>
                                Defines a URL and its component.
                            </td>
                        </tr>

                        <tr>
                            <td>Link</td>
                            <td>
                                Navigates between routes.
                            </td>
                        </tr>

                        <tr>
                            <td>NavLink</td>
                            <td>
                                Navigation link with active state.
                            </td>
                        </tr>

                        <tr>
                            <td>useNavigate</td>
                            <td>
                                Performs programmatic navigation.
                            </td>
                        </tr>

                        <tr>
                            <td>useParams</td>
                            <td>
                                Reads URL parameters.
                            </td>
                        </tr>

                        <tr>
                            <td>Outlet</td>
                            <td>
                                Renders nested route content.
                            </td>
                        </tr>

                        <tr>
                            <td>RouterProvider</td>
                            <td>
                                Provides the configured router.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        React Router manages navigation in React
                        applications.
                    </li>

                    <li>
                        Routes connect URLs with React components.
                    </li>

                    <li>
                        Link and NavLink are used for navigation.
                    </li>

                    <li>
                        useNavigate provides programmatic navigation.
                    </li>

                    <li>
                        useParams reads dynamic URL parameters.
                    </li>

                    <li>
                        Outlet is used for nested routes.
                    </li>

                    <li>
                        Protected routes can restrict access to
                        authenticated users.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                React Router provides a complete routing system for
                React applications. It allows developers to create
                multiple routes, navigate between pages, handle dynamic
                URLs, create nested layouts and protect routes that
                require authentication.
            </p>

        </div>
    );
};

export default ReactRouter;