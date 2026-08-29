import React from "react";

const ComponentLifecycle = () => {

    return (
        <div>

            <h1 className="mb-4">
                Component Lifecycle
            </h1>


            {/* Introduction */}

            <h2>What is Component Lifecycle?</h2>

            <p>
                The lifecycle of a React component describes the different
                stages that a component goes through during its existence.
                A component can be created, rendered, updated and finally
                removed from the user interface.
            </p>

            <p>
                Understanding the component lifecycle is important because
                it helps developers understand when code runs and how a
                component behaves when its state or props change.
            </p>


            {/* Lifecycle Stages */}

            <h2 className="mt-4">
                Main Lifecycle Stages
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Stage</th>
                            <th>Description</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Mounting</td>
                            <td>
                                Component is created and added to the UI.
                            </td>
                        </tr>

                        <tr>
                            <td>Updating</td>
                            <td>
                                Component re-renders because props or
                                state changed.
                            </td>
                        </tr>

                        <tr>
                            <td>Unmounting</td>
                            <td>
                                Component is removed from the UI.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Mounting */}

            <h2 className="mt-4">
                1. Mounting
            </h2>

            <p>
                Mounting happens when a component is rendered for the
                first time and added to the DOM.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <h1>
            Hello React
        </h1>
    );

}`}
            </pre>


            {/* Updating */}

            <h2 className="mt-4">
                2. Updating
            </h2>

            <p>
                Updating happens when the component receives new props
                or when its state changes.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

setCount(count + 1);`}
            </pre>

            <p>
                After the state update, React renders the component again
                with the updated state.
            </p>


            {/* Unmounting */}

            <h2 className="mt-4">
                3. Unmounting
            </h2>

            <p>
                Unmounting happens when a component is removed from the
                UI. This can happen when conditional rendering changes
                or when the user navigates to another page.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{showProfile && (
    <Profile />
)}`}
            </pre>

            <p>
                If <code>showProfile</code> becomes false, the Profile
                component is removed from the UI.
            </p>


            {/* useEffect */}

            <h2 className="mt-4">
                Lifecycle and useEffect
            </h2>

            <p>
                In functional components, lifecycle-related behavior is
                commonly handled using the useEffect Hook.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    console.log("Component mounted");

}, []);`}
            </pre>


            {/* Cleanup */}

            <h2 className="mt-4">
                Cleanup
            </h2>

            <p>
                Some effects create resources such as timers,
                subscriptions or event listeners. These resources should
                be cleaned up when they are no longer needed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    const timer = setInterval(() => {
        console.log("Running...");
    }, 1000);

    return () => {
        clearInterval(timer);
    };

}, []);`}
            </pre>


            {/* Lifecycle Flow */}

            <h2 className="mt-4">
                Lifecycle Flow
            </h2>

            <pre className="bg-light border p-3 rounded">
{`Component Created
       ↓
   Mounting
       ↓
    Render
       ↓
   Updating
       ↓
 State / Props Change
       ↓
    Re-render
       ↓
   Unmounting
       ↓
Component Removed`}
            </pre>


            {/* Real World */}

            <h2 className="mt-4">
                Real-World Example
            </h2>

            <p>
                Consider a dashboard that fetches user information from
                an API. When the dashboard appears, the API request can
                start. When the component is removed, any active
                subscription or timer can be cleaned up.
            </p>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Mounting occurs when a component is added to the UI.
                    </li>

                    <li>
                        Updating occurs when state or props change.
                    </li>

                    <li>
                        Unmounting occurs when a component is removed.
                    </li>

                    <li>
                        useEffect is commonly used for lifecycle-related
                        side effects.
                    </li>

                    <li>
                        Cleanup functions help release resources created
                        by effects.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                A React component goes through mounting, updating and
                unmounting stages. Functional components use Hooks,
                especially useEffect, to perform side effects and
                cleanup operations during these stages.
            </p>

        </div>
    );
};

export default ComponentLifecycle;