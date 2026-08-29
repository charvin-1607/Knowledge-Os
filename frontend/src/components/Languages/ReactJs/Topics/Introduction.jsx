import React from "react";

const Introduction = () => {
    return (
        <div>

            <h1 className="mb-4">
                Introduction to React.js
            </h1>

            {/* Introduction */}

            <h2>Introduction</h2>

            <p>
                React.js is a popular JavaScript library used for
                building user interfaces, especially for modern web
                applications. It was created by Facebook and is now
                maintained by Meta along with a large open-source
                community.
            </p>

            <p>
                React allows developers to create reusable UI components
                and combine those components to build complete web
                application interfaces. Instead of writing one large
                HTML page, React applications are divided into smaller
                and reusable components.
            </p>

            <p>
                React is mainly used for developing the frontend part of
                web applications. It works with JavaScript and allows
                developers to create interactive and dynamic user
                interfaces.
            </p>


            {/* Why React */}

            <h2 className="mt-4">
                Why Learn React?
            </h2>

            <p>
                Traditional websites often require manually changing
                parts of the webpage whenever data changes. React makes
                this process easier by allowing the UI to automatically
                update when application data changes.
            </p>

            <p>
                React is especially useful when building applications
                that contain many interactive elements such as forms,
                dashboards, authentication systems, shopping carts,
                social media interfaces and admin panels.
            </p>


            {/* Components */}

            <h2 className="mt-4">
                Component-Based Development
            </h2>

            <p>
                One of the most important concepts in React is
                component-based development. A component is a reusable
                piece of user interface that contains its own structure
                and logic.
            </p>

            <p>
                For example, a website can have separate components for
                a Navbar, Footer, Sidebar, Login Form and Product Card.
                These components can then be reused throughout the
                application.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Welcome() {

    return <h1>Welcome to React</h1>;

}`}
            </pre>


            {/* Reusability */}

            <h2 className="mt-4">
                Reusable Components
            </h2>

            <p>
                React components can be reused multiple times. This
                reduces duplicate code and makes applications easier to
                maintain.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Button() {

    return (
        <button>
            Click Me
        </button>
    );

}`}
            </pre>

            <p>
                The same Button component can be used in different parts
                of an application whenever the same UI element is
                required.
            </p>


            {/* Dynamic UI */}

            <h2 className="mt-4">
                Dynamic User Interfaces
            </h2>

            <p>
                React makes it easier to create dynamic interfaces.
                When the data used by a component changes, React can
                update the required part of the user interface.
            </p>

            <p>
                This is useful for applications where the content
                changes frequently without requiring a complete page
                reload.
            </p>


            {/* Single Page Applications */}

            <h2 className="mt-4">
                React and Single Page Applications
            </h2>

            <p>
                React is commonly used to build Single Page Applications,
                also known as SPAs. In a single-page application, the
                browser does not need to reload the entire webpage every
                time the user navigates between different sections.
            </p>

            <p>
                Instead, React can update the required UI components and
                display new content dynamically.
            </p>


            {/* JavaScript */}

            <h2 className="mt-4">
                React Uses JavaScript
            </h2>

            <p>
                React is built using JavaScript. Therefore, having a good
                understanding of JavaScript fundamentals is important
                before learning React.
            </p>

            <p>
                Concepts such as variables, functions, arrays, objects,
                destructuring, modules, arrow functions, promises and
                modern JavaScript syntax are frequently used in React
                applications.
            </p>


            {/* JSX */}

            <h2 className="mt-4">
                JSX
            </h2>

            <p>
                React commonly uses JSX, which allows developers to write
                HTML-like syntax inside JavaScript code.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const element = <h1>Hello React</h1>;`}
            </pre>

            <p>
                JSX makes the structure of React components easier to
                read and understand. JSX is later transformed into
                JavaScript that the browser can execute.
            </p>


            {/* Virtual DOM */}

            <h2 className="mt-4">
                Virtual DOM
            </h2>

            <p>
                React uses a concept called the Virtual DOM to efficiently
                update the user interface. React keeps a representation
                of the UI and determines what needs to be updated when
                application data changes.
            </p>

            <p>
                Instead of manually updating every DOM element,
                developers describe what the UI should look like and
                React manages the required updates.
            </p>


            {/* Features */}

            <h2 className="mt-4">
                Main Features of React
            </h2>

            <ul>

                <li>
                    Component-based architecture
                </li>

                <li>
                    Reusable UI components
                </li>

                <li>
                    JSX syntax
                </li>

                <li>
                    Efficient UI updates
                </li>

                <li>
                    Support for Single Page Applications
                </li>

                <li>
                    Large open-source ecosystem
                </li>

                <li>
                    Easy integration with APIs and backend services
                </li>

            </ul>


            {/* Where Used */}

            <h2 className="mt-4">
                Where is React Used?
            </h2>

            <p>
                React can be used for many different types of web
                applications.
            </p>

            <ul>

                <li>
                    E-commerce websites
                </li>

                <li>
                    Admin dashboards
                </li>

                <li>
                    Social media applications
                </li>

                <li>
                    Banking interfaces
                </li>

                <li>
                    Learning management systems
                </li>

                <li>
                    Portfolio websites
                </li>

                <li>
                    Real-time web applications
                </li>

            </ul>


            {/* React Ecosystem */}

            <h2 className="mt-4">
                React Ecosystem
            </h2>

            <p>
                React itself focuses mainly on building user interfaces.
                Additional libraries and tools can be used to provide
                features such as routing, state management, API
                communication and application development.
            </p>

            <p>
                For example, React Router is commonly used for client-side
                routing, while libraries such as Redux Toolkit can be
                used for managing application state.
            </p>


            {/* Example */}

            <h2 className="mt-4">
                Simple React Component
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <div>
            <h1>My React Application</h1>
            <p>Welcome to React.js</p>
        </div>
    );

}

export default App;`}
            </pre>


            {/* Advantages */}

            <h2 className="mt-4">
                Advantages of React
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Advantage</th>
                            <th>Description</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Reusable Components</td>
                            <td>
                                Components can be reused throughout
                                an application.
                            </td>
                        </tr>

                        <tr>
                            <td>Maintainability</td>
                            <td>
                                Large applications can be divided into
                                smaller components.
                            </td>
                        </tr>

                        <tr>
                            <td>Dynamic UI</td>
                            <td>
                                Interfaces can respond to changing
                                application data.
                            </td>
                        </tr>

                        <tr>
                            <td>Ecosystem</td>
                            <td>
                                Many libraries and tools are available.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        React is a JavaScript library for building user
                        interfaces.
                    </li>

                    <li>
                        React applications are built using components.
                    </li>

                    <li>
                        Components can be reused throughout an
                        application.
                    </li>

                    <li>
                        React commonly uses JSX.
                    </li>

                    <li>
                        React is widely used for Single Page Applications.
                    </li>

                    <li>
                        React can work with APIs and backend technologies.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                React.js provides a component-based approach for
                developing modern and interactive user interfaces. Its
                reusable components, JSX syntax and efficient UI update
                mechanism make it suitable for developing applications
                of different sizes.
            </p>

        </div>
    );
};

export default Introduction;