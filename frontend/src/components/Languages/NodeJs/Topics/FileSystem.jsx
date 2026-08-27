import React from "react";

const FileSystem = () => {
    return (
        <div>

            <h1 className="mb-4">
                Node.js File System
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Node.js provides a built-in module called
                <strong> File System </strong>, commonly known as the
                <code> fs </code> module.
            </p>

            <p>
                The File System module allows Node.js applications to
                interact with files and directories on the operating
                system.
            </p>

            <p>
                Using the <code>fs</code> module, we can perform
                operations such as creating, reading, writing, updating,
                renaming and deleting files.
            </p>


            {/* IMPORT */}

            <h2 className="mt-4">
                Importing the fs Module
            </h2>

            <p>
                Since <code>fs</code> is a built-in Node.js module,
                it does not need to be installed using npm.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fs = require("fs");`}
            </pre>


            {/* WRITE FILE */}

            <h2 className="mt-4">
                Writing to a File
            </h2>

            <p>
                The <code>writeFile()</code> method can be used to
                create a new file or replace the contents of an existing
                file.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fs = require("fs");

fs.writeFile(
    "data.txt",
    "Hello Node.js",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("File written successfully");

    }
);`}
            </pre>


            {/* READ FILE */}

            <h2 className="mt-4">
                Reading a File
            </h2>

            <p>
                The <code>readFile()</code> method reads data from a
                file asynchronously.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.readFile(
    "data.txt",
    "utf8",
    (err, data) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log(data);

    }
);`}
            </pre>


            {/* APPEND */}

            <h2 className="mt-4">
                Appending Data
            </h2>

            <p>
                The <code>appendFile()</code> method adds data to the
                end of an existing file.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.appendFile(
    "data.txt",
    "\\nNew content",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("Data appended");

    }
);`}
            </pre>


            {/* DELETE */}

            <h2 className="mt-4">
                Deleting a File
            </h2>

            <p>
                The <code>unlink()</code> method is used to delete a
                file.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.unlink("data.txt", (err) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("File deleted");

});`}
            </pre>


            {/* RENAME */}

            <h2 className="mt-4">
                Renaming a File
            </h2>

            <p>
                The <code>rename()</code> method can be used to change
                the name or location of a file.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.rename(
    "old.txt",
    "new.txt",
    (err) => {

        if (err) {
            console.log(err);
            return;
        }

        console.log("File renamed");

    }
);`}
            </pre>


            {/* MKDIR */}

            <h2 className="mt-4">
                Creating a Directory
            </h2>

            <p>
                The <code>mkdir()</code> method is used to create a
                directory.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.mkdir("uploads", (err) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log("Directory created");

});`}
            </pre>


            {/* READ DIRECTORY */}

            <h2 className="mt-4">
                Reading a Directory
            </h2>

            <p>
                The <code>readdir()</code> method returns the files and
                directories inside a specified directory.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.readdir(".", (err, files) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(files);

});`}
            </pre>


            {/* SYNC */}

            <h2 className="mt-4">
                Synchronous File Operations
            </h2>

            <p>
                The File System module also provides synchronous
                versions of many operations.
            </p>

            <p>
                For example:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const data = fs.readFileSync(
    "data.txt",
    "utf8"
);

console.log(data);`}
            </pre>

            <p>
                Synchronous operations block the JavaScript execution
                until the operation finishes.
            </p>


            {/* ASYNC */}

            <h2 className="mt-4">
                Asynchronous File Operations
            </h2>

            <p>
                Asynchronous File System methods allow the application
                to continue executing while the file operation is being
                processed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fs.readFile(
    "data.txt",
    "utf8",
    (err, data) => {

        console.log(data);

    }
);

console.log("This can execute before the file callback");`}
            </pre>


            {/* CALLBACK */}

            <h2 className="mt-4">
                Callback in fs Methods
            </h2>

            <p>
                Many asynchronous File System methods use a callback
                function that receives an error and the result.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`(err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);

}`}
            </pre>

            <p>
                This follows the common Node.js error-first callback
                pattern.
            </p>


            {/* COMMON METHODS */}

            <h2 className="mt-4">
                Common fs Methods
            </h2>

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
                            <td><code>writeFile()</code></td>
                            <td>Create or overwrite a file</td>
                        </tr>

                        <tr>
                            <td><code>readFile()</code></td>
                            <td>Read file contents</td>
                        </tr>

                        <tr>
                            <td><code>appendFile()</code></td>
                            <td>Add data to a file</td>
                        </tr>

                        <tr>
                            <td><code>unlink()</code></td>
                            <td>Delete a file</td>
                        </tr>

                        <tr>
                            <td><code>rename()</code></td>
                            <td>Rename or move a file</td>
                        </tr>

                        <tr>
                            <td><code>mkdir()</code></td>
                            <td>Create a directory</td>
                        </tr>

                        <tr>
                            <td><code>readdir()</code></td>
                            <td>Read directory contents</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* REAL WORLD */}

            <h2 className="mt-4">
                Real-world Use Cases
            </h2>

            <p>
                The File System module is useful when a Node.js
                application needs to work with files stored on the
                server.
            </p>

            <ul>

                <li>
                    Reading configuration files.
                </li>

                <li>
                    Creating log files.
                </li>

                <li>
                    Uploading and managing files.
                </li>

                <li>
                    Reading JSON data.
                </li>

                <li>
                    Generating reports.
                </li>

                <li>
                    Managing application-generated files.
                </li>

            </ul>


            {/* IMPORTANT */}

            <div className="alert alert-warning">

                <strong>Important:</strong>

                <p className="mb-0 mt-2">
                    File System operations interact with the actual
                    operating system. Therefore, file paths,
                    permissions and error handling should be handled
                    carefully in real applications.
                </p>

            </div>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Node.js provides the built-in <code>fs</code>
                        module.
                    </li>

                    <li>
                        It can read and write files.
                    </li>

                    <li>
                        It can create and remove files and directories.
                    </li>

                    <li>
                        It provides both asynchronous and synchronous
                        APIs.
                    </li>

                    <li>
                        Asynchronous APIs are generally preferred for
                        I/O-heavy server applications.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The Node.js File System module provides APIs for
                interacting with files and directories. It is a
                built-in module, so it does not need to be installed
                separately.
            </p>

            <p>
                Common operations include reading, writing, appending,
                renaming and deleting files. Understanding the
                asynchronous and synchronous versions of these
                operations is important for Node.js development.
            </p>

        </div>
    );
};

export default FileSystem;