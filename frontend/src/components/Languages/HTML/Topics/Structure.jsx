import React from "react";

const Structure = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Structure
      </h1>

      {/* INTRODUCTION */}
      <p>
        Every HTML document follows a basic structure. This structure helps
        the web browser understand how the webpage should be interpreted
        and displayed.
      </p>

      <p>
        A basic HTML document contains important elements such as
        <code>&lt;!DOCTYPE html&gt;</code>,
        <code>&lt;html&gt;</code>,
        <code>&lt;head&gt;</code> and
        <code>&lt;body&gt;</code>.
      </p>

      {/* BASIC STRUCTURE */}
      <h2 className="mt-4">
        Basic HTML Structure
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>

<html>

<head>
    <title>Page Title</title>
</head>

<body>

    <h1>My First Heading</h1>

    <p>My first paragraph.</p>

</body>

</html>`}
      </pre>

      {/* DOCTYPE */}
      <h2 className="mt-4">
        1. &lt;!DOCTYPE html&gt;
      </h2>

      <p>
        The <code>&lt;!DOCTYPE html&gt;</code> declaration tells the browser
        that the document is an HTML5 document.
      </p>

      <p>
        It should be written at the very beginning of an HTML document.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>`}
      </pre>

      {/* HTML TAG */}
      <h2 className="mt-4">
        2. &lt;html&gt;
      </h2>

      <p>
        The <code>&lt;html&gt;</code> element is the root element of an HTML
        document. All other HTML elements are written inside this element.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<html>

    <!-- HTML content -->

</html>`}
      </pre>

      {/* HEAD */}
      <h2 className="mt-4">
        3. &lt;head&gt;
      </h2>

      <p>
        The <code>&lt;head&gt;</code> element contains information about the
        webpage that is not directly displayed as normal page content.
      </p>

      <p>
        It can contain elements such as the page title, metadata, CSS files,
        favicon and other resources.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<head>

    <title>My Website</title>

</head>`}
      </pre>

      {/* TITLE */}
      <h2 className="mt-4">
        4. &lt;title&gt;
      </h2>

      <p>
        The <code>&lt;title&gt;</code> element defines the title of the
        webpage. This title is usually displayed in the browser tab.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<title>Knowledge OS</title>`}
      </pre>

      {/* BODY */}
      <h2 className="mt-4">
        5. &lt;body&gt;
      </h2>

      <p>
        The <code>&lt;body&gt;</code> element contains the visible content
        of the webpage.
      </p>

      <p>
        Headings, paragraphs, images, links, buttons, forms, tables and
        other visible elements are normally placed inside the
        <code>&lt;body&gt;</code>.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<body>

    <h1>Welcome to Knowledge OS</h1>

    <p>Learn HTML step by step.</p>

</body>`}
      </pre>

      {/* COMPLETE EXAMPLE */}
      <h2 className="mt-4">
        Complete Example
      </h2>

      <p>
        The following example shows a complete basic HTML5 document:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>

<html>

<head>
    <title>Knowledge OS</title>
</head>

<body>

    <h1>Welcome to Knowledge OS</h1>

    <p>
        Learn HTML, JavaScript, React and Node.js.
    </p>

</body>

</html>`}
      </pre>

      {/* STRUCTURE EXPLANATION */}
      <h2 className="mt-4">
        Understanding the Structure
      </h2>

      <ul>
        <li>
          <code>&lt;!DOCTYPE html&gt;</code> → Defines the document as HTML5.
        </li>

        <li>
          <code>&lt;html&gt;</code> → Root element of the document.
        </li>

        <li>
          <code>&lt;head&gt;</code> → Contains webpage information and resources.
        </li>

        <li>
          <code>&lt;title&gt;</code> → Defines the browser tab title.
        </li>

        <li>
          <code>&lt;body&gt;</code> → Contains the visible webpage content.
        </li>
      </ul>

      {/* IMPORTANT NOTE */}
      <div className="alert alert-info mt-4">
        <strong>Important:</strong> The basic HTML structure provides the
        foundation for every webpage. As you learn more HTML, additional
        elements will be placed inside the <code>&lt;head&gt;</code> and
        <code>&lt;body&gt;</code> sections.
      </div>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <p>
        A proper HTML document starts with the HTML5 doctype declaration,
        followed by the root <code>&lt;html&gt;</code> element. Inside it,
        the document is divided mainly into the <code>&lt;head&gt;</code>
        and <code>&lt;body&gt;</code>. The head contains document
        information, while the body contains the content displayed to
        the user.
      </p>

    </div>
  );
};

export default Structure;