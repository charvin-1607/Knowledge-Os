import React from "react";

const SemanticHTML = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Semantic Elements
      </h1>

      {/* INTRODUCTION */}
      <p>
        Semantic HTML means using HTML elements according to their
        actual meaning and purpose.
      </p>

      <p>
        For example, instead of using only generic
        <code>&lt;div&gt;</code> elements everywhere, we can use
        elements such as <code>&lt;header&gt;</code>,
        <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>,
        <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code> and
        <code>&lt;footer&gt;</code>.
      </p>

      <p>
        Semantic elements make HTML code easier for developers,
        browsers and assistive technologies to understand.
      </p>

      {/* WHY SEMANTIC HTML */}
      <h2 className="mt-4">
        Why Use Semantic HTML?
      </h2>

      <ul>

        <li>
          Makes HTML structure easier to understand.
        </li>

        <li>
          Improves code readability and maintainability.
        </li>

        <li>
          Helps search engines understand page structure.
        </li>

        <li>
          Improves accessibility for users using assistive
          technologies.
        </li>

        <li>
          Creates a clear and meaningful page structure.
        </li>

      </ul>

      {/* DIV VS SEMANTIC */}
      <h2 className="mt-4">
        Generic Elements vs Semantic Elements
      </h2>

      <p>
        A <code>&lt;div&gt;</code> element does not describe what its
        content represents.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<div>
    Website Header
</div>

<div>
    Navigation
</div>

<div>
    Main Content
</div>

<div>
    Footer
</div>`}
      </pre>

      <p>
        With semantic HTML, we can describe each part properly.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<header>
    Website Header
</header>

<nav>
    Navigation
</nav>

<main>
    Main Content
</main>

<footer>
    Footer
</footer>`}
      </pre>

      {/* HEADER */}
      <h2 className="mt-4">
        &lt;header&gt;
      </h2>

      <p>
        The <code>&lt;header&gt;</code> element represents introductory
        content for a page or a section.
      </p>

      <p>
        It commonly contains a logo, heading, introductory text or
        navigation.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<header>

    <h1>
        Knowledge OS
    </h1>

    <p>
        Learn Web Development
    </p>

</header>`}
      </pre>

      {/* LIVE HEADER */}
      <div className="border rounded p-3 mt-3">

        <header>

          <h3>
            Knowledge OS
          </h3>

          <p className="mb-0">
            Learn Web Development
          </p>

        </header>

      </div>

      {/* NAV */}
      <h2 className="mt-4">
        &lt;nav&gt;
      </h2>

      <p>
        The <code>&lt;nav&gt;</code> element represents a section
        containing navigation links.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<nav>

    <a href="/">
        Home
    </a>

    <a href="/about">
        About
    </a>

    <a href="/contact">
        Contact
    </a>

</nav>`}
      </pre>

      {/* MAIN */}
      <h2 className="mt-4">
        &lt;main&gt;
      </h2>

      <p>
        The <code>&lt;main&gt;</code> element represents the primary
        content of the webpage.
      </p>

      <p>
        A page should normally have one main content area.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<main>

    <h1>
        Welcome to Knowledge OS
    </h1>

    <p>
        This is the main content.
    </p>

</main>`}
      </pre>

      {/* SECTION */}
      <h2 className="mt-4">
        &lt;section&gt;
      </h2>

      <p>
        The <code>&lt;section&gt;</code> element represents a thematic
        grouping of related content.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<section>

    <h2>
        About HTML
    </h2>

    <p>
        HTML is used to structure webpages.
    </p>

</section>`}
      </pre>

      {/* ARTICLE */}
      <h2 className="mt-4">
        &lt;article&gt;
      </h2>

      <p>
        The <code>&lt;article&gt;</code> element represents independent
        and self-contained content.
      </p>

      <p>
        It can be used for blog posts, news articles, forum posts,
        product cards and similar content.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<article>

    <h2>
        Learn HTML
    </h2>

    <p>
        HTML is the standard markup language
        for creating webpages.
    </p>

</article>`}
      </pre>

      {/* ASIDE */}
      <h2 className="mt-4">
        &lt;aside&gt;
      </h2>

      <p>
        The <code>&lt;aside&gt;</code> element contains content that is
        related to the main content but is not part of its primary
        flow.
      </p>

      <p>
        It is commonly used for sidebars, related links,
        advertisements or additional information.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<aside>

    <h3>
        Related Topics
    </h3>

    <ul>

        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>

    </ul>

</aside>`}
      </pre>

      {/* FOOTER */}
      <h2 className="mt-4">
        &lt;footer&gt;
      </h2>

      <p>
        The <code>&lt;footer&gt;</code> element represents footer
        information for a page or section.
      </p>

      <p>
        It commonly contains copyright information, contact links,
        social links or additional navigation.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<footer>

    <p>
        © 2026 Knowledge OS
    </p>

</footer>`}
      </pre>

      {/* FIGURE */}
      <h2 className="mt-4">
        &lt;figure&gt;
      </h2>

      <p>
        The <code>&lt;figure&gt;</code> element is used for
        self-contained content such as images, diagrams,
        illustrations or code examples.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<figure>

    <img
        src="image.jpg"
        alt="HTML Logo"
    />

</figure>`}
      </pre>

      {/* FIGCAPTION */}
      <h2 className="mt-4">
        &lt;figcaption&gt;
      </h2>

      <p>
        The <code>&lt;figcaption&gt;</code> element provides a caption
        or description for a figure.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<figure>

    <img
        src="html.jpg"
        alt="HTML Logo"
    />

    <figcaption>
        HTML Logo
    </figcaption>

</figure>`}
      </pre>

      {/* DETAILS */}
      <h2 className="mt-4">
        &lt;details&gt;
      </h2>

      <p>
        The <code>&lt;details&gt;</code> element creates an expandable
        section that the user can open and close.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<details>

    <p>
        HTML stands for HyperText Markup Language.
    </p>

</details>`}
      </pre>

      {/* SUMMARY */}
      <h2 className="mt-4">
        &lt;summary&gt;
      </h2>

      <p>
        The <code>&lt;summary&gt;</code> element provides the visible
        heading of a <code>&lt;details&gt;</code> element.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<details>

    <summary>
        What is HTML?
    </summary>

    <p>
        HTML is a markup language used
        to structure webpages.
    </p>

</details>`}
      </pre>

      {/* LIVE DETAILS */}
      <div className="border rounded p-3 mt-3">

        <details>

          <summary className="fw-semibold">
            What is HTML?
          </summary>

          <p className="mt-3 mb-0">
            HTML stands for HyperText Markup Language and is used
            to structure content on webpages.
          </p>

        </details>

      </div>

      {/* TIME */}
      <h2 className="mt-4">
        &lt;time&gt;
      </h2>

      <p>
        The <code>&lt;time&gt;</code> element represents a specific
        time or date.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<time datetime="2026-08-26">
    August 26, 2026
</time>`}
      </pre>

      {/* MARK */}
      <h2 className="mt-4">
        &lt;mark&gt;
      </h2>

      <p>
        The <code>&lt;mark&gt;</code> element highlights text that is
        relevant or important.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>

    HTML is a
    <mark>markup language</mark>.

</p>`}
      </pre>

      <p>
        HTML is a <mark>markup language</mark>.
      </p>

      {/* COMPLETE STRUCTURE */}
      <h2 className="mt-4">
        Complete Semantic Page Structure
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<header>

    <h1>
        Knowledge OS
    </h1>

    <nav>

        <a href="/">
            Home
        </a>

        <a href="/about">
            About
        </a>

    </nav>

</header>


<main>

    <section>

        <h2>
            Latest Articles
        </h2>

        <article>

            <h3>
                Learn HTML
            </h3>

            <p>
                HTML is used to structure webpages.
            </p>

        </article>

    </section>


    <aside>

        <h3>
            Related Topics
        </h3>

    </aside>

</main>


<footer>

    <p>
        © 2026 Knowledge OS
    </p>

</footer>`}
      </pre>

      {/* VISUAL STRUCTURE */}
      <h2 className="mt-4">
        Semantic Page Structure
      </h2>

      <div className="border rounded p-3">

        <header className="border rounded p-3 mb-3">

          <h4>
            Header
          </h4>

          <nav>
            Home | About | Contact
          </nav>

        </header>

        <main className="border rounded p-3 mb-3">

          <h4>
            Main
          </h4>

          <section className="border rounded p-3 mb-3">

            <h5>
              Section
            </h5>

            <article className="border rounded p-3">

              <h6>
                Article
              </h6>

              <p className="mb-0">
                Independent content goes here.
              </p>

            </article>

          </section>

          <aside className="border rounded p-3">

            <h5>
              Aside
            </h5>

            <p className="mb-0">
              Related information.
            </p>

          </aside>

        </main>

        <footer className="border rounded p-3">

          <p className="mb-0">
            Footer
          </p>

        </footer>

      </div>

      {/* SEMANTIC ELEMENT SUMMARY */}
      <h2 className="mt-4">
        Important Semantic Elements
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">

            <tr>
              <th>Element</th>
              <th>Purpose</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td><code>&lt;header&gt;</code></td>
              <td>Introductory/header content</td>
            </tr>

            <tr>
              <td><code>&lt;nav&gt;</code></td>
              <td>Navigation links</td>
            </tr>

            <tr>
              <td><code>&lt;main&gt;</code></td>
              <td>Main page content</td>
            </tr>

            <tr>
              <td><code>&lt;section&gt;</code></td>
              <td>Thematic content section</td>
            </tr>

            <tr>
              <td><code>&lt;article&gt;</code></td>
              <td>Independent content</td>
            </tr>

            <tr>
              <td><code>&lt;aside&gt;</code></td>
              <td>Related/secondary content</td>
            </tr>

            <tr>
              <td><code>&lt;footer&gt;</code></td>
              <td>Footer information</td>
            </tr>

            <tr>
              <td><code>&lt;figure&gt;</code></td>
              <td>Self-contained visual content</td>
            </tr>

            <tr>
              <td><code>&lt;figcaption&gt;</code></td>
              <td>Figure caption</td>
            </tr>

            <tr>
              <td><code>&lt;details&gt;</code></td>
              <td>Expandable content</td>
            </tr>

            <tr>
              <td><code>&lt;summary&gt;</code></td>
              <td>Heading for details</td>
            </tr>

            <tr>
              <td><code>&lt;time&gt;</code></td>
              <td>Date/time information</td>
            </tr>

            <tr>
              <td><code>&lt;mark&gt;</code></td>
              <td>Highlighted text</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* BEST PRACTICES */}
      <h2 className="mt-4">
        Semantic HTML Best Practices
      </h2>

      <ul>

        <li>
          Use semantic elements according to their actual purpose.
        </li>

        <li>
          Use <code>&lt;nav&gt;</code> for navigation links.
        </li>

        <li>
          Use <code>&lt;main&gt;</code> for the primary content.
        </li>

        <li>
          Use <code>&lt;section&gt;</code> for related thematic content.
        </li>

        <li>
          Use <code>&lt;article&gt;</code> for independent content.
        </li>

        <li>
          Use <code>&lt;aside&gt;</code> for secondary or related
          information.
        </li>

        <li>
          Use <code>&lt;header&gt;</code> and <code>&lt;footer&gt;</code>
          for appropriate introductory and ending content.
        </li>

        <li>
          Do not use semantic elements only for styling purposes.
        </li>

      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <p>
        Semantic HTML gives meaning to the structure of a webpage.
        Instead of creating everything using generic
        <code>&lt;div&gt;</code> elements, semantic elements allow us to
        clearly describe different parts of the page.
      </p>

      <p>
        The most commonly used semantic elements are
        <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,
        <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>,
        <code>&lt;article&gt;</code>, <code>&lt;aside&gt;</code> and
        <code>&lt;footer&gt;</code>.
      </p>

    </div>
  );
};

export default SemanticHTML;