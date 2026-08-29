import React from "react";

const Events = () => {
    return (
        <div>

            <h1 className="mb-4">
                Events in React
            </h1>

            {/* Introduction */}

            <h2>What are Events?</h2>

            <p>
                Events are actions that happen in a web application.
                Examples include clicking a button, typing inside an
                input field, submitting a form, moving the mouse and
                pressing a keyboard key.
            </p>

            <p>
                React provides event handling mechanisms that allow
                components to respond to these user interactions.
            </p>


            {/* onClick */}

            <h2 className="mt-4">
                onClick Event
            </h2>

            <p>
                The onClick event is used when we want to execute some
                logic after a user clicks an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    const handleClick = () => {
        alert("Button clicked");
    };

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}`}
            </pre>


            {/* Event Function */}

            <h2 className="mt-4">
                Event Handler Function
            </h2>

            <p>
                A function that executes when an event occurs is called
                an event handler. Event handler functions can contain the
                logic that should run after the event.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function handleClick() {

    console.log("Button was clicked");

}

<button onClick={handleClick}>
    Click
</button>`}
            </pre>


            {/* Do not call */}

            <h2 className="mt-4">
                Passing Event Handler Correctly
            </h2>

            <p>
                When passing a function to an event handler, we normally
                provide the function reference instead of immediately
                calling the function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// ✅ Correct

<button onClick={handleClick}>
    Click
</button>


// ❌ Usually incorrect

<button onClick={handleClick()}>
    Click
</button>`}
            </pre>


            {/* onChange */}

            <h2 className="mt-4">
                onChange Event
            </h2>

            <p>
                The onChange event is commonly used with input elements.
                It allows us to detect changes made by the user while
                entering or selecting data.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    const handleChange = (event) => {

        console.log(event.target.value);

    };

    return (
        <input
            type="text"
            onChange={handleChange}
        />
    );

}`}
            </pre>


            {/* Event Object */}

            <h2 className="mt-4">
                Event Object
            </h2>

            <p>
                React provides an event object to the event handler.
                This object contains information about the event and the
                element that triggered it.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const handleClick = (event) => {

    console.log(event);

};`}
            </pre>


            {/* target */}

            <h2 className="mt-4">
                event.target
            </h2>

            <p>
                The target property can be used to access the element that
                triggered the event.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const handleChange = (event) => {

    console.log(event.target.value);

};`}
            </pre>


            {/* onSubmit */}

            <h2 className="mt-4">
                onSubmit Event
            </h2>

            <p>
                The onSubmit event is commonly used to handle form
                submission.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Form() {

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log("Form submitted");

    };

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" />

            <button type="submit">
                Submit
            </button>

        </form>
    );

}`}
            </pre>


            {/* preventDefault */}

            <h2 className="mt-4">
                preventDefault()
            </h2>

            <p>
                The preventDefault method is commonly used in forms to
                prevent the browser's default form submission behavior.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const handleSubmit = (event) => {

    event.preventDefault();

};`}
            </pre>


            {/* Keyboard */}

            <h2 className="mt-4">
                Keyboard Events
            </h2>

            <p>
                React also supports keyboard-related events such as
                onKeyDown, onKeyUp and onKeyPress-related browser
                interactions.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    const handleKeyDown = (event) => {

        console.log(event.key);

    };

    return (
        <input
            onKeyDown={handleKeyDown}
        />
    );

}`}
            </pre>


            {/* Mouse */}

            <h2 className="mt-4">
                Mouse Events
            </h2>

            <p>
                React provides several mouse-related events for
                interactive interfaces.
            </p>

            <ul>

                <li>
                    onClick
                </li>

                <li>
                    onDoubleClick
                </li>

                <li>
                    onMouseEnter
                </li>

                <li>
                    onMouseLeave
                </li>

                <li>
                    onMouseMove
                </li>

            </ul>


            {/* Passing Arguments */}

            <h2 className="mt-4">
                Passing Arguments to Event Handler
            </h2>

            <p>
                If an event handler needs additional data, we can use an
                arrow function to pass the required argument.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function handleClick(name) {

    console.log(name);

}

<button
    onClick={() => handleClick("Charvin")}
>
    Click
</button>`}
            </pre>


            {/* Events with State */}

            <h2 className="mt-4">
                Events with State
            </h2>

            <p>
                Events and state are frequently used together. An event
                can trigger a state update, which then causes the UI to
                display the new state.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [count, setCount] = useState(0);

const handleClick = () => {

    setCount(count + 1);

};

<button onClick={handleClick}>
    Count: {count}
</button>`}
            </pre>


            {/* Common Events */}

            <h2 className="mt-4">
                Common React Events
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Event</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>onClick</td>
                            <td>
                                Handles click interactions.
                            </td>
                        </tr>

                        <tr>
                            <td>onChange</td>
                            <td>
                                Handles input value changes.
                            </td>
                        </tr>

                        <tr>
                            <td>onSubmit</td>
                            <td>
                                Handles form submission.
                            </td>
                        </tr>

                        <tr>
                            <td>onKeyDown</td>
                            <td>
                                Handles keyboard key press.
                            </td>
                        </tr>

                        <tr>
                            <td>onMouseEnter</td>
                            <td>
                                Handles mouse entering an element.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Events allow React applications to respond to
                        user interactions.
                    </li>

                    <li>
                        Event names in React normally use camelCase.
                    </li>

                    <li>
                        Functions are passed to event handler properties.
                    </li>

                    <li>
                        Event objects provide information about the event.
                    </li>

                    <li>
                        Events can be used to update component state.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Event handling allows React applications to become
                interactive. Events such as onClick, onChange and
                onSubmit can be connected to JavaScript functions to
                respond to user actions and update application state.
            </p>

        </div>
    );
};

export default Events;