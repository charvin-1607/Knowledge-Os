import React from "react";

const Hooks = () => {

    return (
        <div>

            <h1 className="mb-4">
                Hooks in React
            </h1>


            {/* Introduction */}

            <h2>What are Hooks?</h2>

            <p>
                Hooks are special functions provided by React that allow
                functional components to use features such as state,
                context and side effects.
            </p>

            <p>
                Hooks were introduced to make it easier to reuse logic
                and manage component behavior without requiring class
                components.
            </p>


            {/* Common Hooks */}

            <h2 className="mt-4">
                Common React Hooks
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Hook</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>useState</td>
                            <td>
                                Manages component state.
                            </td>
                        </tr>

                        <tr>
                            <td>useEffect</td>
                            <td>
                                Handles side effects.
                            </td>
                        </tr>

                        <tr>
                            <td>useContext</td>
                            <td>
                                Accesses context values.
                            </td>
                        </tr>

                        <tr>
                            <td>useRef</td>
                            <td>
                                Stores mutable references.
                            </td>
                        </tr>

                        <tr>
                            <td>useMemo</td>
                            <td>
                                Memoizes calculated values.
                            </td>
                        </tr>

                        <tr>
                            <td>useCallback</td>
                            <td>
                                Memoizes functions.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* useState */}

            <h2 className="mt-4">
                useState
            </h2>

            <p>
                useState is used to create and manage state inside a
                functional component.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useState } from "react";

const [count, setCount] = useState(0);`}
            </pre>


            {/* useEffect */}

            <h2 className="mt-4">
                useEffect
            </h2>

            <p>
                useEffect is used to perform side effects in a component.
                Examples include API requests, subscriptions, timers and
                synchronizing with external systems.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useEffect } from "react";

useEffect(() => {

    console.log("Component rendered");

}, []);`}
            </pre>


            {/* useContext */}

            <h2 className="mt-4">
                useContext
            </h2>

            <p>
                useContext allows a component to access values provided
                by a React Context without manually passing props through
                every intermediate component.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useContext } from "react";

const user = useContext(UserContext);`}
            </pre>


            {/* useRef */}

            <h2 className="mt-4">
                useRef
            </h2>

            <p>
                useRef can be used to keep a mutable value between renders
                or to access a DOM element directly.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useRef } from "react";

const inputRef = useRef(null);`}
            </pre>


            {/* useMemo */}

            <h2 className="mt-4">
                useMemo
            </h2>

            <p>
                useMemo can be used to memoize the result of an expensive
                calculation so that the calculation is not unnecessarily
                repeated on every render.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useMemo } from "react";

const result = useMemo(() => {

    return calculateSomething(value);

}, [value]);`}
            </pre>


            {/* useCallback */}

            <h2 className="mt-4">
                useCallback
            </h2>

            <p>
                useCallback memoizes a function reference. It can be
                useful when passing callbacks to optimized child
                components or when function identity matters.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useCallback } from "react";

const handleClick = useCallback(() => {

    console.log("Clicked");

}, []);`}
            </pre>


            {/* Rules */}

            <h2 className="mt-4">
                Rules of Hooks
            </h2>

            <p>
                React Hooks follow specific rules. Following these rules
                helps React correctly preserve hook state between
                renders.
            </p>

            <ul>

                <li>
                    Hooks should be called at the top level of a
                    functional component.
                </li>

                <li>
                    Hooks should not normally be called inside loops.
                </li>

                <li>
                    Hooks should not normally be called inside
                    conditions.
                </li>

                <li>
                    Hooks should be called from React components or
                    custom Hooks.
                </li>

            </ul>


            {/* Wrong Example */}

            <h2 className="mt-4">
                Incorrect Hook Usage
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`// ❌ Avoid calling Hook conditionally

if (isLoggedIn) {

    const [name, setName] = useState("");

}`}
            </pre>


            {/* Correct */}

            <h2 className="mt-4">
                Correct Hook Usage
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    const [name, setName] = useState("");

    if (!name) {
        return <p>No name</p>;
    }

    return <p>{name}</p>;

}`}
            </pre>


            {/* Custom Hooks */}

            <h2 className="mt-4">
                Custom Hooks
            </h2>

            <p>
                Developers can create their own custom Hooks to reuse
                stateful logic between components. A custom Hook usually
                starts with the word "use".
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function useUser() {

    // Reusable logic

}`}
            </pre>


            {/* Benefits */}

            <h2 className="mt-4">
                Benefits of Hooks
            </h2>

            <ul>

                <li>
                    Makes functional components powerful.
                </li>

                <li>
                    Allows components to use state and other React
                    features.
                </li>

                <li>
                    Makes logic easier to reuse.
                </li>

                <li>
                    Reduces the need for class components.
                </li>

                <li>
                    Helps organize component-related logic.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Hooks are special React functions.
                    </li>

                    <li>
                        Hooks allow functional components to use React
                        features.
                    </li>

                    <li>
                        Hooks should be called at the top level.
                    </li>

                    <li>
                        Hooks should not normally be called conditionally.
                    </li>

                    <li>
                        Developers can create custom Hooks for reusable
                        logic.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Hooks are an essential part of modern React development.
                They provide a simple way to manage state, side effects,
                context, references and performance-related behavior in
                functional components.
            </p>

        </div>
    );
};

export default Hooks;