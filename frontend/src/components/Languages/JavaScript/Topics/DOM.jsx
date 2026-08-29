import React from "react";

const DOM = () => {

    return (
        <div>

            <h1 className="mb-4">
                DOM Manipulation
            </h1>

            <h2>What is the DOM?</h2>

            <p>
                DOM stands for Document Object Model. It represents an
                HTML document as a tree of objects that JavaScript can
                access and manipulate.
            </p>

            <p>
                Using the DOM, JavaScript can change HTML elements,
                attributes, styles, text, and page structure dynamically.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`document.getElementById("title");`}
            </pre>


            <h2 className="mt-4">
                DOM Tree
            </h2>

            <p>
                The browser converts an HTML document into a hierarchical
                tree structure. Each HTML element becomes a node in this
                structure.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`Document
│
├── html
│   ├── head
│   └── body
│       ├── h1
│       ├── p
│       └── button`}
            </pre>


            <h2 className="mt-4">
                Selecting an Element by ID
            </h2>

            <p>
                getElementById() selects an HTML element using its id
                attribute.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const title =
    document.getElementById("title");

console.log(title);`}
            </pre>


            <h2 className="mt-4">
                Selecting Elements by Class
            </h2>

            <p>
                getElementsByClassName() returns a collection of elements
                that have the specified class name.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const elements =
    document.getElementsByClassName("item");

console.log(elements);`}
            </pre>


            <h2 className="mt-4">
                Selecting Elements by Tag
            </h2>

            <p>
                getElementsByTagName() returns elements based on their
                HTML tag name.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const paragraphs =
    document.getElementsByTagName("p");

console.log(paragraphs);`}
            </pre>


            <h2 className="mt-4">
                querySelector()
            </h2>

            <p>
                querySelector() returns the first element that matches
                a CSS selector.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const title =
    document.querySelector("#title");

const item =
    document.querySelector(".item");`}
            </pre>


            <h2 className="mt-4">
                querySelectorAll()
            </h2>

            <p>
                querySelectorAll() returns all elements that match the
                specified CSS selector.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const items =
    document.querySelectorAll(".item");

console.log(items);`}
            </pre>


            <h2 className="mt-4">
                Changing Text
            </h2>

            <p>
                The textContent property can be used to change the text
                content of an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const title =
    document.getElementById("title");

title.textContent =
    "Welcome to JavaScript";`}
            </pre>


            <h2 className="mt-4">
                innerHTML
            </h2>

            <p>
                innerHTML can be used to read or replace the HTML content
                inside an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const container =
    document.getElementById("container");

container.innerHTML =
    "<h2>Hello JavaScript</h2>";`}
            </pre>


            <h2 className="mt-4">
                Changing Styles
            </h2>

            <p>
                The style property allows JavaScript to modify the inline
                CSS styles of an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const title =
    document.getElementById("title");

title.style.fontSize = "30px";
title.style.fontWeight = "bold";`}
            </pre>


            <h2 className="mt-4">
                Changing Attributes
            </h2>

            <p>
                setAttribute() can be used to add or modify an HTML
                attribute.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const image =
    document.getElementById("image");

image.setAttribute(
    "alt",
    "Profile Image"
);`}
            </pre>


            <h2 className="mt-4">
                getAttribute()
            </h2>

            <p>
                getAttribute() returns the value of a specified attribute.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const link =
    document.getElementById("link");

console.log(
    link.getAttribute("href")
);`}
            </pre>


            <h2 className="mt-4">
                removeAttribute()
            </h2>

            <p>
                removeAttribute() removes a specified attribute from
                an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const input =
    document.getElementById("username");

input.removeAttribute("disabled");`}
            </pre>


            <h2 className="mt-4">
                Creating Elements
            </h2>

            <p>
                createElement() creates a new HTML element using JavaScript.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const paragraph =
    document.createElement("p");

paragraph.textContent =
    "New paragraph";`}
            </pre>


            <h2 className="mt-4">
                appendChild()
            </h2>

            <p>
                appendChild() adds a newly created element as the last child
                of another element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const paragraph =
    document.createElement("p");

paragraph.textContent =
    "Hello JavaScript";

document.body.appendChild(
    paragraph
);`}
            </pre>


            <h2 className="mt-4">
                removeChild()
            </h2>

            <p>
                removeChild() removes a specific child element from
                its parent element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const list =
    document.getElementById("list");

const item =
    list.firstElementChild;

list.removeChild(item);`}
            </pre>


            <h2 className="mt-4">
                classList
            </h2>

            <p>
                classList provides methods for adding, removing, toggling,
                and checking CSS classes on an element.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const box =
    document.getElementById("box");

box.classList.add("active");

box.classList.remove("hidden");

box.classList.toggle("selected");`}
            </pre>


            <h2 className="mt-4">
                contains()
            </h2>

            <p>
                The contains() method checks whether an element contains
                a particular CSS class.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const box =
    document.getElementById("box");

console.log(
    box.classList.contains("active")
);`}
            </pre>


            <h2 className="mt-4">
                DOM Traversal
            </h2>

            <p>
                DOM traversal allows JavaScript to move between parent,
                child, and sibling elements.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const element =
    document.getElementById("item");

console.log(element.parentElement);

console.log(element.children);

console.log(element.nextElementSibling);`}
            </pre>


            <h2 className="mt-4">
                DOM Manipulation Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const heading =
    document.getElementById("heading");

heading.textContent =
    "Updated Heading";

heading.classList.add("active");

heading.style.fontSize = "32px";`}
            </pre>


            <h2 className="mt-4">
                Common DOM Methods
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
                            <td>getElementById()</td>
                            <td>Selects an element by ID</td>
                        </tr>

                        <tr>
                            <td>querySelector()</td>
                            <td>Selects the first matching element</td>
                        </tr>

                        <tr>
                            <td>querySelectorAll()</td>
                            <td>Selects all matching elements</td>
                        </tr>

                        <tr>
                            <td>textContent</td>
                            <td>Reads or changes text</td>
                        </tr>

                        <tr>
                            <td>innerHTML</td>
                            <td>Reads or changes HTML</td>
                        </tr>

                        <tr>
                            <td>setAttribute()</td>
                            <td>Sets an attribute</td>
                        </tr>

                        <tr>
                            <td>getAttribute()</td>
                            <td>Gets an attribute</td>
                        </tr>

                        <tr>
                            <td>createElement()</td>
                            <td>Creates a new element</td>
                        </tr>

                        <tr>
                            <td>appendChild()</td>
                            <td>Adds a child element</td>
                        </tr>

                        <tr>
                            <td>classList</td>
                            <td>Manages CSS classes</td>
                        </tr>

                    </tbody>

                </table>

            </div>


            <h2 className="mt-4">
                Real-World Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const button =
    document.querySelector("#button");

const message =
    document.querySelector("#message");

message.textContent =
    "Ready to start!";

button.classList.add("active");`}
            </pre>


            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        DOM stands for Document Object Model.
                    </li>

                    <li>
                        JavaScript can access and modify HTML elements.
                    </li>

                    <li>
                        querySelector() and querySelectorAll() are commonly
                        used to select elements.
                    </li>

                    <li>
                        textContent and innerHTML can modify content.
                    </li>

                    <li>
                        JavaScript can dynamically create and remove elements.
                    </li>

                    <li>
                        classList is useful for managing CSS classes.
                    </li>

                    <li>
                        DOM manipulation makes web pages dynamic and interactive.
                    </li>

                </ul>

            </div>

        </div>
    );
};

export default DOM;