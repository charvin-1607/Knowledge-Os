import React from "react";

const Arrays = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Arrays
            </h1>

            <h2>What is an Array?</h2>

            <p>
                An array is a data structure used to store multiple
                values inside a single variable. The values in an array
                can be accessed using their index.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

console.log(languages);`}
            </pre>


            <h2 className="mt-4">
                Creating an Array
            </h2>

            <p>
                Arrays can be created using square brackets.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];`}
            </pre>


            <h2 className="mt-4">
                Array Index
            </h2>

            <p>
                Array indexes start from 0. The first element has index
                0, the second has index 1, and so on.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(fruits[0]);
// Apple

console.log(fruits[1]);
// Banana

console.log(fruits[2]);
// Mango`}
            </pre>


            <h2 className="mt-4">
                Changing Array Elements
            </h2>

            <p>
                An array element can be changed by assigning a new value
                to its index.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let fruits = [
    "Apple",
    "Banana",
    "Mango"
];

fruits[1] = "Orange";

console.log(fruits);`}
            </pre>


            <h2 className="mt-4">
                Array length
            </h2>

            <p>
                The length property returns the number of elements in
                an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(fruits.length);
// 3`}
            </pre>


            <h2 className="mt-4">
                Adding Elements with push()
            </h2>

            <p>
                The push() method adds one or more elements to the end
                of an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana"
];

fruits.push("Mango");

console.log(fruits);`}
            </pre>


            <h2 className="mt-4">
                Removing Elements with pop()
            </h2>

            <p>
                The pop() method removes the last element from an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

fruits.pop();

console.log(fruits);`}
            </pre>


            <h2 className="mt-4">
                Removing First Element with shift()
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

fruits.shift();

console.log(fruits);`}
            </pre>


            <h2 className="mt-4">
                Adding Element with unshift()
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Banana",
    "Mango"
];

fruits.unshift("Apple");

console.log(fruits);`}
            </pre>


            <h2 className="mt-4">
                Checking Array with Array.isArray()
            </h2>

            <p>
                Array.isArray() is used to determine whether a value is
                an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = ["Apple", "Mango"];

console.log(Array.isArray(fruits));
// true`}
            </pre>


            <h2 className="mt-4">
                Finding an Element
            </h2>

            <p>
                The includes() method checks whether an array contains
                a particular value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

console.log(
    languages.includes("JavaScript")
);

// true`}
            </pre>


            <h2 className="mt-4">
                indexOf()
            </h2>

            <p>
                The indexOf() method returns the index of the first
                matching element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

console.log(
    fruits.indexOf("Banana")
);

// 1`}
            </pre>


            <h2 className="mt-4">
                Looping Through an Array
            </h2>

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
                Array with Different Data Types
            </h2>

            <p>
                JavaScript arrays can contain values of different data
                types.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const data = [
    "Charvin",
    21,
    true,
    null
];

console.log(data);`}
            </pre>


            <h2 className="mt-4">
                Nested Arrays
            </h2>

            <p>
                An array can contain other arrays. Such an array is
                called a nested array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [
    [1, 2, 3],
    [4, 5, 6]
];

console.log(numbers[0][1]);
// 2`}
            </pre>


            <h2 className="mt-4">
                Array Destructuring Preview
            </h2>

            <p>
                Array destructuring allows values to be extracted from
                an array into separate variables. Destructuring will be
                covered in detail in a later topic.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const colors = [
    "Red",
    "Blue"
];

const [first, second] = colors;

console.log(first);
console.log(second);`}
            </pre>


            <h2 className="mt-4">
                Common Array Operations
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Method / Property</th>
                            <th>Purpose</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>length</td>
                            <td>Returns array length</td>
                        </tr>

                        <tr>
                            <td>push()</td>
                            <td>Adds element at the end</td>
                        </tr>

                        <tr>
                            <td>pop()</td>
                            <td>Removes last element</td>
                        </tr>

                        <tr>
                            <td>shift()</td>
                            <td>Removes first element</td>
                        </tr>

                        <tr>
                            <td>unshift()</td>
                            <td>Adds element at the beginning</td>
                        </tr>

                        <tr>
                            <td>includes()</td>
                            <td>Checks whether value exists</td>
                        </tr>

                        <tr>
                            <td>indexOf()</td>
                            <td>Returns element index</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const products = [
    "Laptop",
    "Mouse",
    "Keyboard",
    "Monitor"
];

products.push("Headphones");

console.log(products);

console.log(
    "Total Products:",
    products.length
);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Arrays store multiple values in one variable.
                    </li>

                    <li>
                        Array indexes start from 0.
                    </li>

                    <li>
                        The length property gives the number of elements.
                    </li>

                    <li>
                        push() adds elements at the end.
                    </li>

                    <li>
                        pop() removes the last element.
                    </li>

                    <li>
                        shift() removes the first element.
                    </li>

                    <li>
                        unshift() adds elements at the beginning.
                    </li>

                    <li>
                        Arrays can contain different data types.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Arrays;