import React from "react";

const Objects = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Objects
            </h1>

            <h2>What is an Object?</h2>

            <p>
                An object is a collection of related data and functionality
                represented as key-value pairs. Objects are commonly used
                to represent real-world entities such as users, products,
                students, and employees.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21,
    city: "Surat"

};

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Object Properties
            </h2>

            <p>
                The keys inside an object are called properties, and each
                property stores a value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const student = {

    name: "Rahul",
    age: 20,
    course: "BCA"

};`}
            </pre>


            <h2 className="mt-4">
                Accessing Object Properties
            </h2>

            <p>
                Object properties can be accessed using dot notation or
                bracket notation.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

console.log(user.name);

console.log(user["age"]);`}
            </pre>


            <h2 className="mt-4">
                Modifying Object Properties
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

user.age = 22;

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Adding New Properties
            </h2>

            <p>
                New properties can be added to an existing object by
                assigning a value to a new key.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin"

};

user.city = "Surat";

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Deleting Properties
            </h2>

            <p>
                The delete operator can be used to remove a property
                from an object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

delete user.age;

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Object with Different Data Types
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const data = {

    name: "Charvin",
    age: 21,
    isStudent: true,
    skills: ["HTML", "CSS", "JavaScript"]

};

console.log(data);`}
            </pre>


            <h2 className="mt-4">
                Nested Objects
            </h2>

            <p>
                An object can contain another object as a property. Such
                structures are called nested objects.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",

    address: {

        city: "Surat",
        country: "India"

    }

};

console.log(user.address.city);`}
            </pre>


            <h2 className="mt-4">
                Object with Array
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const student = {

    name: "Charvin",

    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ]

};

console.log(student.skills[0]);`}
            </pre>


            <h2 className="mt-4">
                Object Destructuring
            </h2>

            <p>
                Object destructuring allows properties to be extracted
                into separate variables.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

const {
    name,
    age
} = user;

console.log(name);
console.log(age);`}
            </pre>


            <h2 className="mt-4">
                Shorthand Property Syntax
            </h2>

            <p>
                When variable names and object property names are the
                same, JavaScript allows a shorter object syntax.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";
const age = 21;

const user = {
    name,
    age
};

console.log(user);`}
            </pre>


            <h2 className="mt-4">
                Object.freeze()
            </h2>

            <p>
                Object.freeze() prevents an object from being modified
                by preventing property additions, deletions, and changes.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin"

};

Object.freeze(user);`}
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

console.log(
    Object.keys(user)
);`}
            </pre>


            <h2 className="mt-4">
                Object.values()
            </h2>

            <p>
                Object.values() returns an array containing the values
                of an object's enumerable properties.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

console.log(
    Object.values(user)
);`}
            </pre>


            <h2 className="mt-4">
                Object.entries()
            </h2>

            <p>
                Object.entries() returns an array containing key-value
                pairs for the enumerable properties of an object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {

    name: "Charvin",
    age: 21

};

console.log(
    Object.entries(user)
);`}
            </pre>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const product = {

    name: "Laptop",
    price: 50000,
    brand: "Dell",
    inStock: true

};

console.log(product.name);
console.log(product.price);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Objects store related data using key-value pairs.
                    </li>

                    <li>
                        Properties can be accessed using dot notation.
                    </li>

                    <li>
                        Bracket notation can be used for dynamic keys.
                    </li>

                    <li>
                        Objects can contain arrays and other objects.
                    </li>

                    <li>
                        Objects can be modified after creation unless
                        restricted.
                    </li>

                    <li>
                        Object.keys(), values(), and entries() are useful
                        built-in methods.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Objects;