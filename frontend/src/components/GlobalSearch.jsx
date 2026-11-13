import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const topics = [
  // HTML
  { language: "HTML", title: "Introduction", id: "introduction", path: "/html" },
  { language: "HTML", title: "HTML Structure", id: "structure", path: "/html" },
  { language: "HTML", title: "Headings", id: "headings", path: "/html" },
  { language: "HTML", title: "Paragraph", id: "paragraph", path: "/html" },
  { language: "HTML", title: "Links", id: "links", path: "/html" },
  { language: "HTML", title: "Images", id: "images", path: "/html" },
  { language: "HTML", title: "Lists", id: "lists", path: "/html" },
  { language: "HTML", title: "Tables", id: "tables", path: "/html" },
  { language: "HTML", title: "Forms", id: "forms", path: "/html" },
  { language: "HTML", title: "Semantic HTML", id: "semantic", path: "/html" },
  { language: "HTML", title: "Audio & Video", id: "media", path: "/html" },
  { language: "HTML", title: "Iframes", id: "iframes", path: "/html" },

  // JavaScript
  { language: "JavaScript", title: "Introduction", id: "introduction", path: "/javascript" },
  { language: "JavaScript", title: "Variables", id: "variables", path: "/javascript" },
  { language: "JavaScript", title: "Data Types", id: "data-types", path: "/javascript" },
  { language: "JavaScript", title: "Operators", id: "operators", path: "/javascript" },
  { language: "JavaScript", title: "Conditional Statements", id: "conditionals", path: "/javascript" },
  { language: "JavaScript", title: "Loops", id: "loops", path: "/javascript" },
  { language: "JavaScript", title: "Functions", id: "functions", path: "/javascript" },
  { language: "JavaScript", title: "Arrow Functions", id: "arrow-functions", path: "/javascript" },
  { language: "JavaScript", title: "Arrays", id: "arrays", path: "/javascript" },
  { language: "JavaScript", title: "Array Methods", id: "array-methods", path: "/javascript" },
  { language: "JavaScript", title: "Objects", id: "objects", path: "/javascript" },
  { language: "JavaScript", title: "Object Methods", id: "object-methods", path: "/javascript" },
  { language: "JavaScript", title: "Strings & String Methods", id: "strings", path: "/javascript" },
  { language: "JavaScript", title: "Destructuring", id: "destructuring", path: "/javascript" },
  { language: "JavaScript", title: "Spread & Rest Operators", id: "spread-rest", path: "/javascript" },
  { language: "JavaScript", title: "DOM Manipulation", id: "dom", path: "/javascript" },
  { language: "JavaScript", title: "Events", id: "events", path: "/javascript" },
  { language: "JavaScript", title: "Modern JavaScript / ES6+", id: "es6", path: "/javascript" },
  { language: "JavaScript", title: "Asynchronous JavaScript", id: "asynchronous-js", path: "/javascript" },
  { language: "JavaScript", title: "Promises, async/await & Fetch API", id: "promises-async-await", path: "/javascript" },

  // React
  { language: "React", title: "Introduction", id: "introduction", path: "/react" },
  { language: "React", title: "What is React?", id: "what-is-react", path: "/react" },
  { language: "React", title: "Installation & Setup", id: "installation", path: "/react" },
  { language: "React", title: "Components", id: "components", path: "/react" },
  { language: "React", title: "JSX", id: "jsx", path: "/react" },
  { language: "React", title: "Props", id: "props", path: "/react" },
  { language: "React", title: "State", id: "state", path: "/react" },
  { language: "React", title: "Events", id: "events", path: "/react" },
  { language: "React", title: "Conditional Rendering", id: "conditional-rendering", path: "/react" },
  { language: "React", title: "Lists & Keys", id: "lists-keys", path: "/react" },
  { language: "React", title: "Forms", id: "forms", path: "/react" },
  { language: "React", title: "Hooks", id: "hooks", path: "/react" },
  { language: "React", title: "Component Lifecycle", id: "component-lifecycle", path: "/react" },
  { language: "React", title: "useState Hook", id: "use-state", path: "/react" },
  { language: "React", title: "useEffect Hook", id: "use-effect", path: "/react" },
  { language: "React", title: "useContext Hook", id: "use-context", path: "/react" },
  { language: "React", title: "React Router", id: "react-router", path: "/react" },
  { language: "React", title: "API Integration", id: "api-integration", path: "/react" },

  // Node.js
  { language: "Node.js", title: "Introduction", id: "introduction", path: "/node" },
  { language: "Node.js", title: "What is Node.js?", id: "what-is-node", path: "/node" },
  { language: "Node.js", title: "Installation", id: "installation", path: "/node" },
  { language: "Node.js", title: "Node.js Architecture", id: "architecture", path: "/node" },
  { language: "Node.js", title: "Event Loop", id: "event-loop", path: "/node" },
  { language: "Node.js", title: "Modules", id: "modules", path: "/node" },
  { language: "Node.js", title: "CommonJS vs ES Modules", id: "commonjs-esmodules", path: "/node" },
  { language: "Node.js", title: "npm", id: "npm", path: "/node" },
  { language: "Node.js", title: "package.json", id: "package-json", path: "/node" },
  { language: "Node.js", title: "File System", id: "file-system", path: "/node" },
  { language: "Node.js", title: "Events", id: "events", path: "/node" },
  { language: "Node.js", title: "HTTP Module", id: "http-module", path: "/node" },
  { language: "Node.js", title: "Express.js Introduction", id: "express-introduction", path: "/node" },
];

const GlobalSearch = () => {
  const [search, setSearch] = useState("");
  const [showResults, setShowResults] = useState(false);

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const filteredTopics = topics.filter((topic) => {
    const query = search.trim().toLowerCase();

    return (
      topic.title.toLowerCase().includes(query) ||
      topic.language.toLowerCase().includes(query)
    );
  }).slice(0, 8);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectTopic = (topic) => {
    navigate(topic.path, {
      state: {
        selectedTopic: topic.id,
      },
    });

    setSearch("");
    setShowResults(false);
  };

  return (
    <div
      className="position-relative"
      ref={searchRef}
      style={{ width: "280px" }}
    >
      <input
        type="search"
        className="form-control"
        placeholder="Search topics..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setShowResults(true);
        }}
        onFocus={() => setShowResults(true)}
      />

      {showResults && search.trim() !== "" && (
        <div
          className="position-absolute bg-white shadow border rounded mt-2 w-100"
          style={{
            zIndex: 1050,
            maxHeight: "350px",
            overflowY: "auto",
          }}
        >
          {filteredTopics.length > 0 ? (
            filteredTopics.map((topic, index) => (
              <button
                key={`${topic.language}-${topic.id}-${index}`}
                type="button"
                className="w-100 text-start border-0 bg-white px-3 py-2"
                onClick={() => handleSelectTopic(topic)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f1f5f9";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                }}
              >
                <div className="fw-semibold">{topic.title}</div>
                <small className="text-muted">{topic.language}</small>
              </button>
            ))
          ) : (
            <div className="text-center text-muted p-3">
              No topics found
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GlobalSearch;