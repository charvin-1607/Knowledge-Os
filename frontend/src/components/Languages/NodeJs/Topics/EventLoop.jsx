import React from "react";

const EventLoop = () => {
    return (
        <div>

            {/* TITLE */}

            <h1 className="mb-4">
                Node.js Event Loop
            </h1>


            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                The Event Loop is one of the most important concepts in
                Node.js. It is responsible for handling asynchronous
                operations while allowing JavaScript code to continue
                executing without unnecessarily waiting for every
                operation to finish.
            </p>

            <p>
                Understanding the Event Loop is extremely important for
                understanding how Node.js handles timers, file operations,
                network requests and other asynchronous tasks.
            </p>


            {/* BASIC DEFINITION */}

            <h2 className="mt-4">
                What is the Event Loop?
            </h2>

            <p>
                The Event Loop is a mechanism that continuously checks
                whether the JavaScript Call Stack is free and whether
                asynchronous callbacks are ready to be executed.
            </p>

            <p>
                When the Call Stack becomes empty, the Event Loop can
                move eligible callbacks or tasks into the Call Stack so
                that JavaScript can execute them.
            </p>


            <div className="alert alert-info">

                <strong>Simple Definition:</strong>

                <p className="mb-0 mt-2">
                    The Event Loop coordinates asynchronous operations
                    and allows Node.js to continue executing JavaScript
                    without blocking on every asynchronous task.
                </p>

            </div>


            {/* WHY */}

            <h2 className="mt-4">
                Why Do We Need the Event Loop?
            </h2>

            <p>
                JavaScript executes code on a main execution thread.
                If JavaScript had to wait for every slow operation to
                complete, the application could become unresponsive.
            </p>

            <p>
                Node.js uses asynchronous APIs and the Event Loop to
                coordinate these operations so that the main JavaScript
                execution flow can continue.
            </p>


            {/* IMPORTANT COMPONENTS */}

            <h2 className="mt-4">
                Important Components
            </h2>

            <ul>

                <li>
                    Call Stack
                </li>

                <li>
                    Node.js APIs
                </li>

                <li>
                    libuv
                </li>

                <li>
                    Callback / Task Queues
                </li>

                <li>
                    Event Loop
                </li>

            </ul>


            {/* CALL STACK */}

            <h2 className="mt-4">
                1. Call Stack
            </h2>

            <p>
                The Call Stack keeps track of the JavaScript functions
                that are currently being executed.
            </p>

            <p>
                JavaScript follows a Last In, First Out approach for
                the Call Stack.
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

            <p>
                When <code>first()</code> calls <code>second()</code>,
                the functions are placed into the Call Stack and are
                removed after their execution is completed.
            </p>


            {/* SIMPLE STACK */}

            <pre className="bg-dark text-white p-3 rounded">
{`Call Stack

┌─────────────┐
│   second()  │
├─────────────┤
│   first()   │
├─────────────┤
│   global    │
└─────────────┘`}
            </pre>


            {/* SYNCHRONOUS */}

            <h2 className="mt-4">
                Synchronous Execution
            </h2>

            <p>
                In synchronous execution, JavaScript executes one
                operation and waits for it to finish before moving to
                the next operation.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("One");

console.log("Two");

console.log("Three");`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`One
Two
Three`}
            </pre>


            {/* ASYNC */}

            <h2 className="mt-4">
                Asynchronous Execution
            </h2>

            <p>
                In asynchronous execution, some operations can be
                started without stopping the rest of the JavaScript
                execution flow.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Start");

setTimeout(() => {
    console.log("Timer");
}, 2000);

console.log("End");`}
            </pre>

            <p>
                Output:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Start
End
Timer`}
            </pre>


            {/* STEP BY STEP */}

            <h2 className="mt-4">
                Step-by-Step Execution
            </h2>

            <h5 className="mt-3">
                Step 1
            </h5>

            <p>
                Node.js starts executing the JavaScript program.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Start");`}
            </pre>

            <p>
                <code>console.log()</code> is executed and
                <strong> Start </strong> is printed.
            </p>


            <h5 className="mt-3">
                Step 2
            </h5>

            <p>
                Node.js encounters the <code>setTimeout()</code>
                operation.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setTimeout(() => {
    console.log("Timer");
}, 2000);`}
            </pre>

            <p>
                The timer is registered as an asynchronous operation.
                JavaScript does not simply stop executing the rest of
                the program for those two seconds.
            </p>


            <h5 className="mt-3">
                Step 3
            </h5>

            <p>
                Node.js continues with the next statement.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("End");`}
            </pre>

            <p>
                Therefore <strong>End</strong> is printed before the
                timer callback.
            </p>


            <h5 className="mt-3">
                Step 4
            </h5>

            <p>
                After the timer becomes eligible and the Call Stack is
                available, its callback can be processed by the Event
                Loop and executed.
            </p>


            {/* COMPLETE FLOW */}

            <h2 className="mt-4">
                Complete Event Loop Flow
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`JavaScript Code
      ↓
  Call Stack
      ↓
Async Operation
      ↓
Node.js / libuv
      ↓
Task becomes ready
      ↓
Queue
      ↓
Event Loop
      ↓
Call Stack
      ↓
Callback Execution`}
            </pre>


            {/* SET TIMEOUT */}

            <h2 className="mt-4">
                Event Loop with setTimeout()
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");`}
            </pre>

            <p>
                Many beginners expect the output to be:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`A
B
C`}
            </pre>

            <p>
                But the normal output is:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`A
C
B`}
            </pre>

            <p>
                This happens because <code>setTimeout()</code> schedules
                its callback for later processing. A delay of
                <code>0</code> does not mean "execute immediately".
            </p>


            {/* CALLBACK */}

            <h2 className="mt-4">
                Callback
            </h2>

            <p>
                A callback is a function that is passed to another
                function or asynchronous API and is executed later when
                the related operation reaches the appropriate stage.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`setTimeout(() => {
    console.log("Callback executed");
}, 1000);`}
            </pre>


            {/* FILE SYSTEM */}

            <h2 className="mt-4">
                Event Loop with File System
            </h2>

            <p>
                Node.js provides asynchronous file system APIs. For
                example, <code>fs.readFile()</code> can start reading a
                file without blocking the rest of the JavaScript code
                while the operation is in progress.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {

    if (err) {
        console.log(err);
        return;
    }

    console.log(data);

});

console.log("End");`}
            </pre>


            {/* BLOCKING */}

            <h2 className="mt-4">
                Blocking vs Non-Blocking
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered">

                    <thead className="table-dark">

                        <tr>
                            <th>Blocking</th>
                            <th>Non-Blocking</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Waits for an operation to complete</td>
                            <td>Can continue with other work</td>
                        </tr>

                        <tr>
                            <td>Can stop the execution flow</td>
                            <td>Allows asynchronous processing</td>
                        </tr>

                        <tr>
                            <td>Can reduce responsiveness</td>
                            <td>Useful for I/O-heavy applications</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* EVENT LOOP AND I/O */}

            <h2 className="mt-4">
                Event Loop and I/O Operations
            </h2>

            <p>
                I/O operations include activities such as reading files,
                network communication and interacting with external
                resources.
            </p>

            <p>
                Node.js can handle many I/O operations asynchronously.
                This is one of the major reasons Node.js is suitable for
                network applications and APIs.
            </p>


            {/* IMPORTANT CLARIFICATION */}

            <div className="alert alert-warning">

                <strong>Important:</strong>

                <p className="mt-2 mb-0">
                    The Event Loop does not make JavaScript itself
                    execute multiple JavaScript instructions
                    simultaneously on the same main thread. Instead,
                    it coordinates when asynchronous callbacks can
                    return to JavaScript execution.
                </p>

            </div>


            {/* EVENT LOOP IS NOT THREAD */}

            <h2 className="mt-4">
                Event Loop is Not a Thread
            </h2>

            <p>
                The Event Loop should not be thought of as a separate
                thread that executes JavaScript code simultaneously.
            </p>

            <p>
                Its primary job is to coordinate asynchronous operations
                and determine when callbacks can be processed by the
                JavaScript execution mechanism.
            </p>


            {/* REAL WORLD EXAMPLE */}

            <h2 className="mt-4">
                Real-World Example
            </h2>

            <p>
                Imagine a restaurant where one waiter takes orders from
                multiple customers. The waiter does not stand in the
                kitchen waiting for one meal to finish. Instead, the
                waiter takes another customer's order while the kitchen
                prepares the previous order.
            </p>

            <p>
                When a meal is ready, the waiter handles it at the
                appropriate time.
            </p>

            <p>
                Similarly, Node.js can start asynchronous work and
                continue handling other JavaScript execution instead of
                unnecessarily waiting for every I/O operation.
            </p>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Event Loop is a core part of Node.js.
                    </li>

                    <li>
                        It coordinates asynchronous operations.
                    </li>

                    <li>
                        JavaScript execution occurs through the main
                        execution mechanism.
                    </li>

                    <li>
                        Callbacks can wait in queues until they are
                        ready to execute.
                    </li>

                    <li>
                        The Event Loop checks when JavaScript execution
                        is available for the next callback.
                    </li>

                    <li>
                        setTimeout with 0 does not mean immediate execution.
                    </li>

                    <li>
                        Event Loop enables Node.js to efficiently handle
                        many I/O-oriented operations.
                    </li>

                </ul>

            </div>


            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                The Node.js Event Loop is the mechanism that coordinates
                asynchronous callbacks with JavaScript execution. It
                allows Node.js to continue executing available work while
                asynchronous operations are being handled.
            </p>

            <p>
                The combination of the Call Stack, asynchronous APIs,
                queues, Event Loop and libuv forms the foundation of
                Node.js's non-blocking programming model.
            </p>

        </div>
    );
};

export default EventLoop;