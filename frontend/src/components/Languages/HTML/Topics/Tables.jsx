import React from "react";

const Tables = () => {
  return (
    <div className="container-fluid">

      {/* TITLE */}
      <h1 className="text-center mb-4">
        HTML Tables
      </h1>

      {/* INTRODUCTION */}
      <p>
        HTML tables are used to display data in rows and columns.
        Tables are useful when information needs to be presented in a
        structured format, such as student records, product details,
        employee information, marksheets and reports.
      </p>

      <p>
        An HTML table is created using the <code>&lt;table&gt;</code>
        element.
      </p>

      {/* BASIC STRUCTURE */}
      <h2 className="mt-4">
        Basic Table Structure
      </h2>

      <p>
        A basic HTML table contains rows and cells. The
        <code>&lt;tr&gt;</code> element creates a row, while
        <code>&lt;th&gt;</code> and <code>&lt;td&gt;</code> create cells.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

    <tr>
        <td>Rahul</td>
        <td>21</td>
    </tr>

</table>`}
      </pre>

      {/* TABLE ELEMENT */}
      <h2 className="mt-4">
        &lt;table&gt; Element
      </h2>

      <p>
        The <code>&lt;table&gt;</code> element defines the complete table.
        All table rows and cells are placed inside this element.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>
    ...
</table>`}
      </pre>

      {/* TR */}
      <h2 className="mt-4">
        &lt;tr&gt; - Table Row
      </h2>

      <p>
        The <code>&lt;tr&gt;</code> element represents a single row in a
        table.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<tr>
    <td>John</td>
    <td>25</td>
</tr>`}
      </pre>

      {/* TH */}
      <h2 className="mt-4">
        &lt;th&gt; - Table Header
      </h2>

      <p>
        The <code>&lt;th&gt;</code> element defines a header cell.
        Browsers normally display header cells using bold text.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<tr>
    <th>Name</th>
    <th>Email</th>
    <th>Age</th>
</tr>`}
      </pre>

      {/* TD */}
      <h2 className="mt-4">
        &lt;td&gt; - Table Data
      </h2>

      <p>
        The <code>&lt;td&gt;</code> element represents normal data inside
        a table.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<tr>
    <td>Charvin</td>
    <td>charvin@example.com</td>
    <td>21</td>
</tr>`}
      </pre>

      {/* LIVE TABLE */}
      <h2 className="mt-4">
        Basic Table Example
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Rahul</td>
              <td>rahul@example.com</td>
              <td>21</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>priya@example.com</td>
              <td>22</td>
            </tr>

            <tr>
              <td>Amit</td>
              <td>amit@example.com</td>
              <td>23</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* THEAD */}
      <h2 className="mt-4">
        &lt;thead&gt;
      </h2>

      <p>
        The <code>&lt;thead&gt;</code> element groups the header rows of
        a table.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>

    <thead>

        <tr>
            <th>Name</th>
            <th>Age</th>
        </tr>

    </thead>

</table>`}
      </pre>

      {/* TBODY */}
      <h2 className="mt-4">
        &lt;tbody&gt;
      </h2>

      <p>
        The <code>&lt;tbody&gt;</code> element contains the main data
        rows of the table.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<tbody>

    <tr>
        <td>Rahul</td>
        <td>21</td>
    </tr>

    <tr>
        <td>Priya</td>
        <td>22</td>
    </tr>

</tbody>`}
      </pre>

      {/* TFOOT */}
      <h2 className="mt-4">
        &lt;tfoot&gt;
      </h2>

      <p>
        The <code>&lt;tfoot&gt;</code> element is used for footer rows,
        such as totals or summary information.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<tfoot>

    <tr>
        <td colspan="2">Total</td>
        <td>500</td>
    </tr>

</tfoot>`}
      </pre>

      {/* COMPLETE STRUCTURE */}
      <h2 className="mt-4">
        Complete Table Structure
      </h2>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>

    <thead>

        <tr>
            <th>Product</th>
            <th>Price</th>
        </tr>

    </thead>


    <tbody>

        <tr>
            <td>Laptop</td>
            <td>50000</td>
        </tr>

        <tr>
            <td>Mouse</td>
            <td>1000</td>
        </tr>

    </tbody>


    <tfoot>

        <tr>
            <td>Total</td>
            <td>51000</td>
        </tr>

    </tfoot>

</table>`}
      </pre>

      {/* COLSPAN */}
      <h2 className="mt-4">
        colspan Attribute
      </h2>

      <p>
        The <code>colspan</code> attribute allows one cell to span across
        multiple columns.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>

    <tr>
        <th>Name</th>
        <th>Marks</th>
        <th>Grade</th>
    </tr>

    <tr>
        <td colspan="2">
            Total Student
        </td>

        <td>A</td>
    </tr>

</table>`}
      </pre>

      {/* LIVE COLSPAN */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="table-responsive">

        <table className="table table-bordered text-center">

          <thead>
            <tr>
              <th>Name</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td colSpan="2">
                Rahul - 85 Marks
              </td>

              <td>A</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* ROWSPAN */}
      <h2 className="mt-4">
        rowspan Attribute
      </h2>

      <p>
        The <code>rowspan</code> attribute allows one cell to span across
        multiple rows.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>

    <tr>
        <th>Name</th>
        <th>Subject</th>
    </tr>

    <tr>
        <td rowspan="2">
            Rahul
        </td>

        <td>HTML</td>
    </tr>

    <tr>
        <td>CSS</td>
    </tr>

</table>`}
      </pre>

      {/* LIVE ROWSPAN */}
      <h4 className="mt-3">
        Example
      </h4>

      <div className="table-responsive">

        <table className="table table-bordered text-center">

          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td rowSpan="2">
                Rahul
              </td>

              <td>HTML</td>
            </tr>

            <tr>
              <td>CSS</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* CAPTION */}
      <h2 className="mt-4">
        Table Caption
      </h2>

      <p>
        The <code>&lt;caption&gt;</code> element provides a title or
        description for a table.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table>

    <caption>
        Student Information
    </caption>

    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>

</table>`}
      </pre>

      {/* LIVE CAPTION */}
      <div className="table-responsive">

        <table className="table table-bordered">

          <caption>
            Student Information
          </caption>

          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Course</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Rahul</td>
              <td>21</td>
              <td>BCA</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>22</td>
              <td>BCA</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* BOOTSTRAP */}
      <h2 className="mt-4">
        Bootstrap Table
      </h2>

      <p>
        Bootstrap provides several classes that make tables easier to
        style.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<table className="table table-striped table-bordered">

    <thead>
        <tr>
            <th>Name</th>
            <th>Course</th>
        </tr>
    </thead>

    <tbody>

        <tr>
            <td>Rahul</td>
            <td>BCA</td>
        </tr>

        <tr>
            <td>Priya</td>
            <td>BCA</td>
        </tr>

    </tbody>

</table>`}
      </pre>

      {/* BOOTSTRAP EXAMPLE */}
      <h4 className="mt-3">
        Bootstrap Example
      </h4>

      <div className="table-responsive">

        <table className="table table-striped table-bordered table-hover">

          <thead className="table-dark">

            <tr>
              <th>#</th>
              <th>Student</th>
              <th>Course</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>1</td>
              <td>Rahul</td>
              <td>BCA</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Priya</td>
              <td>BCA</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Amit</td>
              <td>BCA</td>
              <td>Completed</td>
            </tr>

          </tbody>

        </table>

      </div>

      {/* PRACTICAL EXAMPLE */}
      <h2 className="mt-4">
        Practical Student Marksheet
      </h2>

      <div className="table-responsive">

        <table className="table table-bordered text-center">

          <thead className="table-dark">

            <tr>
              <th>Student</th>
              <th>HTML</th>
              <th>CSS</th>
              <th>JavaScript</th>
              <th>Total</th>
            </tr>

          </thead>

          <tbody>

            <tr>
              <td>Rahul</td>
              <td>85</td>
              <td>80</td>
              <td>90</td>
              <td>255</td>
            </tr>

            <tr>
              <td>Priya</td>
              <td>90</td>
              <td>88</td>
              <td>92</td>
              <td>270</td>
            </tr>

            <tr>
              <td>Amit</td>
              <td>75</td>
              <td>82</td>
              <td>78</td>
              <td>235</td>
            </tr>

          </tbody>

          <tfoot>

            <tr className="table-secondary">

              <th colSpan="4">
                Average
              </th>

              <th>
                253.33
              </th>

            </tr>

          </tfoot>

        </table>

      </div>

      {/* RESPONSIVE TABLE */}
      <h2 className="mt-4">
        Responsive Tables
      </h2>

      <p>
        Tables containing many columns may not fit properly on smaller
        screens. Bootstrap's <code>table-responsive</code> class can be
        used to make the table horizontally scrollable on smaller
        screens.
      </p>

      <pre className="bg-dark text-white p-3 rounded">
{`<div className="table-responsive">

    <table className="table">
        ...
    </table>

</div>`}
      </pre>

      {/* BEST PRACTICES */}
      <h2 className="mt-4">
        Table Best Practices
      </h2>

      <ul>

        <li>
          Use tables for tabular data, not for page layout.
        </li>

        <li>
          Use <code>&lt;th&gt;</code> for table headers.
        </li>

        <li>
          Organize tables using <code>&lt;thead&gt;</code>,
          <code>&lt;tbody&gt;</code> and <code>&lt;tfoot&gt;</code>.
        </li>

        <li>
          Use <code>&lt;caption&gt;</code> when a table needs a clear
          title.
        </li>

        <li>
          Use <code>colspan</code> when a cell needs to cover multiple
          columns.
        </li>

        <li>
          Use <code>rowspan</code> when a cell needs to cover multiple
          rows.
        </li>

        <li>
          Make large tables responsive on smaller screens.
        </li>

      </ul>

      {/* SUMMARY */}
      <h2 className="mt-4">
        Summary
      </h2>

      <ul>

        <li>
          <code>&lt;table&gt;</code> creates the table.
        </li>

        <li>
          <code>&lt;tr&gt;</code> creates a table row.
        </li>

        <li>
          <code>&lt;th&gt;</code> creates a header cell.
        </li>

        <li>
          <code>&lt;td&gt;</code> creates a data cell.
        </li>

        <li>
          <code>&lt;thead&gt;</code> contains table headers.
        </li>

        <li>
          <code>&lt;tbody&gt;</code> contains the main table data.
        </li>

        <li>
          <code>&lt;tfoot&gt;</code> contains summary or footer data.
        </li>

        <li>
          <code>colspan</code> spans multiple columns.
        </li>

        <li>
          <code>rowspan</code> spans multiple rows.
        </li>

        <li>
          <code>&lt;caption&gt;</code> provides a table title.
        </li>

      </ul>

    </div>
  );
};

export default Tables;