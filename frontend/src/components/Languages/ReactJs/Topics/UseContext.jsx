import React, { createContext, useContext } from "react";

const UserContext = createContext();

const UserProfile = () => {

    const user = useContext(UserContext);

    return (
        <div>

            <h3>
                User Profile
            </h3>

            <p>
                Name: {user.name}
            </p>

        </div>
    );
};


const UseContext = () => {

    const user = {
        name: "Charvin",
        role: "Developer"
    };

    return (
        <div>

            <h1 className="mb-4">
                useContext Hook
            </h1>


            {/* Introduction */}

            <h2>What is useContext?</h2>

            <p>
                useContext is a React Hook that allows a component to
                read and subscribe to a value from a React Context.
                It is commonly used when data needs to be shared between
                multiple components.
            </p>


            {/* Problem */}

            <h2 className="mt-4">
                Problem with Prop Drilling
            </h2>

            <p>
                Passing data through several components only to reach a
                deeply nested component is called prop drilling. Context
                can help avoid unnecessary prop passing through
                intermediate components.
            </p>

            <pre className="bg-light border p-3 rounded">
{`App
 ↓ props
Navbar
 ↓ props
Menu
 ↓ props
Profile`}
            </pre>


            {/* Context */}

            <h2 className="mt-4">
                Creating Context
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import { createContext } from "react";

const UserContext = createContext();`}
            </pre>


            {/* Provider */}

            <h2 className="mt-4">
                Context Provider
            </h2>

            <p>
                A Provider makes a context value available to components
                below it in the component tree.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`<UserContext.Provider value={user}>

    <UserProfile />

</UserContext.Provider>`}
            </pre>


            {/* useContext */}

            <h2 className="mt-4">
                Using useContext
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = useContext(UserContext);

console.log(user);`}
            </pre>


            {/* Complete Example */}

            <h2 className="mt-4">
                Complete Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import {
    createContext,
    useContext
} from "react";

const UserContext = createContext();

function Profile() {

    const user = useContext(UserContext);

    return (
        <h2>
            {user.name}
        </h2>
    );

}

function App() {

    const user = {
        name: "Charvin"
    };

    return (
        <UserContext.Provider value={user}>

            <Profile />

        </UserContext.Provider>
    );

}`}
            </pre>


            {/* Multiple Values */}

            <h2 className="mt-4">
                Sharing Multiple Values
            </h2>

            <p>
                A Context value can contain multiple related values,
                including objects and functions.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const value = {
    user,
    isAuthenticated,
    logout
};

<UserContext.Provider value={value}>
    <App />
</UserContext.Provider>`}
            </pre>


            {/* Real World */}

            <h2 className="mt-4">
                Real-World Uses
            </h2>

            <ul>

                <li>
                    Authentication information.
                </li>

                <li>
                    Theme settings.
                </li>

                <li>
                    Language preferences.
                </li>

                <li>
                    User information.
                </li>

                <li>
                    Application configuration.
                </li>

            </ul>


            {/* Context vs Props */}

            <h2 className="mt-4">
                Context vs Props
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Props</th>
                            <th>Context</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>
                                Usually passed directly from parent to
                                child.
                            </td>

                            <td>
                                Can provide shared values to descendants.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Good for component-specific data.
                            </td>

                            <td>
                                Useful for widely shared data.
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Explicit data flow.
                            </td>

                            <td>
                                Reduces prop drilling.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Context is not global state */}

            <h2 className="mt-4">
                Is Context a Global State Manager?
            </h2>

            <p>
                Context provides a way to make values available to
                components in a subtree. It is not automatically a
                complete replacement for dedicated state-management
                solutions. The choice depends on the application's
                requirements.
            </p>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        createContext creates a Context.
                    </li>

                    <li>
                        Provider supplies a value to descendant
                        components.
                    </li>

                    <li>
                        useContext reads the current context value.
                    </li>

                    <li>
                        Context can reduce prop drilling.
                    </li>

                    <li>
                        Authentication, theme and language are common
                        use cases.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The useContext Hook provides a convenient way for
                components to access shared context values. It is
                especially useful when the same data needs to be
                accessed by multiple components at different levels of
                the component tree.
            </p>


            {/* Demo Structure */}

            <h2 className="mt-4">
                Simple Context Demo
            </h2>

            <UserContext.Provider value={user}>

                <UserProfile />

            </UserContext.Provider>

        </div>
    );
};

export default UseContext;