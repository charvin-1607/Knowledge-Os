import React from "react";

const ExpressIntroduction = () => {
    return (
        <div>

            <h1 className="mb-4">
                Express.js Introduction
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Express.js is a lightweight and flexible web application
                framework for Node.js.
            </p>

            <p>
                It provides a convenient set of features for building
                web servers, APIs and backend applications.
            </p>

            <p>
                Express.js is commonly used in Node.js backend
                development because it simplifies tasks such as
                routing, middleware handling and request-response
                processing.
            </p>


            {/* INSTALLATION */}

            <h2 className="mt-4">
                Installing Express.js
            </h2>

            <p>
                Express.js is a third-party package, so it needs to be
                installed using npm.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>


            {/* IMPORT */}

            <h2 className="mt-4">
                Importing Express
            </h2>

            <p>
                In a CommonJS project, Express can be imported using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const express = require("express");`}
            </pre>


            {/* CREATE APP */}

            <h2 className="mt-4">
                Creating an Express Application
            </h2>

            <p>
                The <code>express()</code> function creates an Express
                application instance.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const express = require("express");

const app = express();`}
            </pre>


            {/* SERVER */}

            <h2 className="mt-4">
                Creating a Server
            </h2>

            <p>
                After creating the Express application, we can make it
                listen on a specific port.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const express = require("express");

const app = express();

app.listen(3000, () => {

    console.log("Server running on port 3000");

});`}
            </pre>


            {/* GET ROUTE */}

            <h2 className="mt-4">
                Creating a GET Route
            </h2>

            <p>
                Express provides convenient methods for handling HTTP
                requests.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.get("/", (req, res) => {

    res.send("Hello from Express.js");

});`}
            </pre>


            {/* COMPLETE */}

            <h2 className="mt-4">
                Complete Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("Hello from Express.js");

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});`}
            </pre>


            {/* REQUEST */}

            <h2 className="mt-4">
                Request Object
            </h2>

            <p>
                The <code>req</code> object represents the incoming
                HTTP request.
            </p>

            <p>
                It can provide information such as the request method,
                URL, parameters, query strings and headers.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.get("/about", (req, res) => {

    console.log(req.method);
    console.log(req.url);

    res.send("About Page");

});`}
            </pre>


            {/* RESPONSE */}

            <h2 className="mt-4">
                Response Object
            </h2>

            <p>
                The <code>res</code> object is used to send a response
                back to the client.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`res.send("Hello World");`}
            </pre>


            {/* ROUTING */}

            <h2 className="mt-4">
                Routing
            </h2>

            <p>
                Routing determines how an application responds to a
                request for a particular URL and HTTP method.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.get("/", (req, res) => {

    res.send("Home");

});

app.get("/about", (req, res) => {

    res.send("About");

});`}
            </pre>


            {/* POST */}

            <h2 className="mt-4">
                POST Route
            </h2>

            <p>
                Express provides the <code>post()</code> method for
                handling HTTP POST requests.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.post("/users", (req, res) => {

    res.send("User created");

});`}
            </pre>


            {/* JSON */}

            <h2 className="mt-4">
                Sending JSON Response
            </h2>

            <p>
                Express provides the <code>res.json()</code> method for
                sending JSON responses.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.get("/user", (req, res) => {

    res.json({
        name: "Charvin",
        role: "Developer"
    });

});`}
            </pre>


            {/* EXPRESS VS HTTP */}

            <h2 className="mt-4">
                Express.js vs Node.js HTTP Module
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>Node.js HTTP Module</th>
                            <th>Express.js</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Built into Node.js</td>
                            <td>Third-party package</td>
                        </tr>

                        <tr>
                            <td>More manual code</td>
                            <td>Simplifies backend development</td>
                        </tr>

                        <tr>
                            <td>Basic routing must be handled manually</td>
                            <td>Provides routing APIs</td>
                        </tr>

                        <tr>
                            <td>Middleware handling is more manual</td>
                            <td>Strong middleware support</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* FEATURES */}

            <h2 className="mt-4">
                Important Features of Express.js
            </h2>

            <ul>

                <li>
                    Routing
                </li>

                <li>
                    Middleware
                </li>

                <li>
                    HTTP request and response handling
                </li>

                <li>
                    REST API development
                </li>

                <li>
                    Error handling
                </li>

                <li>
                    Integration with databases and other services
                </li>

            </ul>


            {/* REAL WORLD */}

            <h2 className="mt-4">
                Real-world Use
            </h2>

            <p>
                Express.js is commonly used to build backend APIs for
                web and mobile applications.
            </p>

            <p>
                For example, a MERN stack application commonly uses
                Express.js between the React frontend and the Node.js
                backend environment.
            </p>


            {/* IMPORTANT */}

            <div className="alert alert-info">

                <strong>Important:</strong>

                <p className="mb-0 mt-2">
                    Express.js is a framework built for Node.js. It does
                    not replace Node.js; instead, it provides a simpler
                    and more convenient way to build web applications
                    and APIs on top of Node.js capabilities.
                </p>

            </div>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Express.js is a Node.js web framework.
                    </li>

                    <li>
                        It is installed using npm.
                    </li>

                    <li>
                        <code>express()</code> creates an application.
                    </li>

                    <li>
                        Express provides convenient routing methods.
                    </li>

                    <li>
                        Middleware is an important part of Express.
                    </li>

                    <li>
                        Express is commonly used to build REST APIs.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Express.js is a lightweight Node.js framework that
                simplifies backend and web application development.
                It provides useful features such as routing,
                middleware and request-response handling.
            </p>

            <p>
                Understanding Express.js is an important next step
                after learning the Node.js fundamentals because it is
                widely used for building real-world Node.js APIs.
            </p>

        </div>
    );
};

export default ExpressIntroduction;