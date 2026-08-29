import React from "react";

const Loops = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Loops
            </h1>

            <h2>What are Loops?</h2>

            <p>
                Loops are used to execute a block of code repeatedly
                until a specified condition becomes false. They are
                useful when the same operation needs to be performed
                multiple times.
            </p>


            <h2 className="mt-4">
                Types of Loops
            </h2>

            <ul>
                <li>for loop</li>
                <li>while loop</li>
                <li>do...while loop</li>
                <li>for...of loop</li>
                <li>for...in loop</li>
            </ul>


            <h2 className="mt-4">
                for Loop
            </h2>

            <p>
                The for loop is commonly used when the number of
                iterations is known or can be controlled using a
                counter.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`for (let i = 1; i <= 5; i++) {

    console.log(i);

}`}
            </pre>

            <p>
                The output will be:
            </p>

            <pre className="bg-light border p-3 rounded">
{`1
2
3
4
5`}
            </pre>


            <h2 className="mt-4">
                for Loop Structure
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`for (
    initialization;
    condition;
    increment
) {

    // code

}`}
            </pre>


            <h2 className="mt-4">
                while Loop
            </h2>

            <p>
                The while loop repeatedly executes code as long as its
                condition remains true.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let i = 1;

while (i <= 5) {

    console.log(i);

    i++;

}`}
            </pre>


            <h2 className="mt-4">
                do...while Loop
            </h2>

            <p>
                The do...while loop executes its code at least once
                before checking the condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let i = 1;

do {

    console.log(i);

    i++;

} while (i <= 5);`}
            </pre>


            <h2 className="mt-4">
                Difference Between while and do...while
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`let i = 10;

while (i < 5) {

    console.log(i);

}`}
            </pre>

            <p>
                In this example, the while loop will not execute because
                the condition is false from the beginning.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let i = 10;

do {

    console.log(i);

} while (i < 5);`}
            </pre>

            <p>
                The do...while loop executes once before checking the
                condition.
            </p>


            <h2 className="mt-4">
                break Statement
            </h2>

            <p>
                The break statement immediately stops a loop.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);

}`}
            </pre>


            <h2 className="mt-4">
                continue Statement
            </h2>

            <p>
                The continue statement skips the current iteration and
                moves to the next iteration.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);

}`}
            </pre>


            <h2 className="mt-4">
                for...of Loop
            </h2>

            <p>
                The for...of loop is commonly used to iterate over the
                values of iterable objects such as arrays and strings.
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
                enumerable property keys of an object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21,
    city: "Surat"

};

for (const key in user) {

    console.log(key);

}`}
            </pre>


            <h2 className="mt-4">
                Nested Loops
            </h2>

            <p>
                A loop placed inside another loop is called a nested
                loop.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`for (let i = 1; i <= 3; i++) {

    for (let j = 1; j <= 3; j++) {

        console.log(i, j);

    }

}`}
            </pre>


            <h2 className="mt-4">
                Looping Through Numbers
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`for (let i = 1; i <= 10; i++) {

    console.log(i);

}`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const users = [
    "Rahul",
    "Amit",
    "Jay",
    "Charvin"
];

for (const user of users) {

    console.log("Welcome " + user);

}`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Loops repeat a block of code.
                    </li>

                    <li>
                        for is useful when iteration control is known.
                    </li>

                    <li>
                        while runs while a condition is true.
                    </li>

                    <li>
                        do...while executes at least once.
                    </li>

                    <li>
                        for...of iterates over values.
                    </li>

                    <li>
                        for...in iterates over object property keys.
                    </li>

                    <li>
                        break stops a loop.
                    </li>

                    <li>
                        continue skips the current iteration.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Loops;