import React from "react";

const Events = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Events
            </h1>

            <h2>What are Events?</h2>

            <p>
                Events are actions or occurrences that happen in a web page,
                such as clicking a button, typing in an input field, submitting
                a form, moving the mouse, or loading a page.
            </p>

            <p>
                JavaScript can detect these events and execute specific code
                when they occur, which makes web pages interactive.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`button.addEventListener("click", function() {

    console.log("Button clicked");

});`}
            </pre>


            <h2 className="mt-4">
                Common JavaScript Events
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">
                        <tr>
                            <th>Event</th>
                            <th>When it Occurs</th>
                        </tr>
                    </thead>

                    <tbody>

                        <tr>
                            <td>click</td>
                            <td>When an element is clicked</td>
                        </tr>

                        <tr>
                            <td>dblclick</td>
                            <td>When an element is double-clicked</td>
                        </tr>

                        <tr>
                            <td>mouseover</td>
                            <td>When the mouse moves over an element</td>
                        </tr>

                        <tr>
                            <td>mouseout</td>
                            <td>When the mouse leaves an element</td>
                        </tr>

                        <tr>
                            <td>keydown</td>
                            <td>When a keyboard key is pressed</td>
                        </tr>

                        <tr>
                            <td>keyup</td>
                            <td>When a keyboard key is released</td>
                        </tr>

                        <tr>
                            <td>input</td>
                            <td>When an input value changes</td>
                        </tr>

                        <tr>
                            <td>change</td>
                            <td>When the value of an element changes</td>
                        </tr>

                        <tr>
                            <td>submit</td>
                            <td>When a form is submitted</td>
                        </tr>

                        <tr>
                            <td>load</td>
                            <td>When a resource or page finishes loading</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Event Handler
            </h2>

            <p>
                An event handler is a function that is executed when a
                particular event occurs.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function handleClick() {

    console.log("Button clicked");

}`}
            </pre>


            <h2 className="mt-4">
                onclick Event
            </h2>

            <p>
                The onclick event can be used to execute code when an
                element is clicked.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const button =
    document.getElementById("button");

button.onclick = function() {

    console.log("Clicked");

};`}
            </pre>


            <h2 className="mt-4">
                addEventListener()
            </h2>

            <p>
                addEventListener() is the recommended way to attach an event
                listener to an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const button =
    document.getElementById("button");

button.addEventListener(
    "click",
    function() {

        console.log("Button clicked");

    }
);`}
            </pre>


            <h2 className="mt-4">
                Arrow Function with Events
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const button =
    document.getElementById("button");

button.addEventListener(
    "click",
    () => {

        console.log("Clicked");

    }
);`}
            </pre>


            <h2 className="mt-4">
                Mouse Events
            </h2>

            <p>
                Mouse events are triggered by actions performed with the
                mouse.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const box =
    document.getElementById("box");

box.addEventListener(
    "mouseover",
    () => {

        console.log("Mouse entered");

    }
);

box.addEventListener(
    "mouseout",
    () => {

        console.log("Mouse left");

    }
);`}
            </pre>


            <h2 className="mt-4">
                Keyboard Events
            </h2>

            <p>
                Keyboard events allow JavaScript to respond when users
                press or release keyboard keys.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`document.addEventListener(
    "keydown",
    (event) => {

        console.log(
            "Key:",
            event.key
        );

    }
);`}
            </pre>


            <h2 className="mt-4">
                Input Events
            </h2>

            <p>
                The input event occurs whenever the value of an input
                element changes.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const input =
    document.getElementById("username");

input.addEventListener(
    "input",
    (event) => {

        console.log(
            event.target.value
        );

    }
);`}
            </pre>


            <h2 className="mt-4">
                Form Submit Event
            </h2>

            <p>
                The submit event occurs when a form is submitted.
                preventDefault() can be used to stop the browser's
                default form submission.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const form =
    document.getElementById("form");

form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        console.log("Form submitted");

    }
);`}
            </pre>


            <h2 className="mt-4">
                The Event Object
            </h2>

            <p>
                JavaScript provides an event object containing information
                about the event that occurred.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`button.addEventListener(
    "click",
    (event) => {

        console.log(event);

    }
);`}
            </pre>


            <h2 className="mt-4">
                event.target
            </h2>

            <p>
                The target property identifies the element on which the
                event occurred.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`button.addEventListener(
    "click",
    (event) => {

        console.log(event.target);

    }
);`}
            </pre>


            <h2 className="mt-4">
                preventDefault()
            </h2>

            <p>
                preventDefault() prevents the default browser behavior
                associated with an event.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`form.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        console.log("Default prevented");

    }
);`}
            </pre>


            <h2 className="mt-4">
                Removing an Event Listener
            </h2>

            <p>
                removeEventListener() removes an event listener that was
                previously attached to an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function handleClick() {

    console.log("Clicked");

}

button.addEventListener(
    "click",
    handleClick
);

button.removeEventListener(
    "click",
    handleClick
);`}
            </pre>


            <h2 className="mt-4">
                Multiple Event Listeners
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`button.addEventListener(
    "click",
    () => console.log("Clicked")
);

button.addEventListener(
    "mouseover",
    () => console.log("Mouse over")
);`}
            </pre>


            <h2 className="mt-4">
                Event Bubbling
            </h2>

            <p>
                Event bubbling means that an event starts from the target
                element and then moves upward through its parent elements.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`parent.addEventListener(
    "click",
    () => {

        console.log("Parent clicked");

    }
);

child.addEventListener(
    "click",
    () => {

        console.log("Child clicked");

    }
);`}
            </pre>


            <h2 className="mt-4">
                Event Delegation
            </h2>

            <p>
                Event delegation allows a parent element to handle events
                from its child elements using event bubbling.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const list =
    document.getElementById("list");

list.addEventListener(
    "click",
    (event) => {

        if (
            event.target.tagName === "LI"
        ) {

            console.log(
                event.target.textContent
            );

        }

    }
);`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const button =
    document.getElementById("button");

const message =
    document.getElementById("message");

button.addEventListener(
    "click",
    () => {

        message.textContent =
            "Welcome to JavaScript!";

    }
);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Events are actions that occur on a web page.
                    </li>

                    <li>
                        addEventListener() is commonly used to handle events.
                    </li>

                    <li>
                        Event objects provide information about an event.
                    </li>

                    <li>
                        preventDefault() prevents default browser behavior.
                    </li>

                    <li>
                        removeEventListener() removes an event listener.
                    </li>

                    <li>
                        Event bubbling allows events to move from child to parent.
                    </li>

                    <li>
                        Event delegation uses bubbling to handle child events.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Events;