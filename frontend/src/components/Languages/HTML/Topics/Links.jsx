import React from "react";

const Links = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Links
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML links are used to connect one webpage to another webpage,
        website, file, section of the same page, email address or
        telephone number.
      </p>

      <p>
        Links are created using the <code>&lt;a&gt;</code> element, which
        is also called the <strong>anchor element</strong>.
      </p>

      {/* BASIC SYNTAX */}
      <h2 className="mt-4">
        Basic Link Syntax
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="https://www.google.com">
    Visit Google
</a>`}
      </pre>

      <p>
        The <code>href</code> attribute specifies the destination of the
        link, while the text between the opening and closing
        <code>&lt;a&gt;</code> tags is displayed to the user.
      </p>

      {/* LIVE EXAMPLE */}
      <h2 className="mt-4">
        Link Example
      </h2>

      <div className="border rounded p-4">

        <a
          href="https://www.google.com"
          target="_blank"
          rel="noreferrer"
        >
          Visit Google
        </a>

      </div>

      {/* HREF */}
      <h2 className="mt-4">
        href Attribute
      </h2>

      <p>
        The <code>href</code> attribute defines where the user should be
        taken after clicking the link.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="https://www.example.com">
    Visit Website
</a>`}
      </pre>

      {/* EXTERNAL LINKS */}
      <h2 className="mt-4">
        External Links
      </h2>

      <p>
        An external link points to a webpage or website outside the
        current website.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="https://www.google.com">
    Google
</a>

<a href="https://www.github.com">
    GitHub
</a>`}
      </pre>

      {/* TARGET */}
      <h2 className="mt-4">
        target Attribute
      </h2>

      <p>
        The <code>target</code> attribute controls where the linked
        document will open.
      </p>

      <p>
        A commonly used value is <code>_blank</code>, which opens the link
        in a new browser tab or window.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a
    href="https://www.google.com"
    target="_blank"
>
    Open Google
</a>`}
      </pre>

      <div className="alert alert-info mt-3">
        <strong>Note:</strong> When using <code>target="_blank"</code> for
        external links, it is good practice to also use
        <code>rel="noopener noreferrer"</code>.
      </div>

      {/* INTERNAL LINKS */}
      <h2 className="mt-4">
        Internal Links
      </h2>

      <p>
        Internal links are used to navigate between pages or sections
        within the same website.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="/about">
    About Us
</a>

<a href="/contact">
    Contact
</a>`}
      </pre>

      {/* SAME PAGE LINK */}
      <h2 className="mt-4">
        Link to a Section of the Same Page
      </h2>

      <p>
        You can use an element's <code>id</code> attribute to create a
        link that jumps to a specific section of the same webpage.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="#contact">
    Go to Contact Section
</a>


<h2 id="contact">
    Contact Us
</h2>`}
      </pre>

      <p>
        Here <code>#contact</code> refers to the element whose
        <code>id</code> is <code>contact</code>.
      </p>

      {/* EMAIL */}
      <h2 className="mt-4">
        Email Links
      </h2>

      <p>
        You can create a link that opens the user's default email
        application by using the <code>mailto:</code> scheme.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="mailto:example@gmail.com">
    Send Email
</a>`}
      </pre>

      <div className="border rounded p-4">

        <a href="mailto:example@gmail.com">
          Send Email
        </a>

      </div>

      {/* TELEPHONE */}
      <h2 className="mt-4">
        Telephone Links
      </h2>

      <p>
        The <code>tel:</code> scheme can be used to create a link that
        allows supported devices to call a phone number.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="tel:+919876543210">
    Call Us
</a>`}
      </pre>

      {/* IMAGE LINK */}
      <h2 className="mt-4">
        Image as a Link
      </h2>

      <p>
        An image can also be placed inside an anchor element to make the
        image clickable.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="https://www.example.com">

    <img
        src="image.jpg"
        alt="Example"
        width="200"
    />

</a>`}
      </pre>

      {/* DOWNLOAD */}
      <h2 className="mt-4">
        Download Links
      </h2>

      <p>
        The <code>download</code> attribute can be used when you want the
        browser to download a linked resource instead of navigating to it.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="/files/resume.pdf" download>
    Download Resume
</a>`}
      </pre>

      {/* LINK STYLING */}
      <h2 className="mt-4">
        Styling Links with CSS
      </h2>

      <p>
        HTML defines the structure of a link, while CSS can be used to
        control its appearance.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`a {
    color: blue;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}`}
      </pre>

      {/* IMPORTANT */}
      <div className="alert alert-warning mt-4">

        <strong>Important:</strong>

        <p className="mb-0 mt-2">
          Always use meaningful link text. For example,
          <code>Read HTML Documentation</code> is more informative than
          simply using <code>Click Here</code>.
        </p>

      </div>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <ul>
        <li>
          <code>&lt;a&gt;</code> creates a hyperlink.
        </li>

        <li>
          <code>href</code> specifies the destination.
        </li>

        <li>
          <code>target="_blank"</code> opens a link in a new tab/window.
        </li>

        <li>
          <code>mailto:</code> creates an email link.
        </li>

        <li>
          <code>tel:</code> creates a telephone link.
        </li>

        <li>
          An <code>id</code> can be used to link to a specific section
          of the same page.
        </li>

        <li>
          Images can also be placed inside links.
        </li>

        <li>
          CSS can be used to style links.
        </li>
      </ul>

    </div>
  );
};

export default Links;