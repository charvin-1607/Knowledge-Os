import React from "react";

const Images = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Images
      </h1>

      {/* INTRODUCTION */}
      <p>
        Images are an important part of modern websites. HTML provides the
        <code>&lt;img&gt;</code> element to display images on a webpage.
      </p>

      <p>
        Images can be used for product photos, profile pictures, banners,
        illustrations, icons and many other purposes.
      </p>

      {/* BASIC SYNTAX */}
      <h2 className="mt-4">
        Basic Image Syntax
      </h2>

      <p>
        The basic syntax of an HTML image is:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img src="image.jpg" alt="Description of image">`}
      </pre>

      <p>
        The <code>src</code> attribute specifies the image location, while
        the <code>alt</code> attribute provides alternative text for the
        image.
      </p>

      {/* IMG ELEMENT */}
      <h2 className="mt-4">
        &lt;img&gt; Element
      </h2>

      <p>
        The <code>&lt;img&gt;</code> element is used to embed an image into
        an HTML page.
      </p>

      <p>
        Unlike elements such as <code>&lt;p&gt;</code> or
        <code>&lt;h1&gt;</code>, the <code>&lt;img&gt;</code> element does
        not have a closing tag.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img src="photo.jpg" alt="My Photo">`}
      </pre>

      {/* SRC */}
      <h2 className="mt-4">
        src Attribute
      </h2>

      <p>
        The <code>src</code> attribute specifies the path or URL of the
        image that should be displayed.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img src="images/profile.jpg" alt="Profile Picture">`}
      </pre>

      <p>
        The image source can be a relative path or an absolute URL.
      </p>

      {/* RELATIVE PATH */}
      <h2 className="mt-4">
        Relative Image Path
      </h2>

      <p>
        A relative path points to an image located inside your project.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="images/logo.png"
    alt="Website Logo"
/>`}
      </pre>

      <p>
        For example, if your project contains:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`project/
│
├── index.html
│
└── images/
    └── logo.png`}
      </pre>

      <p>
        Then the image can be accessed using:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`src="images/logo.png"`}
      </pre>

      {/* ABSOLUTE URL */}
      <h2 className="mt-4">
        External Image URL
      </h2>

      <p>
        You can also use an absolute URL to display an image hosted on
        another server.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="https://example.com/image.jpg"
    alt="Example Image"
/>`}
      </pre>

      <div className="alert alert-warning mt-3">
        <strong>Note:</strong> External images depend on the availability
        and permissions of the remote server. For your own website,
        managing your own image assets is generally more reliable.
      </div>

      {/* ALT */}
      <h2 className="mt-4">
        alt Attribute
      </h2>

      <p>
        The <code>alt</code> attribute provides alternative text for an
        image.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="profile.jpg"
    alt="Profile picture of John"
/>`}
      </pre>

      <p>
        The alternative text is useful when the image cannot be displayed.
        It is also important for accessibility because screen readers can
        use the alternative text to describe meaningful images.
      </p>

      {/* IMAGE DIMENSIONS */}
      <h2 className="mt-4">
        Image Width and Height
      </h2>

      <p>
        The <code>width</code> and <code>height</code> attributes can be
        used to specify the dimensions of an image.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="photo.jpg"
    alt="Example Photo"
    width="300"
    height="200"
/>`}
      </pre>

      {/* LIVE IMAGE */}
      <h2 className="mt-4">
        Image Example
      </h2>

      <div className="border rounded p-4 text-center">

        <img
          src="https://placehold.co/400x220"
          alt="Example placeholder"
          className="img-fluid rounded"
        />

      </div>

      {/* RESPONSIVE IMAGES */}
      <h2 className="mt-4">
        Responsive Images
      </h2>

      <p>
        A responsive image automatically adapts to the available screen
        width. Bootstrap provides the <code>img-fluid</code> class for
        making images responsive.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="photo.jpg"
    alt="Responsive Photo"
    class="img-fluid"
/>`}
      </pre>

      <p>
        In React JSX, the same Bootstrap class is written using
        <code>className</code>:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="photo.jpg"
    alt="Responsive Photo"
    className="img-fluid"
/>`}
      </pre>

      {/* IMAGE AS LINK */}
      <h2 className="mt-4">
        Image as a Link
      </h2>

      <p>
        An image can be placed inside an anchor element to make the image
        clickable.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<a href="https://example.com">

    <img
        src="logo.png"
        alt="Website Logo"
    />

</a>`}
      </pre>

      {/* FIGURE */}
      <h2 className="mt-4">
        &lt;figure&gt; Element
      </h2>

      <p>
        The <code>&lt;figure&gt;</code> element can be used to group an
        image together with related content such as a caption.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<figure>

    <img
        src="nature.jpg"
        alt="Mountain landscape"
    >

    <figcaption>
        Beautiful mountain landscape
    </figcaption>

</figure>`}
      </pre>

      {/* LIVE FIGURE */}
      <h2 className="mt-4">
        Figure Example
      </h2>

      <figure className="border rounded p-3 text-center">

        <img
          src="https://placehold.co/600x300"
          alt="Example landscape"
          className="img-fluid rounded"
        />

        <figcaption className="mt-2 text-muted">
          Example image with a caption
        </figcaption>

      </figure>

      {/* IMAGE FORMATS */}
      <h2 className="mt-4">
        Common Image Formats
      </h2>

      <p>
        Different image formats are suitable for different situations.
      </p>

      <ul>
        <li>
          <strong>JPEG / JPG</strong> → Commonly used for photographs.
        </li>

        <li>
          <strong>PNG</strong> → Useful when transparency or lossless
          quality is needed.
        </li>

        <li>
          <strong>GIF</strong> → Supports simple animations.
        </li>

        <li>
          <strong>SVG</strong> → Useful for scalable vector graphics such
          as logos and icons.
        </li>

        <li>
          <strong>WebP</strong> → Modern image format with good
          compression and quality.
        </li>

        <li>
          <strong>AVIF</strong> → Modern format that can provide strong
          compression and image quality.
        </li>
      </ul>

      {/* ACCESSIBILITY */}
      <h2 className="mt-4">
        Images and Accessibility
      </h2>

      <p>
        Meaningful images should generally have useful alternative text.
        The text should describe the purpose or content of the image.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="student.jpg"
    alt="Student studying on a laptop"
/>`}
      </pre>

      <p>
        If an image is purely decorative and does not add meaningful
        information, an empty <code>alt</code> attribute can be used:
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<img
    src="decorative-line.png"
    alt=""
/>`}
      </pre>

      {/* BEST PRACTICES */}
      <h2 className="mt-4">
        Image Best Practices
      </h2>

      <ul>
        <li>
          Always provide meaningful <code>alt</code> text for informative
          images.
        </li>

        <li>
          Use appropriate image formats.
        </li>

        <li>
          Compress large images to improve page performance.
        </li>

        <li>
          Use responsive images when necessary.
        </li>

        <li>
          Use descriptive filenames for your image files.
        </li>

        <li>
          Avoid unnecessarily large images.
        </li>

        <li>
          Use <code>&lt;figure&gt;</code> and
          <code>&lt;figcaption&gt;</code> when an image needs a caption.
        </li>
      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <ul>
        <li>
          <code>&lt;img&gt;</code> is used to display images.
        </li>

        <li>
          <code>src</code> specifies the image location.
        </li>

        <li>
          <code>alt</code> provides alternative text.
        </li>

        <li>
          <code>width</code> and <code>height</code> can define image
          dimensions.
        </li>

        <li>
          Bootstrap's <code>img-fluid</code> class helps create responsive
          images.
        </li>

        <li>
          Images can be placed inside <code>&lt;a&gt;</code> elements to
          make them clickable.
        </li>

        <li>
          <code>&lt;figure&gt;</code> and <code>&lt;figcaption&gt;</code>
          can be used for images with captions.
        </li>
      </ul>

    </div>
  );
};

export default Images;