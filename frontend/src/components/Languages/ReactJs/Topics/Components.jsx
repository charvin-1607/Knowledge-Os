import React from "react";

const Components = () => {
    return (
        <div>

            <h1 className="mb-4">
                React Components
            </h1>

            {/* Introduction */}

            <h2>Introduction</h2>

            <p>
                Components are one of the most important concepts in
                React. A React application is usually divided into
                multiple small and reusable components. Each component
                represents a specific part of the user interface and can
                contain its own structure, logic and data.
            </p>

            <p>
                Instead of creating one large component for an entire
                application, React encourages developers to divide the
                interface into smaller components. These components can
                then be combined together to create a complete
                application.
            </p>


            {/* Example */}

            <h2 className="mt-4">
                Example of Components
            </h2>

            <p>
                Consider a simple website that contains a Navbar, Sidebar,
                Main Content and Footer. Instead of writing everything in
                one component, we can create separate components for each
                section.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`App
│
├── Navbar
├── Sidebar
├── MainContent
└── Footer`}
            </pre>


            {/* Creating Component */}

            <h2 className="mt-4">
                Creating a Component
            </h2>

            <p>
                A React component can be created using a JavaScript
                function. The function returns JSX that describes the
                user interface of that component.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Welcome() {

    return (
        <h1>
            Welcome to React
        </h1>
    );

}`}
            </pre>


            {/* Export */}

            <h2 className="mt-4">
                Exporting a Component
            </h2>

            <p>
                A component can be exported from one file and imported
                into another file. This allows components to be reused
                throughout the application.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Welcome() {

    return <h1>Welcome to React</h1>;

}

export default Welcome;`}
            </pre>


            {/* Import */}

            <h2 className="mt-4">
                Importing a Component
            </h2>

            <p>
                After exporting a component, it can be imported into
                another component.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import Welcome from "./Welcome";

function App() {

    return (
        <div>
            <Welcome />
        </div>
    );

}

export default App;`}
            </pre>


            {/* Component Naming */}

            <h2 className="mt-4">
                Component Naming Convention
            </h2>

            <p>
                React component names should normally start with a
                capital letter. This helps React distinguish custom
                components from normal HTML elements.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// Correct

function Header() {
    return <h1>Header</h1>;
}


// Avoid

function header() {
    return <h1>Header</h1>;
}`}
            </pre>


            {/* Functional Components */}

            <h2 className="mt-4">
                Functional Components
            </h2>

            <p>
                Functional components are JavaScript functions that
                return JSX. Modern React development mainly uses
                functional components because they work naturally with
                React Hooks.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function UserProfile() {

    return (
        <div>
            <h2>User Profile</h2>
            <p>Welcome User</p>
        </div>
    );

}`}
            </pre>


            {/* Nested Components */}

            <h2 className="mt-4">
                Nested Components
            </h2>

            <p>
                A component can contain another component. This allows
                developers to create a hierarchy of components.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Header() {

    return <h1>My Website</h1>;

}


function App() {

    return (
        <div>
            <Header />
            <p>Website Content</p>
        </div>
    );

}`}
            </pre>


            {/* Reusability */}

            <h2 className="mt-4">
                Component Reusability
            </h2>

            <p>
                One of the biggest advantages of components is
                reusability. A component can be used multiple times
                without rewriting the same UI structure.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Button() {

    return (
        <button className="btn btn-primary">
            Click Me
        </button>
    );

}


function App() {

    return (
        <div>

            <Button />

            <Button />

            <Button />

        </div>
    );

}`}
            </pre>


            {/* Components with Data */}

            <h2 className="mt-4">
                Components with Data
            </h2>

            <p>
                Components can receive external data using props. This
                makes the same component useful in different situations.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function User({ name }) {

    return (
        <h2>
            Welcome {name}
        </h2>
    );

}`}
            </pre>


            {/* UI Architecture */}

            <h2 className="mt-4">
                Component-Based Architecture
            </h2>

            <p>
                In a large application, components can be organized into
                different folders based on their responsibilities. For
                example, authentication components, navigation
                components and dashboard components can have their own
                folders.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`src/
│
├── components/
│   ├── Navbar/
│   ├── Sidebar/
│   ├── Button/
│   └── Card/
│
├── pages/
│   ├── Home/
│   ├── Login/
│   └── Profile/
│
└── App.jsx`}
            </pre>


            {/* Benefits */}

            <h2 className="mt-4">
                Benefits of Components
            </h2>

            <ul>

                <li>
                    Components make code reusable.
                </li>

                <li>
                    Components make applications easier to maintain.
                </li>

                <li>
                    Large interfaces can be divided into smaller parts.
                </li>

                <li>
                    Individual components can contain their own logic.
                </li>

                <li>
                    Components make application structure easier to
                    understand.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Components are the building blocks of React
                        applications.
                    </li>

                    <li>
                        Components normally return JSX.
                    </li>

                    <li>
                        Component names should start with a capital
                        letter.
                    </li>

                    <li>
                        Components can be reused multiple times.
                    </li>

                    <li>
                        Components can receive data using props.
                    </li>

                    <li>
                        Components can be nested inside other components.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                React components allow developers to divide an
                application's user interface into small, reusable and
                manageable parts. Understanding components is essential
                because almost every React application is built using a
                hierarchy of components.
            </p>

        </div>
    );
};

export default Components;