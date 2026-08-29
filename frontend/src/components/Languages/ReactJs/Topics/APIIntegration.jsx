import React from "react";

const APIIntegration = () => {

    return (
        <div>

            <h1 className="mb-4">
                API Integration
            </h1>


            {/* Introduction */}

            <h2>What is API Integration?</h2>

            <p>
                API Integration in React means connecting a React
                application with an external API or backend server to
                send and receive data.
            </p>

            <p>
                A React frontend can use APIs to perform operations such
                as fetching users, creating records, updating data,
                deleting records and authenticating users.
            </p>


            {/* API */}

            <h2 className="mt-4">
                What is an API?
            </h2>

            <p>
                API stands for Application Programming Interface. It
                provides a defined way for different software systems
                to communicate with each other.
            </p>

            <pre className="bg-light border p-3 rounded">
{`React Frontend
      ↓
     API
      ↓
Backend Server
      ↓
   Database`}
            </pre>


            {/* HTTP Methods */}

            <h2 className="mt-4">
                HTTP Methods
            </h2>

            <p>
                APIs commonly use HTTP methods to perform different
                operations on data.
            </p>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Method</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>GET</td>
                            <td>
                                Retrieves data from the server.
                            </td>
                        </tr>

                        <tr>
                            <td>POST</td>
                            <td>
                                Creates new data.
                            </td>
                        </tr>

                        <tr>
                            <td>PUT</td>
                            <td>
                                Replaces existing data.
                            </td>
                        </tr>

                        <tr>
                            <td>PATCH</td>
                            <td>
                                Updates part of existing data.
                            </td>
                        </tr>

                        <tr>
                            <td>DELETE</td>
                            <td>
                                Removes data.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Fetch */}

            <h2 className="mt-4">
                Fetch API
            </h2>

            <p>
                JavaScript provides the Fetch API for making HTTP
                requests. It can be used inside React components to
                communicate with backend APIs.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fetch("https://example.com/api/users")
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });`}
            </pre>


            {/* GET */}

            <h2 className="mt-4">
                GET Request
            </h2>

            <p>
                A GET request is used to retrieve data from an API.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const getUsers = async () => {

    const response = await fetch(
        "/api/users"
    );

    const data = await response.json();

    console.log(data);
};`}
            </pre>


            {/* POST */}

            <h2 className="mt-4">
                POST Request
            </h2>

            <p>
                A POST request is commonly used to send new data to the
                backend.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const createUser = async () => {

    const response = await fetch(
        "/api/users",
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: "Charvin",
                email: "charvin@example.com"
            })
        }
    );

    const data = await response.json();

    console.log(data);
};`}
            </pre>


            {/* useEffect */}

            <h2 className="mt-4">
                API Request with useEffect
            </h2>

            <p>
                When data needs to be fetched when a component loads,
                useEffect can be combined with the Fetch API.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const fetchUsers = async () => {

            const response = await fetch(
                "/api/users"
            );

            const data = await response.json();

            setUsers(data);

        };

        fetchUsers();

    }, []);

}`}
            </pre>


            {/* Loading */}

            <h2 className="mt-4">
                Loading State
            </h2>

            <p>
                API requests take some time to complete. A loading state
                can be used to show the user that data is being fetched.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [loading, setLoading] = useState(false);

setLoading(true);

// API request

setLoading(false);`}
            </pre>


            {/* Error */}

            <h2 className="mt-4">
                Error Handling
            </h2>

            <p>
                API requests can fail because of network problems,
                invalid requests, server errors or authentication
                issues. React applications should handle these errors
                properly.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`try {

    const response = await fetch(
        "/api/users"
    );

    if (!response.ok) {
        throw new Error("Request failed");
    }

    const data = await response.json();

} catch (error) {

    console.log(error.message);

}`}
            </pre>


            {/* Axios */}

            <h2 className="mt-4">
                Axios
            </h2>

            <p>
                Axios is a popular HTTP client that can also be used to
                communicate with APIs from React applications.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install axios`}
            </pre>


            {/* Axios GET */}

            <h2 className="mt-4">
                Axios GET Request
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import axios from "axios";

const response = await axios.get(
    "/api/users"
);

console.log(response.data);`}
            </pre>


            {/* Axios POST */}

            <h2 className="mt-4">
                Axios POST Request
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const response = await axios.post(
    "/api/users",
    {
        name: "Charvin",
        email: "charvin@example.com"
    }
);

console.log(response.data);`}
            </pre>


            {/* Service Layer */}

            <h2 className="mt-4">
                API Service Functions
            </h2>

            <p>
                Instead of writing API requests directly inside every
                component, applications can keep API functions in a
                separate service layer. This makes the code easier to
                maintain and reuse.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// userService.js

import axios from "axios";

export const getUsersAPI = async () => {

    const response = await axios.get(
        "/api/users"
    );

    return response.data;
};`}
            </pre>


            {/* Component */}

            <h2 className="mt-4">
                Using Service Function
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import { getUsersAPI } from "./userService";

const fetchUsers = async () => {

    const data = await getUsersAPI();

    setUsers(data);

};`}
            </pre>


            {/* CRUD */}

            <h2 className="mt-4">
                CRUD Operations
            </h2>

            <p>
                API integration is commonly used to implement CRUD
                operations in React applications.
            </p>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Operation</th>
                            <th>HTTP Method</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Create</td>
                            <td>POST</td>
                        </tr>

                        <tr>
                            <td>Read</td>
                            <td>GET</td>
                        </tr>

                        <tr>
                            <td>Update</td>
                            <td>PUT / PATCH</td>
                        </tr>

                        <tr>
                            <td>Delete</td>
                            <td>DELETE</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Authentication */}

            <h2 className="mt-4">
                API Authentication
            </h2>

            <p>
                Some APIs require authentication before allowing access
                to protected resources. Authentication information can
                be sent using cookies, authorization headers or other
                mechanisms depending on the backend design.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const response = await fetch(
    "/api/profile",
    {
        credentials: "include"
    }
);`}
            </pre>


            {/* Request Flow */}

            <h2 className="mt-4">
                API Integration Flow
            </h2>

            <pre className="bg-light border p-3 rounded">
{`React Component
      ↓
API Service Function
      ↓
HTTP Request
      ↓
Backend API
      ↓
Database
      ↓
Backend Response
      ↓
React State
      ↓
UI Update`}
            </pre>


            {/* Best Practices */}

            <h2 className="mt-4">
                API Integration Best Practices
            </h2>

            <ul>

                <li>
                    Keep API functions organized in service files.
                </li>

                <li>
                    Handle loading states properly.
                </li>

                <li>
                    Handle API errors gracefully.
                </li>

                <li>
                    Avoid unnecessary API requests.
                </li>

                <li>
                    Keep authentication logic separate from UI logic.
                </li>

                <li>
                    Use reusable API functions where possible.
                </li>

                <li>
                    Validate API responses before using them.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        APIs allow React applications to communicate with
                        backend systems.
                    </li>

                    <li>
                        Fetch and Axios can be used for HTTP requests.
                    </li>

                    <li>
                        GET retrieves data.
                    </li>

                    <li>
                        POST creates data.
                    </li>

                    <li>
                        PUT and PATCH update data.
                    </li>

                    <li>
                        DELETE removes data.
                    </li>

                    <li>
                        Loading and error states should be handled.
                    </li>

                    <li>
                        API service functions improve code organization.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                API integration allows React applications to communicate
                with backend services and work with real application
                data. By combining HTTP requests with state management,
                loading states and error handling, React applications can
                create complete and interactive frontend systems.
            </p>

        </div>
    );
};

export default APIIntegration;