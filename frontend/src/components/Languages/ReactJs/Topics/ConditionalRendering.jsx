import React from "react";

const ConditionalRendering = () => {
    return (
        <div>

            <h1 className="mb-4">
                Conditional Rendering in React
            </h1>

            {/* Introduction */}

            <h2>What is Conditional Rendering?</h2>

            <p>
                Conditional rendering means displaying different UI
                elements based on a particular condition. React uses
                normal JavaScript conditions to decide which elements
                should be displayed.
            </p>

            <p>
                Conditional rendering is commonly used for login
                interfaces, loading screens, error messages, permissions,
                empty states and many other situations.
            </p>


            {/* if */}

            <h2 className="mt-4">
                Conditional Rendering with if
            </h2>

            <p>
                A normal JavaScript if statement can be used before the
                return statement to decide which content should be
                displayed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App({ isLoggedIn }) {

    if (isLoggedIn) {

        return <h1>Welcome User</h1>;

    }

    return <h1>Please Login</h1>;

}`}
            </pre>


            {/* Ternary */}

            <h2 className="mt-4">
                Ternary Operator
            </h2>

            <p>
                The ternary operator is commonly used when we want to
                choose between two different UI elements.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App({ isLoggedIn }) {

    return (
        <div>

            {isLoggedIn
                ? <h1>Welcome User</h1>
                : <h1>Please Login</h1>
            }

        </div>
    );

}`}
            </pre>


            {/* Logical AND */}

            <h2 className="mt-4">
                Logical AND Operator
            </h2>

            <p>
                The logical AND operator can be used when an element
                should be displayed only when a condition is true.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App({ isAdmin }) {

    return (
        <div>

            {isAdmin && (
                <button>
                    Delete User
                </button>
            )}

        </div>
    );

}`}
            </pre>


            {/* Login Example */}

            <h2 className="mt-4">
                Login Example
            </h2>

            <p>
                Conditional rendering is frequently used to display
                different content depending on whether a user is
                authenticated.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Navbar({ isAuthenticated }) {

    return (
        <nav>

            {isAuthenticated ? (
                <button>
                    Logout
                </button>
            ) : (
                <button>
                    Login
                </button>
            )}

        </nav>
    );

}`}
            </pre>


            {/* Loading */}

            <h2 className="mt-4">
                Loading State
            </h2>

            <p>
                Conditional rendering can also be used to display a
                loading message while data is being fetched.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App({ loading }) {

    if (loading) {

        return <p>Loading...</p>;

    }

    return <p>Data Loaded</p>;

}`}
            </pre>


            {/* Error */}

            <h2 className="mt-4">
                Error Message
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function App({ error }) {

    return (
        <div>

            {error && (
                <p>
                    Something went wrong.
                </p>
            )}

        </div>
    );

}`}
            </pre>


            {/* Multiple Conditions */}

            <h2 className="mt-4">
                Multiple Conditions
            </h2>

            <p>
                Multiple conditions can be handled using if statements,
                ternary operators or logical operators depending on the
                complexity of the UI.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function UserStatus({ status }) {

    if (status === "loading") {
        return <p>Loading...</p>;
    }

    if (status === "error") {
        return <p>Error occurred.</p>;
    }

    return <p>Data loaded successfully.</p>;

}`}
            </pre>


            {/* Nested Ternary */}

            <h2 className="mt-4">
                Nested Ternary Operator
            </h2>

            <p>
                Although nested ternary operators are possible, they can
                make code difficult to read. For complex conditions,
                normal if statements or separate components are often
                easier to understand.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// Possible but difficult to read

{isLoading
    ? <p>Loading...</p>
    : hasError
        ? <p>Error</p>
        : <p>Success</p>
}`}
            </pre>


            {/* Conditional Component */}

            <h2 className="mt-4">
                Conditional Components
            </h2>

            <p>
                Different components can also be rendered based on a
                condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App({ isLoggedIn }) {

    return (
        <div>

            {isLoggedIn
                ? <Dashboard />
                : <Login />
            }

        </div>
    );

}`}
            </pre>


            {/* Operators */}

            <h2 className="mt-4">
                Common Techniques
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Technique</th>
                            <th>Use Case</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>if statement</td>
                            <td>
                                Complex conditions or early returns.
                            </td>
                        </tr>

                        <tr>
                            <td>Ternary operator</td>
                            <td>
                                Choose between two UI elements.
                            </td>
                        </tr>

                        <tr>
                            <td>Logical &&</td>
                            <td>
                                Display something only when a condition
                                is true.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Real World */}

            <h2 className="mt-4">
                Real-World Examples
            </h2>

            <ul>

                <li>
                    Show Login button when user is logged out.
                </li>

                <li>
                    Show Logout button when user is logged in.
                </li>

                <li>
                    Display loading text while API data is loading.
                </li>

                <li>
                    Display error messages when an API request fails.
                </li>

                <li>
                    Show admin controls only for authorized users.
                </li>

                <li>
                    Display an empty-state message when no data exists.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Conditional rendering displays UI based on
                        conditions.
                    </li>

                    <li>
                        React uses normal JavaScript conditions.
                    </li>

                    <li>
                        Ternary operators are useful for two possible
                        UI results.
                    </li>

                    <li>
                        Logical AND is useful for displaying UI only when
                        a condition is true.
                    </li>

                    <li>
                        Complex conditions are often easier to handle
                        using if statements.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Conditional rendering allows React applications to
                display different content depending on the current
                application state or other conditions. It is an
                essential technique for creating dynamic and
                interactive user interfaces.
            </p>

        </div>
    );
};

export default ConditionalRendering;