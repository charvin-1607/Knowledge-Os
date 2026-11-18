
import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
    const colors = {
        primary: "#4F46E5",
        dark: "#1E293B",
        muted: "#64748B",
        background: "#F1F5F9",
        border: "#E2E8F0"
    };

    const cardStyle = {
        background: "#FFFFFF",
        border: `1px solid ${colors.border}`,
        borderRadius: "18px",
        boxShadow: "0 5px 20px rgba(15,23,42,0.04)"
    };

    const technologies = [
        {
            name: "HTML",
            icon: "🌐",
            description: "Learn the basic structure of web pages using HTML. Explore elements, attributes, headings, paragraphs, links, images, forms and other important concepts used to create websites.",
            path: "/html",
            button: "Learn HTML",
            color: "#4F46E5",
            background: "#EEF2FF",
            iconBackground: "#E0E7FF"
        },
        {
            name: "JavaScript",
            icon: "⚡",
            description: "Understand JavaScript fundamentals and learn how it is used to add logic and interactivity to web applications. Explore variables, functions, arrays, objects and more.",
            path: "/javascript",
            button: "Learn JavaScript",
            color: "#B45309",
            background: "#FFFBEB",
            iconBackground: "#FEF3C7"
        },
        {
            name: "Node.js",
            icon: "🟢",
            description: "Learn how JavaScript can be used on the server side with Node.js. Explore modules, Express.js, APIs, middleware and basic backend development concepts.",
            path: "/node",
            button: "Learn Node.js",
            color: "#15803D",
            background: "#F0FDF4",
            iconBackground: "#DCFCE7"
        },
        {
            name: "React.js",
            icon: "⚛️",
            description: "Learn React.js for building modern and interactive user interfaces. Explore components, props, state, hooks, routing and other important React concepts.",
            path: "/react",
            button: "Learn React",
            color: "#0369A1",
            background: "#F0F9FF",
            iconBackground: "#E0F2FE"
        }
    ];

    return (
        <div
            className="container-fluid px-3 px-lg-4 py-4 py-lg-5"
            style={{
                background: colors.background,
                minHeight: "100%"
            }}
        >
            <div className="container">

                {/* HERO SECTION */}
                <section
                    className="position-relative overflow-hidden text-center p-4 p-md-5 mb-5"
                    style={{
                        background: "linear-gradient(120deg, #FFFFFF 0%, #EEF2FF 100%)",
                        border: "1px solid #E0E7FF",
                        borderRadius: "24px",
                        boxShadow: "0 8px 30px rgba(79,70,229,0.06)"
                    }}
                >
                    <div
                        className="d-inline-flex align-items-center gap-2 px-3 py-2 rounded-pill mb-4"
                        style={{
                            background: "#E0E7FF",
                            color: "#4338CA",
                            fontSize: "13px",
                            fontWeight: "600"
                        }}
                    >
                        <i className="bi bi-stars"></i>
                        YOUR PERSONAL KNOWLEDGE SPACE
                    </div>

                    <h1
                        className="fw-bold mb-3"
                        style={{
                            color: colors.dark,
                            fontSize: "clamp(2rem, 5vw, 3.5rem)",
                            letterSpacing: "-1.5px"
                        }}
                    >
                        Welcome to Knowledge OS 🚀
                    </h1>

                    <p
                        className="mx-auto mt-3 mb-3"
                        style={{
                            color: colors.muted,
                            fontSize: "clamp(1rem, 2vw, 1.2rem)",
                            maxWidth: "750px",
                            lineHeight: "1.8"
                        }}
                    >
                        Your personal space to learn, organize and manage
                        programming knowledge in one place.
                    </p>

                    <p
                        className="mx-auto mb-0"
                        style={{
                            color: colors.muted,
                            maxWidth: "800px",
                            lineHeight: "1.8"
                        }}
                    >
                        Knowledge OS is a simple learning platform designed for
                        students and developers. It provides basic learning
                        resources for popular web development technologies and
                        allows you to create and manage your own programming notes.
                    </p>

                    <div
                        className="d-flex justify-content-center flex-wrap gap-3 mt-4"
                    >
                        <span className="small fw-medium" style={{ color: "#64748B" }}>
                            <i className="bi bi-book-half me-2" style={{ color: colors.primary }}></i>
                            Learn
                        </span>

                        <span className="small fw-medium" style={{ color: "#64748B" }}>
                            <i className="bi bi-lightbulb me-2" style={{ color: colors.primary }}></i>
                            Explore
                        </span>

                        <span className="small fw-medium" style={{ color: "#64748B" }}>
                            <i className="bi bi-journal-check me-2" style={{ color: colors.primary }}></i>
                            Organize
                        </span>
                    </div>
                </section>

                {/* WHAT IS KNOWLEDGE OS */}
                <section className="mb-5">
                    <div className="p-4 p-md-5" style={cardStyle}>

                        <div className="d-flex align-items-center gap-3 mb-4">
                            <div
                                className="d-flex align-items-center justify-content-center rounded-3"
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "#EEF2FF",
                                    color: colors.primary,
                                    fontSize: "23px",
                                    flexShrink: 0
                                }}
                            >
                                <i className="bi bi-journal-bookmark-fill"></i>
                            </div>

                            <h2 className="fw-bold mb-0" style={{ color: colors.dark }}>
                                📚 What is Knowledge OS?
                            </h2>
                        </div>

                        <p style={{ color: colors.muted, lineHeight: "1.9" }}>
                            Knowledge OS is a small personal knowledge management
                            system where you can explore programming concepts,
                            learn important topics and save your own notes.
                            Instead of keeping learning material in different
                            places, you can use this application as a simple
                            central place for your technical knowledge.
                        </p>

                        <p className="mb-0" style={{ color: colors.muted, lineHeight: "1.9" }}>
                            The platform focuses mainly on web development
                            technologies such as HTML, JavaScript, Node.js,
                            React.js and MongoDB. Each technology contains
                            different topics that can be explored individually.
                        </p>

                    </div>
                </section>

                {/* TECHNOLOGIES HEADING */}
                <section className="text-center mb-4">
                    <span
                        className="badge rounded-pill px-3 py-2 mb-3"
                        style={{
                            background: "#E0E7FF",
                            color: "#4338CA"
                        }}
                    >
                        START LEARNING
                    </span>

                    <h2
                        className="fw-bold mb-2"
                        style={{ color: colors.dark }}
                    >
                        💻 Explore Technologies
                    </h2>

                    <p className="mb-0" style={{ color: colors.muted }}>
                        Choose a technology and start exploring its important
                        concepts and topics.
                    </p>
                </section>

                {/* TECHNOLOGY CARDS */}
                <div className="row g-4 mb-4">

                    {technologies.map((tech) => (
                        <div
                            className="col-12 col-sm-6 col-xl-3"
                            key={tech.name}
                        >
                            <div
                                className="h-100 p-4 d-flex flex-column"
                                style={{
                                    ...cardStyle,
                                    transition: "all 0.25s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "translateY(-6px)";
                                    e.currentTarget.style.boxShadow = "0 14px 30px rgba(15,23,42,0.09)";
                                    e.currentTarget.style.borderColor = "#C7D2FE";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "0 5px 20px rgba(15,23,42,0.04)";
                                    e.currentTarget.style.borderColor = colors.border;
                                }}
                            >
                                <div
                                    className="d-flex align-items-center justify-content-center rounded-4 mb-4"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        background: tech.iconBackground,
                                        fontSize: "32px"
                                    }}
                                >
                                    {tech.icon}
                                </div>

                                <h3
                                    className="fw-bold mb-3"
                                    style={{
                                        color: colors.dark,
                                        fontSize: "21px"
                                    }}
                                >
                                    {tech.name}
                                </h3>

                                <p
                                    className="flex-grow-1 mb-4"
                                    style={{
                                        color: colors.muted,
                                        lineHeight: "1.8",
                                        fontSize: "14px"
                                    }}
                                >
                                    {tech.description}
                                </p>

                                <NavLink
                                    to={tech.path}
                                    className="btn fw-semibold w-100 py-2"
                                    style={{
                                        color: tech.color,
                                        background: tech.background,
                                        border: `1px solid ${tech.iconBackground}`,
                                        borderRadius: "10px"
                                    }}
                                >
                                    {tech.button}
                                    <i className="bi bi-arrow-right ms-2"></i>
                                </NavLink>
                            </div>
                        </div>
                    ))}

                </div>

                {/* MONGODB */}
                <section className="mb-5">
                    <div
                        className="p-4 p-md-5"
                        style={cardStyle}
                    >
                        <div className="row align-items-center g-4">

                            <div className="col-12 col-md-2 text-center">
                                <div
                                    className="mx-auto d-flex align-items-center justify-content-center rounded-4"
                                    style={{
                                        width: "85px",
                                        height: "85px",
                                        background: "#ECFDF5",
                                        fontSize: "43px"
                                    }}
                                >
                                    🍃
                                </div>
                            </div>

                            <div className="col-12 col-md-10">
                                <div className="d-flex align-items-center flex-wrap gap-2 mb-2">
                                    <h3
                                        className="fw-bold mb-0"
                                        style={{ color: colors.dark }}
                                    >
                                        MongoDB
                                    </h3>

                                    <span
                                        className="badge rounded-pill px-3 py-2"
                                        style={{
                                            background: "#DCFCE7",
                                            color: "#15803D"
                                        }}
                                    >
                                        Database
                                    </span>
                                </div>

                                <p
                                    className="mb-0"
                                    style={{
                                        color: colors.muted,
                                        lineHeight: "1.9"
                                    }}
                                >
                                    MongoDB is a NoSQL database commonly used
                                    with Node.js and React applications.
                                    Learn the basic concepts of databases,
                                    collections, documents, CRUD operations
                                    and how applications store data.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>

                {/* NOTES SECTION */}
                <section
                    className="text-center p-4 p-md-5 mb-5"
                    style={{
                        background: "linear-gradient(135deg, #EEF2FF, #FFFFFF)",
                        border: "1px solid #E0E7FF",
                        borderRadius: "20px",
                        boxShadow: "0 6px 22px rgba(79,70,229,0.05)"
                    }}
                >
                    <div
                        className="mx-auto d-flex align-items-center justify-content-center rounded-4 mb-4"
                        style={{
                            width: "65px",
                            height: "65px",
                            background: "#E0E7FF",
                            color: colors.primary,
                            fontSize: "28px"
                        }}
                    >
                        <i className="bi bi-journal-text"></i>
                    </div>

                    <h2 className="fw-bold" style={{ color: colors.dark }}>
                        📝 Keep Your Own Notes
                    </h2>

                    <p
                        className="mx-auto mt-3"
                        style={{
                            color: colors.muted,
                            maxWidth: "750px",
                            lineHeight: "1.9"
                        }}
                    >
                        While learning different technologies, you can create
                        your own notes and save important information.
                        You can later view, update or delete your notes
                        whenever you want.
                    </p>

                    <p style={{ color: colors.muted }}>
                        This makes Knowledge OS not only a learning platform
                        but also a personal programming notebook.
                    </p>

                    <NavLink
                        to="/notes"
                        className="btn text-white fw-semibold px-4 py-2 mt-2"
                        style={{
                            background: colors.primary,
                            borderRadius: "10px",
                            boxShadow: "0 5px 14px rgba(79,70,229,0.18)"
                        }}
                    >
                        <i className="bi bi-journal-arrow-up me-2"></i>
                        Open My Notes
                        <i className="bi bi-arrow-right ms-2"></i>
                    </NavLink>
                </section>


            </div>
          
        </div>
    );
};

export default Home;
