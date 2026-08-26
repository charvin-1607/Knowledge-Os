import React from "react";

const Lists = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Lists
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML lists are used to display a collection of related items.
        Lists are commonly used for navigation menus, features,
        instructions, categories, product details and many other types
        of content.
      </p>

      <p>
        HTML provides three main types of lists:
      </p>

      <ul>
        <li>Unordered List</li>
        <li>Ordered List</li>
        <li>Description List</li>
      </ul>

      {/* ================================================= */}
      {/* UNORDERED LIST */}
      {/* ================================================= */}

      <h2 className="mt-4">
        1. Unordered List
      </h2>

      <p>
        An unordered list is used when the order of the items is not
        important.
      </p>

      <p>
        It is created using the <code>&lt;ul&gt;</code> element and each
        item is created using the <code>&lt;li&gt;</code> element.
      </p>

      <h4 className="mt-3">
        Syntax
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ul>

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ul>`}
      </pre>

      {/* LIVE EXAMPLE */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="border rounded p-4">

        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>

      </div>

      <p className="mt-3">
        By default, browsers display unordered list items with bullet
        points.
      </p>

      {/* ================================================= */}
      {/* UL LIST STYLE */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Unordered List Styles
      </h2>

      <p>
        The appearance of unordered list markers can be changed using
        CSS.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`ul {
    list-style-type: square;
}`}
      </pre>

      <p>
        Some commonly used values are:
      </p>

      <ul>
        <li><code>disc</code></li>
        <li><code>circle</code></li>
        <li><code>square</code></li>
        <li><code>none</code></li>
      </ul>

      {/* ================================================= */}
      {/* ORDERED LIST */}
      {/* ================================================= */}

      <h2 className="mt-4">
        2. Ordered List
      </h2>

      <p>
        An ordered list is used when the order of the items is important.
        Items are normally displayed with numbers.
      </p>

      <p>
        An ordered list is created using the <code>&lt;ol&gt;</code>
        element.
      </p>

      <h4 className="mt-3">
        Syntax
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol>

    <li>Install Node.js</li>
    <li>Create Project</li>
    <li>Install Dependencies</li>
    <li>Start Application</li>

</ol>`}
      </pre>

      {/* LIVE EXAMPLE */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="border rounded p-4">

        <ol>
          <li>Install Node.js</li>
          <li>Create Project</li>
          <li>Install Dependencies</li>
          <li>Start Application</li>
        </ol>

      </div>

      {/* ================================================= */}
      {/* ORDER TYPES */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Ordered List Types
      </h2>

      <p>
        The <code>type</code> attribute can be used to change the marker
        style of an ordered list.
      </p>

      <h4 className="mt-3">
        Numbers
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol type="1">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      <h4 className="mt-3">
        Uppercase Letters
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol type="A">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      <h4 className="mt-3">
        Lowercase Letters
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol type="a">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      <h4 className="mt-3">
        Roman Numbers
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol type="I">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      <h4 className="mt-3">
        Lowercase Roman Numbers
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol type="i">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      {/* ================================================= */}
      {/* START ATTRIBUTE */}
      {/* ================================================= */}

      <h2 className="mt-4">
        start Attribute
      </h2>

      <p>
        The <code>start</code> attribute allows an ordered list to start
        from a specific number.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol start="5">

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      {/* LIVE */}
      <div className="border rounded p-4">

        <ol start="5">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ol>

      </div>

      {/* ================================================= */}
      {/* REVERSED */}
      {/* ================================================= */}

      <h2 className="mt-4">
        reversed Attribute
      </h2>

      <p>
        The <code>reversed</code> attribute displays an ordered list in
        descending order.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<ol reversed>

    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>

</ol>`}
      </pre>

      {/* ================================================= */}
      {/* NESTED LIST */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Nested Lists
      </h2>

      <p>
        A list can contain another list inside one of its
        <code>&lt;li&gt;</code> elements. This is called a nested list.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<ul>

    <li>
        Frontend

        <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ul>

    </li>

    <li>
        Backend

        <ul>
            <li>Node.js</li>
            <li>Express.js</li>
        </ul>

    </li>

</ul>`}
      </pre>

      {/* LIVE NESTED LIST */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="border rounded p-4">

        <ul>

          <li>
            Frontend

            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>

          </li>

          <li>
            Backend

            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>

          </li>

        </ul>

      </div>

      {/* ================================================= */}
      {/* DESCRIPTION LIST */}
      {/* ================================================= */}

      <h2 className="mt-4">
        3. Description List
      </h2>

      <p>
        A description list is used to display terms and their
        corresponding descriptions.
      </p>

      <p>
        It uses three HTML elements:
      </p>

      <ul>
        <li>
          <code>&lt;dl&gt;</code> → Description List
        </li>

        <li>
          <code>&lt;dt&gt;</code> → Description Term
        </li>

        <li>
          <code>&lt;dd&gt;</code> → Description Details
        </li>
      </ul>

      {/* SYNTAX */}
      <h4 className="mt-3">
        Syntax
      </h4>

      <pre className="bg-dark text-white p-3 rounded">
{`<dl>

    <dt>HTML</dt>
    <dd>HyperText Markup Language</dd>

    <dt>CSS</dt>
    <dd>Cascading Style Sheets</dd>

</dl>`}
      </pre>

      {/* LIVE DESCRIPTION LIST */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="border rounded p-4">

        <dl>

          <dt>
            <strong>HTML</strong>
          </dt>

          <dd>
            HyperText Markup Language
          </dd>

          <dt>
            <strong>CSS</strong>
          </dt>

          <dd>
            Cascading Style Sheets
          </dd>

          <dt>
            <strong>JavaScript</strong>
          </dt>

          <dd>
            Programming language used to add behavior and interactivity
            to web pages.
          </dd>

        </dl>

      </div>

      {/* ================================================= */}
      {/* PRACTICAL EXAMPLE */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Practical Example
      </h2>

      <p>
        Lists are commonly used in website navigation menus.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<nav>

    <ul>

        <li>
            <a href="/">Home</a>
        </li>

        <li>
            <a href="/about">About</a>
        </li>

        <li>
            <a href="/contact">Contact</a>
        </li>

    </ul>

</nav>`}
      </pre>

      {/* LIVE NAV */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="border rounded p-3">

        <ul className="list-unstyled d-flex gap-4 mb-0">

          <li>
            <a href="#home">
              Home
            </a>
          </li>

          <li>
            <a href="#about">
              About
            </a>
          </li>

          <li>
            <a href="#contact">
              Contact
            </a>
          </li>

        </ul>

      </div>

      {/* ================================================= */}
      {/* BOOTSTRAP LIST */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Lists with Bootstrap
      </h2>

      <p>
        Bootstrap provides utility classes that can be used to customize
        the appearance of lists.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<ul className="list-group">

    <li className="list-group-item">
        HTML
    </li>

    <li className="list-group-item">
        CSS
    </li>

    <li className="list-group-item">
        JavaScript
    </li>

</ul>`}
      </pre>

      {/* LIVE BOOTSTRAP */}
      <div className="border rounded p-3">

        <ul className="list-group">

          <li className="list-group-item">
            HTML
          </li>

          <li className="list-group-item">
            CSS
          </li>

          <li className="list-group-item">
            JavaScript
          </li>

          <li className="list-group-item">
            React
          </li>

        </ul>

      </div>

      {/* ================================================= */}
      {/* IMPORTANT DIFFERENCE */}
      {/* ================================================= */}

      <h2 className="mt-4">
        ul vs ol vs dl
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered">

          <thead className="table-dark">

            <tr>
              <th>Element</th>
              <th>Purpose</th>
              <th>Example</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>
                <code>&lt;ul&gt;</code>
              </td>

              <td>
                Unordered collection
              </td>

              <td>
                Features, menu items
              </td>
            </tr>

            <tr>
              <td>
                <code>&lt;ol&gt;</code>
              </td>

              <td>
                Ordered collection
              </td>

              <td>
                Steps, rankings
              </td>
            </tr>

            <tr>
              <td>
                <code>&lt;dl&gt;</code>
              </td>

              <td>
                Terms and descriptions
              </td>

              <td>
                Glossary, definitions
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ================================================= */}
      {/* BEST PRACTICES */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Best Practices
      </h2>

      <ul>

        <li>
          Use <code>&lt;ul&gt;</code> when the order of items does not
          matter.
        </li>

        <li>
          Use <code>&lt;ol&gt;</code> when the order of items is
          meaningful.
        </li>

        <li>
          Use <code>&lt;dl&gt;</code> for terms and their descriptions.
        </li>

        <li>
          Keep list items inside <code>&lt;li&gt;</code> elements.
        </li>

        <li>
          Use nested lists when information has a clear hierarchy.
        </li>

        <li>
          Avoid using lists only for visual indentation. Use them when
          the content is actually a collection of related items.
        </li>

      </ul>

      {/* ================================================= */}
      {/* SUMMARY */}
      {/* ================================================= */}

      <h2 className="mt-4">
        Summary
      </h2>

      <ul>

        <li>
          <code>&lt;ul&gt;</code> creates an unordered list.
        </li>

        <li>
          <code>&lt;ol&gt;</code> creates an ordered list.
        </li>

        <li>
          <code>&lt;li&gt;</code> represents a list item.
        </li>

        <li>
          <code>&lt;dl&gt;</code> creates a description list.
        </li>

        <li>
          <code>&lt;dt&gt;</code> defines a description term.
        </li>

        <li>
          <code>&lt;dd&gt;</code> provides the description.
        </li>

        <li>
          Lists can be nested to create hierarchical content.
        </li>

        <li>
          Lists are commonly used for navigation menus and structured
          content.
        </li>

      </ul>

    </div>
  );
};

export default Lists;