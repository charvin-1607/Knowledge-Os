import React from "react";

const Destructuring = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Destructuring
            </h1>

            <h2>What is Destructuring?</h2>

            <p>
                Destructuring is a JavaScript feature that allows us to
                extract values from arrays or properties from objects and
                assign them to separate variables in a simple and readable
                way.
            </p>

            <p>
                Instead of accessing every value individually, destructuring
                allows multiple values to be extracted in a single statement.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

const [first, second, third] = numbers;

console.log(first);
console.log(second);
console.log(third);`}
            </pre>


            <h2 className="mt-4">
                Array Destructuring
            </h2>

            <p>
                Array destructuring allows values from an array to be
                assigned to variables according to their position.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);`}
            </pre>


            <h2 className="mt-4">
                Destructuring by Position
            </h2>

            <p>
                Array destructuring works based on the position of elements.
                The first variable receives the first element, the second
                variable receives the second element, and so on.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

const [html, css, javascript] = languages;

console.log(html);
console.log(css);
console.log(javascript);`}
            </pre>


            <h2 className="mt-4">
                Skipping Array Values
            </h2>

            <p>
                Commas can be used to skip unwanted values while performing
                array destructuring.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

const [first, , third] = numbers;

console.log(first);
console.log(third);`}
            </pre>


            <h2 className="mt-4">
                Default Values
            </h2>

            <p>
                Default values can be provided when an array does not contain
                a value at the required position.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10];

const [first, second = 20] = numbers;

console.log(first);
console.log(second);`}
            </pre>


            <h2 className="mt-4">
                Swapping Variables
            </h2>

            <p>
                Destructuring can be used to swap the values of two variables
                without requiring a temporary variable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let a = 10;
let b = 20;

[a, b] = [b, a];

console.log(a);
console.log(b);`}
            </pre>


            <h2 className="mt-4">
                Rest with Array Destructuring
            </h2>

            <p>
                The rest pattern can collect the remaining array elements
                into a new array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30, 40];

const [first, ...remaining] = numbers;

console.log(first);
console.log(remaining);`}
            </pre>


            <h2 className="mt-4">
                Object Destructuring
            </h2>

            <p>
                Object destructuring allows properties from an object to be
                extracted and stored in variables.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21,
    city: "Surat"
};

const { name, age, city } = user;

console.log(name);
console.log(age);
console.log(city);`}
            </pre>


            <h2 className="mt-4">
                Object Destructuring with Different Variable Names
            </h2>

            <p>
                A property can be assigned to a variable with a different
                name by using the colon syntax.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};

const {
    name: userName,
    age: userAge
} = user;

console.log(userName);
console.log(userAge);`}
            </pre>


            <h2 className="mt-4">
                Default Values in Objects
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin"
};

const {
    name,
    city = "Surat"
} = user;

console.log(name);
console.log(city);`}
            </pre>


            <h2 className="mt-4">
                Nested Object Destructuring
            </h2>

            <p>
                Destructuring can also be used with nested objects to
                directly extract deeply nested properties.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    address: {
        city: "Surat",
        country: "India"
    }
};

const {
    address: {
        city,
        country
    }
} = user;

console.log(city);
console.log(country);`}
            </pre>


            <h2 className="mt-4">
                Function Parameters with Destructuring
            </h2>

            <p>
                Objects can be destructured directly inside function
                parameters, which makes functions easier to read.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};

function showUser({ name, age }) {

    console.log(name);
    console.log(age);

}

showUser(user);`}
            </pre>


            <h2 className="mt-4">
                Array Destructuring in Function Parameters
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function showNumbers([first, second]) {

    console.log(first);
    console.log(second);

}

showNumbers([10, 20]);`}
            </pre>


            <h2 className="mt-4">
                Destructuring and Nested Arrays
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, [20, 30]];

const [first, [second, third]] = numbers;

console.log(first);
console.log(second);
console.log(third);`}
            </pre>


            <h2 className="mt-4">
                Why Use Destructuring?
            </h2>

            <div className="alert alert-info">

                <ul className="mb-0">

                    <li>
                        It makes code shorter and easier to read.
                    </li>

                    <li>
                        It allows multiple values to be extracted at once.
                    </li>

                    <li>
                        It is useful when working with arrays and objects.
                    </li>

                    <li>
                        It is commonly used with function parameters.
                    </li>

                    <li>
                        It is heavily used in modern JavaScript and React.
                    </li>

                </ul>

            </div>


            <h2 className="mt-4">
                Common Destructuring Syntax
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Syntax</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>const [a, b] = array</td>
                            <td>Array destructuring</td>
                        </tr>

                        <tr>
                            <td>const {"{ a, b }"} = object</td>
                            <td>Object destructuring</td>
                        </tr>

                        <tr>
                            <td>[a, , b]</td>
                            <td>Skip an array value</td>
                        </tr>

                        <tr>
                            <td>[a = value]</td>
                            <td>Default array value</td>
                        </tr>

                        <tr>
                            <td>{"{ name: userName }"}</td>
                            <td>Rename an object property</td>
                        </tr>

                        <tr>
                            <td>{"{ name = 'Guest' }"}</td>
                            <td>Default object value</td>
                        </tr>

                        <tr>
                            <td>[first, ...rest]</td>
                            <td>Collect remaining values</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    email: "charvin@example.com",
    role: "Developer"
};

function displayUser({ name, email, role }) {

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Role:", role);

}

displayUser(user);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Destructuring extracts values from arrays and objects.
                    </li>

                    <li>
                        Array destructuring works according to position.
                    </li>

                    <li>
                        Object destructuring works according to property names.
                    </li>

                    <li>
                        Values can be skipped during array destructuring.
                    </li>

                    <li>
                        Default values can be provided.
                    </li>

                    <li>
                        Destructuring can be used inside function parameters.
                    </li>

                    <li>
                        Destructuring is widely used in modern JavaScript and React.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Destructuring;