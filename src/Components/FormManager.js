import React, { useState } from 'react';

const DepartmentForm = () => {
  const [deptName, setDeptName] = useState('');
  const [lmName, setLmName] = useState('');
  const [designation, setDesignation] = useState('');
  const [lmEmail, setLmEmail] = useState('');
  const [sectionID, setSectionID] = useState('');
  const [isSectionHead, setIsSectionHead] = useState(false);
  const [isSecondarySectionHead, setIsSecondarySectionHead] = useState(false);
  const [ccEmail, setCcEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform form submission logic here
    // You can access the form data using the state variables

    // Reset the form
    setDeptName('');
    setLmName('');
    setDesignation('');
    setLmEmail('');
    setSectionID('');
    setIsSectionHead(false);
    setIsSecondarySectionHead(false);
    setCcEmail('');
  };

  return (
    <div className="card-body">
      <form onSubmit={handleFormSubmit}>
        <table>
          <tbody>
            <tr>
              <td>
                <div className="col-md-3 form-group mb-3">
                  <label htmlFor="deptName">Department Name</label>
                  <br />
                  <select
                    className="form-select"
                    id="deptName"
                    name="deptName"
                    value={deptName}
                    onChange={(e) => setDeptName(e.target.value)}
                  >
                    <option value="">Choose Department</option>
                    <option value="214">Administration</option>
                    <option value="53">Angul-Information Technology</option>
                    {/* Other options omitted for brevity */}
                  </select>
                  <br />
                  <small className="form-text text-muted">
                    Select the department of the line manager
                  </small>
                </div>
              </td>
              <td>
                <div className="col-md-3 form-group mb-3">
                  <label htmlFor="lmName">LM Name</label>
                  <br />
                  <input
                    className="form-control"
                    id="lmName"
                    name="lmName"
                    type="text"
                    value={lmName}
                    onChange={(e) => setLmName(e.target.value)}
                    placeholder="LM Name"
                  />
                  <br />
                  <small className="form-text text-muted">
                    Enter the name of the line manager
                  </small>
                </div>
              </td>
              <td>
                <div className="col-md-3 form-group mb-3">
                  <label htmlFor="designation">Designation</label>
                  <br />
                  <select
                    className="form-select"
                    id="designation"
                    name="designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                    required
                  >
                    <option value="">SELECT</option>
                    <option value="1">Executive Director</option>
                    {/* Other options omitted for brevity */}
                  </select>
                  <br />
                  <small className="form-text text-muted">
                    Select the designation of the line manager
                  </small>
                </div>
              </td>
              <td>
                <div className="col-md-3 form-group mb-3">
                  <label htmlFor="lmEmail">LM Email ID</label>
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    name="lmEmail"
                    value={lmEmail}
                    onChange={(e) => setLmEmail(e.target.value)}
                    placeholder="LM Email ID"
                    required
                  />
                  <br />
                  <small className="form-text text-muted">
                    Enter the email ID of the line manager
                  </small>
                </div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="col-md-3 form-group mb-3">
                  <label htmlFor="sectionID">Section Name</label>
                  <br />
                  <select
                    className="form-select"
                    id="sectionID"
                    name="sectionID"
                    value={sectionID}
                    onChange={(e) => setSectionID(e.target.value)}
                    required
                  >
                    <option value="">Choose Section</option>
                    <option value="1">Section A</option>
                    <option value="2">Section B</option>
                    {/* Other options omitted for brevity */}
                  </select>
                  <br />
                  <small className="form-text text-muted">
                    Select the section for the line manager
                  </small>
                </div>
              </td>

              <td>
                <div className="col-md-3 form-group mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="isSectionHead"
                      name="isSectionHead"
                      checked={isSectionHead}
                      onChange={(e) => setIsSectionHead(e.target.checked)}
                    />
                    <label className="form-check-label" htmlFor="isSectionHead">
                      Is Section Head?
                    </label>
                  </div>
                </div>
              </td>

              <td>
                <div className="col-md-3 form-group mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="isSecondarySectionHead"
                      name="isSecondarySectionHead"
                      checked={isSecondarySectionHead}
                      onChange={(e) => setIsSecondarySectionHead(e.target.checked)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="isSecondarySectionHead"
                    >
                      Is Secondary Section Head?
                    </label>
                  </div>
                </div>
              </td>

              <td>
                <div className="col-md-3 form-group mb-3">
                  <label htmlFor="ccEmail">CC Email ID</label>
                  <br />
                  <input
                    className="form-control"
                    type="email"
                    name="ccEmail"
                    value={ccEmail}
                    onChange={(e) => setCcEmail(e.target.value)}
                    placeholder="CC Email ID"
                  />
                  <br />
                  <small className="form-text text-muted">
                    Enter the CC email ID
                  </small>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="text-end">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DepartmentForm;
