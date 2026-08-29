import React from "react";

const JSX = () => {
    return (
        <div>

            <h1 className="mb-4">
                JSX in React
            </h1>

            {/* Introduction */}

            <h2>What is JSX?</h2>

            <p>
                JSX stands for JavaScript XML. It is a syntax extension
                commonly used with React that allows developers to write
                HTML-like markup inside JavaScript code.
            </p>

            <p>
                JSX makes React components easier to write and understand
                because the structure of the user interface can be
                written close to the JavaScript logic that controls it.
            </p>


            {/* Basic Example */}

            <h2 className="mt-4">
                Basic JSX Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <h1>
            Hello React
        </h1>
    );

}`}
            </pre>


            {/* HTML vs JSX */}

            <h2 className="mt-4">
                JSX Looks Like HTML
            </h2>

            <p>
                JSX looks similar to HTML, but it is not exactly HTML.
                JSX is written inside JavaScript and follows some
                different rules.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const element = (
    <div>
        <h1>Hello World</h1>
        <p>This is JSX.</p>
    </div>
);`}
            </pre>


            {/* JavaScript Expressions */}

            <h2 className="mt-4">
                JavaScript Expressions in JSX
            </h2>

            <p>
                JavaScript expressions can be written inside JSX using
                curly braces. This allows dynamic values to be displayed
                inside the user interface.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";

function App() {

    return (
        <h1>
            Hello {name}
        </h1>
    );

}`}
            </pre>


            {/* Variables */}

            <h2 className="mt-4">
                Using Variables in JSX
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const age = 21;

function App() {

    return (
        <p>
            My age is {age}
        </p>
    );

}`}
            </pre>


            {/* Expressions */}

            <h2 className="mt-4">
                Using Expressions
            </h2>

            <p>
                JSX can contain JavaScript expressions such as
                mathematical calculations, function calls and logical
                operations.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const a = 10;
const b = 20;

function App() {

    return (
        <h2>
            Total: {a + b}
        </h2>
    );

}`}
            </pre>


            {/* className */}

            <h2 className="mt-4">
                className in JSX
            </h2>

            <p>
                In normal HTML, the attribute used for CSS classes is
                called <code>class</code>. In JSX, we normally use
                <code>className</code>.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <div className="container">
            <h1>Hello React</h1>
        </div>
    );

}`}
            </pre>


            {/* Self Closing */}

            <h2 className="mt-4">
                Self-Closing Tags
            </h2>

            <p>
                JSX requires elements that do not contain children to be
                properly closed using a slash.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<img src="image.jpg" />

<input type="text" />

<br />`}
            </pre>


            {/* Multiple Elements */}

            <h2 className="mt-4">
                Returning Multiple Elements
            </h2>

            <p>
                A React component should return a single parent structure.
                Multiple elements can be wrapped inside a parent element
                or a React Fragment.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <div>
            <h1>Hello</h1>
            <p>Welcome to React</p>
        </div>
    );

}`}
            </pre>


            {/* Fragment */}

            <h2 className="mt-4">
                React Fragment
            </h2>

            <p>
                A Fragment allows multiple JSX elements to be returned
                without adding an unnecessary HTML element to the DOM.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <>
            <h1>Hello</h1>
            <p>Welcome to React</p>
        </>
    );

}`}
            </pre>


            {/* Conditional */}

            <h2 className="mt-4">
                Conditional Rendering with JSX
            </h2>

            <p>
                JavaScript logical operators and conditional expressions
                can be used inside JSX to display different content.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const isLoggedIn = true;

function App() {

    return (
        <div>

            {isLoggedIn && (
                <h2>
                    Welcome User
                </h2>
            )}

        </div>
    );

}`}
            </pre>


            {/* Function */}

            <h2 className="mt-4">
                Calling Functions in JSX
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function getMessage() {

    return "Hello from function";

}

function App() {

    return (
        <h1>
            {getMessage()}
        </h1>
    );

}`}
            </pre>


            {/* JSX Attributes */}

            <h2 className="mt-4">
                JSX Attributes
            </h2>

            <p>
                JSX allows attributes to be provided to elements.
                JavaScript values can also be passed to attributes using
                curly braces.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const imageUrl = "/logo.png";

function App() {

    return (
        <img
            src={imageUrl}
            alt="Logo"
        />
    );

}`}
            </pre>


            {/* Difference */}

            <h2 className="mt-4">
                HTML vs JSX
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>HTML</th>
                            <th>JSX</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>class</td>
                            <td>className</td>
                        </tr>

                        <tr>
                            <td>onclick</td>
                            <td>onClick</td>
                        </tr>

                        <tr>
                            <td>Can contain HTML directly</td>
                            <td>
                                Can contain JavaScript expressions
                            </td>
                        </tr>

                        <tr>
                            <td>Uses standard HTML rules</td>
                            <td>
                                Follows JSX syntax rules
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* JSX Transformation */}

            <h2 className="mt-4">
                Does Browser Understand JSX?
            </h2>

            <p>
                Browsers do not directly understand JSX syntax. During
                the build process, tools transform JSX into regular
                JavaScript that can be executed by the browser.
            </p>


            {/* Benefits */}

            <h2 className="mt-4">
                Benefits of JSX
            </h2>

            <ul>

                <li>
                    JSX makes UI structure easier to read.
                </li>

                <li>
                    JavaScript and UI structure can be written together.
                </li>

                <li>
                    JSX supports dynamic values.
                </li>

                <li>
                    JSX helps create reusable React components.
                </li>

                <li>
                    JSX provides a convenient syntax for React UI.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        JSX stands for JavaScript XML.
                    </li>

                    <li>
                        JSX allows HTML-like syntax inside JavaScript.
                    </li>

                    <li>
                        JavaScript expressions are written using
                        curly braces.
                    </li>

                    <li>
                        JSX uses <code>className</code> instead of
                        <code>class</code>.
                    </li>

                    <li>
                        JSX elements should be properly closed.
                    </li>

                    <li>
                        JSX is transformed into JavaScript before
                        reaching the browser.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                JSX is an important part of modern React development. It
                provides a readable way to describe the structure of a
                user interface while still allowing JavaScript
                expressions and logic to be used within the UI.
            </p>

        </div>
    );
};

export default JSX;