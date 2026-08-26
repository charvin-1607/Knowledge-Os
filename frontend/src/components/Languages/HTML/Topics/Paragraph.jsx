import React from "react";

const Paragraph = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Paragraphs
      </h1>

      {/* INTRODUCTION */}
      <p>
        The HTML <code>&lt;p&gt;</code> element is used to define a
        paragraph. Paragraphs are one of the most commonly used elements
        in HTML because most textual content on a webpage is written
        inside paragraphs.
      </p>

      <p>
        A paragraph normally starts on a new line, and the browser
        automatically adds some space before and after the paragraph.
      </p>

      {/* BASIC SYNTAX */}
      <h2 className="mt-4">
        Basic Paragraph Syntax
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>This is a paragraph.</p>`}
      </pre>

      <p>
        The <code>&lt;p&gt;</code> tag is the opening tag and
        <code>&lt;/p&gt;</code> is the closing tag. The text between these
        tags is the paragraph content.
      </p>

      {/* MULTIPLE PARAGRAPHS */}
      <h2 className="mt-4">
        Multiple Paragraphs
      </h2>

      <p>
        You can create multiple paragraphs by using multiple
        <code>&lt;p&gt;</code> elements.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>This is the first paragraph.</p>

<p>This is the second paragraph.</p>

<p>This is the third paragraph.</p>`}
      </pre>

      {/* OUTPUT */}
      <h2 className="mt-4">
        Paragraph Output
      </h2>

      <div className="border rounded p-4">

        <p>
          This is the first paragraph.
        </p>

        <p>
          This is the second paragraph.
        </p>

        <p>
          This is the third paragraph.
        </p>

      </div>

      {/* LINE BREAK */}
      <h2 className="mt-4">
        HTML Line Break
      </h2>

      <p>
        The <code>&lt;br&gt;</code> element is used to create a line break
        inside text without creating a new paragraph.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>
    Hello<br />
    Welcome to Knowledge OS
</p>`}
      </pre>

      <h3 className="mt-3">
        Output
      </h3>

      <div className="border rounded p-4">
        <p>
          Hello
          <br />
          Welcome to Knowledge OS
        </p>
      </div>

      {/* MULTIPLE LINE BREAKS */}
      <h2 className="mt-4">
        Multiple Line Breaks
      </h2>

      <p>
        Multiple <code>&lt;br&gt;</code> elements can be used when more
        than one line break is required.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>
    Line One<br />
    <br />
    Line Two
</p>`}
      </pre>

      {/* HORIZONTAL RULE */}
      <h2 className="mt-4">
        HTML Horizontal Rule
      </h2>

      <p>
        The <code>&lt;hr&gt;</code> element creates a horizontal line that
        is commonly used to separate different sections of content.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>HTML Introduction</p>

<hr />

<p>HTML Structure</p>`}
      </pre>

      <h3 className="mt-3">
        Output
      </h3>

      <div className="border rounded p-4">

        <p>HTML Introduction</p>

        <hr />

        <p>HTML Structure</p>

      </div>

      {/* WHITESPACE */}
      <h2 className="mt-4">
        HTML Whitespace
      </h2>

      <p>
        HTML normally ignores extra spaces and line breaks written inside
        the source code.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>
    Hello          World
</p>`}
      </pre>

      <p>
        The browser will normally display the text similar to:
      </p>

      <div className="border rounded p-3">
        Hello World
      </div>

      <p className="mt-3">
        If you need specific spacing or formatting, CSS or appropriate HTML
        elements should generally be used instead of adding many spaces.
      </p>

      {/* PRESERVE TEXT */}
      <h2 className="mt-4">
        Preserving Whitespace with &lt;pre&gt;
      </h2>

      <p>
        The <code>&lt;pre&gt;</code> element preserves spaces and line
        breaks exactly as they are written in the HTML source.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<pre>
Hello       World

This text
keeps
line breaks.
</pre>`}
      </pre>

      <h3 className="mt-3">
        Output
      </h3>

      <pre className="border rounded p-3">
{`Hello       World

This text
keeps
line breaks.`}
      </pre>

      {/* PARAGRAPH WITH FORMATTING */}
      <h2 className="mt-4">
        Paragraph with Text Formatting
      </h2>

      <p>
        Paragraphs can contain other inline HTML elements for example
        <strong> bold text</strong>, <em>italic text</em> and
        <mark> highlighted text</mark>.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<p>
    This is <strong>bold</strong> text
    and this is <em>italic</em> text.
</p>`}
      </pre>

      {/* IMPORTANT NOTE */}
      <div className="alert alert-info mt-4">

        <strong>Important:</strong>

        <p className="mb-0 mt-2">
          Use <code>&lt;p&gt;</code> for actual paragraphs of text.
          Avoid using multiple <code>&lt;br&gt;</code> elements just to
          create large spaces between sections. CSS should normally be
          used for layout and spacing.
        </p>

      </div>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <ul>
        <li>
          <code>&lt;p&gt;</code> is used to create paragraphs.
        </li>

        <li>
          <code>&lt;br&gt;</code> creates a line break.
        </li>

        <li>
          <code>&lt;hr&gt;</code> creates a horizontal separator.
        </li>

        <li>
          HTML normally ignores extra spaces and line breaks.
        </li>

        <li>
          <code>&lt;pre&gt;</code> preserves spaces and line breaks.
        </li>

        <li>
          CSS should generally be used for layout and spacing.
        </li>
      </ul>

    </div>
  );
};

export default Paragraph;