import React from "react";

const PackageJson = () => {
    return (
        <div>

            <h1 className="mb-4">
                package.json
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                The <code>package.json</code> file is one of the most
                important files in a Node.js project.
            </p>

            <p>
                It contains information about the project, including
                project metadata, dependencies, scripts and other
                configuration details.
            </p>


            {/* CREATE */}

            <h2 className="mt-4">
                Creating package.json
            </h2>

            <p>
                We can create a package.json file using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm init`}
            </pre>

            <p>
                Or we can use:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm init -y`}
            </pre>


            {/* BASIC STRUCTURE */}

            <h2 className="mt-4">
                Basic Structure
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`{
    "name": "my-project",
    "version": "1.0.0",
    "description": "My Node.js project",
    "main": "app.js",
    "scripts": {},
    "dependencies": {}
}`}
            </pre>


            {/* NAME */}

            <h2 className="mt-4">
                name
            </h2>

            <p>
                The <code>name</code> property specifies the name of
                the project or package.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"name": "my-node-app"`}
            </pre>


            {/* VERSION */}

            <h2 className="mt-4">
                version
            </h2>

            <p>
                The <code>version</code> property specifies the current
                version of the project.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"version": "1.0.0"`}
            </pre>


            {/* DESCRIPTION */}

            <h2 className="mt-4">
                description
            </h2>

            <p>
                The <code>description</code> property provides a short
                description of the project.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"description": "A Node.js learning project"`}
            </pre>


            {/* MAIN */}

            <h2 className="mt-4">
                main
            </h2>

            <p>
                The <code>main</code> field traditionally identifies
                the primary entry point of a package.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"main": "app.js"`}
            </pre>


            {/* SCRIPTS */}

            <h2 className="mt-4">
                scripts
            </h2>

            <p>
                The <code>scripts</code> property allows us to define
                commands that can be executed using npm.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"scripts": {
    "start": "node app.js",
    "dev": "node --watch app.js"
}`}
            </pre>

            <p>
                We can execute the start script using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm start`}
            </pre>

            <p>
                Custom scripts can be executed using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm run dev`}
            </pre>


            {/* DEPENDENCIES */}

            <h2 className="mt-4">
                dependencies
            </h2>

            <p>
                The <code>dependencies</code> section contains packages
                required by the application.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"dependencies": {
    "express": "^5.1.0"
}`}
            </pre>

            <p>
                When we run:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install express`}
            </pre>

            <p>
                npm adds the package to the project's dependencies.
            </p>


            {/* DEV DEPENDENCIES */}

            <h2 className="mt-4">
                devDependencies
            </h2>

            <p>
                The <code>devDependencies</code> section contains
                packages that are mainly needed during development.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"devDependencies": {
    "nodemon": "^3.0.0"
}`}
            </pre>

            <p>
                They can be installed using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install nodemon --save-dev`}
            </pre>


            {/* TYPE */}

            <h2 className="mt-4">
                type
            </h2>

            <p>
                The <code>type</code> field can be used to specify how
                JavaScript files should be interpreted within the
                package scope.
            </p>

            <p>
                For example, to use ES Modules with
                <code>.js</code> files:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`"type": "module"`}
            </pre>

            <p>
                This connects directly with the
                <strong> CommonJS vs ES Modules </strong> topic we
                studied earlier.
            </p>


            {/* COMPLETE EXAMPLE */}

            <h2 className="mt-4">
                Complete Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`{
    "name": "node-learning",
    "version": "1.0.0",
    "description": "Node.js learning project",
    "main": "app.js",

    "scripts": {
        "start": "node app.js",
        "dev": "node --watch app.js"
    },

    "dependencies": {
        "express": "^5.1.0"
    }
}`}
            </pre>


            {/* PACKAGE LOCK */}

            <h2 className="mt-4">
                package.json vs package-lock.json
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>package.json</th>
                            <th>package-lock.json</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Contains project metadata</td>
                            <td>Contains detailed dependency resolution information</td>
                        </tr>

                        <tr>
                            <td>Defines dependency ranges</td>
                            <td>Records resolved dependency versions</td>
                        </tr>

                        <tr>
                            <td>Defines npm scripts</td>
                            <td>Helps reproduce the dependency tree</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* IMPORTANCE */}

            <h2 className="mt-4">
                Why is package.json Important?
            </h2>

            <ul>

                <li>
                    Stores project information.
                </li>

                <li>
                    Defines project dependencies.
                </li>

                <li>
                    Defines development dependencies.
                </li>

                <li>
                    Stores npm scripts.
                </li>

                <li>
                    Can define module-related configuration.
                </li>

                <li>
                    Helps other developers understand project
                    requirements.
                </li>

            </ul>


            {/* REAL WORLD */}

            <h2 className="mt-4">
                Real-world Example
            </h2>

            <p>
                Suppose you clone a Node.js project from GitHub.
                Usually, you don't need to manually install every
                package used by that project.
            </p>

            <p>
                You can simply run:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install`}
            </pre>

            <p>
                npm reads the project's package information and installs
                the required dependencies.
            </p>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        <code>package.json</code> is a core project
                        configuration file.
                    </li>

                    <li>
                        It stores project metadata.
                    </li>

                    <li>
                        It stores dependencies and devDependencies.
                    </li>

                    <li>
                        It can define npm scripts.
                    </li>

                    <li>
                        It can configure the module system using
                        <code>type</code>.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The package.json file acts as an important configuration
                and metadata file for Node.js projects. It tells npm
                about the project, its dependencies and its available
                scripts.
            </p>

        </div>
    );
};

export default PackageJson;