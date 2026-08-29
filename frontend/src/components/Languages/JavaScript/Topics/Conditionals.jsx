import React from "react";

const Conditionals = () => {

    return (
        <div>

            <h1 className="mb-4">
                Conditional Statements
            </h1>

            <h2>What are Conditional Statements?</h2>

            <p>
                Conditional statements allow a JavaScript program to
                execute different blocks of code depending on whether
                a condition is true or false.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 20;

if (age >= 18) {
    console.log("You are an adult");
}`}
            </pre>


            <h2 className="mt-4">
                Types of Conditional Statements
            </h2>

            <ul>
                <li>if statement</li>
                <li>if...else statement</li>
                <li>else if statement</li>
                <li>Nested if statement</li>
                <li>switch statement</li>
                <li>Ternary operator</li>
            </ul>


            <h2 className="mt-4">
                if Statement
            </h2>

            <p>
                The if statement executes a block of code only when its
                condition evaluates to true.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;

if (age >= 18) {

    console.log("You can vote");

}`}
            </pre>


            <h2 className="mt-4">
                if...else Statement
            </h2>

            <p>
                The if...else statement executes one block when the
                condition is true and another block when it is false.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 16;

if (age >= 18) {

    console.log("Adult");

} else {

    console.log("Minor");

}`}
            </pre>


            <h2 className="mt-4">
                else if Statement
            </h2>

            <p>
                The else if statement is used when multiple conditions
                need to be checked.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let marks = 75;

if (marks >= 90) {

    console.log("A+");

} else if (marks >= 75) {

    console.log("A");

} else if (marks >= 50) {

    console.log("B");

} else {

    console.log("Fail");

}`}
            </pre>


            <h2 className="mt-4">
                Nested if
            </h2>

            <p>
                A nested if statement is an if statement placed inside
                another if statement.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;
let hasId = true;

if (age >= 18) {

    if (hasId) {

        console.log("Entry allowed");

    }

}`}
            </pre>


            <h2 className="mt-4">
                switch Statement
            </h2>

            <p>
                The switch statement is useful when one value needs to
                be compared against multiple possible values.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");

}`}
            </pre>


            <h2 className="mt-4">
                break Statement
            </h2>

            <p>
                The break statement stops the execution of a switch
                case and exits the switch statement.
            </p>


            <h2 className="mt-4">
                default Case
            </h2>

            <p>
                The default case runs when none of the switch cases
                match the given value.
            </p>


            <h2 className="mt-4">
                Ternary Operator
            </h2>

            <p>
                The ternary operator provides a short way to write a
                simple if...else condition.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 20;

let message =
    age >= 18
        ? "Adult"
        : "Minor";

console.log(message);`}
            </pre>


            <h2 className="mt-4">
                Multiple Conditions
            </h2>

            <p>
                Logical operators can be used when a condition depends
                on multiple expressions.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 25;
let hasLicense = true;

if (age >= 18 && hasLicense) {

    console.log("You can drive");

}`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`let username = "admin";
let password = "1234";

if (
    username === "admin" &&
    password === "1234"
) {

    console.log("Login successful");

} else {

    console.log("Invalid credentials");

}`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Conditional statements control program flow.
                    </li>

                    <li>
                        if executes code when a condition is true.
                    </li>

                    <li>
                        else executes when the condition is false.
                    </li>

                    <li>
                        else if allows multiple conditions.
                    </li>

                    <li>
                        switch is useful for multiple fixed cases.
                    </li>

                    <li>
                        The ternary operator is useful for simple
                        conditions.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Conditionals;