import React from "react";

const Strings = () => {

    return (
        <div>

            <h1 className="mb-4">
                JavaScript Strings
            </h1>

            <h2>What is a String?</h2>

            <p>
                A string is a sequence of characters used to represent
                text in JavaScript. Strings can contain letters, numbers,
                symbols, spaces, and other characters. JavaScript provides
                several methods for creating, accessing, searching, and
                manipulating strings.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let name = "Charvin";

console.log(name);`}
            </pre>


            <h2 className="mt-4">
                Creating Strings
            </h2>

            <p>
                JavaScript provides three common ways to create strings:
                single quotes, double quotes, and template literals.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let firstName = 'Charvin';

let lastName = "Shah";

let message = \`Hello JavaScript\`;`}
            </pre>


            <h2 className="mt-4">
                Single Quotes
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const language = 'JavaScript';

console.log(language);`}
            </pre>


            <h2 className="mt-4">
                Double Quotes
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const language = "JavaScript";

console.log(language);`}
            </pre>


            <h2 className="mt-4">
                Template Literals
            </h2>

            <p>
                Template literals are enclosed using backticks and allow
                expressions to be embedded directly inside a string.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const name = "Charvin";
const age = 21;

const message = \`My name is \${name}
and I am \${age} years old.\`;

console.log(message);`}
            </pre>


            <h2 className="mt-4">
                String Length
            </h2>

            <p>
                The length property returns the number of characters in
                a string.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "Hello";

console.log(message.length);

// 5`}
            </pre>


            <h2 className="mt-4">
                Accessing Characters
            </h2>

            <p>
                Individual characters can be accessed using their index.
                String indexes start from zero.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const language = "JavaScript";

console.log(language[0]);
// J

console.log(language[4]);
// S`}
            </pre>


            <h2 className="mt-4">
                charAt()
            </h2>

            <p>
                The charAt() method returns the character at a specified
                index.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const language = "JavaScript";

console.log(
    language.charAt(0)
);

// J`}
            </pre>


            <h2 className="mt-4">
                toUpperCase()
            </h2>

            <p>
                The toUpperCase() method converts all alphabetic
                characters in a string to uppercase.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "hello";

console.log(
    message.toUpperCase()
);

// HELLO`}
            </pre>


            <h2 className="mt-4">
                toLowerCase()
            </h2>

            <p>
                The toLowerCase() method converts all alphabetic
                characters in a string to lowercase.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "HELLO";

console.log(
    message.toLowerCase()
);

// hello`}
            </pre>


            <h2 className="mt-4">
                trim()
            </h2>

            <p>
                The trim() method removes whitespace from both ends of
                a string.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const username = "   Charvin   ";

console.log(
    username.trim()
);

// Charvin`}
            </pre>


            <h2 className="mt-4">
                includes()
            </h2>

            <p>
                The includes() method checks whether a string contains
                a specified sequence of characters.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "Welcome to JavaScript";

console.log(
    message.includes("JavaScript")
);

// true`}
            </pre>


            <h2 className="mt-4">
                startsWith()
            </h2>

            <p>
                The startsWith() method checks whether a string begins
                with a specified sequence of characters.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const website = "JavaScript Tutorial";

console.log(
    website.startsWith("JavaScript")
);

// true`}
            </pre>


            <h2 className="mt-4">
                endsWith()
            </h2>

            <p>
                The endsWith() method checks whether a string ends with
                a specified sequence of characters.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const file = "index.html";

console.log(
    file.endsWith(".html")
);

// true`}
            </pre>


            <h2 className="mt-4">
                indexOf()
            </h2>

            <p>
                The indexOf() method returns the position of the first
                occurrence of a specified substring.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "Hello JavaScript";

console.log(
    message.indexOf("JavaScript")
);`}
            </pre>


            <h2 className="mt-4">
                slice()
            </h2>

            <p>
                The slice() method extracts a section of a string and
                returns it as a new string.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const language = "JavaScript";

const result = language.slice(0, 4);

console.log(result);

// Java`}
            </pre>


            <h2 className="mt-4">
                substring()
            </h2>

            <p>
                The substring() method returns a portion of a string
                between two specified indexes.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const language = "JavaScript";

console.log(
    language.substring(0, 4)
);

// Java`}
            </pre>


            <h2 className="mt-4">
                replace()
            </h2>

            <p>
                The replace() method returns a new string with a
                specified substring replaced by another value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "Hello World";

const result = message.replace(
    "World",
    "JavaScript"
);

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                replaceAll()
            </h2>

            <p>
                The replaceAll() method replaces all occurrences of a
                specified substring with another value.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const message = "JavaScript is great.
JavaScript is popular.";

const result = message.replaceAll(
    "JavaScript",
    "React"
);

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                split()
            </h2>

            <p>
                The split() method divides a string into an array of
                substrings based on a specified separator.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const skills = "HTML,CSS,JavaScript";

const result = skills.split(",");

console.log(result);`}
            </pre>


            <h2 className="mt-4">
                concat()
            </h2>

            <p>
                The concat() method joins one or more strings together
                and returns a new string.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const firstName = "Charvin";
const lastName = "Shah";

const fullName = firstName.concat(
    " ",
    lastName
);

console.log(fullName);`}
            </pre>


            <h2 className="mt-4">
                String Concatenation
            </h2>

            <p>
                The + operator can be used to combine multiple strings.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const firstName = "Charvin";
const lastName = "Shah";

const fullName =
    firstName + " " + lastName;

console.log(fullName);`}
            </pre>


            <h2 className="mt-4">
                Template String Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const product = "Laptop";
const price = 50000;

const message =
    \`The price of the \${product}
is ₹\${price}\`;

console.log(message);`}
            </pre>


            <h2 className="mt-4">
                Strings are Immutable
            </h2>

            <p>
                Strings are immutable in JavaScript, which means their
                individual characters cannot be directly changed.
                String methods return new strings instead of modifying
                the original string.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`let message = "Hello";

message[0] = "Y";

console.log(message);

// Hello`}
            </pre>


            <h2 className="mt-4">
                Comparing Strings
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const a = "Apple";
const b = "Banana";

console.log(a === b);
// false

console.log(a === "Apple");
// true`}
            </pre>


            <h2 className="mt-4">
                Common String Methods
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
                            <td>Returns string length</td>
                        </tr>

                        <tr>
                            <td>charAt()</td>
                            <td>Returns character at an index</td>
                        </tr>

                        <tr>
                            <td>toUpperCase()</td>
                            <td>Converts string to uppercase</td>
                        </tr>

                        <tr>
                            <td>toLowerCase()</td>
                            <td>Converts string to lowercase</td>
                        </tr>

                        <tr>
                            <td>trim()</td>
                            <td>Removes surrounding whitespace</td>
                        </tr>

                        <tr>
                            <td>includes()</td>
                            <td>Checks whether text exists</td>
                        </tr>

                        <tr>
                            <td>indexOf()</td>
                            <td>Finds the position of text</td>
                        </tr>

                        <tr>
                            <td>slice()</td>
                            <td>Extracts part of a string</td>
                        </tr>

                        <tr>
                            <td>replace()</td>
                            <td>Replaces matching text</td>
                        </tr>

                        <tr>
                            <td>split()</td>
                            <td>Converts string into an array</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const email = "  CHARVIN@GMAIL.COM  ";

const cleanEmail = email
    .trim()
    .toLowerCase();

console.log(cleanEmail);`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Strings are used to represent text.
                    </li>

                    <li>
                        String indexes start from zero.
                    </li>

                    <li>
                        Strings are immutable.
                    </li>

                    <li>
                        String methods return new strings.
                    </li>

                    <li>
                        Template literals support embedded expressions.
                    </li>

                    <li>
                        String methods are useful for searching,
                        extracting, and modifying text.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default Strings;