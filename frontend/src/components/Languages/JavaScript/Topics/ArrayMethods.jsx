import React from "react";

const ArrayMethods = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Array Methods
            </h1>

            <h2>What are Array Methods?</h2>

            <p>
                Array methods are built-in JavaScript functions that allow
                us to perform different operations on arrays, such as
                adding elements, removing elements, searching values,
                transforming data, filtering values, and iterating over
                array elements.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(
    number => number * 2
);

console.log(doubled);`}
            </pre>


            <h2 className="mt-4">
                Common Array Methods
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
                            <td>push()</td>
                            <td>Adds elements at the end</td>
                        </tr>

                        <tr>
                            <td>pop()</td>
                            <td>Removes the last element</td>
                        </tr>

                        <tr>
                            <td>shift()</td>
                            <td>Removes the first element</td>
                        </tr>

                        <tr>
                            <td>unshift()</td>
                            <td>Adds elements at the beginning</td>
                        </tr>

                        <tr>
                            <td>slice()</td>
                            <td>Returns a portion of an array</td>
                        </tr>

                        <tr>
                            <td>splice()</td>
                            <td>Adds, removes, or replaces elements</td>
                        </tr>

                        <tr>
                            <td>map()</td>
                            <td>Creates a transformed array</td>
                        </tr>

                        <tr>
                            <td>filter()</td>
                            <td>Creates an array with matching elements</td>
                        </tr>

                        <tr>
                            <td>find()</td>
                            <td>Returns the first matching element</td>
                        </tr>

                        <tr>
                            <td>findIndex()</td>
                            <td>Returns the index of the first matching element</td>
                        </tr>

                        <tr>
                            <td>forEach()</td>
                            <td>Executes a function for every element</td>
                        </tr>

                        <tr>
                            <td>reduce()</td>
                            <td>Reduces an array to a single value</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                forEach()
            </h2>

            <p>
                The forEach() method executes a provided function once
                for each element in an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

numbers.forEach(number => {

    console.log(number);

});`}
            </pre>


            <h2 className="mt-4">
                map()
            </h2>

            <p>
                The map() method creates a new array by applying a
                function to every element of the original array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4];

const doubled = numbers.map(
    number => number * 2
);

console.log(doubled);`}
            </pre>


            <h2 className="mt-4">
                filter()
            </h2>

            <p>
                The filter() method creates a new array containing only
                the elements that satisfy a specified condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter(
    number => number % 2 === 0
);

console.log(evenNumbers);`}
            </pre>


            <h2 className="mt-4">
                find()
            </h2>

            <p>
                The find() method returns the first element that
                satisfies the provided condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30, 40];

const result = numbers.find(
    number => number > 20
);

console.log(result);
// 30`}
            </pre>


            <h2 className="mt-4">
                findIndex()
            </h2>

            <p>
                The findIndex() method returns the index of the first
                element that satisfies the condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30, 40];

const index = numbers.findIndex(
    number => number > 20
);

console.log(index);
// 2`}
            </pre>


            <h2 className="mt-4">
                some()
            </h2>

            <p>
                The some() method checks whether at least one element
                satisfies the provided condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 3, 5, 8];

const result = numbers.some(
    number => number % 2 === 0
);

console.log(result);
// true`}
            </pre>


            <h2 className="mt-4">
                every()
            </h2>

            <p>
                The every() method checks whether all elements satisfy
                the provided condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [2, 4, 6, 8];

const result = numbers.every(
    number => number % 2 === 0
);

console.log(result);
// true`}
            </pre>


            <h2 className="mt-4">
                reduce()
            </h2>

            <p>
                The reduce() method processes all elements and produces
                a single accumulated value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [10, 20, 30];

const total = numbers.reduce(
    (sum, number) => sum + number,
    0
);

console.log(total);
// 60`}
            </pre>


            <h2 className="mt-4">
                slice()
            </h2>

            <p>
                The slice() method returns a shallow copy of a portion
                of an array without modifying the original array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
];

const result = fruits.slice(1, 3);

console.log(result);
// ["Banana", "Mango"]`}
            </pre>


            <h2 className="mt-4">
                splice()
            </h2>

            <p>
                The splice() method can add, remove, or replace elements
                in an array. Unlike slice(), splice() modifies the
                original array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const fruits = [
    "Apple",
    "Banana",
    "Mango"
];

fruits.splice(1, 1, "Orange");

console.log(fruits);`}
            </pre>


            <h2 className="mt-4">
                sort()
            </h2>

            <p>
                The sort() method sorts the elements of an array in
                place according to the specified comparison behavior.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [40, 10, 30, 20];

numbers.sort(
    (a, b) => a - b
);

console.log(numbers);`}
            </pre>


            <h2 className="mt-4">
                reverse()
            </h2>

            <p>
                The reverse() method reverses the order of elements in
                an array.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4];

numbers.reverse();

console.log(numbers);`}
            </pre>


            <h2 className="mt-4">
                includes()
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
                Method Chaining
            </h2>

            <p>
                Multiple array methods can be chained together to
                perform several operations in sequence.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [
    1, 2, 3, 4, 5, 6
];

const result = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 10);

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mouse", price: 500 },
    { name: "Keyboard", price: 1500 }
];

const expensiveProducts = products.filter(
    product => product.price > 1000
);

console.log(expensiveProducts);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>Array methods simplify array operations.</li>

                    <li>map() creates a transformed array.</li>

                    <li>filter() selects matching elements.</li>

                    <li>find() returns the first matching element.</li>

                    <li>forEach() executes code for every element.</li>

                    <li>reduce() produces a single accumulated value.</li>

                    <li>Some methods modify the original array.</li>

                </ul>

            </div>

        </div>
    );
};

export default ArrayMethods;