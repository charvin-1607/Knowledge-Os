import React from "react";

const CommonJSVsESModules = () => {
    return (
        <div>

            <h1 className="mb-4">
                CommonJS vs ES Modules
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Node.js supports different module systems for organizing
                and sharing JavaScript code between files. The two
                important module systems you should know are
                <strong> CommonJS </strong> and
                <strong> ES Modules </strong>.
            </p>

            <p>
                CommonJS has traditionally been widely used in Node.js,
                while ES Modules are the standard JavaScript module
                system and are commonly used in modern JavaScript
                applications.
            </p>

            <p>
                Before comparing them, remember the basic idea:
                one JavaScript file can export functionality and another
                JavaScript file can import and use that functionality.
            </p>


            {/* COMMONJS */}

            <h2 className="mt-4">
                What is CommonJS?
            </h2>

            <p>
                CommonJS is a module system that has been traditionally
                used by Node.js. It uses
                <code> require() </code> to load modules and
                <code> module.exports </code> or
                <code> exports </code> to export functionality.
            </p>

            <p>
                A CommonJS file usually uses the
                <code> .js </code> extension when the project is using
                the default CommonJS configuration.
            </p>


            {/* COMMONJS EXPORT */}

            <h2 className="mt-4">
                CommonJS Export
            </h2>

            <p>
                Suppose we create a file called
                <code> math.js </code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {
    return a + b;
}

module.exports = add;`}
            </pre>

            <p>
                Here, the <code>add</code> function is exported using
                <code> module.exports </code>.
            </p>


            {/* COMMONJS IMPORT */}

            <h2 className="mt-4">
                CommonJS Import
            </h2>

            <p>
                Another file can import the function using
                <code> require() </code>.
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


            {/* ES MODULE */}

            <h2 className="mt-4">
                What are ES Modules?
            </h2>

            <p>
                ES Modules, commonly called ESM, are the standard module
                system defined by JavaScript itself.
            </p>

            <p>
                ES Modules use the
                <code> export </code> and
                <code> import </code> keywords to share functionality
                between files.
            </p>


            {/* ES EXPORT */}

            <h2 className="mt-4">
                ES Module Export
            </h2>

            <p>
                We can export a function using the
                <code> export </code> keyword.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`export function add(a, b) {
    return a + b;
}`}
            </pre>


            {/* ES IMPORT */}

            <h2 className="mt-4">
                ES Module Import
            </h2>

            <p>
                The exported function can then be imported using
                <code> import </code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { add } from "./math.js";

console.log(add(10, 20));`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`30`}
            </pre>


            {/* BASIC DIFFERENCE */}

            <h2 className="mt-4">
                Basic Difference
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>CommonJS</th>
                            <th>ES Modules</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Uses require()</td>
                            <td>Uses import</td>
                        </tr>

                        <tr>
                            <td>Uses module.exports</td>
                            <td>Uses export</td>
                        </tr>

                        <tr>
                            <td>Traditional Node.js module system</td>
                            <td>Standard JavaScript module system</td>
                        </tr>

                        <tr>
                            <td>Common in older Node.js projects</td>
                            <td>Common in modern JavaScript projects</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* COMMONJS MULTIPLE EXPORT */}

            <h2 className="mt-4">
                Multiple Exports in CommonJS
            </h2>

            <p>
                CommonJS can export multiple functions by assigning an
                object to <code>module.exports</code>.
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
                Importing these functions:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const { add, subtract } = require("./math");

console.log(add(10, 5));
console.log(subtract(10, 5));`}
            </pre>


            {/* ESM NAMED EXPORT */}

            <h2 className="mt-4">
                Named Export in ES Modules
            </h2>

            <p>
                ES Modules support named exports.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}`}
            </pre>

            <p>
                They can be imported using their exported names.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { add, subtract } from "./math.js";`}
            </pre>


            {/* DEFAULT EXPORT */}

            <h2 className="mt-4">
                Default Export in ES Modules
            </h2>

            <p>
                ES Modules also support default exports.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name) {
    return "Hello " + name;
}

export default greet;`}
            </pre>

            <p>
                The default export can be imported like this:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import greet from "./greet.js";

console.log(greet("Charvin"));`}
            </pre>


            {/* PACKAGE JSON */}

            <h2 className="mt-4">
                Using ES Modules in Node.js
            </h2>

            <p>
                Node.js needs to know how a JavaScript file should be
                interpreted. One common way to explicitly configure a
                project to use ES Modules is through
                <code> package.json </code>.
            </p>

            <p>
                We can specify:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{
    "type": "module"
}`}
            </pre>

            <p>
                With this configuration, Node.js treats
                <code> .js </code> files in that package scope as ES
                Modules.
            </p>


            {/* MJS */}

            <h2 className="mt-4">
                .mjs Extension
            </h2>

            <p>
                Another way to explicitly indicate an ES Module is to
                use the <code>.mjs</code> file extension.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`math.mjs`}
            </pre>

            <p>
                Example:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`export function add(a, b) {
    return a + b;
}`}
            </pre>


            {/* CJS EXTENSION */}

            <h2 className="mt-4">
                .cjs Extension
            </h2>

            <p>
                The <code>.cjs</code> extension explicitly indicates a
                CommonJS module.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`math.cjs`}
            </pre>

            <p>
                Example:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {
    return a + b;
}

module.exports = add;`}
            </pre>


            {/* FILE STRUCTURE */}

            <h2 className="mt-4">
                Example Project Structure
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`project/
│
├── package.json
├── app.js
└── math.js`}
            </pre>

            <p>
                If the project uses:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"type": "module"`}
            </pre>

            <p>
                then <code>.js</code> files are treated as ES Modules
                within that package scope.
            </p>


            {/* COMPARISON */}

            <h2 className="mt-4">
                CommonJS vs ES Modules
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>Feature</th>
                            <th>CommonJS</th>
                            <th>ES Modules</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Import</td>
                            <td><code>require()</code></td>
                            <td><code>import</code></td>
                        </tr>

                        <tr>
                            <td>Export</td>
                            <td><code>module.exports</code></td>
                            <td><code>export</code></td>
                        </tr>

                        <tr>
                            <td>Default style</td>
                            <td>CommonJS syntax</td>
                            <td>Standard JavaScript syntax</td>
                        </tr>

                        <tr>
                            <td>Explicit extension</td>
                            <td><code>.cjs</code></td>
                            <td><code>.mjs</code></td>
                        </tr>

                        <tr>
                            <td>package.json configuration</td>
                            <td>CommonJS by default in traditional setup</td>
                            <td><code>"type": "module"</code></td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* WHEN TO USE */}

            <h2 className="mt-4">
                Which One Should You Use?
            </h2>

            <p>
                For learning existing Node.js projects, understanding
                CommonJS is important because many Node.js applications
                and packages have historically used it.
            </p>

            <p>
                For modern JavaScript development, ES Modules are also
                very important because they are part of the standard
                JavaScript module system.
            </p>

            <p>
                The most important thing is to understand both systems
                and avoid mixing their syntax incorrectly within a
                project.
            </p>


            {/* COMMON MISTAKE */}

            <h2 className="mt-4">
                Common Mistake
            </h2>

            <p>
                One common mistake is using CommonJS and ES Module
                syntax without properly configuring the project or
                understanding the module format being used.
            </p>

            <p>
                For example, simply assuming that every Node.js
                <code> .js </code> file automatically supports both
                <code> require() </code> and
                <code> import </code> can lead to module-related errors.
            </p>


            {/* IMPORTANT */}

            <div className="alert alert-warning">

                <strong>Important:</strong>

                <p className="mb-0 mt-2">
                    CommonJS and ES Modules are two different module
                    systems. Learn the syntax and configuration of both
                    before combining them in the same Node.js project.
                </p>

            </div>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        CommonJS uses <code>require()</code>.
                    </li>

                    <li>
                        CommonJS commonly uses <code>module.exports</code>.
                    </li>

                    <li>
                        ES Modules use <code>import</code> and
                        <code> export </code>.
                    </li>

                    <li>
                        <code>.cjs</code> explicitly represents CommonJS.
                    </li>

                    <li>
                        <code>.mjs</code> explicitly represents ES Modules.
                    </li>

                    <li>
                        <code>"type": "module"</code> can configure
                        <code>.js</code> files as ES Modules.
                    </li>

                    <li>
                        Understanding both systems is important for
                        Node.js development.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                CommonJS and ES Modules provide ways to divide JavaScript
                applications into reusable modules. CommonJS primarily
                uses <code>require()</code> and
                <code> module.exports </code>, while ES Modules use
                <code> import </code> and <code> export </code>.
            </p>

            <p>
                Node.js supports both module systems. Understanding their
                syntax, configuration and differences is essential before
                working with larger Node.js applications.
            </p>

        </div>
    );
};

export default CommonJSVsESModules;