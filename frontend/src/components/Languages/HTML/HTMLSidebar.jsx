const HTMLSidebar = ({ selectedTopic, setSelectedTopic }) => {

    const topics = [
        {
            id: "introduction",
            title: "Introduction"
        },
        {
            id: "structure",
            title: "HTML Structure"
        },
        {
            id: "headings",
            title: "Headings"
        },
        {
            id: "paragraph",
            title: "Paragraph"
        },
        {
            id: "links",
            title: "Links"
        },
        {
            id: "images",
            title: "Images"
        },
        {
            id: "lists",
            title: "Lists"
        },
        {
            id: "tables",
            title: "Tables"
        },
        {
            id: "forms",
            title: "Forms"
        },
        {
            id: "semantic",
            title: "Semantic HTML"
        },
        {
            id: "media",
            title: "Audio & Video"
        },
        {
            id: "iframes",
            title: "Iframes"
        }
    ];

    return (
        <>
        <div className="card shadow-sm border border-dark">
    
            {/* Sidebar Header */}
            <div className="card-header bg-dark text-white border-dark">
                <h5 className="mb-0">
                    HTML Topics
                </h5>
            </div>
    
            {/* Topics */}
            <div className="list-group list-group-flush">
    
                {topics.map((topic) => (
    
                    <button
                        key={topic.id}
                        type="button"
                        className={`list-group-item list-group-item-action border-bottom ${
                            selectedTopic === topic.id
                                ? "active"
                                : ""
                        }`}
                        onClick={() => setSelectedTopic(topic.id)}
                    >
                        {topic.title}
                    </button>
    
                ))}
    
            </div>
    
        </div>

        </>
    );
};

export default HTMLSidebar;