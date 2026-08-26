import React from "react";

const Forms = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Forms
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML forms are used to collect information from users.
        Forms are commonly used for login pages, registration pages,
        contact forms, search boxes, feedback forms and many other
        applications.
      </p>

      <p>
        An HTML form is created using the <code>&lt;form&gt;</code>
        element. Inside the form, we can use different input elements
        such as text fields, email fields, password fields, radio
        buttons, checkboxes, dropdowns and buttons.
      </p>

      {/* BASIC FORM */}
      <h2 className="mt-4">
        Basic Form Structure
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<form>

    <label>Name:</label>

    <input type="text">

    <button type="submit">
        Submit
    </button>

</form>`}
      </pre>

      {/* FORM ELEMENT */}
      <h2 className="mt-4">
        &lt;form&gt; Element
      </h2>

      <p>
        The <code>&lt;form&gt;</code> element defines an area where
        users can enter and submit information.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<form>

    <!-- Form elements -->

</form>`}
      </pre>

      {/* LABEL */}
      <h2 className="mt-4">
        &lt;label&gt; Element
      </h2>

      <p>
        The <code>&lt;label&gt;</code> element provides a description
        for an input field. It improves usability because users can
        understand what information they need to enter.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<label htmlFor="name">
    Name
</label>

<input
    type="text"
    id="name"
/>`}
      </pre>

      {/* TEXT INPUT */}
      <h2 className="mt-4">
        Text Input
      </h2>

      <p>
        The <code>text</code> input is used to accept normal text
        information such as a user's name.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="text"
    name="name"
    placeholder="Enter your name"
/>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Name
        </label>

        <input
          type="text"
          className="form-control"
          placeholder="Enter your name"
        />

      </div>

      {/* EMAIL */}
      <h2 className="mt-4">
        Email Input
      </h2>

      <p>
        The <code>email</code> input is used to collect email addresses.
        Browsers can also perform basic email validation.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="email"
    name="email"
    placeholder="Enter your email"
/>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Email
        </label>

        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
        />

      </div>

      {/* PASSWORD */}
      <h2 className="mt-4">
        Password Input
      </h2>

      <p>
        The <code>password</code> input hides the characters entered by
        the user.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="password"
    name="password"
    placeholder="Enter password"
/>`}
      </pre>

      {/* NUMBER */}
      <h2 className="mt-4">
        Number Input
      </h2>

      <p>
        The <code>number</code> input is used when the user needs to
        enter a numeric value.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="number"
    name="age"
    min="1"
    max="100"
/>`}
      </pre>

      {/* DATE */}
      <h2 className="mt-4">
        Date Input
      </h2>

      <p>
        The <code>date</code> input allows the user to select a date.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="date"
    name="dob"
/>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Date of Birth
        </label>

        <input
          type="date"
          className="form-control"
        />

      </div>

      {/* FILE */}
      <h2 className="mt-4">
        File Input
      </h2>

      <p>
        The <code>file</code> input allows users to select a file from
        their device.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="file"
    name="profileImage"
/>`}
      </pre>

      {/* TEXTAREA */}
      <h2 className="mt-4">
        &lt;textarea&gt;
      </h2>

      <p>
        The <code>&lt;textarea&gt;</code> element is used for multiline
        text, such as messages, comments and descriptions.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<textarea
    name="message"
    rows="5"
    placeholder="Enter your message"
>
</textarea>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Message
        </label>

        <textarea
          className="form-control"
          rows="4"
          placeholder="Enter your message"
        ></textarea>

      </div>

      {/* SELECT */}
      <h2 className="mt-4">
        &lt;select&gt; Element
      </h2>

      <p>
        The <code>&lt;select&gt;</code> element creates a dropdown list.
        Individual options are created using the
        <code>&lt;option&gt;</code> element.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<select name="course">

    <option value="bca">
        BCA
    </option>

    <option value="bba">
        BBA
    </option>

    <option value="mca">
        MCA
    </option>

</select>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Select Course
        </label>

        <select className="form-select">

          <option>
            Select Course
          </option>

          <option>
            BCA
          </option>

          <option>
            BBA
          </option>

          <option>
            MCA
          </option>

        </select>

      </div>

      {/* RADIO */}
      <h2 className="mt-4">
        Radio Buttons
      </h2>

      <p>
        Radio buttons are used when the user should select only one
        option from a group.
      </p>

      <p>
        Radio buttons belonging to the same group should have the same
        <code>name</code>.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="radio"
    name="gender"
    value="male"
/>

<label>
    Male
</label>


<input
    type="radio"
    name="gender"
    value="female"
/>

<label>
    Female
</label>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Gender
        </label>

        <div>

          <div className="form-check">

            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
            />

            <label
              className="form-check-label"
              htmlFor="male"
            >
              Male
            </label>

          </div>

          <div className="form-check">

            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
            />

            <label
              className="form-check-label"
              htmlFor="female"
            >
              Female
            </label>

          </div>

        </div>

      </div>

      {/* CHECKBOX */}
      <h2 className="mt-4">
        Checkboxes
      </h2>

      <p>
        Checkboxes allow users to select multiple options.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="checkbox"
    name="skills"
    value="html"
/>

<label>
    HTML
</label>`}
      </pre>

      <div className="card p-3 mt-3">

        <label className="form-label">
          Skills
        </label>

        <div className="form-check">

          <input
            className="form-check-input"
            type="checkbox"
            id="html"
          />

          <label
            className="form-check-label"
            htmlFor="html"
          >
            HTML
          </label>

        </div>

        <div className="form-check">

          <input
            className="form-check-input"
            type="checkbox"
            id="css"
          />

          <label
            className="form-check-label"
            htmlFor="css"
          >
            CSS
          </label>

        </div>

        <div className="form-check">

          <input
            className="form-check-input"
            type="checkbox"
            id="javascript"
          />

          <label
            className="form-check-label"
            htmlFor="javascript"
          >
            JavaScript
          </label>

        </div>

      </div>

      {/* BUTTON */}
      <h2 className="mt-4">
        Buttons
      </h2>

      <p>
        The <code>&lt;button&gt;</code> element is commonly used to
        submit or reset a form.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<button type="submit">
    Submit
</button>

<button type="reset">
    Reset
</button>`}
      </pre>

      {/* BUTTON TYPES */}
      <h2 className="mt-4">
        Button Types
      </h2>

      <ul>

        <li>
          <code>submit</code> → submits the form
        </li>

        <li>
          <code>reset</code> → resets form fields
        </li>

        <li>
          <code>button</code> → normal button
        </li>

      </ul>

      <pre className="bg-dark text-white p-3 rounded">
{`<button type="submit">
    Submit
</button>

<button type="reset">
    Reset
</button>

<button type="button">
    Click Me
</button>`}
      </pre>

      {/* PLACEHOLDER */}
      <h2 className="mt-4">
        placeholder Attribute
      </h2>

      <p>
        The <code>placeholder</code> attribute displays a temporary hint
        inside an input field.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="text"
    placeholder="Enter your name"
/>`}
      </pre>

      {/* REQUIRED */}
      <h2 className="mt-4">
        required Attribute
      </h2>

      <p>
        The <code>required</code> attribute makes an input mandatory.
        The browser will prevent form submission until the field is
        filled.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="email"
    required
/>`}
      </pre>

      {/* VALUE */}
      <h2 className="mt-4">
        value Attribute
      </h2>

      <p>
        The <code>value</code> attribute defines the value associated
        with an input element.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="text"
    value="Charvin"
/>`}
      </pre>

      {/* NAME */}
      <h2 className="mt-4">
        name Attribute
      </h2>

      <p>
        The <code>name</code> attribute identifies form fields.
        It is especially important when form data is submitted to a
        backend.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<input
    type="text"
    name="username"
/>`}
      </pre>

      {/* FIELDSET */}
      <h2 className="mt-4">
        &lt;fieldset&gt;
      </h2>

      <p>
        The <code>&lt;fieldset&gt;</code> element groups related form
        controls together.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<fieldset>

    <input type="text">

    <input type="email">

</fieldset>`}
      </pre>

      {/* LEGEND */}
      <h2 className="mt-4">
        &lt;legend&gt;
      </h2>

      <p>
        The <code>&lt;legend&gt;</code> element provides a title for a
        fieldset.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<fieldset>

    <legend>
        Personal Information
    </legend>

    <input type="text">

    <input type="email">

</fieldset>`}
      </pre>

      {/* FORM ACTION */}
      <h2 className="mt-4">
        action Attribute
      </h2>

      <p>
        The <code>action</code> attribute specifies where the form data
        should be sent after submission.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<form action="/submit">

    <input
        type="text"
        name="username"
    />

    <button type="submit">
        Submit
    </button>

</form>`}
      </pre>

      {/* METHOD */}
      <h2 className="mt-4">
        method Attribute
      </h2>

      <p>
        The <code>method</code> attribute defines how form data is sent.
      </p>

      <h4 className="mt-3">
        GET
      </h4>

      <p>
        GET sends form data through the URL and is commonly used for
        search or non-sensitive data.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<form method="get">
    ...
</form>`}
      </pre>

      <h4 className="mt-3">
        POST
      </h4>

      <p>
        POST sends form data in the request body and is commonly used
        when creating or submitting data.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<form method="post">
    ...
</form>`}
      </pre>

      {/* COMPLETE FORM */}
      <h2 className="mt-4">
        Complete Registration Form
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<form>

    <label>
        Name
    </label>

    <input
        type="text"
        name="name"
        placeholder="Enter your name"
        required
    />


    <label>
        Email
    </label>

    <input
        type="email"
        name="email"
        placeholder="Enter your email"
        required
    />


    <label>
        Password
    </label>

    <input
        type="password"
        name="password"
        required
    />


    <label>
        Gender
    </label>

    <input
        type="radio"
        name="gender"
        value="male"
    />

    Male


    <input
        type="radio"
        name="gender"
        value="female"
    />

    Female


    <label>
        Course
    </label>

    <select name="course">

        <option value="bca">
            BCA
        </option>

        <option value="bba">
            BBA
        </option>

    </select>


    <label>
        Message
    </label>

    <textarea
        name="message"
    ></textarea>


    <button type="submit">
        Register
    </button>

</form>`}
      </pre>

      {/* LIVE FORM */}
      <h2 className="mt-4">
        Practical Registration Form
      </h2>

      <div className="card shadow-sm p-4 mb-5">

        <form>

          <div className="mb-3">

            <label className="form-label">
              Full Name
            </label>

            <input
              type="text"
              className="form-control"
              placeholder="Enter your full name"
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Password
            </label>

            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              required
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Age
            </label>

            <input
              type="number"
              className="form-control"
              min="1"
              max="100"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Date of Birth
            </label>

            <input
              type="date"
              className="form-control"
            />

          </div>

          <div className="mb-3">

            <label className="form-label">
              Course
            </label>

            <select className="form-select">

              <option>
                Select Course
              </option>

              <option>
                BCA
              </option>

              <option>
                BBA
              </option>

              <option>
                MCA
              </option>

            </select>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Message
            </label>

            <textarea
              className="form-control"
              rows="4"
              placeholder="Write your message"
            ></textarea>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Gender
            </label>

            <div className="form-check">

              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderMale"
              />

              <label
                className="form-check-label"
                htmlFor="genderMale"
              >
                Male
              </label>

            </div>

            <div className="form-check">

              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="genderFemale"
              />

              <label
                className="form-check-label"
                htmlFor="genderFemale"
              >
                Female
              </label>

            </div>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Skills
            </label>

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                id="skillHtml"
              />

              <label
                className="form-check-label"
                htmlFor="skillHtml"
              >
                HTML
              </label>

            </div>

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                id="skillCss"
              />

              <label
                className="form-check-label"
                htmlFor="skillCss"
              >
                CSS
              </label>

            </div>

            <div className="form-check">

              <input
                className="form-check-input"
                type="checkbox"
                id="skillJs"
              />

              <label
                className="form-check-label"
                htmlFor="skillJs"
              >
                JavaScript
              </label>

            </div>

          </div>

          <div className="mb-3">

            <label className="form-label">
              Profile Picture
            </label>

            <input
              type="file"
              className="form-control"
            />

          </div>

          <div className="d-flex gap-2">

            <button
              type="submit"
              className="btn btn-primary"
            >
              Register
            </button>

            <button
              type="reset"
              className="btn btn-secondary"
            >
              Reset
            </button>

          </div>

        </form>

      </div>

      {/* BEST PRACTICES */}
      <h2 className="mt-4">
        Form Best Practices
      </h2>

      <ul>

        <li>
          Always use <code>&lt;label&gt;</code> with form inputs.
        </li>

        <li>
          Use meaningful <code>name</code> attributes.
        </li>

        <li>
          Use <code>required</code> for mandatory fields.
        </li>

        <li>
          Use the correct input type such as
          <code>email</code>, <code>number</code> and
          <code>date</code>.
        </li>

        <li>
          Use <code>placeholder</code> only as a hint, not as a
          replacement for labels.
        </li>

        <li>
          Use the same <code>name</code> for radio buttons belonging to
          the same group.
        </li>

        <li>
          Use <code>fieldset</code> and <code>legend</code> when grouping
          related controls.
        </li>

        <li>
          Never rely only on frontend validation for security.
          Backend validation is also required.
        </li>

      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <ul>

        <li>
          <code>&lt;form&gt;</code> creates a form.
        </li>

        <li>
          <code>&lt;label&gt;</code> describes an input.
        </li>

        <li>
          <code>&lt;input&gt;</code> accepts user input.
        </li>

        <li>
          <code>&lt;textarea&gt;</code> accepts multiline text.
        </li>

        <li>
          <code>&lt;select&gt;</code> creates dropdowns.
        </li>

        <li>
          <code>&lt;option&gt;</code> creates dropdown options.
        </li>

        <li>
          Radio buttons allow one selection.
        </li>

        <li>
          Checkboxes allow multiple selections.
        </li>

        <li>
          <code>&lt;button&gt;</code> creates buttons.
        </li>

        <li>
          <code>required</code> makes fields mandatory.
        </li>

        <li>
          <code>action</code> defines where form data is sent.
        </li>

        <li>
          <code>method</code> defines how the data is submitted.
        </li>

      </ul>

    </div>
  );
};

export default Forms;