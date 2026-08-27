import React from "react";

const Modules = () => {
    return (
        <div>

            {/* TITLE */}

            <h1 className="mb-4">
                Node.js Modules
            </h1>


            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                A module in Node.js is a reusable piece of code that can
                contain variables, functions, objects, classes or other
                related functionality.
            </p>

            <p>
                Modules help us divide a large application into smaller
                and more manageable parts. Instead of writing all the
                application code inside a single JavaScript file, we can
                create separate files and organize functionality into
                different modules.
            </p>

            <p>
                Node.js provides a module system that allows developers
                to export functionality from one file and use it in
                another file.
            </p>


            {/* WHY MODULES */}

            <h2 className="mt-4">
                Why Do We Need Modules?
            </h2>

            <p>
                As an application becomes larger, keeping everything in
                one file makes the code difficult to understand,
                maintain and debug.
            </p>

            <p>
                Modules solve this problem by allowing us to separate
                different responsibilities into different files.
            </p>

            <ul>

                <li>
                    Makes code easier to understand.
                </li>

                <li>
                    Improves code organization.
                </li>

                <li>
                    Makes code reusable.
                </li>

                <li>
                    Makes debugging easier.
                </li>

                <li>
                    Helps maintain large applications.
                </li>

                <li>
                    Allows functionality to be shared between files.
                </li>

            </ul>


            {/* SIMPLE EXAMPLE */}

            <h2 className="mt-4">
                Simple Example
            </h2>

            <p>
                Suppose we have a function that performs addition.
                Instead of keeping that function inside our main file,
                we can create a separate module for it.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {
    return a + b;
}`}
            </pre>

            <p>
                This function can be placed inside a separate JavaScript
                file and reused wherever required.


            </p>


            {/* TYPES OF MODULES */}

            <h2 className="mt-4">
                Types of Modules in Node.js
            </h2>

            <p>
                Node.js applications commonly work with three broad
                categories of modules.
            </p>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Example</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Built-in Modules</td>
                            <td>
                                Modules provided by Node.js itself.
                            </td>
                            <td>
                                fs, path, http
                            </td>
                        </tr>

                        <tr>
                            <td>User-defined Modules</td>
                            <td>
                                Modules created by the developer.
                            </td>
                            <td>
                                calculator.js
                            </td>
                        </tr>

                        <tr>
                            <td>Third-party Modules</td>
                            <td>
                                Modules installed from external packages.
                            </td>
                            <td>
                                express
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* BUILT IN MODULES */}

            <h2 className="mt-4">
                Built-in Modules
            </h2>

            <p>
                Node.js provides many modules that are already available
                when Node.js is installed. These are called built-in or
                core modules.
            </p>

            <p>
                We do not need to separately download these modules
                using npm.
            </p>

            <h5 className="mt-3">
                Common Built-in Modules
            </h5>

            <ul>

                <li>
                    <strong>fs</strong> - File System operations
                </li>

                <li>
                    <strong>path</strong> - Working with file and directory paths
                </li>

                <li>
                    <strong>http</strong> - Creating HTTP servers
                </li>

                <li>
                    <strong>os</strong> - Operating system information
                </li>

                <li>
                    <strong>events</strong> - Working with events
                </li>

            </ul>


            {/* USING BUILT IN MODULE */}

            <h2 className="mt-4">
                Using a Built-in Module
            </h2>

            <p>
                A Node.js built-in module can be loaded into our
                application using the module loading mechanism.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const path = require("path");

console.log(path.basename("/users/charvin/app.js"));`}
            </pre>

            <p>
                Here, the <code>path</code> module is loaded and then
                one of its functions is used.
            </p>


            {/* USER DEFINED */}

            <h2 className="mt-4">
                User-defined Modules
            </h2>

            <p>
                User-defined modules are modules created by developers
                according to the requirements of an application.
            </p>

            <p>
                For example, suppose we have two files:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`math.js
app.js`}
            </pre>

            <p>
                We can keep mathematical functions inside
                <code> math.js </code> and use them inside
                <code> app.js </code>.
            </p>


            {/* MODULE FILE */}

            <h2 className="mt-4">
                Creating a User-defined Module
            </h2>

            <p>
                Create a file called:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`math.js`}
            </pre>

            <p>
                Add the following code:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {
    return a + b;
}

module.exports = add;`}
            </pre>

            <p>
                The function is exported from the module so another
                JavaScript file can use it.
            </p>


            {/* IMPORT */}

            <h2 className="mt-4">
                Using the Module
            </h2>

            <p>
                Now create another file:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.js`}
            </pre>

            <p>
                We can load the previously created module:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const add = require("./math");

console.log(add(10, 20));`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`30`}
            </pre>


            {/* REQUIRE */}

            <h2 className="mt-4">
                What is require()?
            </h2>

            <p>
                In the CommonJS module system, <code>require()</code> is
                used to load a module into another JavaScript file.
            </p>

            <p>
                For example:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fs = require("fs");`}
            </pre>

            <p>
                This statement loads the Node.js File System module.
            </p>

            <p>
                The detailed difference between CommonJS and ES Modules
                will be covered separately in the
                <strong> CommonJS vs ES Modules </strong> topic.
            </p>


            {/* MODULE.EXPORTS */}

            <h2 className="mt-4">
                What is module.exports?
            </h2>

            <p>
                <code>module.exports</code> is used in the CommonJS
                module system to define what a module makes available
                to other files.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name) {
    return "Hello " + name;
}

module.exports = greet;`}
            </pre>

            <p>
                Another file can then load this exported functionality.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const greet = require("./greet");

console.log(greet("Charvin"));`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Hello Charvin`}
            </pre>


            {/* MULTIPLE VALUES */}

            <h2 className="mt-4">
                Exporting Multiple Values
            </h2>

            <p>
                A module can expose multiple functions or values.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
};`}
            </pre>

            <p>
                These functions can then be loaded from another file.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const math = require("./math");

console.log(math.add(10, 5));

console.log(math.subtract(10, 5));`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`15
5`}
            </pre>


            {/* THIRD PARTY */}

            <h2 className="mt-4">
                Third-party Modules
            </h2>

            <p>
                Third-party modules are packages created by other
                developers or organizations and distributed through
                package registries such as npm.
            </p>

            <p>
                These packages can be installed and then used inside
                Node.js applications.
            </p>

            <p>
                For example, Express.js is a popular third-party package
                used for building web applications and APIs with Node.js.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>


            {/* MODULE STRUCTURE */}

            <h2 className="mt-4">
                Example Project Structure
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`project/
│
├── app.js
│
├── math.js
│
└── user.js`}
            </pre>

            <p>
                Each file can contain a specific responsibility and can
                expose functionality to other parts of the application.
            </p>


            {/* MODULAR APPLICATION */}

            <h2 className="mt-4">
                Modular Application
            </h2>

            <p>
                A modular application divides functionality into
                separate modules instead of placing everything inside
                one large file.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Application
│
├── User Module
│
├── Authentication Module
│
├── Database Module
│
├── Product Module
│
└── Utility Module`}
            </pre>

            <p>
                This structure becomes especially useful when building
                larger backend applications.
            </p>


            {/* ADVANTAGES */}

            <h2 className="mt-4">
                Advantages of Modules
            </h2>

            <ul>

                <li>
                    <strong>Reusability:</strong> Code can be reused
                    across different parts of an application.
                </li>

                <li>
                    <strong>Maintainability:</strong> Smaller files are
                    easier to maintain.
                </li>

                <li>
                    <strong>Organization:</strong> Related functionality
                    can be grouped together.
                </li>

                <li>
                    <strong>Testing:</strong> Individual modules can be
                    tested separately.
                </li>

                <li>
                    <strong>Scalability:</strong> Large applications can
                    be divided into manageable modules.
                </li>

            </ul>


            {/* REAL WORLD */}

            <h2 className="mt-4">
                Real-world Example
            </h2>

            <p>
                Imagine a large backend application containing users,
                products, authentication and payments.
            </p>

            <p>
                Instead of putting all the code into one file, we can
                divide the application into separate modules.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`backend/
│
├── users.js
├── products.js
├── authentication.js
├── payments.js
└── app.js`}
            </pre>

            <p>
                Each module can focus on its own responsibility while
                the main application combines these modules together.
            </p>


            {/* IMPORTANT */}

            <div className="alert alert-warning">

                <strong>Important:</strong>

                <p className="mb-0 mt-2">
                    Modules are not limited to backend applications.
                    The concept of dividing software into reusable
                    components is commonly used in modern software
                    development.
                </p>

            </div>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        A module is a reusable piece of code.
                    </li>

                    <li>
                        Modules help organize large applications.
                    </li>

                    <li>
                        Node.js provides built-in modules.
                    </li>

                    <li>
                        Developers can create their own modules.
                    </li>

                    <li>
                        Third-party modules can be installed as packages.
                    </li>

                    <li>
                        <code>require()</code> can load CommonJS modules.
                    </li>

                    <li>
                        <code>module.exports</code> can expose
                        functionality from a CommonJS module.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Modules are an important part of Node.js development.
                They allow applications to be divided into smaller,
                reusable and maintainable pieces of code.
            </p>

            <p>
                Node.js applications can use built-in modules,
                user-defined modules and third-party modules. By
                separating functionality into modules, developers can
                create cleaner and more scalable applications.
            </p>

        </div>
    );
};

export default Modules;