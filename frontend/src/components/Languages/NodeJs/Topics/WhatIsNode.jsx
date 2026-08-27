import React from "react";

const WhatIsNode = () => {
    return (
        <div>

            {/* TITLE */}

            <h1 className="mb-4">
                What is Node.js?
            </h1>


            {/* BASIC DEFINITION */}

            <h2>Definition</h2>

            <p>
                Node.js is an open-source, cross-platform JavaScript runtime
                environment that allows developers to execute JavaScript
                code outside a web browser.
            </p>

            <p>
                It is mainly used for backend development, where JavaScript
                can be used to create web servers, REST APIs, backend
                applications, command-line tools and real-time applications.
            </p>


            {/* IMPORTANT */}

            <div className="alert alert-warning">

                <strong>Important:</strong>

                <p className="mb-0 mt-2">
                    Node.js is not a programming language and it is not
                    a framework. JavaScript is the programming language,
                    while Node.js provides the runtime environment for
                    executing JavaScript outside the browser.
                </p>

            </div>


            {/* RUNTIME ENVIRONMENT */}

            <h2 className="mt-4">
                What is a Runtime Environment?
            </h2>

            <p>
                A runtime environment provides the environment and required
                tools that allow a program to execute. It provides access
                to features that the programming language itself may not
                directly provide.
            </p>

            <p>
                For example, when JavaScript runs inside a browser, the
                browser provides features such as the DOM, window object
                and browser APIs.
            </p>

            <p>
                When JavaScript runs using Node.js, Node.js provides APIs
                that allow JavaScript programs to interact with files,
                networks, processes and the operating system.
            </p>


            {/* JAVASCRIPT AND NODE */}

            <h2 className="mt-4">
                JavaScript vs Node.js
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>JavaScript</th>
                            <th>Node.js</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Programming language</td>
                            <td>Runtime environment</td>
                        </tr>

                        <tr>
                            <td>Defines the language syntax</td>
                            <td>Provides environment to execute JavaScript</td>
                        </tr>

                        <tr>
                            <td>Can run in different environments</td>
                            <td>Allows JavaScript to run outside browsers</td>
                        </tr>

                        <tr>
                            <td>Does not itself provide a server</td>
                            <td>Provides APIs for server-side development</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* NODE AND BROWSER */}

            <h2 className="mt-4">
                Node.js vs Browser
            </h2>

            <p>
                JavaScript can run in both browsers and Node.js, but the
                environment in which the code executes is different.
            </p>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>Feature</th>
                            <th>Browser</th>
                            <th>Node.js</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>DOM</td>
                            <td>Available</td>
                            <td>Not available by default</td>
                        </tr>

                        <tr>
                            <td>Window object</td>
                            <td>Available</td>
                            <td>Not available</td>
                        </tr>

                        <tr>
                            <td>File System</td>
                            <td>Restricted</td>
                            <td>Can be accessed through Node APIs</td>
                        </tr>

                        <tr>
                            <td>Typical usage</td>
                            <td>Frontend</td>
                            <td>Backend</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* V8 ENGINE */}

            <h2 className="mt-4">
                What is the V8 Engine?
            </h2>

            <p>
                V8 is Google's open-source JavaScript engine. It is
                responsible for executing JavaScript code.
            </p>

            <p>
                Google Chrome uses the V8 engine to execute JavaScript
                inside the browser. Node.js also uses V8 to execute
                JavaScript code outside the browser.
            </p>

            <p>
                Node.js combines the V8 JavaScript engine with its own
                APIs and runtime features to provide a complete
                server-side JavaScript environment.
            </p>


            {/* SIMPLE FLOW */}

            <h2 className="mt-4">
                How Node.js Executes JavaScript
            </h2>

            <p>
                A simplified execution flow can be understood as:
            </p>

            <div className="alert alert-secondary">

                <p className="mb-1">
                    JavaScript Code
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-1">
                    Node.js Runtime
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-1">
                    V8 JavaScript Engine
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-0">
                    Machine Code Execution
                </p>

            </div>


            {/* SIMPLE CODE */}

            <h2 className="mt-4">
                Example
            </h2>

            <p>
                Consider the following JavaScript program:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";

console.log("Hello " + name);`}
            </pre>

            <p>
                This code can be executed directly using Node.js without
                opening a browser.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`node app.js`}
            </pre>


            {/* NODE AS SERVER */}

            <h2 className="mt-4">
                Can Node.js Create a Server?
            </h2>

            <p>
                Yes. Node.js provides a built-in HTTP module that can be
                used to create an HTTP server. Developers can use this
                capability to receive requests and send responses.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from Node.js Server");
});

server.listen(3000);`}
            </pre>

            <p>
                When this application is executed, Node.js can listen
                for incoming HTTP requests on the specified port.
            </p>


            {/* NODE IS NOT EXPRESS */}

            <h2 className="mt-4">
                Node.js vs Express.js
            </h2>

            <p>
                Node.js and Express.js are not the same thing. Node.js is
                the runtime environment, while Express.js is a web
                framework that runs on top of Node.js.
            </p>

            <table className="table table-bordered">

                <thead className="table-dark">

                    <tr>
                        <th>Node.js</th>
                        <th>Express.js</th>
                    </tr>

                </thead>

                <tbody>

                    <tr>
                        <td>Runtime environment</td>
                        <td>Web framework</td>
                    </tr>

                    <tr>
                        <td>Provides core APIs</td>
                        <td>Simplifies web development</td>
                    </tr>

                    <tr>
                        <td>Can create HTTP servers</td>
                        <td>Makes routing and middleware easier</td>
                    </tr>

                </tbody>

            </table>


            {/* USE CASES */}

            <h2 className="mt-4">
                Common Uses of Node.js
            </h2>

            <ul>

                <li>
                    REST API development
                </li>

                <li>
                    Backend web applications
                </li>

                <li>
                    Real-time chat applications
                </li>

                <li>
                    Streaming applications
                </li>

                <li>
                    Microservices
                </li>

                <li>
                    Command-line tools
                </li>

                <li>
                    Web servers
                </li>

            </ul>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-info">

                <ul className="mb-0">

                    <li>
                        Node.js is a JavaScript runtime environment.
                    </li>

                    <li>
                        JavaScript is the programming language.
                    </li>

                    <li>
                        Node.js uses Google's V8 engine.
                    </li>

                    <li>
                        Node.js allows JavaScript to run outside browsers.
                    </li>

                    <li>
                        Node.js provides APIs for server-side development.
                    </li>

                    <li>
                        Express.js is a framework built for Node.js.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Node.js provides a runtime environment where JavaScript
                code can execute outside the browser. It uses the V8
                JavaScript engine and provides additional APIs for
                server-side development.
            </p>

            <p>
                Because of these capabilities, developers can use
                JavaScript to build complete applications including
                backend servers, APIs, real-time systems and command-line
                applications.
            </p>

        </div>
    );
};

export default WhatIsNode;