import React from "react";

const Iframes = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Iframes
      </h1>

      {/* INTRODUCTION */}
      <p>
        An <code>&lt;iframe&gt;</code> (Inline Frame) is an HTML element
        used to embed another webpage, document, video, map, or other
        external content inside the current webpage.
      </p>

      <p>
        In simple words, an iframe creates a separate browsing area
        inside our webpage where external content can be displayed.
      </p>

      {/* BASIC SYNTAX */}
      <h2 className="mt-4">
        1. Basic iframe Syntax
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    width="600"
    height="400"
    title="Example Website"
>
</iframe>`}
      </pre>

      <p>
        The <code>src</code> attribute specifies the URL of the content
        that should be displayed inside the iframe.
      </p>

      {/* SRC */}
      <h2 className="mt-4">
        2. src Attribute
      </h2>

      <p>
        The <code>src</code> attribute defines the resource that should
        be loaded inside the iframe.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    title="Example Website"
>
</iframe>`}
      </pre>

      <div className="alert alert-info">
        The URL specified in <code>src</code> must allow embedding.
        Some websites block iframe embedding using security headers.
      </div>

      {/* WIDTH HEIGHT */}
      <h2 className="mt-4">
        3. width and height
      </h2>

      <p>
        The <code>width</code> and <code>height</code> attributes
        specify the dimensions of the iframe.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    width="800"
    height="500"
    title="Example"
>
</iframe>`}
      </pre>

      {/* TITLE */}
      <h2 className="mt-4">
        4. title Attribute
      </h2>

      <p>
        The <code>title</code> attribute provides a description of
        the iframe content.
      </p>

      <p>
        It is especially important for accessibility because
        screen readers can use the title to describe the iframe.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    title="Example Website"
>
</iframe>`}
      </pre>

      <div className="alert alert-warning">
        Always provide a meaningful <code>title</code> for an iframe.
      </div>

      {/* PRACTICAL EXAMPLE */}
      <h2 className="mt-4">
        5. Practical iframe Example
      </h2>

      <p>
        Here we are embedding a publicly available webpage inside
        our page.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://www.example.com"
    width="100%"
    height="300"
    title="Example Website"
>
</iframe>`}
      </pre>

      {/* YOUTUBE */}
      <h2 className="mt-4">
        6. Embedding YouTube Videos
      </h2>

      <p>
        One of the most common uses of an iframe is embedding
        YouTube videos.
      </p>

      <p>
        YouTube provides an embed URL that can be used inside the
        <code>&lt;iframe&gt;</code>.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video"
    allowfullscreen
>
</iframe>`}
      </pre>

      {/* YOUTUBE LIVE EXAMPLE */}
      <h3 className="mt-4">
        YouTube Example
      </h3>

      <div className="ratio ratio-16x9">

        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video"
          allowFullScreen
        ></iframe>

      </div>

      <div className="alert alert-secondary mt-3">
        <strong>Note:</strong> Some external websites or videos may
        change their embedding permissions, so an iframe may not
        always load successfully.
      </div>

      {/* GOOGLE MAPS */}
      <h2 className="mt-4">
        7. Embedding Maps
      </h2>

      <p>
        Iframes can also be used to embed maps from services that
        provide an embed option.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="MAP_EMBED_URL"
    width="600"
    height="450"
    style="border:0;"
    allowfullscreen=""
    loading="lazy"
    title="Location Map"
>
</iframe>`}
      </pre>

      <p>
        Map providers usually give you the iframe code directly
        through their sharing or embed functionality.
      </p>

      {/* LOADING */}
      <h2 className="mt-4">
        8. loading Attribute
      </h2>

      <p>
        The <code>loading</code> attribute controls when the iframe
        should be loaded.
      </p>

      <p>
        The commonly used value is <code>lazy</code>.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    loading="lazy"
    title="Example Website"
>
</iframe>`}
      </pre>

      <p>
        Lazy loading can help improve initial page loading performance
        when the iframe is below the main visible content.
      </p>

      {/* ALLOWFULLSCREEN */}
      <h2 className="mt-4">
        9. allowfullscreen
      </h2>

      <p>
        The <code>allowfullscreen</code> attribute allows embedded
        content to enter fullscreen mode when supported.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="Video"
    allowfullscreen
>
</iframe>`}
      </pre>

      {/* ALLOW */}
      <h2 className="mt-4">
        10. allow Attribute
      </h2>

      <p>
        The <code>allow</code> attribute specifies which browser
        features the embedded content can use.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://www.youtube.com/embed/VIDEO_ID"
    title="YouTube video"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
>
</iframe>`}
      </pre>

      {/* BORDER */}
      <h2 className="mt-4">
        11. iframe Border
      </h2>

      <p>
        Instead of using the old <code>frameborder</code> attribute,
        modern websites should generally use CSS for borders.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    title="Example"
    style="border: 1px solid black;"
>
</iframe>`}
      </pre>

      {/* RESPONSIVE */}
      <h2 className="mt-4">
        12. Responsive iframe
      </h2>

      <p>
        Fixed iframe dimensions can cause problems on mobile devices.
        Therefore, responsive techniques are preferred.
      </p>

      <h3 className="mt-3">
        Bootstrap Method
      </h3>

      <pre className="bg-dark text-white p-3 rounded">
{`<div class="ratio ratio-16x9">

    <iframe
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="YouTube video"
    >
    </iframe>

</div>`}
      </pre>

      <p>
        Bootstrap's <code>ratio</code> utility automatically maintains
        the aspect ratio of the iframe.
      </p>

      {/* RESPONSIVE EXAMPLE */}
      <h3 className="mt-4">
        Responsive YouTube Example
      </h3>

      <div className="ratio ratio-16x9">

        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Responsive YouTube video"
          allowFullScreen
        ></iframe>

      </div>

      {/* SANDBOX */}
      <h2 className="mt-4">
        13. sandbox Attribute
      </h2>

      <p>
        The <code>sandbox</code> attribute adds restrictions to
        content loaded inside an iframe.
      </p>

      <p>
        This can provide an additional security boundary for embedded
        content.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://example.com"
    sandbox
    title="Sandboxed Content"
>
</iframe>`}
      </pre>

      <div className="alert alert-danger">
        Be careful when adding sandbox permissions. Only allow the
        capabilities that the embedded content actually needs.
      </div>

      {/* SANDBOX PERMISSIONS */}
      <h3 className="mt-4">
        Common sandbox Permissions
      </h3>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="example.html"
    sandbox="allow-scripts"
    title="Sandbox Example"
>
</iframe>`}
      </pre>

      <p>
        Some commonly used sandbox tokens include:
      </p>

      <ul>

        <li>
          <code>allow-scripts</code> — Allows scripts to run.
        </li>

        <li>
          <code>allow-forms</code> — Allows form submission.
        </li>

        <li>
          <code>allow-popups</code> — Allows popups.
        </li>

        <li>
          <code>allow-downloads</code> — Allows downloads in
          supported situations.
        </li>

      </ul>

      {/* SECURITY */}
      <h2 className="mt-4">
        14. iframe Security
      </h2>

      <p>
        Iframes can display content from another origin, so security
        should always be considered.
      </p>

      <ul>

        <li>
          Only embed content from trusted sources.
        </li>

        <li>
          Do not blindly embed unknown websites.
        </li>

        <li>
          Use <code>sandbox</code> when appropriate.
        </li>

        <li>
          Avoid giving unnecessary permissions through the
          <code>allow</code> attribute.
        </li>

        <li>
          Understand that some websites intentionally block iframe
          embedding.
        </li>

      </ul>

      {/* X-FRAME */}
      <h2 className="mt-4">
        15. Why Some Websites Cannot Be Embedded?
      </h2>

      <p>
        You may sometimes write a correct iframe but the website
        still refuses to load.
      </p>

      <p>
        This can happen because the target website uses security
        headers such as <code>X-Frame-Options</code> or a
        Content Security Policy that prevents framing.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    src="https://some-website.com"
    title="External Website"
>
</iframe>`}
      </pre>

      <div className="alert alert-warning">
        If the external server does not allow iframe embedding,
        you cannot reliably bypass that restriction from normal
        frontend HTML.
      </div>

      {/* TARGET */}
      <h2 className="mt-4">
        16. iframe with Links
      </h2>

      <p>
        An iframe can also have a <code>name</code>, allowing links
        to load their destination inside that iframe.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<iframe
    name="contentFrame"
    title="Content Frame"
    width="600"
    height="300"
>
</iframe>

<br>

<a
    href="https://example.com"
    target="contentFrame"
>
    Open Website
</a>`}
      </pre>

      {/* ATTRIBUTES TABLE */}
      <h2 className="mt-4">
        17. Important iframe Attributes
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">

            <tr>
              <th>Attribute</th>
              <th>Purpose</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>
                <code>src</code>
              </td>

              <td>
                Specifies the embedded resource URL.
              </td>
            </tr>

            <tr>
              <td>
                <code>width</code>
              </td>

              <td>
                Defines iframe width.
              </td>
            </tr>

            <tr>
              <td>
                <code>height</code>
              </td>

              <td>
                Defines iframe height.
              </td>
            </tr>

            <tr>
              <td>
                <code>title</code>
              </td>

              <td>
                Describes the iframe content for accessibility.
              </td>
            </tr>

            <tr>
              <td>
                <code>loading</code>
              </td>

              <td>
                Controls loading behavior.
              </td>
            </tr>

            <tr>
              <td>
                <code>allow</code>
              </td>

              <td>
                Controls permitted browser capabilities.
              </td>
            </tr>

            <tr>
              <td>
                <code>allowfullscreen</code>
              </td>

              <td>
                Allows fullscreen mode.
              </td>
            </tr>

            <tr>
              <td>
                <code>sandbox</code>
              </td>

              <td>
                Adds restrictions to embedded content.
              </td>
            </tr>

            <tr>
              <td>
                <code>name</code>
              </td>

              <td>
                Gives the iframe a browsing context name.
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* COMPLETE EXAMPLE */}
      <h2 className="mt-4">
        18. Complete iframe Example
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<div class="ratio ratio-16x9">

    <iframe
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="HTML iframe example"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >
    </iframe>

</div>`}
      </pre>

      {/* USE CASES */}
      <h2 className="mt-4">
        19. Common Uses of iframe
      </h2>

      <ul>

        <li>
          Embedding YouTube videos.
        </li>

        <li>
          Embedding maps.
        </li>

        <li>
          Embedding documents or external resources.
        </li>

        <li>
          Displaying external widgets.
        </li>

        <li>
          Integrating third-party services.
        </li>

        <li>
          Embedding online forms or tools when the provider supports
          iframe integration.
        </li>

      </ul>

      {/* BEST PRACTICES */}
      <h2 className="mt-4">
        20. Best Practices
      </h2>

      <ul>

        <li>
          Always provide a meaningful <code>title</code>.
        </li>

        <li>
          Prefer responsive iframe layouts.
        </li>

        <li>
          Use <code>loading="lazy"</code> for non-critical embeds
          when appropriate.
        </li>

        <li>
          Only embed trusted external content.
        </li>

        <li>
          Use <code>sandbox</code> when the embedded content does not
          require unrestricted capabilities.
        </li>

        <li>
          Avoid unnecessary permissions in the <code>allow</code>
          attribute.
        </li>

        <li>
          Remember that external websites can block iframe embedding.
        </li>

      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <p>
        The HTML <code>&lt;iframe&gt;</code> element allows us to
        display external content inside our webpage.
      </p>

      <p>
        It is commonly used for YouTube videos, maps, documents,
        widgets and other third-party integrations.
      </p>

      <p>
        Important iframe attributes include
        <code>src</code>, <code>title</code>, <code>width</code>,
        <code>height</code>, <code>loading</code>,
        <code>allow</code>, <code>allowfullscreen</code> and
        <code>sandbox</code>.
      </p>

    </div>
  );
};

export default Iframes;