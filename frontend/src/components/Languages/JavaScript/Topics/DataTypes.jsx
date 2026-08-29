import React from "react";

const DataTypes = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Data Types
            </h1>


            {/* Introduction */}

            <h2>What are Data Types?</h2>

            <p>
                A data type defines the kind of value that can be stored
                and processed in a JavaScript program. JavaScript
                supports different types of values such as strings,
                numbers, booleans, objects and more.
            </p>


            {/* Types */}

            <h2 className="mt-4">
                Types of Data Types
            </h2>

            <p>
                JavaScript data types are generally divided into
                primitive and non-primitive data types.
            </p>

            <pre className="bg-light border p-3 rounded">
{`JavaScript Data Types
        │
        ├── Primitive
        │
        └── Non-Primitive`}
            </pre>


            {/* Primitive */}

            <h2 className="mt-4">
                Primitive Data Types
            </h2>

            <p>
                Primitive data types represent single and simple values.
                JavaScript has seven primitive data types.
            </p>

            <ul>

                <li>
                    String
                </li>

                <li>
                    Number
                </li>

                <li>
                    BigInt
                </li>

                <li>
                    Boolean
                </li>

                <li>
                    Undefined
                </li>

                <li>
                    Null
                </li>

                <li>
                    Symbol
                </li>

            </ul>


            {/* String */}

            <h2 className="mt-4">
                1. String
            </h2>

            <p>
                A string represents textual data. Strings can be written
                using single quotes, double quotes or template literals.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name = "Charvin";

let city = 'Surat';

let message = \`Hello JavaScript\`;`}
            </pre>


            {/* Number */}

            <h2 className="mt-4">
                2. Number
            </h2>

            <p>
                The Number type represents numeric values, including
                integers and floating-point numbers.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;

let price = 499.99;

let temperature = -5;`}
            </pre>


            {/* BigInt */}

            <h2 className="mt-4">
                3. BigInt
            </h2>

            <p>
                BigInt is used to represent integers larger than the
                safe range of the Number type.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let bigNumber = 123456789012345678901234567890n;`}
            </pre>


            {/* Boolean */}

            <h2 className="mt-4">
                4. Boolean
            </h2>

            <p>
                Boolean values represent one of two logical states:
                true or false.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let isLoggedIn = true;

let isAdmin = false;`}
            </pre>


            {/* Undefined */}

            <h2 className="mt-4">
                5. Undefined
            </h2>

            <p>
                A variable has the value undefined when it has been
                declared but has not been assigned a value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let username;

console.log(username);`}
            </pre>


            {/* Null */}

            <h2 className="mt-4">
                6. Null
            </h2>

            <p>
                Null represents the intentional absence of a value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let selectedUser = null;`}
            </pre>


            {/* Symbol */}

            <h2 className="mt-4">
                7. Symbol
            </h2>

            <p>
                Symbol creates unique values that are often used as
                unique object property keys.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const id = Symbol("id");

console.log(id);`}
            </pre>


            {/* Non Primitive */}

            <h2 className="mt-4">
                Non-Primitive Data Types
            </h2>

            <p>
                Objects are used to store collections of related data
                and more complex structures.
            </p>

            <p>
                Common examples include objects, arrays and functions.
            </p>


            {/* Object */}

            <h2 className="mt-4">
                Object
            </h2>

            <p>
                An object stores data using key-value pairs.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21,
    city: "Surat"

};`}
            </pre>


            {/* Array */}

            <h2 className="mt-4">
                Array
            </h2>

            <p>
                An array is used to store multiple values in a single
                variable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];`}
            </pre>


            {/* Function */}

            <h2 className="mt-4">
                Function
            </h2>

            <p>
                Functions are reusable blocks of code that can perform
                a specific task.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet() {

    console.log("Hello");

}`}
            </pre>


            {/* typeof */}

            <h2 className="mt-4">
                typeof Operator
            </h2>

            <p>
                The typeof operator is used to determine the type of a
                JavaScript value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`typeof "Hello";

typeof 100;

typeof true;

typeof undefined;`}
            </pre>


            {/* Examples */}

            <h2 className="mt-4">
                typeof Examples
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log(typeof "Charvin");
// string

console.log(typeof 21);
// number

console.log(typeof true);
// boolean

console.log(typeof undefined);
// undefined`}
            </pre>


            {/* Comparison Table */}

            <h2 className="mt-4">
                Data Types Comparison
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Data Type</th>
                            <th>Example</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>String</td>
                            <td>"Hello"</td>
                        </tr>

                        <tr>
                            <td>Number</td>
                            <td>100</td>
                        </tr>

                        <tr>
                            <td>BigInt</td>
                            <td>100n</td>
                        </tr>

                        <tr>
                            <td>Boolean</td>
                            <td>true</td>
                        </tr>

                        <tr>
                            <td>Undefined</td>
                            <td>undefined</td>
                        </tr>

                        <tr>
                            <td>Null</td>
                            <td>null</td>
                        </tr>

                        <tr>
                            <td>Symbol</td>
                            <td>Symbol("id")</td>
                        </tr>

                        <tr>
                            <td>Object</td>
                            <td>{`{ name: "Charvin" }`}</td>
                        </tr>

                        <tr>
                            <td>Array</td>
                            <td>{`["HTML", "CSS"]`}</td>
                        </tr>

                        <tr>
                            <td>Function</td>
                            <td>{`function greet() {}`}</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Dynamic Typing */}

            <h2 className="mt-4">
                Dynamic Typing
            </h2>

            <p>
                JavaScript is dynamically typed, which means a variable
                does not need to be explicitly declared with a specific
                data type. The type of value can change during program
                execution.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let value = "Hello";

value = 100;

value = true;`}
            </pre>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        JavaScript supports multiple data types.
                    </li>

                    <li>
                        Primitive types include String, Number,
                        BigInt, Boolean, Undefined, Null and Symbol.
                    </li>

                    <li>
                        Objects, arrays and functions are commonly used
                        non-primitive structures.
                    </li>

                    <li>
                        The typeof operator can be used to inspect
                        the type of a value.
                    </li>

                    <li>
                        JavaScript is dynamically typed.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Data types define the kind of values used in JavaScript
                programs. Understanding strings, numbers, booleans,
                undefined, null, objects, arrays and other data types is
                essential for writing JavaScript programs and working
                with data correctly.
            </p>

        </div>
    );
};

export default DataTypes;