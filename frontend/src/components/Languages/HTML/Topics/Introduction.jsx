import React from "react";

const Introduction = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        Introduction to HTML
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML stands for <strong>HyperText Markup Language</strong>.
        It is the standard markup language used to create and structure
        content on web pages.
      </p>

      <p>
        HTML tells the browser how different elements of a webpage should
        be structured. For example, we can use HTML to create headings,
        paragraphs, links, images, lists, tables, forms and many other
        elements.
      </p>

      {/* WHAT IS HTML */}
      <h2 className="mt-4">
        What is HTML?
      </h2>

      <p>
        HTML is not a programming language. It is a
        <strong> markup language</strong>.
        It uses different elements and tags to describe the structure
        of a webpage.
      </p>

      <p>
        For example, the following HTML creates a heading and a paragraph:
      </p>

      {/* CODE */}
      <pre className="bg-dark text-white p-3 rounded">
{`<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>

<body>

    <h1>Hello World</h1>

    <p>This is my first HTML page.</p>

</body>
</html>`}
      </pre>

      {/* HOW HTML WORKS */}
      <h2 className="mt-4">
        How HTML Works
      </h2>

      <p>
        HTML documents are written using HTML elements. These elements are
        interpreted by the web browser, and the browser displays the
        resulting webpage to the user.
      </p>

      <p>
        For example:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h1>Knowledge OS</h1>
<p>Learn HTML step by step.</p>`}
      </pre>

      <p>
        The browser will display the first line as a large heading and the
        second line as a paragraph.
      </p>

      {/* HTML TAGS */}
      <h2 className="mt-4">
        HTML Tags
      </h2>

      <p>
        HTML uses tags to define different types of content.
        Most HTML elements have an opening tag and a closing tag.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<h1>HTML Heading</h1>

<p>HTML Paragraph</p>`}
      </pre>

      <p>
        Here, <code>&lt;h1&gt;</code> is the opening tag,
        <code>&lt;/h1&gt;</code> is the closing tag, and the content
        between them is the element content.
      </p>

      {/* COMMON TAGS */}
      <h2 className="mt-4">
        Common HTML Tags
      </h2>

      <ul>
        <li>
          <code>&lt;h1&gt;</code> - Creates a heading
        </li>

        <li>
          <code>&lt;p&gt;</code> - Creates a paragraph
        </li>

        <li>
          <code>&lt;a&gt;</code> - Creates a hyperlink
        </li>

        <li>
          <code>&lt;img&gt;</code> - Displays an image
        </li>

        <li>
          <code>&lt;ul&gt;</code> - Creates an unordered list
        </li>

        <li>
          <code>&lt;ol&gt;</code> - Creates an ordered list
        </li>

        <li>
          <code>&lt;table&gt;</code> - Creates a table
        </li>

        <li>
          <code>&lt;form&gt;</code> - Creates a form
        </li>
      </ul>

      {/* FEATURES */}
      <h2 className="mt-4">
        Features of HTML
      </h2>

      <ul>
        <li>Easy to learn and understand.</li>
        <li>Used to create the structure of web pages.</li>
        <li>Works with all modern web browsers.</li>
        <li>Can be combined with CSS for styling.</li>
        <li>Can be combined with JavaScript for interactivity.</li>
        <li>Supports multimedia such as images, audio and video.</li>
        <li>Supports semantic elements for better page structure.</li>
      </ul>

      {/* HTML WITH CSS AND JAVASCRIPT */}
      <h2 className="mt-4">
        HTML, CSS and JavaScript
      </h2>

      <p>
        HTML, CSS and JavaScript are commonly used together to build
        modern websites.
      </p>

      <ul>
        <li>
          <strong>HTML</strong> → Structure of the webpage
        </li>

        <li>
          <strong>CSS</strong> → Styling and visual appearance
        </li>

        <li>
          <strong>JavaScript</strong> → Behaviour and interactivity
        </li>
      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <p>
        HTML is the foundation of a webpage. It defines what content exists
        on the page and how that content is structured. After learning the
        basic HTML concepts, we can use CSS to make the webpage attractive
        and JavaScript to make it interactive.
      </p>

    </div>
  );
};

export default Introduction;