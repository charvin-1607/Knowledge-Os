import React, { useEffect } from "react";

const UseEffect = () => {

    return (
        <div>

            <h1 className="mb-4">
                useEffect Hook
            </h1>


            {/* Introduction */}

            <h2>What is useEffect?</h2>

            <p>
                useEffect is a React Hook used to perform side effects
                inside functional components. It allows a component to
                synchronize with external systems and perform operations
                that are not part of calculating the UI.
            </p>


            {/* Syntax */}

            <h2 className="mt-4">
                useEffect Syntax
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useEffect } from "react";

useEffect(() => {

    // Side effect

}, []);`}
            </pre>


            {/* API */}

            <h2 className="mt-4">
                API Request
            </h2>

            <p>
                One common use case of useEffect is fetching data from an
                API when a component loads.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    fetch("/api/users")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

}, []);`}
            </pre>


            {/* Empty Dependencies */}

            <h2 className="mt-4">
                Empty Dependency Array
            </h2>

            <p>
                When an effect has an empty dependency array, it does not
                re-run because of changes to listed dependencies.
                It is commonly used for effects that should start when
                the component mounts.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    console.log("Effect executed");

}, []);`}
            </pre>


            {/* Dependency */}

            <h2 className="mt-4">
                Dependency Array
            </h2>

            <p>
                Values can be added to the dependency array. When one of
                those values changes, React will run the effect again
                after rendering.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    console.log(count);

}, [count]);`}
            </pre>


            {/* Multiple Dependencies */}

            <h2 className="mt-4">
                Multiple Dependencies
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    console.log(name);
    console.log(age);

}, [name, age]);`}
            </pre>


            {/* No Dependency */}

            <h2 className="mt-4">
                Without Dependency Array
            </h2>

            <p>
                If the dependency array is omitted, the effect runs after
                every completed render of the component.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    console.log("Effect executed");

});`}
            </pre>


            {/* Cleanup */}

            <h2 className="mt-4">
                Cleanup Function
            </h2>

            <p>
                An effect can return a cleanup function. React runs this
                cleanup before the effect runs again when dependencies
                change and when the component is removed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    console.log("Effect started");

    return () => {

        console.log("Cleanup");

    };

}, []);`}
            </pre>


            {/* Timer */}

            <h2 className="mt-4">
                Timer Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    const timer = setInterval(() => {

        console.log("Timer running");

    }, 1000);

    return () => {

        clearInterval(timer);

    };

}, []);`}
            </pre>


            {/* Event Listener */}

            <h2 className="mt-4">
                Event Listener Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    const handleResize = () => {

        console.log(window.innerWidth);

    };

    window.addEventListener(
        "resize",
        handleResize
    );

    return () => {

        window.removeEventListener(
            "resize",
            handleResize
        );

    };

}, []);`}
            </pre>


            {/* Title */}

            <h2 className="mt-4">
                Updating Document Title
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`useEffect(() => {

    document.title = "React App";

}, []);`}
            </pre>


            {/* Dependencies Table */}

            <h2 className="mt-4">
                Dependency Array Behavior
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Dependency</th>
                            <th>Behavior</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>[]</td>
                            <td>
                                Runs after the initial mount and does not
                                re-run due to dependency changes.
                            </td>
                        </tr>

                        <tr>
                            <td>[count]</td>
                            <td>
                                Runs when count changes.
                            </td>
                        </tr>

                        <tr>
                            <td>[name, age]</td>
                            <td>
                                Runs when name or age changes.
                            </td>
                        </tr>

                        <tr>
                            <td>No array</td>
                            <td>
                                Runs after every completed render.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Common Uses */}

            <h2 className="mt-4">
                Common Uses of useEffect
            </h2>

            <ul>

                <li>
                    Fetching API data.
                </li>

                <li>
                    Starting and cleaning up timers.
                </li>

                <li>
                    Adding and removing event listeners.
                </li>

                <li>
                    Working with browser APIs.
                </li>

                <li>
                    Synchronizing with external systems.
                </li>

                <li>
                    Managing subscriptions.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        useEffect is used for side effects.
                    </li>

                    <li>
                        Dependencies control when an effect re-runs.
                    </li>

                    <li>
                        Effects can return cleanup functions.
                    </li>

                    <li>
                        Cleanup is important for timers and subscriptions.
                    </li>

                    <li>
                        API requests are a common use case.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The useEffect Hook allows functional components to perform
                side effects and synchronize with external systems.
                Understanding dependencies and cleanup functions is
                essential for using useEffect correctly.
            </p>

        </div>
    );
};

export default UseEffect;