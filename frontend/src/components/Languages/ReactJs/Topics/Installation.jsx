import React from "react";

const Installation = () => {
    return (
        <div>

            <h1 className="mb-4">
                React Installation & Setup
            </h1>

            {/* Introduction */}

            <h2>Introduction</h2>

            <p>
                Before developing a React application, we need a proper
                development environment. A React project requires
                JavaScript runtime tools and a project build tool.
            </p>

            <p>
                One of the easiest and most commonly used ways to create
                a modern React project is by using Vite.
            </p>


            {/* Requirements */}

            <h2 className="mt-4">
                Requirements
            </h2>

            <p>
                Before creating a React project, make sure Node.js and
                npm are installed on your computer.
            </p>

            <ul>

                <li>
                    Node.js
                </li>

                <li>
                    npm
                </li>

                <li>
                    A code editor such as Visual Studio Code
                </li>

                <li>
                    A modern web browser
                </li>

            </ul>


            {/* Check Node */}

            <h2 className="mt-4">
                Checking Node.js Installation
            </h2>

            <p>
                Open the terminal or command prompt and run:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`node -v`}
            </pre>

            <p>
                This command displays the installed Node.js version.
            </p>


            {/* Check npm */}

            <h2 className="mt-4">
                Checking npm
            </h2>

            <p>
                npm is normally installed together with Node.js. We can
                check its version using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm -v`}
            </pre>


            {/* Vite */}

            <h2 className="mt-4">
                What is Vite?
            </h2>

            <p>
                Vite is a modern frontend development tool that provides
                a fast development server and build system for modern
                JavaScript applications.
            </p>

            <p>
                Vite is commonly used to create React projects because
                it provides a quick development experience and a simple
                project structure.
            </p>


            {/* Create Project */}

            <h2 className="mt-4">
                Creating a React Project with Vite
            </h2>

            <p>
                To create a new React project using Vite, run the
                following command:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm create vite@latest`}
            </pre>

            <p>
                Vite will ask several questions such as the project name,
                framework and programming language.
            </p>


            {/* Project Name */}

            <h2 className="mt-4">
                Step 1: Enter Project Name
            </h2>

            <p>
                After running the command, enter the name of your
                project.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Project name:
my-react-app`}
            </pre>


            {/* Framework */}

            <h2 className="mt-4">
                Step 2: Select Framework
            </h2>

            <p>
                Select React as the framework.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Select a framework:
React`}
            </pre>


            {/* Variant */}

            <h2 className="mt-4">
                Step 3: Select Variant
            </h2>

            <p>
                Vite provides different JavaScript and TypeScript
                variants. For a JavaScript React project, select the
                JavaScript variant.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Select a variant:
JavaScript`}
            </pre>


            {/* Navigate */}

            <h2 className="mt-4">
                Step 4: Move into Project Folder
            </h2>

            <p>
                After creating the project, move into the project
                directory using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`cd my-react-app`}
            </pre>


            {/* Install Dependencies */}

            <h2 className="mt-4">
                Step 5: Install Dependencies
            </h2>

            <p>
                Install the packages required by the project using npm.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm install`}
            </pre>


            {/* Run Server */}

            <h2 className="mt-4">
                Step 6: Start Development Server
            </h2>

            <p>
                Start the Vite development server using:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm run dev`}
            </pre>

            <p>
                Vite will start the development server and provide a
                local URL that can be opened in the browser.
            </p>


            {/* Complete Commands */}

            <h2 className="mt-4">
                Complete Setup Commands
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`npm create vite@latest

cd my-react-app

npm install

npm run dev`}
            </pre>


            {/* Folder Structure */}

            <h2 className="mt-4">
                Basic React Project Structure
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`my-react-app/
│
├── node_modules/
│
├── public/
│
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
└── vite.config.js`}
            </pre>


            {/* Important Files */}

            <h2 className="mt-4">
                Important Files
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>File / Folder</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>src</td>
                            <td>
                                Contains the main application source code.
                            </td>
                        </tr>

                        <tr>
                            <td>App.jsx</td>
                            <td>
                                Main React application component.
                            </td>
                        </tr>

                        <tr>
                            <td>main.jsx</td>
                            <td>
                                Entry point that renders the React
                                application.
                            </td>
                        </tr>

                        <tr>
                            <td>package.json</td>
                            <td>
                                Contains project information, scripts and
                                dependencies.
                            </td>
                        </tr>

                        <tr>
                            <td>node_modules</td>
                            <td>
                                Contains installed project packages.
                            </td>
                        </tr>

                        <tr>
                            <td>public</td>
                            <td>
                                Contains static public assets.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* main.jsx */}

            <h2 className="mt-4">
                Understanding main.jsx
            </h2>

            <p>
                The main.jsx file is commonly used as the entry point of
                a Vite React application. It renders the main React
                component into the HTML document.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);`}
            </pre>


            {/* App.jsx */}

            <h2 className="mt-4">
                Understanding App.jsx
            </h2>

            <p>
                App.jsx commonly acts as the main component of the React
                application. Other components can be imported and used
                inside it.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <h1>
            My React Application
        </h1>
    );

}

export default App;`}
            </pre>


            {/* Development */}

            <h2 className="mt-4">
                Development vs Production
            </h2>

            <p>
                During development, we normally use the development
                server provided by Vite. Before deploying the
                application, the project can be built into optimized
                production files.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm run build`}
            </pre>


            {/* Preview */}

            <h2 className="mt-4">
                Preview Production Build
            </h2>

            <p>
                After creating a production build, Vite provides a
                preview command that can be used to test the generated
                build locally.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm run preview`}
            </pre>


            {/* Common Error */}

            <h2 className="mt-4">
                Common Installation Problems
            </h2>

            <p>
                If commands such as npm or node are not recognized,
                Node.js may not be installed correctly or its executable
                path may not be available in the system environment.
            </p>

            <p>
                Another common problem is using an outdated Node.js
                version when a newer version is required by the current
                Vite release.
            </p>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Node.js and npm are required for creating a
                        modern React project.
                    </li>

                    <li>
                        Vite can be used to create a React application.
                    </li>

                    <li>
                        <code>npm create vite@latest</code> creates a
                        new Vite project.
                    </li>

                    <li>
                        <code>npm install</code> installs dependencies.
                    </li>

                    <li>
                        <code>npm run dev</code> starts the development
                        server.
                    </li>

                    <li>
                        <code>npm run build</code> creates a production
                        build.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Setting up React with Vite is a simple process. After
                installing Node.js, we can create a React project using
                Vite, install its dependencies and start the development
                server.
            </p>

            <p>
                Once the project is ready, we can begin learning React
                concepts such as components, JSX, props and state.
            </p>

        </div>
    );
};

export default Installation;