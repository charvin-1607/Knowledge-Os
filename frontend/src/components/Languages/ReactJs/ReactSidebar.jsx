import React from "react";


const ReactSidebar = ({
    selectedTopic,
    setSelectedTopic
}) => {


    const topics = [

        {
            id: "introduction",
            name: "Introduction"
        },

        {
            id: "what-is-react",
            name: "What is React?"
        },

        {
            id: "installation",
            name: "Installation & Setup"
        },

        {
            id: "components",
            name: "Components"
        },

        {
            id: "jsx",
            name: "JSX"
        },

        {
            id: "props",
            name: "Props"
        },

        {
            id: "state",
            name: "State"
        },

        {
            id: "events",
            name: "Events"
        },

        {
            id: "conditional-rendering",
            name: "Conditional Rendering"
        },

        {
            id: "lists-keys",
            name: "Lists & Keys"
        },

        {
            id: "forms",
            name: "Forms"
        },

        {
            id: "hooks",
            name: "Hooks"
        },

        {
           id: "component-lifecycle",
           name: "Component Lifecycle" 
        },

        {
            id: "use-state",
            name: "useState Hook"
        },

        {
            id: "use-effect",
            name: "useEffect Hook"
        },

        {
            id: "use-context",
            name: "useContext Hook"
        },

        {
            id: "react-router",
            name: "React Router"
        },

        {
            id: "api-integration",
            name: "API Integration"
        }

    ];


    return (

        <div className="card shadow-sm border border-dark">

            <div className="card-header bg-dark text-white">

                <h5 className="mb-0">
                    React.js Topics
                </h5>

            </div>


            <div className="card-body p-2">

                <ul className="list-group list-group-flush">

                    {topics.map((topic) => (

                        <li
                            key={topic.id}
                            onClick={() =>
                                setSelectedTopic(topic.id)
                            }
                            className={`list-group-item list-group-item-action ${
                                selectedTopic === topic.id
                                    ? "active"
                                    : ""
                            }`}
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


export default ReactSidebar;