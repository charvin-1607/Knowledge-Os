import React from "react";

const HTTPModule = () => {
    return (
        <div>

            <h1 className="mb-4">
                HTTP Module
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Node.js provides a built-in module called
                <code> http </code> that allows us to create HTTP
                servers and handle HTTP requests and responses.
            </p>

            <p>
                Since the HTTP module is built into Node.js, we do not
                need to install it using npm.
            </p>


            {/* IMPORT */}

            <h2 className="mt-4">
                Importing HTTP Module
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const http = require("http");`}
            </pre>


            {/* CREATE SERVER */}

            <h2 className="mt-4">
                Creating an HTTP Server
            </h2>

            <p>
                The <code>http.createServer()</code> method is used to
                create an HTTP server.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const http = require("http");

const server = http.createServer((req, res) => {

    res.end("Hello from Node.js");

});`}
            </pre>


            {/* REQUEST */}

            <h2 className="mt-4">
                Request Object
            </h2>

            <p>
                The <code>req</code> object contains information about
                the incoming HTTP request.
            </p>

            <p>
                For example, we can access the HTTP method and requested
                URL.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log(req.method);
console.log(req.url);`}
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
{`res.end("Hello World");`}
            </pre>


            {/* LISTEN */}

            <h2 className="mt-4">
                Starting the Server
            </h2>

            <p>
                The <code>listen()</code> method starts the server and
                makes it listen for incoming connections on a specified
                port.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`server.listen(3000, () => {

    console.log("Server running on port 3000");

});`}
            </pre>


            {/* COMPLETE */}

            <h2 className="mt-4">
                Complete Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end("Hello from Node.js HTTP Server");

});

server.listen(3000, () => {

    console.log("Server running on port 3000");

});`}
            </pre>


            {/* STATUS CODE */}

            <h2 className="mt-4">
                HTTP Status Code
            </h2>

            <p>
                We can specify an HTTP status code using
                <code>res.writeHead()</code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`res.writeHead(200, {
    "Content-Type": "text/plain"
});`}
            </pre>

            <p>
                Here, <code>200</code> represents a successful request.
            </p>


            {/* HEADERS */}

            <h2 className="mt-4">
                HTTP Headers
            </h2>

            <p>
                HTTP headers provide additional information about the
                request or response.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`res.writeHead(200, {
    "Content-Type": "application/json"
});`}
            </pre>


            {/* ROUTING */}

            <h2 className="mt-4">
                Basic Routing
            </h2>

            <p>
                The HTTP module can also be used to create simple
                routing based on the request URL.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const server = http.createServer((req, res) => {

    if (req.url === "/") {

        res.end("Home Page");

    } else if (req.url === "/about") {

        res.end("About Page");

    } else {

        res.statusCode = 404;
        res.end("Page Not Found");

    }

});`}
            </pre>


            {/* METHODS */}

            <h2 className="mt-4">
                Handling HTTP Methods
            </h2>

            <p>
                We can check the request method using
                <code>req.method</code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`if (req.method === "GET") {

    res.end("GET request received");

}`}
            </pre>


            {/* JSON */}

            <h2 className="mt-4">
                Sending JSON Response
            </h2>

            <p>
                The HTTP module can send JSON data as a response.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const data = {
    name: "Charvin",
    role: "Developer"
};

res.writeHead(200, {
    "Content-Type": "application/json"
});

res.end(JSON.stringify(data));`}
            </pre>


            {/* LIMITATIONS */}

            <h2 className="mt-4">
                Limitations of the HTTP Module
            </h2>

            <p>
                The built-in HTTP module is powerful, but building a
                complete web application directly with it can require
                writing a lot of manual code.
            </p>

            <p>
                Features such as routing, middleware and request
                handling are commonly made easier by frameworks such as
                Express.js.
            </p>


            {/* COMPARISON */}

            <h2 className="mt-4">
                HTTP Module vs Express.js
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>HTTP Module</th>
                            <th>Express.js</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Built into Node.js</td>
                            <td>Third-party framework</td>
                        </tr>

                        <tr>
                            <td>More manual handling</td>
                            <td>Simplifies web development</td>
                        </tr>

                        <tr>
                            <td>Basic routing can be written manually</td>
                            <td>Provides convenient routing APIs</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        <code>http</code> is a built-in Node.js module.
                    </li>

                    <li>
                        <code>createServer()</code> creates an HTTP
                        server.
                    </li>

                    <li>
                        <code>req</code> represents the incoming request.
                    </li>

                    <li>
                        <code>res</code> is used to send the response.
                    </li>

                    <li>
                        <code>listen()</code> starts the server.
                    </li>

                    <li>
                        The HTTP module can handle basic routing and
                        HTTP methods.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The Node.js HTTP module provides the basic functionality
                required to create HTTP servers and handle requests and
                responses.
            </p>

            <p>
                It is important to understand the HTTP module because
                frameworks such as Express.js build on top of Node.js
                HTTP capabilities.
            </p>

        </div>
    );
};

export default HTTPModule;