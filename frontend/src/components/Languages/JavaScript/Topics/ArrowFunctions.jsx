import React from "react";

const ArrowFunctions = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Arrow Functions
            </h1>

            <h2>What is an Arrow Function?</h2>

            <p>
                An arrow function is a shorter syntax for writing
                functions in JavaScript. Arrow functions were introduced
                with ES6 and are widely used in modern JavaScript,
                especially in React development.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const greet = () => {

    console.log("Hello JavaScript");

};

greet();`}
            </pre>


            <h2 className="mt-4">
                Traditional Function vs Arrow Function
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`// Traditional Function

function add(a, b) {

    return a + b;

}


// Arrow Function

const add = (a, b) => {

    return a + b;

};`}
            </pre>


            <h2 className="mt-4">
                Arrow Function Without Parameters
            </h2>

            <p>
                When an arrow function does not have parameters, empty
                parentheses are used.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const greet = () => {

    console.log("Hello");

};

greet();`}
            </pre>


            <h2 className="mt-4">
                Arrow Function With One Parameter
            </h2>

            <p>
                When an arrow function has exactly one parameter,
                parentheses around the parameter can be omitted.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const greet = name => {

    console.log("Hello " + name);

};

greet("Charvin");`}
            </pre>


            <h2 className="mt-4">
                Arrow Function With Multiple Parameters
            </h2>

            <p>
                Multiple parameters must be written inside parentheses.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const add = (a, b) => {

    return a + b;

};

console.log(add(10, 20));`}
            </pre>


            <h2 className="mt-4">
                Explicit Return
            </h2>

            <p>
                An arrow function can use the return keyword when the
                function body contains multiple statements or when an
                explicit return is preferred.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const square = (number) => {

    return number * number;

};

console.log(square(5));`}
            </pre>


            <h2 className="mt-4">
                Implicit Return
            </h2>

            <p>
                When an arrow function contains a single expression,
                the result can be returned implicitly without using
                the return keyword.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const square = number => number * number;

console.log(square(5));`}
            </pre>


            <h2 className="mt-4">
                Returning an Object
            </h2>

            <p>
                When returning an object directly from an arrow function,
                the object should be wrapped in parentheses.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const createUser = () => ({

    name: "Charvin",
    age: 21

});

console.log(createUser());`}
            </pre>


            <h2 className="mt-4">
                Arrow Functions with Arrays
            </h2>

            <p>
                Arrow functions are commonly used with array methods
                such as map, filter and forEach.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3, 4];

const doubled = numbers.map(
    number => number * 2
);

console.log(doubled);`}
            </pre>


            <h2 className="mt-4">
                Arrow Function as Callback
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const numbers = [1, 2, 3];

numbers.forEach(number => {

    console.log(number);

});`}
            </pre>


            <h2 className="mt-4">
                this and Arrow Functions
            </h2>

            <p>
                Arrow functions do not create their own this value.
                Instead, they use the this value from their surrounding
                lexical scope. This behavior is particularly useful in
                many callback situations.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",

    greet() {

        const showName = () => {

            console.log(this.name);

        };

        showName();

    }

};

user.greet();`}
            </pre>


            <h2 className="mt-4">
                Important Difference
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Feature</th>
                            <th>Regular Function</th>
                            <th>Arrow Function</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>Short Syntax</td>
                            <td>No</td>
                            <td>Yes</td>
                        </tr>

                        <tr>
                            <td>Own this</td>
                            <td>Yes</td>
                            <td>No</td>
                        </tr>

                        <tr>
                            <td>Constructor</td>
                            <td>Can be used</td>
                            <td>Cannot be used</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const calculatePrice = (price, quantity) => {

    return price * quantity;

};

const total = calculatePrice(500, 3);

console.log(total);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Arrow functions were introduced in ES6.
                    </li>

                    <li>
                        They provide shorter function syntax.
                    </li>

                    <li>
                        A single parameter can be written without
                        parentheses.
                    </li>

                    <li>
                        Single-expression arrow functions can use
                        implicit return.
                    </li>

                    <li>
                        Arrow functions do not have their own this.
                    </li>

                    <li>
                        They are widely used in modern JavaScript and
                        React.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default ArrowFunctions;