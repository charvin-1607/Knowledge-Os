import React from "react";

const NodeSidebar = ({ selectedTopic, setSelectedTopic }) => {

    const topics = [
        { id: "introduction", name: "Introduction" },
        { id: "what-is-node", name: "What is Node.js?" },
        { id: "installation", name: "Installation" },
        { id: "architecture", name: "Node.js Architecture" },
        { id: "event-loop", name:"Event Loop"},
        { id: "modules", name: "Modules" },
        { id: "commonjs-esmodules", name: "CommonJS vs ES Modules" },
        { id: "npm", name: "npm" },
        { id: "package-json", name: "package.json" },
        { id: "file-system", name: "File System" },
        { id: "events", name: "Events" },
        { id: "http-module", name: "HTTP Module" },
        { id: "express-introduction", name: "Express.js Introduction" }
    ];

    return (

        <div className="card shadow-sm border border-dark">

            <div className="card-header bg-dark text-white">
                <h5 className="mb-0">
                    Node.js Topics
                </h5>
            </div>

            <div className="card-body p-0">

                <ul className="list-group list-group-flush">

                    {topics.map((topic) => (

                        <li
                            key={topic.id}
                            className={`list-group-item ${
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

export default NodeSidebar;