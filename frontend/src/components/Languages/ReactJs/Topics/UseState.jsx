import React, { useState } from "react";

const UseState = () => {

    return (
        <div>

            <h1 className="mb-4">
                useState Hook
            </h1>


            {/* Introduction */}

            <h2>What is useState?</h2>

            <p>
                useState is a React Hook that allows functional
                components to create and manage state. It provides a
                state variable and a function that can be used to update
                that state.
            </p>

            <p>
                Whenever the state is updated using the setter function,
                React schedules the component to render again with the
                updated state value.
            </p>


            {/* Import */}

            <h2 className="mt-4">
                Importing useState
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useState } from "react";`}
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
                values. The first value is the current state and the
                second value is the setter function used to update it.
            </p>


            {/* Counter */}

            <h2 className="mt-4">
                Basic Counter Example
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


            {/* State Variable */}

            <h2 className="mt-4">
                State Variable
            </h2>

            <p>
                The first value returned by useState is called the state
                variable. It contains the current state value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

console.log(count);`}
            </pre>


            {/* Setter */}

            <h2 className="mt-4">
                State Setter Function
            </h2>

            <p>
                The second value returned by useState is the setter
                function. It is used to request an update to the state.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

setCount(10);`}
            </pre>


            {/* Initial Value */}

            <h2 className="mt-4">
                Initial Value
            </h2>

            <p>
                The value passed to useState is used as the initial state
                value for the component.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("Charvin");

const [age, setAge] = useState(21);

const [isLoggedIn, setIsLoggedIn] = useState(false);`}
            </pre>


            {/* String */}

            <h2 className="mt-4">
                useState with String
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("");

setName("Charvin");`}
            </pre>


            {/* Number */}

            <h2 className="mt-4">
                useState with Number
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [age, setAge] = useState(21);

setAge(22);`}
            </pre>


            {/* Boolean */}

            <h2 className="mt-4">
                useState with Boolean
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [isVisible, setIsVisible] = useState(false);

setIsVisible(true);`}
            </pre>


            {/* Array */}

            <h2 className="mt-4">
                useState with Array
            </h2>

            <p>
                State can also contain arrays. When updating an array,
                create a new array rather than directly modifying the
                existing state.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [languages, setLanguages] = useState([
    "HTML",
    "CSS"
]);

setLanguages([
    ...languages,
    "JavaScript"
]);`}
            </pre>


            {/* Object */}

            <h2 className="mt-4">
                useState with Object
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
                Objects stored in state should normally be updated by
                creating a new object. The spread operator can be used
                to preserve the existing properties.
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
                When the next state depends on the previous state, use
                the functional form of the setter function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setCount((previousCount) => {
    return previousCount + 1;
});`}
            </pre>


            {/* Multiple Updates */}

            <h2 className="mt-4">
                Multiple State Updates
            </h2>

            <p>
                React may batch state updates. Therefore, when several
                updates depend on the previous value, functional updates
                are useful.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setCount((count) => count + 1);

setCount((count) => count + 1);

setCount((count) => count + 1);`}
            </pre>


            {/* Multiple State */}

            <h2 className="mt-4">
                Multiple useState Hooks
            </h2>

            <p>
                A component can use multiple useState Hooks to manage
                different pieces of state.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("");

const [age, setAge] = useState(21);

const [loading, setLoading] = useState(false);`}
            </pre>


            {/* State Update */}

            <h2 className="mt-4">
                State Updates Cause Re-render
            </h2>

            <p>
                Calling the setter function requests a state update.
                React then renders the component again so that the UI can
                reflect the new state.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>
    {count}
</button>`}
            </pre>


            {/* Don't Modify Directly */}

            <h2 className="mt-4">
                Do Not Modify State Directly
            </h2>

            <p>
                State should not normally be changed by directly assigning
                a new value to the state variable. Use the setter function
                instead.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// ❌ Incorrect

count = count + 1;


// ✅ Correct

setCount(count + 1);`}
            </pre>


            {/* Lazy Initial State */}

            <h2 className="mt-4">
                Lazy Initial State
            </h2>

            <p>
                If calculating the initial state is expensive, a function
                can be passed to useState so that React can initialize the
                state using that function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [value, setValue] = useState(() => {
    return expensiveCalculation();
});`}
            </pre>


            {/* State Types */}

            <h2 className="mt-4">
                Types of Values
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Type</th>
                            <th>Example</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>String</td>
                            <td>
                                useState("")
                            </td>
                        </tr>

                        <tr>
                            <td>Number</td>
                            <td>
                                useState(0)
                            </td>
                        </tr>

                        <tr>
                            <td>Boolean</td>
                            <td>
                                useState(false)
                            </td>
                        </tr>

                        <tr>
                            <td>Array</td>
                            <td>
                                useState([])
                            </td>
                        </tr>

                        <tr>
                            <td>Object</td>
                            <td>
                                useState({})
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Common Uses */}

            <h2 className="mt-4">
                Common Uses
            </h2>

            <ul>

                <li>
                    Counter applications.
                </li>

                <li>
                    Form input values.
                </li>

                <li>
                    Toggle buttons.
                </li>

                <li>
                    Loading states.
                </li>

                <li>
                    Modal visibility.
                </li>

                <li>
                    API response data.
                </li>

                <li>
                    User information.
                </li>

            </ul>


            {/* Rules */}

            <h2 className="mt-4">
                Rules of useState
            </h2>

            <ul>

                <li>
                    Call useState at the top level of a component.
                </li>

                <li>
                    Do not call Hooks inside loops.
                </li>

                <li>
                    Do not call Hooks conditionally.
                </li>

                <li>
                    Use the setter function to update state.
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        useState is a React Hook.
                    </li>

                    <li>
                        It allows functional components to manage state.
                    </li>

                    <li>
                        It returns a state value and a setter function.
                    </li>

                    <li>
                        State can contain strings, numbers, booleans,
                        arrays and objects.
                    </li>

                    <li>
                        Functional updates are useful when the next state
                        depends on the previous state.
                    </li>

                    <li>
                        State should not be modified directly.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The useState Hook is one of the fundamental Hooks in
                React. It allows functional components to store changing
                data and update the user interface when that data changes.
                Understanding state values, setter functions, functional
                updates and immutable state updates is essential for
                building React applications.
            </p>

        </div>
    );
};

export default UseState;