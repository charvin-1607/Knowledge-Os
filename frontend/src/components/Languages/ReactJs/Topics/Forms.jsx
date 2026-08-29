import React from "react";

const Forms = () => {

    return (
        <div>

            <h1 className="mb-4">
                Forms in React
            </h1>


            {/* Introduction */}

            <h2>What are Forms?</h2>

            <p>
                Forms are used to collect information from users.
                React applications commonly use forms for login,
                registration, search, contact and data entry operations.
            </p>


            {/* Basic Form */}

            <h2 className="mt-4">
                Basic Form
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`function Login() {

    return (
        <form>

            <input
                type="email"
                placeholder="Enter email"
            />

            <input
                type="password"
                placeholder="Enter password"
            />

            <button type="submit">
                Login
            </button>

        </form>
    );

}`}
            </pre>


            {/* Controlled */}

            <h2 className="mt-4">
                Controlled Components
            </h2>

            <p>
                A controlled component is a form element whose value is
                controlled by React state. The input value is connected
                to a state variable and changes are handled using an
                event handler.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [email, setEmail] = useState("");

<input
    type="email"
    value={email}
    onChange={(event) => {
        setEmail(event.target.value);
    }}
/>`}
            </pre>


            {/* Input */}

            <h2 className="mt-4">
                Handling Input
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("");

const handleChange = (event) => {

    setName(event.target.value);

};

<input
    value={name}
    onChange={handleChange}
/>`}
            </pre>


            {/* Submit */}

            <h2 className="mt-4">
                Handling Form Submission
            </h2>

            <p>
                The onSubmit event can be used to handle form submission.
                The preventDefault() method is commonly used to prevent
                the browser from performing its default submission.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const handleSubmit = (event) => {

    event.preventDefault();

    console.log("Form submitted");

};`}
            </pre>


            {/* Full Example */}

            <h2 className="mt-4">
                Complete Form Example
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`import { useState } from "react";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        console.log(email);
        console.log(password);

    };

    return (
        <form onSubmit={handleSubmit}>

            <input
                type="email"
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)
                }
            />

            <input
                type="password"
                value={password}
                onChange={(event) =>
                    setPassword(event.target.value)
                }
            />

            <button type="submit">
                Login
            </button>

        </form>
    );

}`}
            </pre>


            {/* Multiple Inputs */}

            <h2 className="mt-4">
                Multiple Form Inputs
            </h2>

            <p>
                A form can contain multiple inputs such as name, email,
                password, phone number and address. Each input can be
                connected to its own state variable or managed through
                a shared state object.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [password, setPassword] = useState("");`}
            </pre>


            {/* Checkbox */}

            <h2 className="mt-4">
                Checkbox
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [isAccepted, setIsAccepted] = useState(false);

<input
    type="checkbox"
    checked={isAccepted}
    onChange={(event) =>
        setIsAccepted(event.target.checked)
    }
/>`}
            </pre>


            {/* Select */}

            <h2 className="mt-4">
                Select Input
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [country, setCountry] = useState("");

<select
    value={country}
    onChange={(event) =>
        setCountry(event.target.value)
    }
>

    <option value="">
        Select Country
    </option>

    <option value="india">
        India
    </option>

    <option value="usa">
        USA
    </option>

</select>`}
            </pre>


            {/* Textarea */}

            <h2 className="mt-4">
                Textarea
            </h2>

            <pre className="bg-dark text-white p-3 rounded">
{`const [message, setMessage] = useState("");

<textarea
    value={message}
    onChange={(event) =>
        setMessage(event.target.value)
    }
/>`}
            </pre>


            {/* Validation */}

            <h2 className="mt-4">
                Form Validation
            </h2>

            <p>
                Form validation checks whether the information entered
                by the user is valid before processing or sending it to
                a server.
            </p>

            <pre className="bg-dark text-white p-3 rounded">
{`if (!email) {

    setError("Email is required");

    return;

}

if (!password) {

    setError("Password is required");

    return;

}`}
            </pre>


            {/* Real World */}

            <h2 className="mt-4">
                Real-World Form Example
            </h2>

            <ul>

                <li>
                    Login form
                </li>

                <li>
                    Signup form
                </li>

                <li>
                    Contact form
                </li>

                <li>
                    Search form
                </li>

                <li>
                    Profile update form
                </li>

                <li>
                    Product creation form
                </li>

            </ul>


            {/* Key Points */}

            <h2 className="mt-4">
                Key Points
            </h2>

            <div className="alert alert-success">

                <ul className="mb-0">

                    <li>
                        Forms collect user input.
                    </li>

                    <li>
                        React state can control form values.
                    </li>

                    <li>
                        onChange handles input changes.
                    </li>

                    <li>
                        onSubmit handles form submission.
                    </li>

                    <li>
                        preventDefault() can prevent default browser
                        submission behavior.
                    </li>

                    <li>
                        Validation should be performed before processing
                        form data.
                    </li>

                </ul>

            </div>


            <h2 className="mt-4">
                Summary
            </h2>

            <p>
                React forms allow applications to collect and manage
                user input. Controlled components use state to maintain
                input values, while event handlers are used to process
                changes and form submissions.
            </p>

        </div>
    );
};

export default Forms;