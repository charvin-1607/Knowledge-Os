import React from "react";

const Headings = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Headings
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML headings are used to define headings and subheadings on a
        webpage. HTML provides six different heading levels, starting from
        <code>&lt;h1&gt;</code> and ending with <code>&lt;h6&gt;</code>.
      </p>

      <p>
        The <code>&lt;h1&gt;</code> heading represents the highest level of
        heading, while <code>&lt;h6&gt;</code> represents the lowest level.
      </p>

      {/* BASIC EXAMPLE */}
      <h2 className="mt-4">
        Basic Heading Example
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<h1>This is Heading 1</h1>
<h2>This is Heading 2</h2>
<h3>This is Heading 3</h3>
<h4>This is Heading 4</h4>
<h5>This is Heading 5</h5>
<h6>This is Heading 6</h6>`}
      </pre>

      {/* HEADING LEVELS */}
      <h2 className="mt-4">
        Heading Levels
      </h2>

      <p>
        HTML has six heading elements:
      </p>

      <ul>
        <li>
          <code>&lt;h1&gt;</code> → Main heading
        </li>

        <li>
          <code>&lt;h2&gt;</code> → Major section heading
        </li>

        <li>
          <code>&lt;h3&gt;</code> → Subsection heading
        </li>

        <li>
          <code>&lt;h4&gt;</code> → Smaller subsection heading
        </li>

        <li>
          <code>&lt;h5&gt;</code> → Lower-level heading
        </li>

        <li>
          <code>&lt;h6&gt;</code> → Lowest-level heading
        </li>
      </ul>

      {/* H1 */}
      <h2 className="mt-4">
        &lt;h1&gt; Heading
      </h2>

      <p>
        The <code>&lt;h1&gt;</code> element is normally used for the main
        heading of a page or the primary heading of a document.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h1>Knowledge OS</h1>`}
      </pre>

      {/* H2 */}
      <h2 className="mt-4">
        &lt;h2&gt; Heading
      </h2>

      <p>
        The <code>&lt;h2&gt;</code> element is generally used for major
        sections within a page.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h2>HTML Basics</h2>`}
      </pre>

      {/* H3 */}
      <h2 className="mt-4">
        &lt;h3&gt; Heading
      </h2>

      <p>
        The <code>&lt;h3&gt;</code> element can be used for subsections
        inside an <code>&lt;h2&gt;</code> section.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h3>HTML Elements</h3>`}
      </pre>

      {/* H4 H5 H6 */}
      <h2 className="mt-4">
        &lt;h4&gt;, &lt;h5&gt; and &lt;h6&gt;
      </h2>

      <p>
        These headings are used for deeper levels of content hierarchy.
        They are useful when a page contains multiple nested sections.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h4>HTML Tags</h4>

<h5>Basic Tags</h5>

<h6>Examples</h6>`}
      </pre>

      {/* LIVE EXAMPLE */}
      <h2 className="mt-4">
        Heading Output
      </h2>

      <p>
        The following example demonstrates how different heading levels
        appear in the browser:
      </p>

      <div className="border rounded p-4 mb-4">

        <h1>Heading 1</h1>

        <h2>Heading 2</h2>

        <h3>Heading 3</h3>

        <h4>Heading 4</h4>

        <h5>Heading 5</h5>

        <h6>Heading 6</h6>

      </div>

      {/* HEADING HIERARCHY */}
      <h2 className="mt-4">
        Heading Hierarchy
      </h2>

      <p>
        Headings should generally follow a logical hierarchy. A page can
        have a main heading followed by section headings and subsections.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h1>Web Development</h1>

<h2>Frontend Development</h2>

<h3>HTML</h3>

<h3>CSS</h3>

<h3>JavaScript</h3>

<h2>Backend Development</h2>

<h3>Node.js</h3>`}
      </pre>

      {/* IMPORTANT */}
      <div className="alert alert-warning mt-4">
        <strong>Important:</strong> Do not choose heading levels only
        because of their default font size. Heading elements represent
        the structure and hierarchy of your content.
      </div>

      {/* SEO */}
      <h2 className="mt-4">
        Headings and SEO
      </h2>

      <p>
        Proper heading structure also helps search engines understand the
        organization and hierarchy of a webpage. Meaningful headings make
        the content easier to understand for both users and search engines.
      </p>

      {/* ACCESSIBILITY */}
      <h2 className="mt-4">
        Headings and Accessibility
      </h2>

      <p>
        Properly structured headings can also improve accessibility.
        Assistive technologies can use headings to help users navigate
        through different sections of a webpage.
      </p>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <p>
        HTML provides six heading elements from <code>&lt;h1&gt;</code> to
        <code>&lt;h6&gt;</code>. These elements should be used to create a
        logical content hierarchy. Use headings according to the meaning
        and structure of the content rather than simply choosing them for
        their default visual size.
      </p>

    </div>
  );
};

export default Headings;