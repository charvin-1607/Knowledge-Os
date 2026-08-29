import React, { useState } from "react";

const State = () => {
    return (
        <div>

            <h1 className="mb-4">
                State in React
            </h1>

            {/* Introduction */}

            <h2>What is State?</h2>

            <p>
                State is one of the most important concepts in React.
                State represents data or information that can change
                during the lifetime of a component. When the state of a
                component changes, React can update the user interface
                according to the new state.
            </p>

            <p>
                For example, a counter application needs to remember the
                current count. A login interface may need to remember
                whether the user is logged in. These changing values can
                be managed using state.
            </p>


            {/* useState */}

            <h2 className="mt-4">
                useState Hook
            </h2>

            <p>
                In modern React, state is commonly created using the
                <code>useState</code> Hook. The useState Hook allows a
                functional component to store and update data.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useState } from "react";

const [count, setCount] = useState(0);`}
            </pre>


            {/* Syntax */}

            <h2 className="mt-4">
                useState Syntax
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [state, setState] = useState(initialValue);`}
            </pre>

            <p>
                The useState function returns an array containing two
                values. The first value represents the current state and
                the second value is a function used to update that state.
            </p>


            {/* Example */}

            <h2 className="mt-4">
                Simple State Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>

            <h2>
                Count: {count}
            </h2>

            <button onClick={() => setCount(count + 1)}>
                Increase
            </button>

        </div>
    );

}

export default Counter;`}
            </pre>


            {/* Initial Value */}

            <h2 className="mt-4">
                Initial State
            </h2>

            <p>
                The value passed to useState is called the initial state.
                It represents the value with which the state starts when
                the component is initially rendered.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

const [name, setName] = useState("");

const [isLoggedIn, setIsLoggedIn] = useState(false);`}
            </pre>


            {/* Updating */}

            <h2 className="mt-4">
                Updating State
            </h2>

            <p>
                State should be updated using the state setter function.
                We should not directly modify the state variable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

// Correct
setCount(count + 1);

// Incorrect
count = count + 1;`}
            </pre>


            {/* State causes render */}

            <h2 className="mt-4">
                State and Re-rendering
            </h2>

            <p>
                When the state setter function is called with a new
                value, React schedules the component to render again.
                During the new render, the updated state value is used to
                generate the updated user interface.
            </p>


            {/* String */}

            <h2 className="mt-4">
                State with String
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("Charvin");

setName("Rahul");`}
            </pre>


            {/* Number */}

            <h2 className="mt-4">
                State with Number
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [age, setAge] = useState(21);

setAge(22);`}
            </pre>


            {/* Boolean */}

            <h2 className="mt-4">
                State with Boolean
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [isVisible, setIsVisible] = useState(false);

setIsVisible(true);`}
            </pre>


            {/* Array */}

            <h2 className="mt-4">
                State with Array
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [languages, setLanguages] = useState([
    "HTML",
    "CSS",
    "JavaScript"
]);`}
            </pre>


            {/* Object */}

            <h2 className="mt-4">
                State with Object
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [user, setUser] = useState({
    name: "Charvin",
    age: 21
});`}
            </pre>


            {/* Object Update */}

            <h2 className="mt-4">
                Updating Object State
            </h2>

            <p>
                When updating an object stored in state, we normally
                create a new object instead of directly modifying the
                existing object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setUser({
    ...user,
    age: 22
});`}
            </pre>


            {/* Functional Update */}

            <h2 className="mt-4">
                Functional State Update
            </h2>

            <p>
                When the new state depends on the previous state, using a
                function inside the setter is a safer approach.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setCount((previousCount) => {
    return previousCount + 1;
});`}
            </pre>


            {/* Multiple State */}

            <h2 className="mt-4">
                Multiple State Variables
            </h2>

            <p>
                A component can have multiple state variables when
                different pieces of data need to be managed separately.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("");

const [age, setAge] = useState(21);

const [isLoggedIn, setIsLoggedIn] = useState(false);`}
            </pre>


            {/* State vs Variable */}

            <h2 className="mt-4">
                State vs Normal Variable
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>State</th>
                            <th>Normal Variable</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>
                                Managed by React
                            </td>

                            <td>
                                Managed by JavaScript
                            </td>
                        </tr>

                        <tr>
                            <td>
                                State updates can cause re-rendering
                            </td>

                            <td>
                                Changing a normal variable does not
                                trigger React rendering
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Maintains value between renders
                            </td>

                            <td>
                                Local variable can be recreated during
                                rendering
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Common Mistake */}

            <h2 className="mt-4">
                Common Mistake
            </h2>

            <p>
                A common mistake is directly modifying a state variable.
                State should be updated using its setter function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// ❌ Wrong

count = count + 1;


// ✅ Correct

setCount(count + 1);`}
            </pre>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        State represents changing data in a component.
                    </li>

                    <li>
                        useState is commonly used to create state.
                    </li>

                    <li>
                        State should be updated using its setter function.
                    </li>

                    <li>
                        State updates can cause a component to render again.
                    </li>

                    <li>
                        State can store strings, numbers, booleans, arrays
                        and objects.
                    </li>

                    <li>
                        Functional updates are useful when new state
                        depends on previous state.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                State allows React components to remember and manage
                changing information. Understanding state is essential
                for building interactive applications such as counters,
                forms, dashboards, authentication interfaces and many
                other dynamic applications.
            </p>

        </div>
    );
};

export default State;