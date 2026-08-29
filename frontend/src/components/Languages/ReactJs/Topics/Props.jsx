import React from "react";

const Props = () => {
    return (
        <div>

            <h1 className="mb-4">
                Props in React
            </h1>

            {/* Introduction */}

            <h2>What are Props?</h2>

            <p>
                Props stands for Properties. Props are used to pass data
                from one React component to another component, usually
                from a parent component to a child component.
            </p>

            <p>
                Props make components reusable because the same component
                can display different information depending on the data
                received through props.
            </p>


            {/* Basic Example */}

            <h2 className="mt-4">
                Basic Props Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function User(props) {

    return (
        <h2>
            Hello {props.name}
        </h2>
    );

}


function App() {

    return (
        <User name="Charvin" />
    );

}`}
            </pre>


            {/* Parent Child */}

            <h2 className="mt-4">
                Parent and Child Components
            </h2>

            <p>
                Props are normally passed from a parent component to a
                child component. The parent provides the data while the
                child receives and uses that data.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Parent Component
        |
        | Props
        ↓
Child Component`}
            </pre>


            {/* Passing Data */}

            <h2 className="mt-4">
                Passing Data Through Props
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function User(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
        </div>
    );

}


function App() {

    return (
        <User
            name="Charvin"
            age={21}
        />
    );

}`}
            </pre>


            {/* Destructuring */}

            <h2 className="mt-4">
                Props Destructuring
            </h2>

            <p>
                Instead of accessing every value using
                <code>props.propertyName</code>, we can destructure props
                directly inside the function parameter.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function User({ name, age }) {

    return (
        <div>

            <h2>{name}</h2>

            <p>
                Age: {age}
            </p>

        </div>
    );

}`}
            </pre>


            {/* Multiple Props */}

            <h2 className="mt-4">
                Multiple Props
            </h2>

            <p>
                A component can receive multiple props at the same time.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Product({
    name,
    price,
    category
}) {

    return (
        <div>

            <h2>{name}</h2>

            <p>Price: ₹{price}</p>

            <p>Category: {category}</p>

        </div>
    );

}


function App() {

    return (
        <Product
            name="Laptop"
            price={50000}
            category="Electronics"
        />
    );

}`}
            </pre>


            {/* Different Data Types */}

            <h2 className="mt-4">
                Different Types of Props
            </h2>

            <p>
                Props are not limited to strings. We can pass numbers,
                booleans, arrays, objects and even functions as props.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function App() {

    return (
        <User
            name="Charvin"
            age={21}
            isStudent={true}
        />
    );

}`}
            </pre>


            {/* Object */}

            <h2 className="mt-4">
                Passing Objects
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const user = {
    name: "Charvin",
    age: 21
};


function User({ data }) {

    return (
        <div>

            <h2>{data.name}</h2>

            <p>{data.age}</p>

        </div>
    );

}


function App() {

    return (
        <User data={user} />
    );

}`}
            </pre>


            {/* Array */}

            <h2 className="mt-4">
                Passing Arrays
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function List({ items }) {

    return (
        <ul>

            {items.map((item) => (
                <li key={item}>
                    {item}
                </li>
            ))}

        </ul>
    );

}


function App() {

    const languages = [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ];

    return (
        <List items={languages} />
    );

}`}
            </pre>


            {/* Function Props */}

            <h2 className="mt-4">
                Passing Functions as Props
            </h2>

            <p>
                A parent component can pass a function to a child
                component. The child can then call that function when a
                particular event occurs.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Button({ handleClick }) {

    return (
        <button onClick={handleClick}>
            Click Me
        </button>
    );

}


function App() {

    const showMessage = () => {
        alert("Button clicked");
    };

    return (
        <Button
            handleClick={showMessage}
        />
    );

}`}
            </pre>


            {/* Read Only */}

            <h2 className="mt-4">
                Props are Read-Only
            </h2>

            <p>
                Props should be treated as read-only values. A child
                component should not directly modify the props received
                from its parent.
            </p>

            <p>
                If a component needs to change some data, state can be
                used instead. The parent can also provide a function that
                allows the child to request a change.
            </p>


            {/* Props vs State */}

            <h2 className="mt-4">
                Props vs State
            </h2>

            <div className="table-responsive">

                <table className="table table-bordered table-striped">

                    <thead className="table-dark">

                        <tr>
                            <th>Props</th>
                            <th>State</th>
                        </tr>

                    </thead>

                    <tbody>

                        <tr>
                            <td>
                                Passed from parent to child
                            </td>

                            <td>
                                Managed inside a component
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Read-only from the receiving component
                            </td>

                            <td>
                                Can be updated using state mechanisms
                            </td>
                        </tr>

                        <tr>
                            <td>
                                Used to pass data
                            </td>

                            <td>
                                Used to manage changing data
                            </td>
                        </tr>

                    </tbody>

                </table>

            </div>


            {/* Reusable Component */}

            <h2 className="mt-4">
                Props Make Components Reusable
            </h2>

            <p>
                Props allow the same component to display different data.
                This is one of the main reasons why React components are
                highly reusable.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`function Welcome({ name }) {

    return (
        <h2>
            Welcome {name}
        </h2>
    );

}


function App() {

    return (
        <div>

            <Welcome name="Charvin" />

            <Welcome name="Rahul" />

            <Welcome name="Amit" />

        </div>
    );

}`}
            </pre>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Props means Properties.
                    </li>

                    <li>
                        Props are used to pass data between components.
                    </li>

                    <li>
                        Props are commonly passed from parent to child.
                    </li>

                    <li>
                        Props can contain different types of data.
                    </li>

                    <li>
                        Functions can also be passed as props.
                    </li>

                    <li>
                        Props should be treated as read-only.
                    </li>

                    <li>
                        Props help make components reusable.
                    </li>

                </ul>

            </div>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                Props provide a way for React components to communicate
                by passing data from parent components to child
                components. They are essential for creating reusable,
                flexible and dynamic React components.
            </p>

        </div>
    );
};

export default Props;