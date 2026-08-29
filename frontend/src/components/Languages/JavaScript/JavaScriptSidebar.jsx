import React from "react";


const JavaScriptSidebar = ({
    selectedTopic,
    setSelectedTopic
}) => {


    const topics = [

        {
            id: "introduction",
            name: "Introduction"
        },

        {
            id: "variables",
            name: "Variables"
        },

        {
            id: "data-types",
            name: "Data Types"
        },

        {
            id: "operators",
            name: "Operators"
        },

        {
            id: "conditionals",
            name: "Conditional Statements"
        },

        {
            id: "loops",
            name: "Loops"
        },

        {
            id: "functions",
            name: "Functions"
        },

        {
            id: "arrow-functions",
            name: "Arrow Functions"
        },

        {
            id: "arrays",
            name: "Arrays"
        },

        {
            id: "array-methods",
            name: "Array Methods"
        },

        {
            id: "objects",
            name: "Objects"
        },

        {
            id: "object-methods",
            name: "Object Methods"
        },

        {
            id: "strings",
            name: "Strings & String Methods"
        },

        {
            id: "destructuring",
            name: "Destructuring"
        },

        {
            id: "spread-rest",
            name: "Spread & Rest Operators"
        },

        {
            id: "dom",
            name: "DOM Manipulation"
        },

        {
            id: "events",
            name: "Events"
        },

        {
            id: "es6",
            name: "Modern JavaScript / ES6+"
        },

        {
            id: "asynchronous-js",
            name: "Asynchronous JavaScript"
        },

        {
            id: "promises-async-await",
            name: "Promises, async/await & Fetch API"
        }

    ];


    return (

        <div className="card shadow-sm">

            <div className="card-header bg-dark text-white">

                <h5 className="mb-0">
                    JavaScript Topics
                </h5>

            </div>


            <div className="card-body p-2">

                <ul className="list-group list-group-flush">

                    {topics.map((topic) => (

                        <li
                            key={topic.id}
                            className={`list-group-item list-group-item-action ${
                                selectedTopic === topic.id
                                    ? "active"
                                    : ""
                            }`}
                            onClick={() =>
                                setSelectedTopic(topic.id)
                            }
                            style={{
                                cursor: "pointer"
                            }}
                        >

                            {topic.name}

                        </li>

                    ))}

                </ul>

            </div>

        </div>

    );
};


export default JavaScriptSidebar;