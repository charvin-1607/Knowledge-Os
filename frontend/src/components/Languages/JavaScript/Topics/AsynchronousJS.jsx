import React from "react";

const AsynchronousJS = () => {

    return (
        <div>

            <h1 className="mb-4">
                Asynchronous JavaScript
            </h1>

            <h2>What is Asynchronous JavaScript?</h2>

            <p>
                Asynchronous JavaScript allows a program to start a task
                without waiting for that task to finish before executing
                other code.
            </p>

            <p>
                This is especially useful for operations that may take
                some time, such as timers, file operations, network
                requests, and database operations.
            </p>


            <h2 className="mt-4">
                Synchronous JavaScript
            </h2>

            <p>
                Synchronous code executes one statement at a time. The
                next statement waits until the previous statement has
                completed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("First");

console.log("Second");

console.log("Third");`}
            </pre>


            <h2 className="mt-4">
                Asynchronous Example
            </h2>

            <p>
                With asynchronous operations, JavaScript can continue
                executing other code while waiting for a task to complete.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("First");

setTimeout(() => {

    console.log("Second");

}, 2000);

console.log("Third");`}
            </pre>

            <div className="alert alert-info">
                Output order:
                <br />
                First
                <br />
                Third
                <br />
                Second
            </div>


            <h2 className="mt-4">
                Why Asynchronous JavaScript?
            </h2>

            <p>
                Asynchronous programming prevents long-running operations
                from blocking the execution of other JavaScript code.
            </p>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Network requests can run without blocking the page.
                    </li>

                    <li>
                        Timers can execute in the background.
                    </li>

                    <li>
                        Applications remain responsive while waiting for operations.
                    </li>

                </ul>

            </div>


            <h2 className="mt-4">
                setTimeout()
            </h2>

            <p>
                setTimeout() executes a function once after a specified
                amount of time.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setTimeout(() => {

    console.log("Executed after 2 seconds");

}, 2000);`}
            </pre>


            <h2 className="mt-4">
                setInterval()
            </h2>

            <p>
                setInterval() repeatedly executes a function after a
                specified time interval.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setInterval(() => {

    console.log("Running...");

}, 1000);`}
            </pre>


            <h2 className="mt-4">
                clearTimeout()
            </h2>

            <p>
                clearTimeout() cancels a timeout that was previously
                created using setTimeout().
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const timer = setTimeout(() => {

    console.log("Hello");

}, 3000);

clearTimeout(timer);`}
            </pre>


            <h2 className="mt-4">
                clearInterval()
            </h2>

            <p>
                clearInterval() stops an interval created using
                setInterval().
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const interval = setInterval(() => {

    console.log("Running");

}, 1000);

clearInterval(interval);`}
            </pre>


            <h2 className="mt-4">
                Callback Functions
            </h2>

            <p>
                A callback is a function passed to another function so
                that it can be executed later.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name, callback) {

    console.log(
        "Hello " + name
    );

    callback();

}

greet("Charvin", () => {

    console.log("Callback executed");

});`}
            </pre>


            <h2 className="mt-4">
                Asynchronous Callback
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function fetchData(callback) {

    setTimeout(() => {

        const data = "User Data";

        callback(data);

    }, 2000);

}

fetchData((data) => {

    console.log(data);

});`}
            </pre>


            <h2 className="mt-4">
                Callback Hell
            </h2>

            <p>
                When multiple asynchronous operations depend on each other,
                callbacks can become deeply nested. This makes the code
                difficult to read and maintain.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`getUser((user) => {

    getProfile(user, (profile) => {

        getPosts(profile, (posts) => {

            getComments(posts, (comments) => {

                console.log(comments);

            });

        });

    });

});`}
            </pre>


            <h2 className="mt-4">
                JavaScript Event Loop
            </h2>

            <p>
                The Event Loop allows JavaScript to handle asynchronous
                operations while keeping the main execution thread
                responsive.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Start");

setTimeout(() => {

    console.log("Timeout");

}, 0);

console.log("End");`}
            </pre>

            <div className="alert alert-info">
                Even with a delay of 0 milliseconds, the callback is
                executed after the synchronous code has finished.
            </div>


            <h2 className="mt-4">
                Call Stack
            </h2>

            <p>
                The Call Stack keeps track of the functions that are
                currently being executed by JavaScript.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function first() {

    second();

}

function second() {

    console.log("Hello");

}

first();`}
            </pre>


            <h2 className="mt-4">
                Web APIs
            </h2>

            <p>
                In a browser environment, features such as timers, DOM
                events, and network requests are handled through browser
                APIs outside the JavaScript call stack.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setTimeout(() => {

    console.log("Timer completed");

}, 2000);`}
            </pre>


            <h2 className="mt-4">
                Task Queue
            </h2>

            <p>
                After an asynchronous callback becomes ready, it waits
                in a queue until the Call Stack is empty and the Event
                Loop can move it for execution.
            </p>


            <h2 className="mt-4">
                Microtasks and Macrotasks
            </h2>

            <p>
                JavaScript uses different queues for asynchronous work.
                Promise callbacks are placed in the microtask queue,
                while timer callbacks are commonly placed in the task
                or macrotask queue.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Start");

setTimeout(() => {

    console.log("Timer");

}, 0);

Promise.resolve().then(() => {

    console.log("Promise");

});

console.log("End");`}
            </pre>


            <h2 className="mt-4">
                Common Asynchronous Operations
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Operation</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>setTimeout()</td>
                            <td>Execute code after a delay</td>
                        </tr>

                        <tr>
                            <td>setInterval()</td>
                            <td>Execute code repeatedly</td>
                        </tr>

                        <tr>
                            <td>Callbacks</td>
                            <td>Execute a function later</td>
                        </tr>

                        <tr>
                            <td>Promises</td>
                            <td>Handle asynchronous results</td>
                        </tr>

                        <tr>
                            <td>async/await</td>
                            <td>Write asynchronous code in a cleaner syntax</td>
                        </tr>

                        <tr>
                            <td>Fetch API</td>
                            <td>Make network requests</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Request started");

setTimeout(() => {

    console.log("Data received");

}, 2000);

console.log("User can continue working");`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Asynchronous JavaScript allows tasks to run without
                        blocking other code.
                    </li>

                    <li>
                        setTimeout() and setInterval() are common asynchronous APIs.
                    </li>

                    <li>
                        Callbacks can be used to handle asynchronous operations.
                    </li>

                    <li>
                        Too many nested callbacks can result in callback hell.
                    </li>

                    <li>
                        The Event Loop coordinates asynchronous execution.
                    </li>

                    <li>
                        Promises and async/await provide cleaner ways to handle
                        asynchronous operations.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default AsynchronousJS;