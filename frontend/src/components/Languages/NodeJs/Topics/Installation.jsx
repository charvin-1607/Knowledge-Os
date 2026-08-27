import React from "react";

const Installation = () => {
    return (
        <div>

            {/* TITLE */}

            <h1 className="mb-4">
                Installing Node.js
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Before developing applications with Node.js, we need to
                install the Node.js runtime on our computer. Installing
                Node.js also provides npm, which is used to install and
                manage JavaScript packages.
            </p>

            <p>
                Node.js is available for Windows, macOS and Linux. The
                installation process is simple and usually takes only a
                few minutes.
            </p>

            {/* REQUIREMENTS */}

            <h2 className="mt-4">
                What do we need?
            </h2>

            <ul>
                <li>A computer with Windows, macOS or Linux.</li>
                <li>Internet connection for downloading Node.js.</li>
                <li>A terminal or command prompt.</li>
                <li>A code editor such as VS Code.</li>
            </ul>

            {/* DOWNLOAD */}

            <h2 className="mt-4">
                Downloading Node.js
            </h2>

            <p>
                Node.js can be downloaded from its official website.
                The official website provides different versions of
                Node.js for different operating systems.
            </p>

            <div className="alert alert-info">
                <strong>Tip:</strong>
                <p className="mb-0 mt-2">
                    For most development projects, the LTS version of
                    Node.js is recommended because it provides long-term
                    support and better stability.
                </p>
            </div>

            {/* LTS VS CURRENT */}

            <h2 className="mt-4">
                LTS vs Current Version
            </h2>

            <p>
                Node.js generally provides LTS and Current release lines.
                LTS stands for Long Term Support and is intended for
                stable production usage.
            </p>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>LTS</th>
                            <th>Current</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>More stable</td>
                            <td>Contains newer features earlier</td>
                        </tr>

                        <tr>
                            <td>Recommended for most users</td>
                            <td>Useful for testing new features</td>
                        </tr>

                        <tr>
                            <td>Long-term support</td>
                            <td>Shorter support cycle</td>
                        </tr>

                    </tbody>

                </table>

            </div>

            {/* WINDOWS INSTALLATION */}

            <h2 className="mt-4">
                Installing Node.js on Windows
            </h2>

            <p>
                On Windows, Node.js can be installed using the official
                Windows installer. The installer provides the Node.js
                runtime and npm.
            </p>

            <h5 className="mt-3">
                Basic Installation Steps
            </h5>

            <ol>

                <li>
                    Download the Node.js installer.
                </li>

                <li>
                    Open the downloaded installer.
                </li>

                <li>
                    Accept the license agreement.
                </li>

                <li>
                    Select the installation location.
                </li>

                <li>
                    Continue with the default installation options.
                </li>

                <li>
                    Click the Install button.
                </li>

                <li>
                    Wait for the installation to complete.
                </li>

                <li>
                    Click Finish.
                </li>

            </ol>

            {/* VERIFY INSTALLATION */}

            <h2 className="mt-4">
                Verify Node.js Installation
            </h2>

            <p>
                After installation, open Command Prompt, PowerShell or
                a terminal and check the installed Node.js version.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`node -v`}
            </pre>

            <p>
                The command should display the installed Node.js version.
                For example:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`v20.x.x`}
            </pre>

            <p>
                The exact version will depend on the version installed
                on your computer.
            </p>

            {/* NPM VERSION */}

            <h2 className="mt-4">
                Check npm Installation
            </h2>

            <p>
                npm is normally installed automatically along with
                Node.js. We can verify npm using the following command:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`npm -v`}
            </pre>

            <p>
                If npm is installed correctly, the terminal will display
                the installed npm version.
            </p>

            {/* NODE COMMAND */}

            <h2 className="mt-4">
                Running JavaScript with Node.js
            </h2>

            <p>
                Node.js allows us to execute JavaScript files directly
                from the terminal.
            </p>

            <p>
                First, create a file named:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`app.js`}
            </pre>

            <p>
                Add the following JavaScript code:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Hello from Node.js");`}
            </pre>

            {/* RUN FILE */}

            <h2 className="mt-4">
                Execute the JavaScript File
            </h2>

            <p>
                Open the terminal inside the directory containing
                <code> app.js </code> and run:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`node app.js`}
            </pre>

            <p>
                The output should be:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Hello from Node.js`}
            </pre>

            {/* NODE REPL */}

            <h2 className="mt-4">
                Node.js REPL
            </h2>

            <p>
                Node.js also provides an interactive environment called
                REPL. REPL stands for Read, Eval, Print and Loop.
            </p>

            <p>
                To start the Node.js REPL, simply type:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`node`}
            </pre>

            <p>
                After starting the REPL, JavaScript expressions can be
                executed directly.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`> 10 + 20
30

> "Hello".toUpperCase()
'HELLO'`}
            </pre>

            {/* EXIT REPL */}

            <h2 className="mt-4">
                Exit Node.js REPL
            </h2>

            <p>
                To exit the Node.js REPL, we can use:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Ctrl + C
Ctrl + C`}
            </pre>

            <p>
                Pressing <code>Ctrl + C</code> twice exits the REPL.
            </p>

            {/* CHECK PATH */}

            <h2 className="mt-4">
                Check Node.js Location
            </h2>

            <p>
                On Windows, the following command can be used to find
                where Node.js is installed:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`where node`}
            </pre>

            <p>
                On Linux and macOS, the equivalent command is:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`which node`}
            </pre>

            {/* COMMON PROBLEM */}

            <h2 className="mt-4">
                Common Installation Problem
            </h2>

            <p>
                Sometimes the terminal may show an error such as
                <code> node is not recognized </code>. This usually
                means Node.js is not installed correctly or its path
                has not been added to the system PATH.
            </p>

            <div className="alert alert-warning">

                <strong>Solution:</strong>

                <ul className="mb-0 mt-2">

                    <li>
                        Restart the terminal after installation.
                    </li>

                    <li>
                        Restart the computer if required.
                    </li>

                    <li>
                        Verify that Node.js is added to PATH.
                    </li>

                    <li>
                        Reinstall Node.js if the problem continues.
                    </li>

                </ul>

            </div>

            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Installing Node.js provides the runtime required to
                execute JavaScript outside the browser. npm is also
                installed along with Node.js and is used to manage
                packages and dependencies.
            </p>

            <p>
                After installation, commands such as
                <code> node -v </code> and <code> npm -v </code> can
                be used to verify the installation. JavaScript files
                can then be executed using the <code>node</code> command.
            </p>

        </div>
    );
};

export default Installation;