import React from "react";

const Operators = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Operators
            </h1>

            <h2>What are Operators?</h2>

            <p>
                Operators are special symbols or keywords used to
                perform operations on values and variables in JavaScript.
                They are used for calculations, comparisons, assignments,
                logical operations and other programming tasks.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let a = 10;
let b = 5;

let result = a + b;

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                Types of Operators
            </h2>

            <ul>
                <li>Arithmetic Operators</li>
                <li>Assignment Operators</li>
                <li>Comparison Operators</li>
                <li>Logical Operators</li>
                <li>Increment and Decrement Operators</li>
                <li>String Operators</li>
                <li>Ternary Operator</li>
                <li>Type Operators</li>
            </ul>


            <h2 className="mt-4">
                Arithmetic Operators
            </h2>

            <p>
                Arithmetic operators are used to perform mathematical
                calculations.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let a = 10;
let b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000`}
            </pre>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">

                    <thead className="table-dark">
                        <tr>
                            <th>Operator</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>+</td>
                            <td>Addition</td>
                        </tr>

                        <tr>
                            <td>-</td>
                            <td>Subtraction</td>
                        </tr>

                        <tr>
                            <td>*</td>
                            <td>Multiplication</td>
                        </tr>

                        <tr>
                            <td>/</td>
                            <td>Division</td>
                        </tr>

                        <tr>
                            <td>%</td>
                            <td>Remainder</td>
                        </tr>

                        <tr>
                            <td>**</td>
                            <td>Exponentiation</td>
                        </tr>
                    </tbody>

                </table>
            </div>


            <h2 className="mt-4">
                Assignment Operators
            </h2>

            <p>
                Assignment operators are used to assign values to
                variables.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let score = 10;

score += 5;

console.log(score);`}
            </pre>

            <pre className="bg-light border p-3 rounded">
{`x = 10
x += 5
x -= 5
x *= 5
x /= 5
x %= 5`}
            </pre>


            <h2 className="mt-4">
                Comparison Operators
            </h2>

            <p>
                Comparison operators compare two values and return a
                Boolean value, either true or false.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let a = 10;
let b = 5;

console.log(a > b);   // true
console.log(a < b);   // false
console.log(a >= b);  // true
console.log(a <= b);  // false
console.log(a === b); // false
console.log(a !== b); // true`}
            </pre>


            <h2 className="mt-4">
                == vs ===
            </h2>

            <p>
                The == operator compares values after type conversion,
                while === compares both value and data type without
                performing type conversion.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log(5 == "5");
// true

console.log(5 === "5");
// false`}
            </pre>


            <h2 className="mt-4">
                Logical Operators
            </h2>

            <p>
                Logical operators are used to combine or reverse
                conditions.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;
let hasId = true;

console.log(age >= 18 && hasId);
// true

console.log(age >= 18 || hasId);
// true

console.log(!hasId);
// false`}
            </pre>

            <div className="table-responsive">
                <table className="table table-bordered">

                    <thead className="table-dark">
                        <tr>
                            <th>Operator</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>&&</td>
                            <td>AND</td>
                        </tr>

                        <tr>
                            <td>||</td>
                            <td>OR</td>
                        </tr>

                        <tr>
                            <td>!</td>
                            <td>NOT</td>
                        </tr>
                    </tbody>

                </table>
            </div>


            <h2 className="mt-4">
                Increment Operator
            </h2>

            <p>
                The ++ operator increases a variable's value by one.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let count = 5;

count++;

console.log(count);
// 6`}
            </pre>


            <h2 className="mt-4">
                Decrement Operator
            </h2>

            <p>
                The -- operator decreases a variable's value by one.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let count = 5;

count--;

console.log(count);
// 4`}
            </pre>


            <h2 className="mt-4">
                String Operator
            </h2>

            <p>
                The + operator can also be used to join strings together.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let firstName = "Charvin";
let lastName = "Shah";

let fullName = firstName + " " + lastName;

console.log(fullName);`}
            </pre>


            <h2 className="mt-4">
                Ternary Operator
            </h2>

            <p>
                The ternary operator is a short way to write a simple
                conditional expression.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;

let result = age >= 18
    ? "Adult"
    : "Minor";

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                typeof Operator
            </h2>

            <p>
                The typeof operator is used to determine the data type
                of a value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`console.log(typeof "Hello");
// string

console.log(typeof 100);
// number

console.log(typeof true);
// boolean`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">
                <ul className="mb-0">

                    <li>
                        Operators perform operations on values.
                    </li>

                    <li>
                        Arithmetic operators perform calculations.
                    </li>

                    <li>
                        Comparison operators return Boolean values.
                    </li>

                    <li>
                        Logical operators combine conditions.
                    </li>

                    <li>
                        Assignment operators assign and update values.
                    </li>

                    <li>
                        The ternary operator provides a short conditional
                        expression.
                    </li>

                </ul>
            </div>

        </div>
    );
};

export default Operators;