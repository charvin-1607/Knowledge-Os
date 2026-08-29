import React from "react";

const PromisesAsyncAwait = () => {

    return (
        <div>

            <h1 className="mb-4">
                Promises, async/await & Fetch API
            </h1>


            {/* INTRODUCTION */}

            <h2>Introduction</h2>

            <p>
                JavaScript performs many operations asynchronously, such as
                loading data from an API, reading files, or waiting for a
                server response. Promises provide a cleaner way to handle
                the result of these asynchronous operations.
            </p>

            <p>
                The async and await keywords provide a simpler syntax for
                working with Promises, while the Fetch API is commonly used
                to communicate with web APIs and retrieve or send data.
            </p>


            {/* PROMISE */}

            <h2 className="mt-4">
                What is a Promise?
            </h2>

            <p>
                A Promise is an object that represents the eventual
                completion or failure of an asynchronous operation.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const promise = new Promise(
    (resolve, reject) => {

        resolve("Operation successful");

    }
);`}
            </pre>


            {/* PROMISE STATES */}

            <h2 className="mt-4">
                Promise States
            </h2>

            <p>
                A Promise can be in one of three states during its lifecycle.
            </p>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>State</th>
                            <th>Description</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Pending</td>
                            <td>
                                The asynchronous operation is still running.
                            </td>
                        </tr>

                        <tr>
                            <td>Fulfilled</td>
                            <td>
                                The asynchronous operation completed successfully.
                            </td>
                        </tr>

                        <tr>
                            <td>Rejected</td>
                            <td>
                                The asynchronous operation failed.
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* RESOLVE */}

            <h2 className="mt-4">
                resolve()
            </h2>

            <p>
                The resolve() function is used when an asynchronous
                operation completes successfully.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const promise = new Promise(
    (resolve, reject) => {

        resolve("Success");

    }
);`}
            </pre>


            {/* REJECT */}

            <h2 className="mt-4">
                reject()
            </h2>

            <p>
                The reject() function is used when an asynchronous operation
                fails.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const promise = new Promise(
    (resolve, reject) => {

        reject("Something went wrong");

    }
);`}
            </pre>


            {/* THEN */}

            <h2 className="mt-4">
                .then()
            </h2>

            <p>
                The then() method is executed when a Promise is successfully
                fulfilled.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const promise = Promise.resolve(
    "Data received"
);

promise.then((data) => {

    console.log(data);

});`}
            </pre>


            {/* CATCH */}

            <h2 className="mt-4">
                .catch()
            </h2>

            <p>
                The catch() method is used to handle errors when a Promise
                is rejected.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const promise = Promise.reject(
    "Request failed"
);

promise.catch((error) => {

    console.log(error);

});`}
            </pre>


            {/* FINALLY */}

            <h2 className="mt-4">
                .finally()
            </h2>

            <p>
                The finally() method executes after a Promise has either
                been fulfilled or rejected.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const promise = Promise.resolve(
    "Success"
);

promise
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Operation completed");
    });`}
            </pre>


            {/* CREATING PROMISE */}

            <h2 className="mt-4">
                Creating a Promise
            </h2>

            <p>
                A Promise can be created using the Promise constructor.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const getData = () => {

    return new Promise(
        (resolve, reject) => {

            setTimeout(() => {

                resolve(
                    "Data loaded successfully"
                );

            }, 2000);

        }
    );

};

getData().then((data) => {

    console.log(data);

});`}
            </pre>


            {/* PROMISE CHAINING */}

            <h2 className="mt-4">
                Promise Chaining
            </h2>

            <p>
                Promise chaining allows multiple asynchronous operations to
                be executed one after another.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Promise.resolve(10)

    .then((value) => {

        return value * 2;

    })

    .then((value) => {

        return value + 10;

    })

    .then((value) => {

        console.log(value);

    })

    .catch((error) => {

        console.log(error);

    });`}
            </pre>


            {/* ASYNC */}

            <h2 className="mt-4">
                async Keyword
            </h2>

            <p>
                The async keyword is used to declare an asynchronous
                function. An async function always returns a Promise.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`async function greet() {

    return "Hello JavaScript";

}

greet().then((message) => {

    console.log(message);

});`}
            </pre>


            {/* AWAIT */}

            <h2 className="mt-4">
                await Keyword
            </h2>

            <p>
                The await keyword pauses the execution of an async function
                until the Promise is fulfilled or rejected.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function getData() {

    return Promise.resolve(
        "Data received"
    );

}

async function showData() {

    const data = await getData();

    console.log(data);

}

showData();`}
            </pre>


            {/* ASYNC AWAIT */}

            <h2 className="mt-4">
                async/await Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function getUser() {

    return new Promise(
        (resolve) => {

            setTimeout(() => {

                resolve({
                    name: "Charvin",
                    role: "Developer"
                });

            }, 1000);

        }
    );

}

async function showUser() {

    const user = await getUser();

    console.log(user);

}

showUser();`}
            </pre>


            {/* TRY CATCH */}

            <h2 className="mt-4">
                Error Handling with try...catch
            </h2>

            <p>
                try...catch can be used inside an async function to handle
                errors from asynchronous operations.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`async function getData() {

    try {

        const result =
            await Promise.reject(
                "Request failed"
            );

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

getData();`}
            </pre>


            {/* FETCH */}

            <h2 className="mt-4">
                What is Fetch API?
            </h2>

            <p>
                The Fetch API provides a modern way to make HTTP requests
                from JavaScript. It returns a Promise that resolves to a
                Response object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fetch("https://example.com")
    .then((response) => {

        console.log(response);

    })
    .catch((error) => {

        console.log(error);

    });`}
            </pre>


            {/* FETCH GET */}

            <h2 className="mt-4">
                GET Request using Fetch
            </h2>

            <p>
                A GET request is commonly used to retrieve data from a
                server.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`fetch(
    "https://jsonplaceholder.typicode.com/users"
)

    .then((response) => {

        return response.json();

    })

    .then((data) => {

        console.log(data);

    })

    .catch((error) => {

        console.log(error);

    });`}
            </pre>


            {/* FETCH WITH ASYNC */}

            <h2 className="mt-4">
                Fetch with async/await
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`async function getUsers() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.log(error);

    }

}

getUsers();`}
            </pre>


            {/* RESPONSE JSON */}

            <h2 className="mt-4">
                response.json()
            </h2>

            <p>
                The response.json() method reads the response body and
                converts JSON data into a JavaScript value. It also returns
                a Promise.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const response = await fetch(
    "https://example.com/data"
);

const data =
    await response.json();

console.log(data);`}
            </pre>


            {/* POST */}

            <h2 className="mt-4">
                POST Request using Fetch
            </h2>

            <p>
                A POST request is commonly used to send data to a server.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`async function createUser() {

    const user = {

        name: "Charvin",
        email: "charvin@example.com"

    };

    const response = await fetch(
        "https://example.com/users",
        {
            method: "POST",

            headers: {
                "Content-Type":
                    "application/json"
            },

            body: JSON.stringify(user)
        }
    );

    const data =
        await response.json();

    console.log(data);

}

createUser();`}
            </pre>


            {/* HTTP METHODS */}

            <h2 className="mt-4">
                Common HTTP Methods with Fetch
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
                            <td>GET</td>
                            <td>Retrieve data from a server</td>
                        </tr>

                        <tr>
                            <td>POST</td>
                            <td>Send new data to a server</td>
                        </tr>

                        <tr>
                            <td>PUT</td>
                            <td>Update existing data</td>
                        </tr>

                        <tr>
                            <td>PATCH</td>
                            <td>Partially update existing data</td>
                        </tr>

                        <tr>
                            <td>DELETE</td>
                            <td>Delete data from a server</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* RESPONSE STATUS */}

            <h2 className="mt-4">
                Checking Response Status
            </h2>

            <p>
                The response.ok property can be used to check whether a
                Fetch request was successful.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`async function getData() {

    try {

        const response =
            await fetch(
                "https://example.com/data"
            );

        if (!response.ok) {

            throw new Error(
                "Request failed"
            );

        }

        const data =
            await response.json();

        console.log(data);

    } catch (error) {

        console.log(error.message);

    }

}

getData();`}
            </pre>


            {/* PROMISE METHODS */}

            <h2 className="mt-4">
                Promise Utility Methods
            </h2>

            <p>
                JavaScript provides several useful methods for working with
                multiple Promises.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);

Promise.all([p1, p2])
    .then((values) => {

        console.log(values);

    });`}
            </pre>


            {/* PROMISE ALL */}

            <h2 className="mt-4">
                Promise.all()
            </h2>

            <p>
                Promise.all() waits for all supplied Promises to fulfill.
                If one Promise rejects, the returned Promise rejects.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const p1 = Promise.resolve("One");
const p2 = Promise.resolve("Two");
const p3 = Promise.resolve("Three");

Promise.all([
    p1,
    p2,
    p3
]).then((results) => {

    console.log(results);

});`}
            </pre>


            {/* PROMISE RACE */}

            <h2 className="mt-4">
                Promise.race()
            </h2>

            <p>
                Promise.race() settles when the first supplied Promise
                settles.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const p1 = new Promise(
    resolve =>
        setTimeout(
            () => resolve("First"),
            1000
        )
);

const p2 = new Promise(
    resolve =>
        setTimeout(
            () => resolve("Second"),
            2000
        )
);

Promise.race([
    p1,
    p2
]).then((result) => {

    console.log(result);

});`}
            </pre>


            {/* COMPARISON */}

            <h2 className="mt-4">
                Promise vs async/await
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Promise</th>
                            <th>async/await</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Uses then() and catch()</td>
                            <td>Uses await and try...catch</td>
                        </tr>

                        <tr>
                            <td>Can result in chained syntax</td>
                            <td>Usually easier to read</td>
                        </tr>

                        <tr>
                            <td>Works directly with Promise objects</td>
                            <td>Works with Promises inside async functions</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* REAL WORLD */}

            <h2 className="mt-4">
                Real-World API Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`async function loadUsers() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        if (!response.ok) {

            throw new Error(
                "Unable to fetch users"
            );

        }

        const users =
            await response.json();

        users.forEach((user) => {

            console.log(
                user.name
            );

        });

    } catch (error) {

        console.log(
            "Error:",
            error.message
        );

    }

}

loadUsers();`}
            </pre>


            {/* FLOW */}

            <h2 className="mt-4">
                Async API Flow
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`JavaScript
    ↓
fetch()
    ↓
HTTP Request
    ↓
Server
    ↓
HTTP Response
    ↓
response.json()
    ↓
JavaScript Data`}
            </pre>


            {/* KEY POINTS */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        A Promise represents the result of an asynchronous operation.
                    </li>

                    <li>
                        A Promise can be pending, fulfilled, or rejected.
                    </li>

                    <li>
                        then() handles successful Promise results.
                    </li>

                    <li>
                        catch() handles Promise errors.
                    </li>

                    <li>
                        finally() executes after the Promise settles.
                    </li>

                    <li>
                        async functions always return a Promise.
                    </li>

                    <li>
                        await waits for a Promise inside an async function.
                    </li>

                    <li>
                        try...catch can handle errors in async/await code.
                    </li>

                    <li>
                        Fetch API is used to make HTTP requests.
                    </li>

                    <li>
                        response.json() converts JSON response data into
                        a JavaScript value.
                    </li>

                    <li>
                        Promise.all() can handle multiple Promises together.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default PromisesAsyncAwait;