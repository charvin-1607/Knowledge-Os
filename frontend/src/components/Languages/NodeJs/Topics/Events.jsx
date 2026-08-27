import React from "react";

const Events = () => {
    return (
        <div>

            <h1 className="mb-4">
                Events in Node.js
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Events are an important part of Node.js. Node.js uses
                an event-driven programming model to handle many
                operations efficiently.
            </p>

            <p>
                In an event-driven system, an action or occurrence is
                represented as an event. A function can then be executed
                when that particular event occurs.
            </p>

            <p>
                For example, an application may generate an event when
                a user connects to a server, a file finishes reading,
                or a particular action takes place.
            </p>


            {/* EVENT MODULE */}

            <h2 className="mt-4">
                Event Module
            </h2>

            <p>
                Node.js provides a built-in module called
                <code> events </code> for working with events.
            </p>

            <p>
                We can import the EventEmitter class from this module.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const EventEmitter = require("events");`}
            </pre>


            {/* EVENT EMITTER */}

            <h2 className="mt-4">
                EventEmitter
            </h2>

            <p>
                <code>EventEmitter</code> is a class provided by the
                Node.js events module.
            </p>

            <p>
                We can create an object from EventEmitter and use it to
                create, listen for and trigger custom events.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const EventEmitter = require("events");

const emitter = new EventEmitter();`}
            </pre>


            {/* LISTEN EVENT */}

            <h2 className="mt-4">
                Listening to an Event
            </h2>

            <p>
                The <code>on()</code> method is used to register a
                listener for an event.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`emitter.on("message", () => {

    console.log("Message event occurred");

});`}
            </pre>

            <p>
                Whenever the <code>message</code> event occurs, the
                callback function will execute.
            </p>


            {/* EMIT */}

            <h2 className="mt-4">
                Emitting an Event
            </h2>

            <p>
                The <code>emit()</code> method is used to trigger an
                event.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`emitter.emit("message");`}
            </pre>

            <p>
                The listener registered for the
                <code>message</code> event will execute.
            </p>


            {/* COMPLETE */}

            <h2 className="mt-4">
                Complete Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("message", () => {
    console.log("Message event occurred");
});

emitter.emit("message");`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Message event occurred`}
            </pre>


            {/* EVENT DATA */}

            <h2 className="mt-4">
                Passing Data with Events
            </h2>

            <p>
                Data can be passed to the listener when the event is
                emitted.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`emitter.on("user", (name) => {

    console.log("User:", name);

});

emitter.emit("user", "Charvin");`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`User: Charvin`}
            </pre>


            {/* MULTIPLE PARAMETERS */}

            <h2 className="mt-4">
                Multiple Event Parameters
            </h2>

            <p>
                Multiple values can also be passed to an event listener.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`emitter.on("login", (username, role) => {

    console.log(username);
    console.log(role);

});

emitter.emit("login", "Charvin", "Admin");`}
            </pre>


            {/* ONCE */}

            <h2 className="mt-4">
                once()
            </h2>

            <p>
                The <code>once()</code> method registers a listener that
                executes only one time.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`emitter.once("welcome", () => {

    console.log("Welcome!");

});

emitter.emit("welcome");
emitter.emit("welcome");`}
            </pre>

            <p>
                The listener executes only during the first
                <code>emit()</code>.
            </p>


            {/* REMOVE */}

            <h2 className="mt-4">
                Removing an Event Listener
            </h2>

            <p>
                The <code>off()</code> method can be used to remove an
                event listener.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const handler = () => {

    console.log("Event fired");

};

emitter.on("test", handler);

emitter.off("test", handler);`}
            </pre>


            {/* REAL WORLD */}

            <h2 className="mt-4">
                Real-world Use Cases
            </h2>

            <ul>

                <li>
                    Handling server connections.
                </li>

                <li>
                    Processing streams.
                </li>

                <li>
                    Handling file system operations.
                </li>

                <li>
                    Creating custom application events.
                </li>

                <li>
                    Communicating between different parts of an
                    application.
                </li>

            </ul>


            {/* METHODS */}

            <h2 className="mt-4">
                Common EventEmitter Methods
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Method</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td><code>on()</code></td>
                            <td>Register an event listener</td>
                        </tr>

                        <tr>
                            <td><code>emit()</code></td>
                            <td>Trigger an event</td>
                        </tr>

                        <tr>
                            <td><code>once()</code></td>
                            <td>Execute listener only once</td>
                        </tr>

                        <tr>
                            <td><code>off()</code></td>
                            <td>Remove an event listener</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Node.js follows an event-driven programming
                        model.
                    </li>

                    <li>
                        The <code>events</code> module is built into
                        Node.js.
                    </li>

                    <li>
                        <code>EventEmitter</code> is used to create and
                        handle custom events.
                    </li>

                    <li>
                        <code>on()</code> registers a listener.
                    </li>

                    <li>
                        <code>emit()</code> triggers an event.
                    </li>

                    <li>
                        <code>once()</code> executes a listener only
                        once.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Events allow Node.js applications to respond to
                different actions or occurrences. The built-in
                EventEmitter class provides methods for creating,
                listening to and triggering events.
            </p>

        </div>
    );
};

export default Events;