import React from "react";

const ListsAndKeys = () => {

    return (
        <div>

            <h1 className="mb-4">
                Lists & Keys in React
            </h1>


            {/* Introduction */}

            <h2>What are Lists?</h2>

            <p>
                Lists are used to display multiple similar elements
                from an array or collection of data. In React, lists
                are commonly rendered using JavaScript array methods
                such as map().
            </p>

            <p>
                For example, if an application contains a list of
                programming languages, we can store the languages inside
                an array and render them dynamically.
            </p>


            {/* Basic Array */}

            <h2 className="mt-4">
                Creating an Array
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];`}
            </pre>


            {/* Map */}

            <h2 className="mt-4">
                Rendering Lists with map()
            </h2>

            <p>
                The map() method can be used to iterate over an array and
                return JSX for each item.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const languages = [
    "HTML",
    "CSS",
    "JavaScript"
];

function App() {

    return (
        <div>

            {languages.map((language) => (
                <p>
                    {language}
                </p>
            ))}

        </div>
    );

}`}
            </pre>


            {/* Key */}

            <h2 className="mt-4">
                What is a Key?
            </h2>

            <p>
                A key is a special attribute that React uses when
                rendering lists. It helps React identify individual
                elements within a list.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{languages.map((language) => (
    <p key={language}>
        {language}
    </p>
))}`}
            </pre>


            {/* Unique Key */}

            <h2 className="mt-4">
                Why Should Keys Be Unique?
            </h2>

            <p>
                Each element in a list should have a unique key among
                its sibling elements. This allows React to correctly
                determine which list items have changed.
            </p>


            {/* Objects */}

            <h2 className="mt-4">
                Rendering List of Objects
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const users = [
    {
        id: 1,
        name: "Charvin"
    },
    {
        id: 2,
        name: "Rahul"
    },
    {
        id: 3,
        name: "Amit"
    }
];

function App() {

    return (
        <div>

            {users.map((user) => (
                <p key={user.id}>
                    {user.name}
                </p>
            ))}

        </div>
    );

}`}
            </pre>


            {/* ID as Key */}

            <h2 className="mt-4">
                Using ID as Key
            </h2>

            <p>
                When working with database records or API data, the
                unique ID of an item is generally a good choice for
                the key.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{users.map((user) => (
    <div key={user.id}>
        {user.name}
    </div>
))}`}
            </pre>


            {/* Index */}

            <h2 className="mt-4">
                Using Array Index as Key
            </h2>

            <p>
                The array index can be used as a key in some simple
                situations, especially when the list is static and
                items do not change their order.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`{languages.map((language, index) => (
    <p key={index}>
        {language}
    </p>
))}`}
            </pre>

            <div className="alert alert-warning">
                Avoid using array index as a key when list items can be
                reordered, inserted, or removed.
            </div>


            {/* Example */}

            <h2 className="mt-4">
                List with Bootstrap
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
];

function Skills() {

    return (
        <ul>

            {skills.map((skill) => (
                <li key={skill}>
                    {skill}
                </li>
            ))}

        </ul>
    );

}`}
            </pre>


            {/* Key Rules */}

            <h2 className="mt-4">
                Rules for Keys
            </h2>

            <ul>

                <li>
                    Keys should be unique among sibling elements.
                </li>

                <li>
                    Keys should be stable between renders.
                </li>

                <li>
                    Database IDs are usually a good choice.
                </li>

                <li>
                    Avoid generating random keys during rendering.
                </li>

                <li>
                    Avoid array indexes when list order can change.
                </li>

            </ul>


            {/* Common Mistake */}

            <h2 className="mt-4">
                Common Mistake
            </h2>

            <p>
                Forgetting to provide a key while rendering a list can
                cause React to display a warning in the console.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`// ❌ Missing key

{users.map((user) => (
    <p>
        {user.name}
    </p>
))}


// ✅ Correct

{users.map((user) => (
    <p key={user.id}>
        {user.name}
    </p>
))}`}
            </pre>


            {/* Summary */}

            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                React uses JavaScript array methods such as map() to
                render lists. Every dynamically rendered list item
                should have a stable and unique key so that React can
                efficiently manage changes to the list.
            </p>

        </div>
    );
};

export default ListsAndKeys;