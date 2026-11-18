
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const technologies = [
    { name: 'HTML', path: '/html' },
    { name: 'JavaScript', path: '/javascript' },
    { name: 'Node.js', path: '/node' },
    { name: 'React.js', path: '/react' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'My Notes', path: '/notes' },
  ];

  return (
    <footer
      style={{
        backgroundColor: '#0F172A',
        color: '#CBD5E1',
        marginTop: 'auto',
      }}
    >
      <div className="container py-5">
        <div className="row g-5">

          {/* BRAND SECTION */}
          <div className="col-lg-4 col-md-6">

            <Link
              to="/"
              className="text-decoration-none d-inline-flex align-items-center gap-2 mb-3"
            >
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: '43px',
                  height: '43px',
                  borderRadius: '13px',
                  backgroundColor: '#4F46E5',
                  color: '#FFFFFF',
                  fontSize: '21px',
                }}
              >
                <i className="bi bi-journal-bookmark-fill"></i>
              </div>

              <span
                className="fw-bold fs-4"
                style={{ color: '#FFFFFF' }}
              >
                Knowledge <span style={{ color: '#818CF8' }}>OS</span>
              </span>
            </Link>

            <p
              className="mb-4"
              style={{
                color: '#94A3B8',
                lineHeight: '1.8',
                maxWidth: '350px',
              }}
            >
              Your personal space to learn, organize and manage
              programming knowledge in one place.
            </p>

            <div className="d-flex align-items-center gap-2">
              <div
                className="rounded-circle"
                style={{
                  width: '9px',
                  height: '9px',
                  backgroundColor: '#10B981',
                }}
              ></div>

              <span
                className="small"
                style={{ color: '#94A3B8' }}
              >
                Learn. Organize. Grow.
              </span>
            </div>

          </div>

          {/* QUICK LINKS */}
          <div className="col-lg-2 col-md-6">

            <h6 className="fw-bold text-white mb-4">
              Quick Links
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-decoration-none footer-link"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* TECHNOLOGIES */}
          <div className="col-lg-3 col-md-6">

            <h6 className="fw-bold text-white mb-4">
              Explore Technologies
            </h6>

            <ul className="list-unstyled d-flex flex-column gap-3 mb-0">
              {technologies.map((tech) => (
                <li key={tech.name}>
                  <Link
                    to={tech.path}
                    className="text-decoration-none footer-link"
                  >
                    {tech.name}
                  </Link>
                </li>
              ))}

              <li>
                <span style={{ color: '#94A3B8' }}>
                  MongoDB
                </span>
              </li>
            </ul>

          </div>

          {/* MESSAGE SECTION */}
          <div className="col-lg-3 col-md-6">

            <h6 className="fw-bold text-white mb-4">
              Keep Learning
            </h6>

            <p
              className="small mb-4"
              style={{
                color: '#94A3B8',
                lineHeight: '1.8',
              }}
            >
              Every small step in learning takes you closer
              to becoming a better developer.
            </p>

            <div
              className="d-flex align-items-center gap-2 p-3"
              style={{
                backgroundColor: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '13px',
              }}
            >
              <i
                className="bi bi-lightbulb-fill fs-4"
                style={{ color: '#818CF8' }}
              ></i>

              <span className="small text-white fw-medium">
                Build your knowledge every day!
              </span>
            </div>

          </div>

        </div>

        {/* DIVIDER */}
        <hr
          className="my-4"
          style={{
            borderColor: '#334155',
            opacity: 1,
          }}
        />

        {/* BOTTOM FOOTER */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

          <p
            className="small mb-0 text-center text-md-start"
            style={{ color: '#94A3B8' }}
          >
            © {currentYear} Knowledge OS. All rights reserved.
          </p>

          <p
            className="small mb-0"
            style={{ color: '#94A3B8' }}
          >
            Made with <i className="bi bi-heart-fill text-danger mx-1"></i>
            for learners and developers.
          </p>

        </div>

      </div>

      {/* FOOTER HOVER STYLE */}
      <style>
        {`
          .footer-link {
            color: #94A3B8;
            transition: all 0.2s ease;
          }

          .footer-link:hover {
            color: #818CF8;
            padding-left: 5px;
          }
        `}
      </style>

    </footer>
  );
};

export default Footer;
