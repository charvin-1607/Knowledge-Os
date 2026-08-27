import React from "react";

const Architecture = () => {
    return (
        <div>

            {/* TITLE */}

            <h1 className="mb-4">
                Node.js Architecture
            </h1>

            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                Node.js follows an event-driven and non-blocking I/O
                architecture. This architecture allows Node.js to handle
                a large number of requests efficiently without creating
                a separate thread for every request.
            </p>

            <p>
                The main components involved in Node.js architecture are
                the V8 JavaScript engine, Event Loop, Call Stack, Callback
                Queue, libuv and the operating system.
            </p>

            {/* BASIC FLOW */}

            <h2 className="mt-4">
                Basic Architecture Flow
            </h2>

            <div className="alert alert-secondary">

                <p className="mb-1">
                    JavaScript Code
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-1">
                    Node.js Runtime
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-1">
                    V8 Engine + Node APIs
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-1">
                    Event Loop / libuv
                </p>

                <p className="mb-1">
                    ↓
                </p>

                <p className="mb-0">
                    Operating System
                </p>

            </div>

            {/* SINGLE THREADED */}

            <h2 className="mt-4">
                Single-Threaded Architecture
            </h2>

            <p>
                Node.js uses a single main JavaScript thread to execute
                JavaScript code. This means JavaScript instructions are
                generally executed one at a time on the main thread.
            </p>

            <p>
                However, saying that Node.js is completely single-threaded
                is not fully accurate. Node.js can use background threads
                through libuv for certain operations.
            </p>

            <div className="alert alert-info">

                <strong>Important:</strong>

                <p className="mb-0 mt-2">
                    JavaScript execution happens on the main thread,
                    while some expensive or asynchronous operations can
                    be handled outside that main JavaScript execution flow.
                </p>

            </div>

            {/* V8 */}

            <h2 className="mt-4">
                V8 JavaScript Engine
            </h2>

            <p>
                V8 is the JavaScript engine developed by Google. Node.js
                uses V8 to execute JavaScript code.
            </p>

            <p>
                When a JavaScript program is executed, V8 parses the
                JavaScript code and converts it into executable machine
                code.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`JavaScript Code
       ↓
   V8 Engine
       ↓
Machine Code`}
            </pre>

            {/* CALL STACK */}

            <h2 className="mt-4">
                Call Stack
            </h2>

            <p>
                The Call Stack keeps track of the JavaScript functions
                that are currently being executed.
            </p>

            <p>
                When a function is called, it is added to the Call Stack.
                When the function finishes execution, it is removed from
                the stack.
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
                In this example, the function calls are placed into the
                Call Stack and executed in the appropriate order.
            </p>

            {/* EVENT LOOP */}

            <h2 className="mt-4">
                Event Loop
            </h2>

            <p>
                The Event Loop is one of the most important parts of
                Node.js architecture. It continuously checks whether
                there are callbacks or tasks waiting to be executed.
            </p>

            <p>
                The Event Loop allows Node.js to handle asynchronous
                operations without blocking the main JavaScript thread.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Call Stack
    ↓
Event Loop
    ↓
Callback / Task Queue
    ↓
Call Stack`}
            </pre>

            {/* CALLBACK QUEUE */}

            <h2 className="mt-4">
                Callback Queue
            </h2>

            <p>
                When an asynchronous operation finishes, its callback
                can be placed into a queue. The Event Loop checks this
                queue and moves callbacks to the Call Stack when the
                stack becomes available.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log("Start");

setTimeout(() => {
    console.log("Timer finished");
}, 2000);

console.log("End");`}
            </pre>

            <p>
                The output will be:
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Start
End
Timer finished`}
            </pre>

            {/* LIBUV */}

            <h2 className="mt-4">
                What is libuv?
            </h2>

            <p>
                libuv is a library used by Node.js to provide asynchronous
                I/O operations and the Event Loop implementation.
            </p>

            <p>
                It helps Node.js handle operations such as file system
                operations, networking and other asynchronous tasks.
            </p>

            <p>
                libuv also provides a thread pool that can be used for
                certain operations that should not block the main
                JavaScript thread.
            </p>

            {/* THREAD POOL */}

            <h2 className="mt-4">
                Thread Pool
            </h2>

            <p>
                Node.js can use a background thread pool provided by
                libuv. This is useful for certain operations that may
                otherwise take significant processing time.
            </p>

            <p>
                The JavaScript code itself still executes on the main
                JavaScript thread, while supported background operations
                can be handled using worker threads from the libuv pool.
            </p>

            <div className="alert alert-secondary">

                <strong>Concept:</strong>

                <p className="mb-0 mt-2">
                    Main Thread → JavaScript execution
                    <br />
                    libuv → asynchronous I/O and supporting background work
                </p>

            </div>

            {/* NON BLOCKING */}

            <h2 className="mt-4">
                Non-Blocking I/O
            </h2>

            <p>
                Non-blocking I/O means that Node.js does not have to wait
                for an I/O operation to finish before continuing with
                other JavaScript execution.
            </p>

            <p>
                For example, when Node.js starts reading a file
                asynchronously, it can continue executing other code
                while the file operation is being processed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fs = require("fs");

console.log("Start");

fs.readFile("data.txt", "utf8", (err, data) => {
    console.log(data);
});

console.log("End");`}
            </pre>

            <p>
                The program can continue executing while the file is
                being read.
            </p>

            {/* OS */}

            <h2 className="mt-4">
                Operating System
            </h2>

            <p>
                Node.js interacts with the underlying operating system
                for many tasks such as networking, file system operations
                and process management.
            </p>

            <p>
                Depending on the operation, Node.js and libuv can use
                operating system facilities to perform asynchronous work.
            </p>

            {/* ARCHITECTURE TABLE */}

            <h2 className="mt-4">
                Main Components
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Component</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>V8</td>
                            <td>Executes JavaScript code</td>
                        </tr>

                        <tr>
                            <td>Call Stack</td>
                            <td>Tracks currently executing functions</td>
                        </tr>

                        <tr>
                            <td>Event Loop</td>
                            <td>Coordinates asynchronous callbacks</td>
                        </tr>

                        <tr>
                            <td>libuv</td>
                            <td>Provides asynchronous I/O infrastructure</td>
                        </tr>

                        <tr>
                            <td>Thread Pool</td>
                            <td>Handles supported background operations</td>
                        </tr>

                        <tr>
                            <td>Operating System</td>
                            <td>Provides system-level resources and services</td>
                        </tr>

                    </tbody>

                </table>

            </div>

            {/* COMPLETE FLOW */}

            <h2 className="mt-4">
                Complete Simplified Flow
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`Client Request
      ↓
Node.js Server
      ↓
JavaScript Code
      ↓
Call Stack
      ↓
Async Operation
      ↓
libuv / Operating System
      ↓
Operation Completed
      ↓
Callback Queue
      ↓
Event Loop
      ↓
Call Stack
      ↓
Response`}
            </pre>

            {/* ADVANTAGES */}

            <h2 className="mt-4">
                Why This Architecture is Useful
            </h2>

            <ul>

                <li>
                    Efficient handling of many I/O operations.
                </li>

                <li>
                    Avoids blocking the main JavaScript execution flow
                    for supported asynchronous operations.
                </li>

                <li>
                    Suitable for network applications and APIs.
                </li>

                <li>
                    Works well for real-time applications.
                </li>

                <li>
                    Allows many connections to be handled efficiently.
                </li>

            </ul>

            {/* SUMMARY */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Node.js architecture is based around the V8 JavaScript
                engine, Event Loop, libuv and asynchronous I/O mechanisms.
                JavaScript executes on the main thread while supported
                asynchronous operations can be handled through libuv and
                operating system facilities.
            </p>

            <p>
                This architecture is one of the main reasons Node.js is
                widely used for APIs, web servers and real-time network
                applications.
            </p>

        </div>
    );
};

export default Architecture;