import React from 'react'

const About = () => {
  return (
    <div className="container mt-5 mb-5">

      {/* About Header */}

      <div className="text-center border border-dark rounded-3 shadow-sm p-5 mb-5">

        <h1 className="display-5 fw-bold">
          About This Project 💡
        </h1>

        <p className="lead text-muted mt-3 mb-0">
          Built with the idea of turning everyday learning into an
          organized and useful digital experience.
        </p>

      </div>


      {/* The Idea Behind Knowledge OS */}

      <div className="card border border-dark rounded-3 shadow-sm mb-4">

        <div className="card-body p-4">

          <h2 className="mb-3">
            💭 The Idea Behind Knowledge OS
          </h2>

          <p className="text-muted">
            Learning programming often means working with a large amount
            of information. Developers read documentation, watch tutorials,
            practice code and write notes while learning new concepts.
          </p>

          <p className="text-muted mb-0">
            Knowledge OS was created as an attempt to bring that learning
            process into a more structured environment. The idea is simple:
            learn a concept, understand it, practice it and keep the
            important information available for later.
          </p>

        </div>

      </div>


      {/* Learning Approach */}

      <div className="card border border-dark rounded-3 shadow-sm mb-4">

        <div className="card-body p-4">

          <h2 className="mb-4">
            🧠 A Better Way to Learn
          </h2>

          <div className="row g-4">

            <div className="col-md-6">

              <div className="border border-dark rounded-3 p-4 h-100">

                <h4>
                  01. Learn
                </h4>

                <p className="text-muted mb-0">
                  Start with a topic and understand the basic concept
                  before moving towards more advanced ideas.
                </p>

              </div>

            </div>


            <div className="col-md-6">

              <div className="border border-dark rounded-3 p-4 h-100">

                <h4>
                  02. Understand
                </h4>

                <p className="text-muted mb-0">
                  Focus on understanding how a concept works instead of
                  simply memorizing syntax or definitions.
                </p>

              </div>

            </div>


            <div className="col-md-6">

              <div className="border border-dark rounded-3 p-4 h-100">

                <h4>
                  03. Practice
                </h4>

                <p className="text-muted mb-0">
                  Apply the knowledge by writing code and experimenting
                  with different examples.
                </p>

              </div>

            </div>


            <div className="col-md-6">

              <div className="border border-dark rounded-3 p-4 h-100">

                <h4>
                  04. Remember
                </h4>

                <p className="text-muted mb-0">
                  Save useful information as personal notes so it can be
                  reviewed whenever it is needed.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* What Makes It Different */}

      <div className="card border border-dark rounded-3 shadow-sm mb-4">

        <div className="card-body p-4">

          <h2 className="mb-4">
            ✨ What Makes It Different?
          </h2>

          <div className="row g-4">

            <div className="col-md-4">

              <div className="text-center p-3">

                <div className="display-6 mb-3">
                  📖
                </div>

                <h5>
                  Simple Learning
                </h5>

                <p className="text-muted mb-0">
                  Information is presented in a simple and organized
                  way so that concepts are easier to follow.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="text-center p-3">

                <div className="display-6 mb-3">
                  🗂️
                </div>

                <h5>
                  Organized Knowledge
                </h5>

                <p className="text-muted mb-0">
                  Topics and personal information can be kept together
                  instead of being scattered across different places.
                </p>

              </div>

            </div>


            <div className="col-md-4">

              <div className="text-center p-3">

                <div className="display-6 mb-3">
                  📝
                </div>

                <h5>
                  Personal Notes
                </h5>

                <p className="text-muted mb-0">
                  Important concepts can be saved as personal notes
                  and managed whenever required.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Project Philosophy */}

      <div className="card border border-dark rounded-3 shadow-sm mb-4">

        <div className="card-body p-4">

          <h2 className="mb-3">
            🛠️ Project Philosophy
          </h2>

          <p className="text-muted">
            This project focuses on keeping things practical rather than
            making the interface unnecessarily complicated. Every part of
            the application is designed around a simple goal: helping the
            user spend more time learning and less time managing learning
            resources.
          </p>

          <p className="text-muted mb-0">
            The project is also designed as a practical development
            experience where frontend development, backend APIs,
            authentication, database operations and application structure
            can come together in one application.
          </p>

        </div>

      </div>


      {/* Future Plans */}

      <div className="card border border-dark rounded-3 shadow-sm mb-4">

        <div className="card-body p-4">

          <h2 className="mb-3">
            🚀 Future Plans
          </h2>

          <p className="text-muted">
            Knowledge OS can continue to grow beyond its current learning
            and note-taking functionality. Future improvements can focus
            on making the platform more interactive and useful for long-term
            learning.
          </p>

          <div className="mt-4">

            <span className="badge bg-dark me-2 mb-2">
              More Technologies
            </span>

            <span className="badge bg-dark me-2 mb-2">
              Search
            </span>

            <span className="badge bg-dark me-2 mb-2">
              Progress Tracking
            </span>

            <span className="badge bg-dark me-2 mb-2">
              Bookmarks
            </span>

            <span className="badge bg-dark me-2 mb-2">
              Code Examples
            </span>

            <span className="badge bg-dark me-2 mb-2">
              Learning Dashboard
            </span>

          </div>

        </div>

      </div>


      {/* Closing Section */}

      <div className="text-center border border-dark rounded-3 shadow-sm p-5">

        <h2 className="fw-bold">
          Keep Learning. Keep Building. 🚀
        </h2>

        <p className="text-muted mt-3 mb-0 mx-auto" style={{ maxWidth: "750px" }}>
          Knowledge grows through consistent learning and practical
          experience. Knowledge OS is built around that idea — learn
          something useful, build something with it and keep moving forward.
        </p>

      </div>

    </div>
  )
}

export default About