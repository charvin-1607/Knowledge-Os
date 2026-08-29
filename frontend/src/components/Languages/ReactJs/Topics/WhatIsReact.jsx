import React from "react";

const WhatIsReact = () => {
    return (
        <div>

            <h1 className="mb-4">
                What is React?
            </h1>

            {/* Definition */}

            <h2>Definition</h2>

            <p>
                React is an open-source JavaScript library used for
                building user interfaces. It is mainly used for
                developing the frontend of modern web applications.
            </p>

            <p>
                React allows developers to divide a user interface into
                small, independent and reusable components. These
                components can then be combined to create complete
                application interfaces.
            </p>


            {/* Created By */}

            <h2 className="mt-4">
                Who Created React?
            </h2>

            <p>
                React was originally developed by engineers at Facebook
                to solve problems related to building large and dynamic
                user interfaces.
            </p>

            <p>
                React was later released as an open-source project,
                allowing developers around the world to use it and
                contribute to its ecosystem.
            </p>


            {/* Library */}

            <h2 className="mt-4">
                Is React a Library or Framework?
            </h2>

            <p>
                React is generally described as a JavaScript library
                rather than a complete frontend framework.
            </p>

            <p>
                React mainly focuses on the user interface layer.
                Developers can choose additional libraries for features
                such as routing, state management, forms and API
                communication.
            </p>


            {/* React vs Framework */}

            <h2 className="mt-4">
                React Library vs Framework
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>React</th>
                            <th>Framework</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>
                                Mainly focuses on UI development
                            </td>

                            <td>
                                Usually provides a broader application
                                structure
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Developers can choose additional tools
                            </td>

                            <td>
                                Framework often provides predefined
                                solutions
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Flexible ecosystem
                            </td>

                            <td>
                                More opinionated structure
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Component */}

            <h2 className="mt-4">
                React Components
            </h2>

            <p>
                Components are the fundamental building blocks of React
                applications. Each component represents a reusable part
                of the user interface.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Header() {

    return (
        <header>
            <h1>My Website</h1>
        </header>
    );

}`}
            </pre>

            <p>
                The Header component can be used wherever a header is
                required in the application.
            </p>


            {/* UI */}

            <h2 className="mt-4">
                React for User Interfaces
            </h2>

            <p>
                React focuses on describing how the user interface should
                appear based on the current application data.
            </p>

            <p>
                When data changes, React can update the relevant parts of
                the interface instead of requiring developers to
                manually update every DOM element.
            </p>


            {/* Virtual DOM */}

            <h2 className="mt-4">
                What is Virtual DOM?
            </h2>

            <p>
                The Virtual DOM is an in-memory representation of the
                user interface. React uses it to determine which parts
                of the actual browser DOM need to be updated.
            </p>

            <p>
                When a component's data changes, React creates a new
                representation of the UI and compares it with the
                previous representation. It can then apply the necessary
                updates to the actual DOM.
            </p>


            {/* Declarative */}

            <h2 className="mt-4">
                Declarative UI
            </h2>

            <p>
                React follows a declarative approach to building user
                interfaces. Developers describe what the UI should look
                like for a particular state, and React handles the
                required updates.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Welcome({ name }) {

    return <h1>Hello {name}</h1>;

}`}
            </pre>


            {/* JSX */}

            <h2 className="mt-4">
                JSX in React
            </h2>

            <p>
                JSX is a syntax extension commonly used with React. It
                allows developers to write HTML-like markup directly
                inside JavaScript code.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const element = (
    <div>
        <h1>Hello React</h1>
        <p>Welcome to my application.</p>
    </div>
);`}
            </pre>


            {/* React DOM */}

            <h2 className="mt-4">
                React and the Browser DOM
            </h2>

            <p>
                React works with the browser DOM through its rendering
                system. Instead of requiring developers to manually
                modify DOM elements after every data change, React
                manages the rendering process based on component state
                and properties.
            </p>


            {/* State */}

            <h2 className="mt-4">
                React State
            </h2>

            <p>
                State represents data that can change during the lifetime
                of a component. When state changes, React can render the
                component again with the updated data.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            Count: {count}
        </button>
    );

}`}
            </pre>


            {/* Props */}

            <h2 className="mt-4">
                React Props
            </h2>

            <p>
                Props are used to pass data from one component to
                another component. They help make components reusable and
                configurable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function User({ name }) {

    return <h2>Hello {name}</h2>;

}

function App() {

    return <User name="Charvin" />;

}`}
            </pre>


            {/* SPA */}

            <h2 className="mt-4">
                React and SPA
            </h2>

            <p>
                React is commonly used to build Single Page Applications.
                These applications can update their interface dynamically
                without requiring a complete browser page reload for
                every interaction.
            </p>


            {/* Ecosystem */}

            <h2 className="mt-4">
                React Ecosystem
            </h2>

            <p>
                React has a large ecosystem containing libraries,
                development tools and frameworks that extend its
                capabilities.
            </p>

            <ul>

                <li>
                    React Router – client-side routing
                </li>

                <li>
                    Redux Toolkit – state management
                </li>

                <li>
                    Axios – HTTP requests
                </li>

                <li>
                    Vite – modern development and build tool
                </li>

            </ul>


            {/* Why Popular */}

            <h2 className="mt-4">
                Why is React Popular?
            </h2>

            <p>
                React became popular because it provides a flexible
                component-based approach, has a large ecosystem and is
                suitable for building interactive user interfaces.
            </p>

            <p>
                Its reusable components and JavaScript-based development
                model also make it easier to organize large frontend
                applications.
            </p>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        React is an open-source JavaScript library.
                    </li>

                    <li>
                        It is mainly used to build user interfaces.
                    </li>

                    <li>
                        React applications are built using components.
                    </li>

                    <li>
                        React commonly uses JSX.
                    </li>

                    <li>
                        Props are used to pass data between components.
                    </li>

                    <li>
                        State represents changing component data.
                    </li>

                    <li>
                        React is commonly used for Single Page Applications.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                React is a JavaScript library designed to make the
                development of interactive user interfaces easier.
                Components, JSX, props and state are some of its
                fundamental concepts.
            </p>

        </div>
    );
};

export default WhatIsReact;