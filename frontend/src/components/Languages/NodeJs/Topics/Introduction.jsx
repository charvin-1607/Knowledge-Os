import React from "react";

const Introduction = () => {
    return (
        <div>

            {/* TITLE */}
            <h1 className="mb-4">
                Introduction to Node.js
            </h1>

            {/* INTRODUCTION */}
            <p>
                Node.js is a JavaScript runtime environment that allows
                developers to execute JavaScript code outside a web browser.
                It is widely used for developing backend applications,
                REST APIs, web servers and real-time applications.
            </p>

            <p>
                Before Node.js, JavaScript was mainly used inside web
                browsers for creating interactive frontend applications.
                Node.js made it possible to use JavaScript for server-side
                development as well.
            </p>

            {/* WHAT IS NODE */}
            <h2 className="mt-4">
                What is Node.js?
            </h2>

            <p>
                Node.js is not a programming language and it is not a
                framework. It is a runtime environment that provides the
                required environment for executing JavaScript code outside
                the browser.
            </p>

            <div className="alert alert-info">
                <strong>Important:</strong>
                <p className="mb-0 mt-2">
                    JavaScript is the programming language, while Node.js
                    is the runtime environment used to execute JavaScript
                    outside the browser.
                </p>
            </div>

            {/* SIMPLE EXAMPLE */}
            <h2 className="mt-4">
                Simple Node.js Example
            </h2>

            <p>
                We can create a JavaScript file and execute it directly
                using Node.js.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Hello from Node.js");`}
            </pre>

            <p>
                If the file is saved as <code>app.js</code>, it can be
                executed from the terminal using the following command:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`node app.js`}
            </pre>

            {/* V8 */}
            <h2 className="mt-4">
                Node.js and V8 Engine
            </h2>

            <p>
                Node.js uses Google's V8 JavaScript engine to execute
                JavaScript code. V8 is the same JavaScript engine used
                by Google Chrome.
            </p>

            <p>
                Node.js takes the V8 engine and adds additional features
                that allow JavaScript to work with files, networks,
                operating system resources and servers.
            </p>

            {/* BROWSER VS NODE */}
            <h2 className="mt-4">
                JavaScript in Browser vs Node.js
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">
                        <tr>
                            <th>Browser</th>
                            <th>Node.js</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Runs JavaScript inside browser</td>
                            <td>Runs JavaScript outside browser</td>
                        </tr>

                        <tr>
                            <td>Can access DOM</td>
                            <td>Does not provide browser DOM</td>
                        </tr>

                        <tr>
                            <td>Mainly frontend development</td>
                            <td>Mainly backend development</td>
                        </tr>

                        <tr>
                            <td>Uses browser APIs</td>
                            <td>Provides Node.js APIs</td>
                        </tr>
                    </tbody>

                </table>

            </div>

            {/* FEATURES */}
            <h2 className="mt-4">
                Important Features of Node.js
            </h2>

            <ul>

                <li>
                    JavaScript can run outside the browser.
                </li>

                <li>
                    Built on Google's V8 JavaScript engine.
                </li>

                <li>
                    Supports asynchronous programming.
                </li>

                <li>
                    Uses an event-driven architecture.
                </li>

                <li>
                    Provides a large npm package ecosystem.
                </li>

                <li>
                    Useful for building scalable network applications.
                </li>

            </ul>

            {/* ASYNCHRONOUS */}
            <h2 className="mt-4">
                Asynchronous Programming
            </h2>

            <p>
                One of the important characteristics of Node.js is its
                ability to handle asynchronous operations. Node.js can
                start an operation and continue executing other code
                instead of waiting for the operation to finish.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Start");

setTimeout(() => {
    console.log("Task completed");
}, 2000);

console.log("End");`}
            </pre>

            <p>
                In this example, Node.js does not stop the entire program
                while waiting for the timer to complete.
            </p>

            {/* EVENT DRIVEN */}
            <h2 className="mt-4">
                Event-Driven Architecture
            </h2>

            <p>
                Node.js follows an event-driven programming model.
                Applications can respond to events such as incoming
                HTTP requests, file operations and user actions.
            </p>

            <p>
                This architecture makes Node.js useful for applications
                that need to handle many concurrent requests.
            </p>

            {/* NPM */}
            <h2 className="mt-4">
                Node.js and npm
            </h2>

            <p>
                npm stands for Node Package Manager. It is used to
                install, manage and share JavaScript packages that can
                be used in Node.js applications.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>

            <p>
                For example, the above command installs Express.js,
                which is commonly used to build web servers and REST APIs.
            </p>

            {/* USE CASES */}
            <h2 className="mt-4">
                Where is Node.js Used?
            </h2>

            <ul>

                <li>REST API development</li>

                <li>Backend web applications</li>

                <li>Real-time chat applications</li>

                <li>Web servers</li>

                <li>Streaming applications</li>

                <li>Microservices</li>

                <li>Command-line applications</li>

            </ul>

            {/* ADVANTAGES */}
            <h2 className="mt-4">
                Advantages of Node.js
            </h2>

            <ul>

                <li>
                    Same JavaScript language can be used for frontend
                    and backend development.
                </li>

                <li>
                    Fast JavaScript execution using the V8 engine.
                </li>

                <li>
                    Efficient asynchronous programming model.
                </li>

                <li>
                    Large ecosystem of npm packages.
                </li>

                <li>
                    Suitable for real-time applications.
                </li>

            </ul>

            {/* SUMMARY */}
            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Node.js is a JavaScript runtime environment used to
                execute JavaScript outside the browser. It is built on
                Google's V8 engine and provides APIs for server-side
                development.
            </p>

            <p>
                Node.js is commonly used for backend applications,
                REST APIs, web servers and real-time applications.
                Its asynchronous and event-driven architecture makes
                it suitable for handling many network operations.
            </p>

        </div>
    );
};

export default Introduction;