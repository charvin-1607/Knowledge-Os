import React from "react";

const Functions = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Functions
            </h1>

            <h2>What is a Function?</h2>

            <p>
                A function is a reusable block of code designed to
                perform a specific task. Functions help organize
                JavaScript programs and avoid writing the same code
                repeatedly.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet() {

    console.log("Hello JavaScript");

}

greet();`}
            </pre>


            <h2 className="mt-4">
                Why Use Functions?
            </h2>

            <ul>
                <li>Functions make code reusable.</li>
                <li>Functions reduce code duplication.</li>
                <li>Functions make programs easier to organize.</li>
                <li>Functions make code easier to maintain.</li>
                <li>Functions can accept input and return output.</li>
            </ul>


            <h2 className="mt-4">
                Function Declaration
            </h2>

            <p>
                A function declaration defines a function using the
                function keyword followed by the function name.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function addNumbers() {

    console.log(10 + 20);

}

addNumbers();`}
            </pre>


            <h2 className="mt-4">
                Calling a Function
            </h2>

            <p>
                Defining a function does not execute it. The function
                runs when it is called.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet() {

    console.log("Welcome!");

}

greet();`}
            </pre>


            <h2 className="mt-4">
                Function Parameters
            </h2>

            <p>
                Parameters are variables defined inside the function
                declaration that receive values when the function is
                called.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name) {

    console.log("Hello " + name);

}

greet("Charvin");`}
            </pre>


            <h2 className="mt-4">
                Multiple Parameters
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {

    console.log(a + b);

}

add(10, 20);`}
            </pre>


            <h2 className="mt-4">
                Arguments
            </h2>

            <p>
                The actual values passed to a function when calling it
                are called arguments.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name) {

    console.log("Hello " + name);

}

greet("Charvin");`}
            </pre>

            <p>
                Here, <strong>"Charvin"</strong> is the argument and
                <strong> name</strong> is the parameter.
            </p>


            <h2 className="mt-4">
                Return Statement
            </h2>

            <p>
                The return statement sends a value from a function back
                to the code that called the function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function add(a, b) {

    return a + b;

}

let result = add(10, 20);

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                Function Without Return
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet() {

    console.log("Hello");

}

let result = greet();

console.log(result);
// undefined`}
            </pre>


            <h2 className="mt-4">
                Default Parameters
            </h2>

            <p>
                Default parameters allow a function to use a default
                value when an argument is not provided.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name = "Guest") {

    console.log("Hello " + name);

}

greet();

greet("Charvin");`}
            </pre>


            <h2 className="mt-4">
                Function Expression
            </h2>

            <p>
                A function expression stores a function inside a
                variable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const greet = function() {

    console.log("Hello");

};

greet();`}
            </pre>


            <h2 className="mt-4">
                Anonymous Function
            </h2>

            <p>
                A function without a name is called an anonymous
                function. Anonymous functions are commonly used as
                function expressions and callbacks.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const greet = function() {

    console.log("Hello");

};

greet();`}
            </pre>


            <h2 className="mt-4">
                Function Scope
            </h2>

            <p>
                Variables declared inside a function are generally
                accessible only within that function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function example() {

    let message = "Hello";

    console.log(message);

}

example();`}
            </pre>


            <h2 className="mt-4">
                Callback Function
            </h2>

            <p>
                A callback is a function passed as an argument to
                another function so that it can be executed later.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(name, callback) {

    console.log("Hello " + name);

    callback();

}

function done() {

    console.log("Task completed");

}

greet("Charvin", done);`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function calculateTotal(price, quantity) {

    return price * quantity;

}

let total = calculateTotal(500, 3);

console.log(total);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Functions are reusable blocks of code.
                    </li>

                    <li>
                        Functions can accept parameters.
                    </li>

                    <li>
                        Arguments provide values to parameters.
                    </li>

                    <li>
                        return sends a value back from a function.
                    </li>

                    <li>
                        Functions can be stored inside variables.
                    </li>

                    <li>
                        Functions can be passed to other functions.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Functions;