import React from "react";

const ObjectMethods = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Object Methods
            </h1>

            <h2>What are Object Methods?</h2>

            <p>
                Object methods are functions defined inside objects.
                They allow an object to perform actions using its own
                data and properties.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",

    greet() {

        console.log(
            "Hello " + this.name
        );

    }

};

user.greet();`}
            </pre>


            <h2 className="mt-4">
                Method Syntax
            </h2>

            <p>
                A method can be defined inside an object using a method
                name followed by parentheses and a function body.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const calculator = {

    add(a, b) {

        return a + b;

    }

};

console.log(
    calculator.add(10, 20)
);`}
            </pre>


            <h2 className="mt-4">
                this Keyword
            </h2>

            <p>
                Inside a regular object method, the this keyword usually
                refers to the object through which the method was called.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",

    greet() {

        console.log(
            "Hello " + this.name
        );

    }

};

user.greet();`}
            </pre>


            <h2 className="mt-4">
                Method Using Multiple Properties
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const student = {

    firstName: "Charvin",
    lastName: "Shah",

    getFullName() {

        return (
            this.firstName +
            " " +
            this.lastName
        );

    }

};

console.log(
    student.getFullName()
);`}
            </pre>


            <h2 className="mt-4">
                Object.keys()
            </h2>

            <p>
                Object.keys() returns an array containing the enumerable
                property names of an object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21,
    city: "Surat"

};

const keys = Object.keys(user);

console.log(keys);`}
            </pre>


            <h2 className="mt-4">
                Object.values()
            </h2>

            <p>
                Object.values() returns an array containing the property
                values of an object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

const values = Object.values(user);

console.log(values);`}
            </pre>


            <h2 className="mt-4">
                Object.entries()
            </h2>

            <p>
                Object.entries() converts an object's enumerable
                properties into an array of key-value pairs.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

const entries = Object.entries(user);

console.log(entries);`}
            </pre>


            <h2 className="mt-4">
                Object.assign()
            </h2>

            <p>
                Object.assign() copies enumerable properties from one or
                more source objects into a target object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin"

};

const details = {

    age: 21,
    city: "Surat"

};

const result = Object.assign(
    {},
    user,
    details
);

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                Object.freeze()
            </h2>

            <p>
                Object.freeze() prevents changes to an object, including
                adding, deleting, or modifying its own properties.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin"

};

Object.freeze(user);`}
            </pre>


            <h2 className="mt-4">
                Object.seal()
            </h2>

            <p>
                Object.seal() prevents adding or deleting properties,
                but existing writable properties can still be changed.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

Object.seal(user);

user.age = 22;`}
            </pre>


            <h2 className="mt-4">
                hasOwnProperty()
            </h2>

            <p>
                The hasOwnProperty() method checks whether an object
                contains a specified property as its own property.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

console.log(
    user.hasOwnProperty("name")
);

// true`}
            </pre>


            <h2 className="mt-4">
                Calling Methods
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const calculator = {

    multiply(a, b) {

        return a * b;

    }

};

const result = calculator.multiply(5, 4);

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                Object Method with Condition
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21,

    isAdult() {

        return this.age >= 18;

    }

};

console.log(
    user.isAdult()
);`}
            </pre>


            <h2 className="mt-4">
                Object Method with Array
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const student = {

    name: "Charvin",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],

    showSkills() {

        this.skills.forEach(skill => {

            console.log(skill);

        });

    }

};

student.showSkills();`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const product = {

    name: "Laptop",
    price: 50000,

    getPrice() {

        return this.price;

    },

    getDetails() {

        return (
            this.name +
            " - ₹" +
            this.price
        );

    }

};

console.log(product.getPrice());

console.log(product.getDetails());`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Object methods are functions defined inside objects.
                    </li>

                    <li>
                        The this keyword can access the object's properties.
                    </li>

                    <li>
                        Object.keys() returns property names.
                    </li>

                    <li>
                        Object.values() returns property values.
                    </li>

                    <li>
                        Object.entries() returns key-value pairs.
                    </li>

                    <li>
                        Object.assign() copies properties between objects.
                    </li>

                    <li>
                        Object.freeze() prevents modifications.
                    </li>

                    <li>
                        Object.seal() prevents adding and deleting properties.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default ObjectMethods;