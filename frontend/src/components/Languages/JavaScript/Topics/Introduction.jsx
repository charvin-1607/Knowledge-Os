import React from "react";

const Introduction = () => {

    return (
        <div>

            <h1 className="mb-4">
                Introduction to JavaScript
            </h1>


            {/* What is JavaScript */}

            <h2>What is JavaScript?</h2>

            <p>
                JavaScript is a high-level, interpreted programming
                language that is mainly used to make web pages
                interactive and dynamic. It works together with
                HTML and CSS to create modern web applications.
            </p>

            <p>
                HTML is used to create the structure of a webpage,
                CSS is used to style the webpage, and JavaScript is
                used to add behavior and functionality to the webpage.
            </p>


            {/* Example */}

            <h2 className="mt-4">
                Simple Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>

<html>

<body>

    <h1 id="title">
        Hello
    </h1>

    <button onclick="changeText()">
        Click Me
    </button>

    <script>

        function changeText() {

            document.getElementById("title")
                .innerText = "Hello JavaScript!";

        }

    </script>

</body>

</html>`}
            </pre>


            {/* Why JavaScript */}

            <h2 className="mt-4">
                Why is JavaScript Used?
            </h2>

            <p>
                JavaScript is used because it allows developers to
                create interactive and dynamic applications. It can
                respond to user actions, modify webpage content,
                communicate with servers and manage application data.
            </p>

            <ul>

                <li>
                    Creating interactive web pages.
                </li>

                <li>
                    Handling user events.
                </li>

                <li>
                    Validating forms.
                </li>

                <li>
                    Changing HTML content dynamically.
                </li>

                <li>
                    Communicating with backend APIs.
                </li>

                <li>
                    Building complete web applications.
                </li>

            </ul>


            {/* JavaScript with HTML */}

            <h2 className="mt-4">
                JavaScript with HTML
            </h2>

            <p>
                JavaScript can be added to an HTML document using the
                script tag.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<script>

    console.log("Hello JavaScript");

</script>`}
            </pre>


            {/* External JS */}

            <h2 className="mt-4">
                External JavaScript
            </h2>

            <p>
                JavaScript can also be written in a separate file and
                connected to an HTML document.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<script src="script.js"></script>`}
            </pre>


            <p>
                The external JavaScript file can contain the
                application's JavaScript code.
            </p>


            {/* Console */}

            <h2 className="mt-4">
                console.log()
            </h2>

            <p>
                The console.log() method is commonly used to display
                information in the browser console. It is also useful
                for debugging JavaScript programs.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Hello World");

console.log(10);

console.log("JavaScript");`}
            </pre>


            {/* Comments */}

            <h2 className="mt-4">
                Comments in JavaScript
            </h2>

            <p>
                Comments are messages written inside the source code
                that are ignored by the JavaScript engine. They are
                useful for explaining code.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// This is a single-line comment

/*
    This is a
    multi-line comment
*/`}
            </pre>


            {/* Single Line */}

            <h2 className="mt-4">
                Single-Line Comment
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`// Print a message

console.log("Hello");`}
            </pre>


            {/* Multi Line */}

            <h2 className="mt-4">
                Multi-Line Comment
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`/*
    This code
    prints a message
*/

console.log("Hello");`}
            </pre>


            {/* JavaScript Features */}

            <h2 className="mt-4">
                Features of JavaScript
            </h2>

            <ul>

                <li>
                    JavaScript is dynamically typed.
                </li>

                <li>
                    JavaScript supports object-oriented programming.
                </li>

                <li>
                    JavaScript supports functional programming.
                </li>

                <li>
                    JavaScript is widely supported by modern browsers.
                </li>

                <li>
                    JavaScript can run on both frontend and backend.
                </li>

                <li>
                    JavaScript has a large ecosystem of libraries
                    and frameworks.
                </li>

            </ul>


            {/* Frontend */}

            <h2 className="mt-4">
                JavaScript in Frontend Development
            </h2>

            <p>
                In frontend development, JavaScript runs inside the
                browser and allows webpages to respond to user
                interactions.
            </p>

            <pre className="bg-light border p-3 rounded">
{`HTML
 ↓
CSS
 ↓
JavaScript
 ↓
Interactive Web Page`}
            </pre>


            {/* Backend */}

            <h2 className="mt-4">
                JavaScript in Backend Development
            </h2>

            <p>
                JavaScript can also be used for backend development.
                Node.js provides an environment that allows JavaScript
                to run outside the browser.
            </p>

            <pre className="bg-light border p-3 rounded">
{`Frontend
   ↓
JavaScript
   ↓
Node.js
   ↓
Backend
   ↓
Database`}
            </pre>


            {/* JavaScript Ecosystem */}

            <h2 className="mt-4">
                JavaScript Ecosystem
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Technology</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>JavaScript</td>
                            <td>
                                Programming language
                            </td>
                        </tr>

                        <tr>
                            <td>Node.js</td>
                            <td>
                                JavaScript runtime
                            </td>
                        </tr>

                        <tr>
                            <td>React</td>
                            <td>
                                Frontend library
                            </td>
                        </tr>

                        <tr>
                            <td>Express.js</td>
                            <td>
                                Backend framework
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* JavaScript Uses */}

            <h2 className="mt-4">
                Where is JavaScript Used?
            </h2>

            <ul>

                <li>
                    Web development
                </li>

                <li>
                    Frontend applications
                </li>

                <li>
                    Backend applications
                </li>

                <li>
                    Mobile applications
                </li>

                <li>
                    Desktop applications
                </li>

                <li>
                    Server-side applications
                </li>

                <li>
                    Interactive websites
                </li>

            </ul>


            {/* Basic Syntax */}

            <h2 className="mt-4">
                Basic JavaScript Syntax
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`let message = "Hello JavaScript";

console.log(message);`}
            </pre>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        JavaScript is a programming language.
                    </li>

                    <li>
                        It is widely used for web development.
                    </li>

                    <li>
                        JavaScript can make web pages interactive.
                    </li>

                    <li>
                        It can run in browsers.
                    </li>

                    <li>
                        Node.js allows JavaScript to run on the server.
                    </li>

                    <li>
                        JavaScript works together with HTML and CSS.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                JavaScript is one of the most important technologies
                used in modern web development. It allows developers
                to create interactive websites and applications.
                JavaScript can be used on the frontend as well as the
                backend, making it an important technology for full-stack
                development.
            </p>

        </div>
    );
};

export default Introduction;