import React, { useState } from "react";
import "./Table.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Raised() {
  const [activeTable, setActiveTable] = useState("table1");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numUnits, setNumUnits] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const data = [];


  const handleTableClick = (tableId) => {
    setActiveTable(tableId);
  };

  const handleDateChange = (date, dateType) => {
    if (dateType === "start") {
      setStartDate(date);
    } else if (dateType === "end") {
      setEndDate(date);
    }
  };

  const handleNumUnitsChange = (event) => {
    setNumUnits(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };


  const handlePrevPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPageClick = () => {
    // Replace 10 with the number of items per page
    if (currentPage < Math.ceil(data.length / 10)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const cardPIOs4 = {
    marginTop: "30px",
    paddingTop: "20px",
    paddingBottom: "5px",
    borderRadius: "10px",
    background: "#fff",
    width: "Auto",
    paddingLeft: "30px",
    boxShadow: "0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08)",
  };


  return (
    <div className="Heading" style={{marginTop:"20px"}}>
        <h3>
            My Raised Observation
        </h3>
        <hr
          style={{
            background: "#F9F9F9",
            color: "#F9F9F9",
            marginTop: "20px",
          }}
        />
    <div className="card" style={cardPIOs4}>
    <div className="tables-container" style={{marginTop:"10px", marginBottom:"25px", marginRight:"30px"}}>
      <div className="tables">
        <div
          className="table-heading"
          onClick={() => handleTableClick("table1")}
        >
          <h2>Pending Safety Observations</h2>
        </div>
        <div
          className="table-heading"
          onClick={() => handleTableClick("table2")}
        >
          <h2>Resolved Safety Observations </h2>
        </div>
      </div>
      <div className="buttons-date">
        <div className="table-buttons">
          <button className="copy-button">Copy</button>
          <button className="csv-button">CSV</button>
          <button className="excel-button">Excel</button>
          <button className="pdf-button">PDF</button>
          <button className="print-button">Print</button>
        </div>
        <div className="date-range-picker">
          <label>Choose Date Range:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => handleDateChange(date, "start")}
            placeholderText="Start Date"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => handleDateChange(date, "end")}
            placeholderText="End Date"
          />
        </div>
      </div>
      <div className="entries-search" style={{marginTop: "30px"}}>
        <div className="num-units-input">
          <label>Number of entries: </label>
          <input
            type="number"
            min="0"
            value={numUnits}
            onChange={handleNumUnitsChange}
            style={{marginLeft: "10px", border:"1px solid #ccc", borderRadius:"0.2rem", width:"20%", height:"100%"}}
          />
        </div>
        <div className="search-input" style={{marginRight: "2px" }}>
        <input
          type="text"
          placeholder="  Search"
          value={searchTerm}
          onChange={handleSearchTermChange}
          style={{marginRight: "10px", border:"1px solid #ccc", borderRadius:"0.2rem", width:"100%", height:"110%"}}
        />
        </div>
      </div>
      {activeTable === "table1" && (
        <table>
          <thead>
            <tr>
              <th>Ref No.</th>
              <th>Incident Date</th>
              <th>Time (24hr)</th>
              <th>Risk Category</th>
              <th>Reporting type</th>
              <th>Status</th>
              <th>Line Manager</th>
              <th>Target Date</th>
              <th>Name</th>
              <th>Department</th>
              <th>Section </th>
              <th>Contact No.</th>
              <th>Employee Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
              <td>Data 3</td>
              <td>Data 4</td>
              <td>Data 5</td>
              <td>Data 6</td>
              <td>Data 7</td>
              <td>Data 8</td>
              <td>Data 9</td>
              <td>Data 10</td>
              <td>Data 11</td>
              <td>Data 12</td>
              <td>Data 13</td>
            </tr>
          </tbody>
        </table>
      )}
      {activeTable === "table2" && (
        <table>
          <thead>
            <tr>
              <th>Ref No.</th>
              <th>Incident Date</th>
              <th>Time (24hr)</th>
              <th>Risk Category</th>
              <th>Reporting type</th>
              <th>Status</th>
              <th>Line Manager</th>
              <th>Target Date</th>
              <th>Name</th>
              <th>Department</th>
              <th>Section </th>
              <th>Contact No.</th>
              <th>Employee Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data A</td>
              <td>Data B</td>
              <td>Data C</td>
              <td>Data D</td>
              <td>Data E</td>
              <td>Data F</td>
              <td>Data G</td>
              <td>Data H</td>
              <td>Data I</td>
              <td>Data J</td>
              <td>Data K</td>
              <td>Data L</td>
              <td>Data M</td>
            </tr>
          </tbody>
        </table>
      )}
  
    <div className="pagination" style={{marginTop: "30px"}}>
      <div>
        <p>Showing 1 of 1 of 1 entries</p>
      </div>
      <div className="pagination-buttons">
        <button onClick={handlePrevPageClick}>Prev</button>
        <button className="active">1</button>
        <button onClick={handleNextPageClick}>Next</button>
      </div>
      
    </div>

    </div>
    </div>
    </div>
  );
}

export default Raised;