import React from "react";

const NPM = () => {
    return (
        <div>

            <h1 className="mb-4">
                npm (Node Package Manager)
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                npm stands for <strong>Node Package Manager</strong>.
                It is the default package manager commonly used with
                Node.js applications.
            </p>

            <p>
                npm helps developers install, manage, update and remove
                packages that are required by a project.
            </p>

            <p>
                Instead of writing every functionality from scratch,
                developers can use existing packages created by the
                JavaScript and Node.js community.
            </p>


            {/* WHAT IS PACKAGE */}

            <h2 className="mt-4">
                What is a Package?
            </h2>

            <p>
                A package is a collection of reusable code that can be
                added to a project and used to provide specific
                functionality.
            </p>

            <p>
                For example, instead of manually creating an entire web
                server framework, we can install Express.js as a package.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>


            {/* CHECK VERSION */}

            <h2 className="mt-4">
                Check npm Version
            </h2>

            <p>
                After installing Node.js, npm is normally available with
                the Node.js installation.
            </p>

            <p>
                We can check the installed npm version using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm -v`}
            </pre>

            <p>
                This command displays the installed npm version.
            </p>


            {/* INITIALIZE */}

            <h2 className="mt-4">
                npm init
            </h2>

            <p>
                The <code>npm init</code> command is used to create a
                <code> package.json </code> file for a Node.js project.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm init`}
            </pre>

            <p>
                npm asks several questions such as project name,
                version, description, entry point and other information.
            </p>


            {/* INIT Y */}

            <h2 className="mt-4">
                npm init -y
            </h2>

            <p>
                If you want npm to create the
                <code> package.json </code> file using default values,
                you can use:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm init -y`}
            </pre>


            {/* INSTALL PACKAGE */}

            <h2 className="mt-4">
                Installing a Package
            </h2>

            <p>
                To install a package in a project, use:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install package-name`}
            </pre>

            <p>
                Example:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>

            <p>
                npm downloads the package and adds it to the project's
                dependencies.
            </p>


            {/* SHORT FORM */}

            <h2 className="mt-4">
                npm i
            </h2>

            <p>
                <code>npm i</code> is a shorter form of
                <code>npm install</code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm i express`}
            </pre>


            {/* UNINSTALL */}

            <h2 className="mt-4">
                Uninstalling a Package
            </h2>

            <p>
                A package can be removed using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm uninstall express`}
            </pre>


            {/* UPDATE */}

            <h2 className="mt-4">
                Updating Packages
            </h2>

            <p>
                npm provides commands for updating installed packages.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm update`}
            </pre>


            {/* DEPENDENCIES */}

            <h2 className="mt-4">
                Dependencies
            </h2>

            <p>
                Dependencies are packages that an application needs to
                run its functionality.
            </p>

            <p>
                When we install a normal package using
                <code>npm install</code>, it is generally added to the
                <code>dependencies</code> section of
                <code>package.json</code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>


            {/* DEV DEPENDENCIES */}

            <h2 className="mt-4">
                Development Dependencies
            </h2>

            <p>
                Development dependencies are packages mainly required
                during development rather than during the application's
                normal runtime.
            </p>

            <p>
                They can be installed using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install package-name --save-dev`}
            </pre>

            <p>
                Short form:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm i package-name -D`}
            </pre>


            {/* NODE MODULES */}

            <h2 className="mt-4">
                node_modules
            </h2>

            <p>
                When packages are installed, npm normally creates a
                <code>node_modules</code> directory inside the project.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`project/
│
├── node_modules/
├── package.json
├── package-lock.json
└── app.js`}
            </pre>

            <p>
                The installed packages and their dependencies are stored
                inside this directory.
            </p>


            {/* PACKAGE LOCK */}

            <h2 className="mt-4">
                package-lock.json
            </h2>

            <p>
                npm creates a <code>package-lock.json</code> file when
                packages are installed.
            </p>

            <p>
                It records detailed information about the dependency
                tree and resolved package versions.
            </p>


            {/* INSTALL ALL */}

            <h2 className="mt-4">
                npm install
            </h2>

            <p>
                Running <code>npm install</code> without specifying a
                package installs the dependencies listed in the
                project's <code>package.json</code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install`}
            </pre>

            <p>
                This command is especially useful after cloning an
                existing Node.js project.
            </p>


            {/* COMMON COMMANDS */}

            <h2 className="mt-4">
                Common npm Commands
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Command</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td><code>npm -v</code></td>
                            <td>Check npm version</td>
                        </tr>

                        <tr>
                            <td><code>npm init</code></td>
                            <td>Create package.json interactively</td>
                        </tr>

                        <tr>
                            <td><code>npm init -y</code></td>
                            <td>Create package.json with defaults</td>
                        </tr>

                        <tr>
                            <td><code>npm install</code></td>
                            <td>Install project dependencies</td>
                        </tr>

                        <tr>
                            <td><code>npm install express</code></td>
                            <td>Install a package</td>
                        </tr>

                        <tr>
                            <td><code>npm uninstall express</code></td>
                            <td>Remove a package</td>
                        </tr>

                        <tr>
                            <td><code>npm update</code></td>
                            <td>Update packages according to package constraints</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                npm is an important tool in Node.js development. It
                allows developers to manage packages, dependencies and
                project configuration efficiently.
            </p>

            <p>
                Commands such as <code>npm init</code>,
                <code>npm install</code>, <code>npm uninstall</code> and
                <code>npm update</code> are commonly used while building
                Node.js applications.
            </p>

        </div>
    );
};

export default NPM;