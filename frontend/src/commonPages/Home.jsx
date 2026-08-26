import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5">

            {/* Hero Section */}
            <div className="text-center mb-5 border border-dark rounded-3 shadow-sm p-5">

                <h1 className="display-4 fw-bold">
                    Welcome to Knowledge OS 🚀
                </h1>

                <p className="lead text-muted mt-3">
                    Your personal space to learn, organize and manage
                    programming knowledge in one place.
                </p>

                <p className="text-muted mx-auto mb-0" style={{ maxWidth: "800px" }}>
                    Knowledge OS is a simple learning platform designed for
                    students and developers. It provides basic learning
                    resources for popular web development technologies and
                    allows you to create and manage your own programming notes.
                </p>

            </div>


            {/* What is Knowledge OS */}
            <div className="card shadow-sm border border-dark rounded-3 mb-5">

                <div className="card-body p-4">

                    <h2 className="mb-3">
                        📚 What is Knowledge OS?
                    </h2>

                    <p className="text-muted">
                        Knowledge OS is a small personal knowledge management
                        system where you can explore programming concepts,
                        learn important topics and save your own notes.
                        Instead of keeping learning material in different
                        places, you can use this application as a simple
                        central place for your technical knowledge.
                    </p>

                    <p className="text-muted mb-0">
                        The platform focuses mainly on web development
                        technologies such as HTML, JavaScript, Node.js,
                        React.js and MongoDB. Each technology contains
                        different topics that can be explored individually.
                    </p>

                </div>

            </div>


            {/* Technologies Section */}
            <div className="text-center mb-4 border border-dark rounded-3 shadow-sm p-4">

                <h2 className="fw-bold">
                    💻 Explore Technologies
                </h2>

                <p className="text-muted mb-0">
                    Choose a technology and start exploring its important
                    concepts and topics.
                </p>

            </div>


            <div className="row g-4">

                {/* HTML */}
                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border border-dark rounded-3 h-100">

                        <div className="card-body text-center p-4 d-flex flex-column">

                            <div className="display-5 mb-3">
                                🌐
                            </div>

                            <h3>HTML</h3>

                            <p className="text-muted flex-grow-1">
                                Learn the basic structure of web pages using
                                HTML. Explore elements, attributes, headings,
                                paragraphs, links, images, forms and other
                                important concepts used to create websites.
                            </p>

                            <NavLink
                                to="/html"
                                className="btn btn-primary"
                            >
                                Learn HTML
                            </NavLink>

                        </div>

                    </div>

                </div>


                {/* JavaScript */}
                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border border-dark rounded-3 h-100">

                        <div className="card-body text-center p-4 d-flex flex-column">

                            <div className="display-5 mb-3">
                                ⚡
                            </div>

                            <h3>JavaScript</h3>

                            <p className="text-muted flex-grow-1">
                                Understand JavaScript fundamentals and learn
                                how it is used to add logic and interactivity
                                to web applications. Explore variables,
                                functions, arrays, objects and more.
                            </p>

                            <NavLink
                                to="/javascript"
                                className="btn btn-warning"
                            >
                                Learn JavaScript
                            </NavLink>

                        </div>

                    </div>

                </div>


                {/* Node.js */}
                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border border-dark rounded-3 h-100">

                        <div className="card-body text-center p-4 d-flex flex-column">

                            <div className="display-5 mb-3">
                                🟢
                            </div>

                            <h3>Node.js</h3>

                            <p className="text-muted flex-grow-1">
                                Learn how JavaScript can be used on the
                                server side with Node.js. Explore modules,
                                Express.js, APIs, middleware and basic
                                backend development concepts.
                            </p>

                            <NavLink
                                to="/node"
                                className="btn btn-success"
                            >
                                Learn Node.js
                            </NavLink>

                        </div>

                    </div>

                </div>


                {/* React */}
                <div className="col-md-6 col-lg-3">

                    <div className="card shadow-sm border border-dark rounded-3 h-100">

                        <div className="card-body text-center p-4 d-flex flex-column">

                            <div className="display-5 mb-3">
                                ⚛️
                            </div>

                            <h3>React.js</h3>

                            <p className="text-muted flex-grow-1">
                                Learn React.js for building modern and
                                interactive user interfaces. Explore
                                components, props, state, hooks, routing
                                and other important React concepts.
                            </p>

                            <NavLink
                                to="/react"
                                className="btn btn-info"
                            >
                                Learn React
                            </NavLink>

                        </div>

                    </div>

                </div>

            </div>


            {/* MongoDB */}
            <div className="card shadow-sm border border-dark rounded-3 mt-4 mb-5">

                <div className="card-body p-4">

                    <div className="row align-items-center">

                        <div className="col-md-2 text-center">

                            <div className="display-3">
                                🍃
                            </div>

                        </div>

                        <div className="col-md-10">

                            <h3>
                                MongoDB
                            </h3>

                            <p className="text-muted mb-2">
                                MongoDB is a NoSQL database commonly used
                                with Node.js and React applications.
                                Learn the basic concepts of databases,
                                collections, documents, CRUD operations
                                and how applications store data.
                            </p>

                            <span className="badge bg-secondary">
                                Database
                            </span>

                        </div>

                    </div>

                </div>

            </div>


            {/* Notes Section */}
            <div className="card shadow border border-dark rounded-3 mb-5">

                <div className="card-body text-center p-5">

                    <h2 className="fw-bold">
                        📝 Keep Your Own Notes
                    </h2>

                    <p
                        className="text-muted mx-auto mt-3"
                        style={{ maxWidth: "750px" }}
                    >
                        While learning different technologies, you can create
                        your own notes and save important information.
                        You can later view, update or delete your notes
                        whenever you want.
                    </p>

                    <p className="text-muted">
                        This makes Knowledge OS not only a learning platform
                        but also a personal programming notebook.
                    </p>

                    <NavLink
                        to="/notes"
                        className="btn btn-dark mt-2"
                    >
                        Open My Notes
                    </NavLink>

                </div>

            </div>


            {/* Footer Message */}
            <div className="text-center text-muted border border-dark rounded-3 shadow-sm p-4 mb-5">

                <p className="mb-0">
                    🚀 Learn something new every day and build your
                    programming knowledge.
                </p>

            </div>

        </div>
    );
};

export default Home;