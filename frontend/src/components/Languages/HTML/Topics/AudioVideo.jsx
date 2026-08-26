import React from "react";

const AudioVideo = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Audio & Video
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML provides built-in elements for adding multimedia content
        such as audio and video directly into a webpage.
      </p>

      <p>
        The two main multimedia elements in HTML are
        <code> &lt;audio&gt; </code> and
        <code> &lt;video&gt; </code>.
      </p>

      <p>
        These elements allow users to play media without requiring
        external plugins.
      </p>

      {/* AUDIO */}
      <h2 className="mt-4">
        1. HTML &lt;audio&gt;
      </h2>

      <p>
        The <code>&lt;audio&gt;</code> element is used to embed
        sound or audio content into a webpage.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<audio controls>
    <source src="audio.mp3" type="audio/mpeg">
</audio>`}
      </pre>

      <p>
        The <code>controls</code> attribute displays the default
        audio controls such as play, pause and volume.
      </p>

      {/* AUDIO EXAMPLE */}
      <h3 className="mt-4">
        Audio Example
      </h3>

      <div className="border rounded p-3">

        <audio controls className="w-100">

          <source
            src="https://www.w3schools.com/html/horse.ogg"
            type="audio/ogg"
          />

          <source
            src="https://www.w3schools.com/html/horse.mp3"
            type="audio/mpeg"
          />

          Your browser does not support the audio element.

        </audio>

      </div>

      {/* AUDIO SOURCE */}
      <h2 className="mt-4">
        2. Using &lt;source&gt; with Audio
      </h2>

      <p>
        The <code>&lt;source&gt;</code> element allows us to provide
        multiple audio formats.
      </p>

      <p>
        The browser can choose the first format that it supports.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<audio controls>

    <source
        src="music.mp3"
        type="audio/mpeg"
    >

    <source
        src="music.ogg"
        type="audio/ogg"
    >

</audio>`}
      </pre>

      {/* AUDIO CONTROLS */}
      <h2 className="mt-4">
        3. Audio Controls
      </h2>

      <p>
        The <code>controls</code> attribute provides the browser's
        default media controls.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<audio controls>
    <source src="music.mp3" type="audio/mpeg">
</audio>`}
      </pre>

      <p>
        Without <code>controls</code>, the user may not have a visible
        way to control the audio.
      </p>

      {/* AUTOPLAY */}
      <h2 className="mt-4">
        4. autoplay
      </h2>

      <p>
        The <code>autoplay</code> attribute tells the browser to start
        playing the media automatically.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<audio controls autoplay>
    <source src="music.mp3" type="audio/mpeg">
</audio>`}
      </pre>

      <div className="alert alert-warning">
        <strong>Important:</strong> Modern browsers often restrict
        autoplay, especially when audio has sound.
      </div>

      {/* LOOP */}
      <h2 className="mt-4">
        5. loop
      </h2>

      <p>
        The <code>loop</code> attribute causes the media to start again
        automatically after it finishes.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<audio controls loop>
    <source src="music.mp3" type="audio/mpeg">
</audio>`}
      </pre>

      {/* MUTED */}
      <h2 className="mt-4">
        6. muted
      </h2>

      <p>
        The <code>muted</code> attribute starts the media with its
        audio muted.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<audio controls muted>
    <source src="music.mp3" type="audio/mpeg">
</audio>`}
      </pre>

      {/* VIDEO */}
      <h2 className="mt-4">
        7. HTML &lt;video&gt;
      </h2>

      <p>
        The <code>&lt;video&gt;</code> element is used to embed video
        content into a webpage.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video controls>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      {/* VIDEO EXAMPLE */}
      <h3 className="mt-4">
        Video Example
      </h3>

      <div className="border rounded p-3">

        <video
          controls
          className="w-100"
          style={{ maxHeight: "400px" }}
        >

          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />

          Your browser does not support the video element.

        </video>

      </div>

      {/* VIDEO WIDTH HEIGHT */}
      <h2 className="mt-4">
        8. Video Width and Height
      </h2>

      <p>
        The width and height of a video can be controlled using HTML
        attributes or CSS.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    width="600"
    height="400"
    controls
>
    <source
        src="video.mp4"
        type="video/mp4"
    >
</video>`}
      </pre>

      <p>
        In modern responsive websites, CSS is generally preferred
        for controlling media dimensions.
      </p>

      {/* RESPONSIVE VIDEO */}
      <h2 className="mt-4">
        9. Responsive Video
      </h2>

      <p>
        We can use Bootstrap's <code>w-100</code> class or CSS to make
        the video responsive.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    controls
    class="w-100"
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      {/* POSTER */}
      <h2 className="mt-4">
        10. poster
      </h2>

      <p>
        The <code>poster</code> attribute specifies an image that is
        displayed before the video starts playing.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    controls
    poster="thumbnail.jpg"
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      {/* PRELOAD */}
      <h2 className="mt-4">
        11. preload
      </h2>

      <p>
        The <code>preload</code> attribute tells the browser how much
        media information should be loaded before the user plays it.
      </p>

      <p>Common values are:</p>

      <ul>

        <li>
          <code>none</code> — Do not preload the media.
        </li>

        <li>
          <code>metadata</code> — Load only metadata.
        </li>

        <li>
          <code>auto</code> — Browser may preload the media.
        </li>

      </ul>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    controls
    preload="metadata"
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      {/* MULTIPLE VIDEO SOURCES */}
      <h2 className="mt-4">
        12. Multiple Video Sources
      </h2>

      <p>
        Just like audio, we can provide multiple video formats using
        the <code>&lt;source&gt;</code> element.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video controls>

    <source
        src="video.mp4"
        type="video/mp4"
    >

    <source
        src="video.webm"
        type="video/webm"
    >

    Your browser does not support video.

</video>`}
      </pre>

      {/* VIDEO AUTOPLAY MUTED */}
      <h2 className="mt-4">
        13. autoplay + muted
      </h2>

      <p>
        A common combination for automatically playing video is
        <code>autoplay</code> with <code>muted</code>.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    autoplay
    muted
    loop
>

    <source
        src="background.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      <div className="alert alert-info">
        This pattern is commonly used for background videos,
        because browsers are more likely to allow autoplay when
        the video is muted.
      </div>

      {/* VIDEO LOOP */}
      <h2 className="mt-4">
        14. Video Loop
      </h2>

      <p>
        The <code>loop</code> attribute makes the video repeat
        continuously.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    controls
    loop
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      {/* VIDEO MUTED */}
      <h2 className="mt-4">
        15. Muted Video
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    controls
    muted
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

</video>`}
      </pre>

      {/* AUDIO VS VIDEO */}
      <h2 className="mt-4">
        16. Audio vs Video
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered table-striped">

          <thead className="table-dark">

            <tr>
              <th>Element</th>
              <th>Purpose</th>
              <th>Common Formats</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>
                <code>&lt;audio&gt;</code>
              </td>

              <td>
                Plays audio content
              </td>

              <td>
                MP3, OGG, WAV
              </td>
            </tr>

            <tr>
              <td>
                <code>&lt;video&gt;</code>
              </td>

              <td>
                Plays video content
              </td>

              <td>
                MP4, WebM, OGG
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* IMPORTANT ATTRIBUTES */}
      <h2 className="mt-4">
        17. Important Media Attributes
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered">

          <thead className="table-dark">

            <tr>
              <th>Attribute</th>
              <th>Purpose</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>
                <code>controls</code>
              </td>

              <td>
                Displays media controls.
              </td>
            </tr>

            <tr>
              <td>
                <code>autoplay</code>
              </td>

              <td>
                Starts media automatically when allowed.
              </td>
            </tr>

            <tr>
              <td>
                <code>muted</code>
              </td>

              <td>
                Starts media without sound.
              </td>
            </tr>

            <tr>
              <td>
                <code>loop</code>
              </td>

              <td>
                Repeats the media.
              </td>
            </tr>

            <tr>
              <td>
                <code>poster</code>
              </td>

              <td>
                Specifies the video's preview image.
              </td>
            </tr>

            <tr>
              <td>
                <code>preload</code>
              </td>

              <td>
                Controls how media is preloaded.
              </td>
            </tr>

            <tr>
              <td>
                <code>width</code>
              </td>

              <td>
                Sets media width.
              </td>
            </tr>

            <tr>
              <td>
                <code>height</code>
              </td>

              <td>
                Sets media height.
              </td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* COMPLETE EXAMPLE */}
      <h2 className="mt-4">
        18. Complete Video Example
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<video
    class="w-100"
    controls
    muted
    loop
    poster="thumbnail.jpg"
    preload="metadata"
>

    <source
        src="video.mp4"
        type="video/mp4"
    >

    <source
        src="video.webm"
        type="video/webm"
    >

    Your browser does not support video.

</video>`}
      </pre>

      {/* BEST PRACTICES */}
      <h2 className="mt-4">
        19. Best Practices
      </h2>

      <ul>

        <li>
          Always provide <code>controls</code> when users need to
          manually control media.
        </li>

        <li>
          Provide multiple formats using
          <code>&lt;source&gt;</code> when browser compatibility
          matters.
        </li>

        <li>
          Use <code>poster</code> for videos to provide a useful
          preview image.
        </li>

        <li>
          Avoid unnecessary autoplay because it can negatively
          affect user experience.
        </li>

        <li>
          Use <code>muted</code> when autoplaying background videos.
        </li>

        <li>
          Use responsive CSS so videos work properly on mobile
          devices.
        </li>

        <li>
          Provide fallback text for browsers that cannot play the
          media.
        </li>

      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <p>
        HTML provides native support for multimedia using the
        <code>&lt;audio&gt;</code> and <code>&lt;video&gt;</code>
        elements.
      </p>

      <p>
        The <code>&lt;source&gt;</code> element can be used to provide
        multiple media formats, while attributes such as
        <code>controls</code>, <code>autoplay</code>,
        <code>muted</code>, <code>loop</code>,
        <code>poster</code> and <code>preload</code> control the
        media behavior.
      </p>

    </div>
  );
};

export default AudioVideo;