import React from "react";

const Variables = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Variables
            </h1>


            {/* Introduction */}

            <h2>What are Variables?</h2>

            <p>
                Variables are named containers used to store data in a
                JavaScript program. The stored value can represent
                information such as a name, age, price, number or
                application state.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name = "Charvin";

let age = 21;`}
            </pre>


            {/* Declaration */}

            <h2 className="mt-4">
                Variable Declaration
            </h2>

            <p>
                Declaring a variable means creating a variable that can
                later be used in the program.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name;`}
            </pre>


            {/* Initialization */}

            <h2 className="mt-4">
                Variable Initialization
            </h2>

            <p>
                Initialization means assigning an initial value to a
                variable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name = "Charvin";`}
            </pre>


            {/* var */}

            <h2 className="mt-4">
                var
            </h2>

            <p>
                The var keyword was traditionally used to declare
                variables in JavaScript. Variables declared with var
                are function-scoped and can be redeclared and reassigned.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`var name = "Charvin";

name = "Jayesh";

console.log(name);`}
            </pre>


            {/* let */}

            <h2 className="mt-4">
                let
            </h2>

            <p>
                The let keyword is used to declare variables whose values
                may change during program execution. A let variable is
                block-scoped.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let age = 21;

age = 22;

console.log(age);`}
            </pre>


            {/* const */}

            <h2 className="mt-4">
                const
            </h2>

            <p>
                The const keyword is used when a variable should not be
                reassigned after its initial value has been assigned.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const country = "India";

console.log(country);`}
            </pre>


            {/* Reassignment */}

            <h2 className="mt-4">
                Reassignment
            </h2>

            <p>
                Reassignment means changing the value stored in an
                existing variable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let score = 10;

score = 20;

console.log(score);`}
            </pre>


            {/* const reassignment */}

            <h2 className="mt-4">
                const Cannot be Reassigned
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const age = 21;

// ❌ Error

age = 22;`}
            </pre>


            {/* var redeclaration */}

            <h2 className="mt-4">
                var Redeclaration
            </h2>

            <p>
                Variables declared with var can be redeclared in the
                same scope.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`var name = "Charvin";

var name = "Jayesh";

console.log(name);`}
            </pre>


            {/* let redeclaration */}

            <h2 className="mt-4">
                let Redeclaration
            </h2>

            <p>
                A let variable cannot be redeclared in the same scope.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name = "Charvin";

// ❌ Error

let name = "Jayesh";`}
            </pre>


            {/* Comparison */}

            <h2 className="mt-4">
                var vs let vs const
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Feature</th>
                            <th>var</th>
                            <th>let</th>
                            <th>const</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Reassign</td>
                            <td>Yes</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>

                        <tr>
                            <td>Redeclare</td>
                            <td>Yes</td>
                            <td>No</td>
                            <td>No</td>
                        </tr>

                        <tr>
                            <td>Scope</td>
                            <td>Function</td>
                            <td>Block</td>
                            <td>Block</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Block Scope */}

            <h2 className="mt-4">
                Block Scope
            </h2>

            <p>
                A block is a section of code enclosed inside curly braces.
                Variables declared with let and const are available only
                inside the block where they are declared.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{

    let name = "Charvin";

    console.log(name);

}

// name is not available here`}
            </pre>


            {/* Function Scope */}

            <h2 className="mt-4">
                Function Scope
            </h2>

            <p>
                Variables declared with var inside a function are
                available throughout that function.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function example() {

    var message = "Hello";

    console.log(message);

}

example();`}
            </pre>


            {/* Multiple Variables */}

            <h2 className="mt-4">
                Multiple Variables
            </h2>

            <p>
                Multiple variables can be declared separately or together.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name = "Charvin";
let age = 21;
let city = "Surat";`}
            </pre>


            {/* Naming Rules */}

            <h2 className="mt-4">
                Variable Naming Rules
            </h2>

            <ul>

                <li>
                    Variable names can contain letters.
                </li>

                <li>
                    Variable names can contain numbers, but they should
                    not start with a number.
                </li>

                <li>
                    Underscore can be used in variable names.
                </li>

                <li>
                    Dollar sign can be used in variable names.
                </li>

                <li>
                    Variable names are case-sensitive.
                </li>

                <li>
                    Reserved JavaScript keywords cannot be used as
                    variable names.
                </li>

            </ul>


            {/* Examples */}

            <h2 className="mt-4">
                Valid Variable Names
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`let name;

let userName;

let user_name;

let age2;

let $price;`}
            </pre>


            {/* Invalid */}

            <h2 className="mt-4">
                Invalid Variable Names
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`// ❌ Cannot start with number

let 2name;


// ❌ Spaces are not allowed

let user name;


// ❌ Reserved keyword

let class;`}
            </pre>


            {/* Best Practice */}

            <h2 className="mt-4">
                Best Practice
            </h2>

            <p>
                In modern JavaScript development, let and const are
                generally preferred over var. Use const when the
                variable does not need to be reassigned and use let
                when its value needs to change.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";

let score = 0;

score = score + 10;`}
            </pre>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Variables store data in JavaScript.
                    </li>

                    <li>
                        JavaScript provides var, let and const.
                    </li>

                    <li>
                        let can be reassigned.
                    </li>

                    <li>
                        const cannot be reassigned.
                    </li>

                    <li>
                        let and const are block-scoped.
                    </li>

                    <li>
                        var is function-scoped.
                    </li>

                    <li>
                        Prefer let and const in modern JavaScript.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Variables are fundamental building blocks of JavaScript
                programs because they allow applications to store and
                work with data. Understanding var, let, const,
                reassignment, scope and variable naming rules is
                important before learning more advanced JavaScript
                concepts.
            </p>

        </div>
    );
};

export default Variables;