import React from "react";

const ES6 = () => {

    return (
        <div>

            <h1 className="mb-4">
                Modern JavaScript / ES6+
            </h1>

            <h2>What is ES6?</h2>

            <p>
                ES6, also known as ECMAScript 2015, introduced many important
                features that made JavaScript more powerful, readable, and
                easier to develop with.
            </p>

            <p>
                Modern JavaScript includes ES6 and many features introduced
                in later ECMAScript versions.
            </p>


            <h2 className="mt-4">
                let and const
            </h2>

            <p>
                ES6 introduced let and const for declaring variables with
                block scope.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;

const name = "Charvin";

console.log(name);
console.log(age);`}
            </pre>


            <h2 className="mt-4">
                Template Literals
            </h2>

            <p>
                Template literals use backticks and allow variables and
                expressions to be inserted directly into strings.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";
const age = 21;

const message =
    \`My name is \${name} and I am \${age} years old.\`;

console.log(message);`}
            </pre>


            <h2 className="mt-4">
                Default Parameters
            </h2>

            <p>
                Default parameters allow functions to use a default value
                when an argument is not provided.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function greet(
    name = "Guest"
) {

    console.log(
        \`Hello \${name}\`
    );

}

greet();
greet("Charvin");`}
            </pre>


            <h2 className="mt-4">
                Arrow Functions
            </h2>

            <p>
                Arrow functions provide a shorter syntax for writing
                functions.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const add = (a, b) => {

    return a + b;

};

console.log(add(10, 20));`}
            </pre>


            <h2 className="mt-4">
                Destructuring
            </h2>

            <p>
                Destructuring allows values to be extracted from arrays
                and objects into variables.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};

const { name, age } = user;

console.log(name);
console.log(age);`}
            </pre>


            <h2 className="mt-4">
                Spread Operator
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const first = [1, 2, 3];

const second = [
    ...first,
    4,
    5
];

console.log(second);`}
            </pre>


            <h2 className="mt-4">
                Rest Parameters
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function sum(...numbers) {

    return numbers.reduce(
        (total, number) =>
            total + number,
        0
    );

}

console.log(
    sum(10, 20, 30)
);`}
            </pre>


            <h2 className="mt-4">
                Classes
            </h2>

            <p>
                ES6 introduced class syntax that provides a cleaner way
                to create objects and work with object-oriented programming.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`class User {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(
            \`Hello \${this.name}\`
        );

    }

}

const user =
    new User("Charvin");

user.greet();`}
            </pre>


            <h2 className="mt-4">
                Modules
            </h2>

            <p>
                JavaScript modules allow code to be separated into multiple
                files and reused using export and import.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// math.js

export const add = (a, b) => {
    return a + b;
};


// app.js

import { add } from "./math.js";

console.log(
    add(10, 20)
);`}
            </pre>


            <h2 className="mt-4">
                for...of Loop
            </h2>

            <p>
                The for...of loop is used to iterate over iterable values
                such as arrays and strings.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

for (const language of languages) {

    console.log(language);

}`}
            </pre>


            <h2 className="mt-4">
                for...in Loop
            </h2>

            <p>
                The for...in loop is commonly used to iterate over the
                enumerable properties of an object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};

for (const key in user) {

    console.log(
        key,
        user[key]
    );

}`}
            </pre>


            <h2 className="mt-4">
                Enhanced Object Literals
            </h2>

            <p>
                ES6 provides shorter syntax for creating object properties
                and methods.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";
const age = 21;

const user = {

    name,
    age,

    greet() {

        console.log("Hello");

    }

};

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Optional Chaining
            </h2>

            <p>
                Optional chaining allows properties to be accessed safely
                without causing an error when an intermediate value is
                null or undefined.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    profile: {
        city: "Surat"
    }
};

console.log(
    user.profile?.city
);

console.log(
    user.address?.city
);`}
            </pre>


            <h2 className="mt-4">
                Nullish Coalescing
            </h2>

            <p>
                The nullish coalescing operator provides a fallback value
                when the left side is null or undefined.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const username = null;

const name =
    username ?? "Guest";

console.log(name);`}
            </pre>


            <h2 className="mt-4">
                Modern JavaScript Features
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Feature</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>let / const</td>
                            <td>Block-scoped variable declarations</td>
                        </tr>

                        <tr>
                            <td>Template Literals</td>
                            <td>Easy string interpolation</td>
                        </tr>

                        <tr>
                            <td>Arrow Functions</td>
                            <td>Shorter function syntax</td>
                        </tr>

                        <tr>
                            <td>Destructuring</td>
                            <td>Extract values from arrays and objects</td>
                        </tr>

                        <tr>
                            <td>Spread / Rest</td>
                            <td>Expand or collect values</td>
                        </tr>

                        <tr>
                            <td>Classes</td>
                            <td>Object-oriented programming syntax</td>
                        </tr>

                        <tr>
                            <td>Modules</td>
                            <td>Organize and reuse code</td>
                        </tr>

                        <tr>
                            <td>Optional Chaining</td>
                            <td>Safely access nested properties</td>
                        </tr>

                        <tr>
                            <td>Nullish Coalescing</td>
                            <td>Provide fallback values</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Why Modern JavaScript?
            </h2>

            <div className="alert alert-info">

                <ul className="mb-0">

                    <li>
                        Makes JavaScript code cleaner and easier to read.
                    </li>

                    <li>
                        Provides better ways to organize large applications.
                    </li>

                    <li>
                        Makes common programming tasks easier.
                    </li>

                    <li>
                        Modern frameworks such as React heavily use these features.
                    </li>

                </ul>

            </div>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        ES6 was introduced in 2015.
                    </li>

                    <li>
                        ES6 introduced many modern JavaScript features.
                    </li>

                    <li>
                        Modern JavaScript continues to receive new features.
                    </li>

                    <li>
                        Modern syntax improves readability and maintainability.
                    </li>

                    <li>
                        These features are widely used in React and Node.js.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default ES6;