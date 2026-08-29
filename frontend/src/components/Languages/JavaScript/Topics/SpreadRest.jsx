import React from "react";

const SpreadRest = () => {

    return (
        <div>

            <h1 className="mb-4">
                Spread & Rest Operators
            </h1>

            <h2>What are Spread and Rest Operators?</h2>

            <p>
                JavaScript uses the three-dot syntax (...) for both the
                Spread operator and the Rest operator. Although they use
                the same syntax, their purpose is different.
            </p>

            <p>
                The Spread operator expands values, while the Rest operator
                collects multiple values into a single variable.
            </p>


            <h2 className="mt-4">
                Spread Operator
            </h2>

            <p>
                The Spread operator expands the elements of an iterable,
                such as an array, into individual values.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

console.log(...numbers);`}
            </pre>


            <h2 className="mt-4">
                Copying an Array
            </h2>

            <p>
                The Spread operator can be used to create a shallow copy
                of an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

const copy = [...numbers];

console.log(copy);`}
            </pre>


            <h2 className="mt-4">
                Combining Arrays
            </h2>

            <p>
                Multiple arrays can be combined into a new array using
                the Spread operator.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const frontend = ["HTML", "CSS"];

const backend = ["Node.js", "MongoDB"];

const skills = [
    ...frontend,
    ...backend
];

console.log(skills);`}
            </pre>


            <h2 className="mt-4">
                Adding Elements to an Array
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [20, 30];

const newNumbers = [
    10,
    ...numbers,
    40
];

console.log(newNumbers);`}
            </pre>


            <h2 className="mt-4">
                Spread with Objects
            </h2>

            <p>
                The Spread operator can also be used to copy properties
                from one object into another object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};

const copy = {
    ...user
};

console.log(copy);`}
            </pre>


            <h2 className="mt-4">
                Combining Objects
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin"
};

const details = {
    age: 21,
    city: "Surat"
};

const completeUser = {
    ...user,
    ...details
};

console.log(completeUser);`}
            </pre>


            <h2 className="mt-4">
                Updating Object Properties
            </h2>

            <p>
                Spread syntax is commonly used to create a new object
                while updating one or more properties.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};

const updatedUser = {
    ...user,
    age: 22
};

console.log(updatedUser);`}
            </pre>


            <h2 className="mt-4">
                Spread with Function Arguments
            </h2>

            <p>
                An array can be expanded into individual function arguments
                using the Spread operator.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

console.log(
    Math.max(...numbers)
);`}
            </pre>


            <h2 className="mt-4">
                Rest Operator
            </h2>

            <p>
                The Rest operator collects multiple values into a single
                array. It is commonly used in function parameters.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function sum(...numbers) {

    console.log(numbers);

}

sum(10, 20, 30);`}
            </pre>


            <h2 className="mt-4">
                Rest Parameters
            </h2>

            <p>
                Rest parameters allow a function to accept any number of
                arguments and collect them into an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function sum(...numbers) {

    let total = 0;

    for (const number of numbers) {
        total += number;
    }

    return total;
}

console.log(
    sum(10, 20, 30, 40)
);`}
            </pre>


            <h2 className="mt-4">
                Rest with Destructuring
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [
    10,
    20,
    30,
    40
];

const [
    first,
    ...remaining
] = numbers;

console.log(first);
console.log(remaining);`}
            </pre>


            <h2 className="mt-4">
                Rest with Objects
            </h2>

            <p>
                Object destructuring can use the Rest operator to collect
                the remaining properties into a new object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21,
    city: "Surat"
};

const {
    name,
    ...details
} = user;

console.log(name);
console.log(details);`}
            </pre>


            <h2 className="mt-4">
                Spread vs Rest
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Spread</th>
                            <th>Rest</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Expands values</td>
                            <td>Collects values</td>
                        </tr>

                        <tr>
                            <td>Used with arrays and objects</td>
                            <td>Commonly used in function parameters</td>
                        </tr>

                        <tr>
                            <td>Creates individual values</td>
                            <td>Creates an array or object</td>
                        </tr>

                        <tr>
                            <td>Useful for copying and merging</td>
                            <td>Useful for handling variable arguments</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Spread Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const oldSkills = [
    "HTML",
    "CSS"
];

const newSkills = [
    ...oldSkills,
    "JavaScript",
    "React"
];

console.log(newSkills);`}
            </pre>


            <h2 className="mt-4">
                Rest Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function calculateTotal(...prices) {

    return prices.reduce(
        (total, price) =>
            total + price,
        0
    );

}

console.log(
    calculateTotal(100, 200, 300)
);`}
            </pre>


            <h2 className="mt-4">
                Common Uses
            </h2>

            <div className="alert alert-info">

                <ul className="mb-0">

                    <li>
                        Copying arrays and objects.
                    </li>

                    <li>
                        Combining multiple arrays.
                    </li>

                    <li>
                        Combining multiple objects.
                    </li>

                    <li>
                        Updating object properties.
                    </li>

                    <li>
                        Passing array values as function arguments.
                    </li>

                    <li>
                        Accepting multiple function arguments.
                    </li>

                </ul>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const defaultUser = {
    name: "Charvin",
    role: "Developer"
};

const userInput = {
    city: "Surat"
};

const user = {
    ...defaultUser,
    ...userInput
};

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Both operators use three dots (...).
                    </li>

                    <li>
                        Spread expands values.
                    </li>

                    <li>
                        Rest collects values.
                    </li>

                    <li>
                        Spread is useful for copying and merging.
                    </li>

                    <li>
                        Rest is useful for variable function arguments.
                    </li>

                    <li>
                        Both are heavily used in modern JavaScript and React.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default SpreadRest;