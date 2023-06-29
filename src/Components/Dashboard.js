import React from "react";
import "./Dashboard.css";
import pending from "../images/pending.png";
import year from "../images/year.png";
import month from "../images/month.png";
import today from "../images/today.png";

import pending2 from "../images/pending-light.png";
import year2 from "../images/year-light.png";
import month2 from "../images/month-light.png";
import today2 from "../images/today-light.png";
import VerticalBarChart from "../Charts/VerticalBarChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const dashboardStart = {
    paddingTop: "40px",
  };

  const dashboardText = {
    color: "#332E38",
    marginTop: "20px",
    fontSize: "20px",
    margin: "0px 8px 0px 0px",
  };

  const styleCard = {
    paddingTop: "5px",
  };

  const rowSummaryMB2PB2 = {
    display: "flex",
    marginTop: "25px",
    flexWrap: "wrap",
    background: "#e5e5e5",
    borderRadius: "0.5rem",
    boxShadow: "0 20px 27px 0 rgb(0 0 0 / 5%)",
  };

  const colLG12 = {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  };

  const clgStyle = {
    paddingRight: "20px",
    paddingLeft: "20px",
    paddingTop: "20px",
    paddingBottom: "20px",
  };

  const cardStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#ffffff",
    borderRadius: "10px",
    boxShadow: "0 4px 20px 1px rgba(0, 0, 0, 0.06) 0 1px rgba(0, 0, 0, 0.08)",
    border: "0",
    paddingLeft: "15px",
    paddingRight: "10px",
    paddingTop: "0px",
    paddingBottom: "15px",
  };

  const textStylecard = {
    paddingTop: "10px",
  };

  const cardBodyStyle = {
    marginTop: "0px",
    paddingBottom: "20px",
    paddingLeft: "10px",
    width: "290px",
  };

  const overduePStyles = {
    margin: "auto",
    paddingTop: "10px",
    marginBottom: "-10px",
    fontWeight: "400",
    color: "red",
    fontSize: "0.65rem",
    textAlign: "left",
  };

  const overdueimgStyle = {
    width: "55px",
    height: "55px",
    objectFit: "cover",
    paddingTop: "30px",
    paddingLeft: "10px",
    paddingRight: "20px",
    marginRight: "10px",
    verticalAlign: "middle",
    //display: "inline-block",
    //overflowClipMargin: "content-box",
    //overflow: "clip",
  };

  const overdue_contentStyles = {
    paddingLeft: "120px",
    marginTop: "-60px",
    textAlign: "center",
  };

  const overdueP2Styles = {
    marginTop: "15px",
    fontWeight: "600",
    color: "red",
    fontSize: "1.5rem",
    textAlign: "left",
  };

  const PIOs_contentStyles = {
    paddingTop: "15px",
    textAlign: "left",
  };

  const PIOsPStyles = {
    textSize: "0.7rem",
    color: "#ffffff",
  };

  const PIOsP2Styles = {
    marginTop: "0px",
    textSize: "0.7rem",
    color: "#ffffff",
  };

  const colLG13 = {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  };

  const PIOsimgStyle = {
    width: "45px",
    height: "45px",
    objectFit: "cover",
    paddingTop: "20px",
    paddingLeft: "10px",
    paddingRight: "20px",
    marginRight: "10px",
    verticalAlign: "middle",
  };
  const pios_Button = {
    width: "330px",
    marginTop: "0px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    //marginLeft: "1125px",
    color: "#ffffff",
    background: "#59AB40",
    fontSize: "14px",
    border: "none",
    height: "40px",
    borderRadius: "10px",
  };

  const pios2_Button = {
    width: "130px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    color: "#ffffff",
    background: "#59AB40",
    fontSize: "14px",
    border: "none",
    height: "40px",
    borderRadius: "10px",
  };

  const colLg124 = {
    marginBottom: "1rem",
    marginTop: "30px",
  };

  const cardPIOs = {
    paddingTop: "5px",
    paddingBottom: "5px",
    borderRadius: "10px",
    background: "#fff",
    width: "1450px",
    marginLeft: "20px",
    boxShadow: "0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08)",
  };

  const rowPIOs = {
    marginTop: "20px",
    display: "flex",
    flexWrap: "wrap",
    marginRight: "15px",
    marginLeft: "15px",
  };

  const rowBPIOs = {
    display: "flex",
    boxSizing: "border-box",
    marginLeft: "20px",
    marginTop: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    background: "#f58220",
    borderRadius: "0.25rem",
    width: "315px", //width of orange box
    height: "120px",
    alignItems: "center",
    paddingLeft: "10px",
  };

  const rowBPIOs2 = {
    display: "flex",
    boxSizing: "border-box",
    marginLeft: "20px",
    marginTop: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    background: "#5aab40",
    borderRadius: "0.25rem",
    width: "315px", //width of green box
    height: "120px",
    alignItems: "center",
    paddingLeft: "10px",
  };

  const rowBBPIOs = {
    display: "flex",
    justifyContent: "center",
    marginTop: "-20px",
    padding: "1rem",
    alignItems: "center",
  };

  const rowSummaryMB3PB3 = {
    display: "flex",
    marginTop: "25px",
    flexWrap: "wrap",
    background: "#e5e5e5",
    borderRadius: "0.5rem",
    boxShadow: "0 20px 27px 0 rgb(0 0 0 / 5%)",
  };

  const colLg1245 = {
    marginBottom: "1rem",
    marginTop: "20px",
  };

  const cardPIOs2 = {
    paddingTop: "10px",
    paddingBottom: "5px",
    borderRadius: "10px",
    background: "#fff",
    width: "715px",
    marginLeft: "13px",
    boxShadow: "0 4px 20px 1px rgba(0, 0, 0, 0.06), 0 1px 4px rgba(0, 0, 0, 0.08)",
  };

  const pios3_Button = {
    width: "130px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    color: "#ffffff",
    background: "#F58220",
    fontSize: "14px",
    border: "none",
    height: "40px",
    borderRadius: "10px",
  };

  const pios4_Button = {
    width: "130px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    color: "#ffffff",
    background: "#003473",
    fontSize: "14px",
    border: "none",
    height: "40px",
    borderRadius: "10px",
  };

  const rowBPIOs3 = {
    display: "flex",
    boxSizing: "border-box",
    marginLeft: "20px",
    marginTop: "30px",
    marginRight: "20px",
    marginBottom: "20px",
    background: "#fb8220",
    borderRadius: "0.25rem",
    width: "300px", //width of green box
    height: "120px",
    alignItems: "center",
    paddingLeft: "10px",
  };

  const rowBPIOs4 = {
    display: "flex",
    boxSizing: "border-box",
    marginLeft: "20px",
    marginTop: "30px",
    marginRight: "20px",
    marginBottom: "20px",
    background: "#003473",
    borderRadius: "0.25rem",
    width: "300px", //width of green box
    height: "120px",
    alignItems: "center",
    paddingLeft: "10px",
  };

  const span1 = {
    marginLeft: "35px",
    marginBottom: "0px",
    paddingTop: "10px",
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

  const pios5_Button = {
    width: "200px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    color: "#ffffff",
    background: "#61bc46",
    fontSize: "14px",
    border: "none",
    height: "40px",
    borderRadius: "10px",
  };

  const pios6_Button = {
    width: "130px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "center",
    color: "#ffffff",
    background: "#61bc46",
    fontSize: "14px",
    border: "none",
    height: "40px",
    borderRadius: "10px",
  };

  return (
    <div>
      <div className="header-part-right" style={dashboardStart}>
        <h3 style={dashboardText}>Dashboard</h3>
        <hr
          style={{
            background: "#F9F9F9",
            color: "#F9F9F9",
            marginTop: "20px",
          }}
        />
      </div>

      <div className="dashboard-content" style={styleCard}>
        <div className="row summary mb-3 pb-2" style={rowSummaryMB2PB2}>
          <div className="col-lg-12 col-md-12 col-sm-12" style={colLG12}>
            <div className="card-title mb-0 mt-2" style={textStylecard}>
              Actions To Be Taken (Overdue)
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6" style={clgStyle}>
            <div
              className="card card-icon-bg card-icon-bg-primary o-hidden my-2"
              style={cardStyle}
            >
              <div className="card-body" style={cardBodyStyle}>
                <img src={today} alt="" style={overdueimgStyle} />

                <div className="content" style={overdue_contentStyles}>
                  <p
                    className="text-danger bold mt-2 mb-0"
                    style={overduePStyles}
                  >
                    Overdue 1 Day
                  </p>
                  <p
                    className="text-danger text-24 line-height-1 mb-2"
                    style={overdueP2Styles}
                  >
                    20
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6" style={clgStyle}>
            <div
              className="card card-icon-bg card-icon-bg-primary o-hidden my-2"
              style={cardStyle}
            >
              <div className="card-body" style={cardBodyStyle}>
                <img src={month} alt="" style={overdueimgStyle} />
                <div className="content" style={overdue_contentStyles}>
                  <p className="text-danger mt-2 mb-0" style={overduePStyles}>
                    Overdue 3 Days
                  </p>
                  <p
                    className="text-danger text-24 line-height-1 mb-2"
                    style={overdueP2Styles}
                  >
                    40
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6" style={clgStyle}>
            <div
              className="card card-icon-bg card-icon-bg-primary o-hidden my-2"
              style={cardStyle}
            >
              <div className="card-body" style={cardBodyStyle}>
                <img src={year} alt="" style={overdueimgStyle} />
                <div className="content" style={overdue_contentStyles}>
                  <p className="text-danger mt-2 mb-0" style={overduePStyles}>
                    Overdue 7 Days
                  </p>
                  <p
                    className="text-danger text-24 line-height-1 mb-2"
                    style={overdueP2Styles}
                  >
                    80
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-6" style={clgStyle}>
            <div
              className="card card-icon-bg card-icon-bg-primary o-hidden my-2"
              style={cardStyle}
            >
              <div className="card-body" style={cardBodyStyle}>
                <img src={pending} alt="" style={overdueimgStyle} />
                <div className="content" style={overdue_contentStyles}>
                  <p className="text-danger mt-2 mb-0" style={overduePStyles}>
                    Overdue 15 Days
                  </p>
                  <p
                    className="text-danger text-24 line-height-1 mb-2"
                    style={overdueP2Styles}
                  >
                    12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row summary mb-3 pb-2" style={rowSummaryMB2PB2}>
          <div className="col-lg-12 col-md-12 col-sm-12 my-3" style={colLG13}>
            <div
              className="card-title mb-0 mt-2 pull-left"
              style={textStylecard}
            >
              <span>PIOs Summary ( My Raised Observations )</span>
              <div
                className="dropdown pull-right"
                style={{ float: 'right', background: "transparent" }}
              >
                <button
                  className="btn btn-primary dropdown-toggle"
                  style={pios_Button}
                  id="dropdownMenuButton"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PIOs Summary ( My Raised Observations ) <span style={{float:'right'}}><FontAwesomeIcon icon={faCaretDown}/></span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  x-placement="top-start"
                  // style={{
                  //   position: 'absolute',
                  //   willChange: 'transform',
                  //   top: '0px',
                  //   left: '-190px',
                  //   transform: 'translate3d(0px, -2px, 0px)',
                  // }}
                ></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 mb-3" style={colLg124}>
            <div className="card" style={cardPIOs}>
              <div className="card-body pb-0">
                <div className="row" style={rowPIOs}>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={today2}
                        alt="Today"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Today's Cases
                        </h4>
                        <div style={PIOsP2Styles}>Total: 32</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={month2}
                        alt="Current Month"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Current Month
                        </h4>
                        <div style={PIOsP2Styles}>Total: 302</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={year2}
                        alt="Current Year"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Current Year
                        </h4>
                        <div style={PIOsP2Styles}>Total: 35242</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={pending2}
                        alt="Pending Cases"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Pending Cases
                        </h4>
                        <div style={PIOsP2Styles}>Total: 30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row summary mb-3 pb-2" style={rowSummaryMB3PB3}>
          <div className="card-title mb-0 mt-2 pull-left" style={textStylecard}>
            <div className="clearfix"></div>
          </div>
          <div className="col-lg-12 col-md-12 mb-3" style={colLg1245}>
            <div className="card" style={cardPIOs2}>
              <div style={span1}>PIOs Summary ( My Raised Observations )</div>
              <div className="card-body pb-0">
                <div className="dropdown pull-right"
                  style={{ float: 'right', background: "transparent", marginTop: '-40px', marginRight:'50px' }}>
                  <button
                    className="btn btn-primary dropdown-toggle"
                    style={pios3_Button}
                    id="dropdownMenuButton"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Year: 2022 <span style={{float:'right'}}><FontAwesomeIcon icon={faCaretDown}/></span>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    x-placement="top-start"
                  ></div>
                </div>
                <div className="row" style={rowPIOs}>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs3}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={today2}
                        alt="Today"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Safe Act
                        </h4>
                        <div style={PIOsP2Styles}>Total: 32</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs3}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={month2}
                        alt="Current Month"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Safe Condition
                        </h4>
                        <div style={PIOsP2Styles}>Total: 302</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs3}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={year2}
                        alt="Current Year"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Unsafe Act
                        </h4>
                        <div style={PIOsP2Styles}>Total: 160</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs3}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={pending2}
                        alt="Pending Cases"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Unsafe Condition
                        </h4>
                        <div style={PIOsP2Styles}>Total: 30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card-title mb-0 mt-2 pull-left" style={textStylecard}>
            <div className="clearfix"></div>
          </div>
          <div className="col-lg-12 col-md-12 mb-3" style={colLg1245}>
            <div className="card" style={cardPIOs2}>
              <div style={span1}>PIOs Summary ( My Raised Observations )</div>
              <div className="card-body pb-0">
                <div className="dropdown pull-right"
                  style={{ float: 'right', background: "transparent", marginTop: '-40px', marginRight:'50px' }}>
                  <button
                    className="btn btn-primary dropdown-toggle"
                    style={pios4_Button}
                    id="dropdownMenuButton"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Year: 2021 <span style={{float:'right'}}><FontAwesomeIcon icon={faCaretDown}/></span>
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                    x-placement="top-start"
                  ></div>
                </div>
                <div className="row" style={rowPIOs}>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs4}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={today2}
                        alt="Today"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Safe Act
                        </h4>
                        <div style={PIOsP2Styles}>Total: 32</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs4}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={month2}
                        alt="Current Month"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Safe Condition
                        </h4>
                        <div style={PIOsP2Styles}>Total: 302</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs4}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={year2}
                        alt="Current Year"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Unsafe Act
                        </h4>
                        <div style={PIOsP2Styles}>Total: 160</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs4}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={pending2}
                        alt="Pending Cases"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Unsafe Condition
                        </h4>
                        <div style={PIOsP2Styles}>Total: 30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row summary mb-3 pb-2" style={rowSummaryMB2PB2}>
          <div className="col-lg-12 col-md-12 col-sm-12 my-3" style={colLG13}>
            <div
              className="card-title mb-0 mt-2 pull-left"
              style={textStylecard}
            >
              <span>PIOs Summary ( My Raised Observations )</span>
              <div
                className="dropdown pull-right"
                style={{ float: 'right', background: "transparent" }}
              >
                <button
                  className="btn btn-primary dropdown-toggle"
                  style={pios2_Button}
                  id="dropdownMenuButton"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Year: 2022 <span style={{float:'right'}}><FontAwesomeIcon icon={faCaretDown}/></span>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                  x-placement="top-start"
                ></div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 mb-3" style={colLg124}>
            <div className="card" style={cardPIOs}>
              <div className="card-body pb-0">
                <div className="row" style={rowPIOs}>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs2}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={today2}
                        alt="Today"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Safe Act
                        </h4>
                        <div style={PIOsP2Styles}>Total: 32</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs2}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={month2}
                        alt="Current Month"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Safe Condition
                        </h4>
                        <div style={PIOsP2Styles}>Total: 302</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs2}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={year2}
                        alt="Current Year"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Unsafe Act
                        </h4>
                        <div style={PIOsP2Styles}>Total: 160</div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-lg-3 col-md-6 col-sm-6 mb-4"
                    style={rowBPIOs2}
                  >
                    <div
                      className="p-4 rounded d-flex align-items-center bg-secondary text-white"
                      style={rowBBPIOs}
                    >
                      <img
                        className="card-img mr-2"
                        src={pending2}
                        alt="Pending Cases"
                        style={PIOsimgStyle}
                      />
                      <div style={PIOs_contentStyles}>
                        <h4
                          className="text-13 mb-1 text-white"
                          style={PIOsPStyles}
                        >
                          Unsafe Condition
                        </h4>
                        <div style={PIOsP2Styles}>Total: 30</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="vertical-bar-chart">
      <div className="card" style={cardPIOs4}>
        <span className="dropdown pull-right"
                  style={{ float: 'right', background: "transparent", marginTop: '0px', marginRight:'50px' }}>
                  <button
                    className="btn btn-primary dropdown-toggle"
                    style={pios5_Button}
                    id="dropdownMenuButton"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Angul-All Department <span style={{float:'right'}}><FontAwesomeIcon icon={faCaretDown}/></span>
                  </button>
        </span>
        <span className="dropdown pull-right"
                  style={{ float: 'right', background: "transparent", marginTop: '0px', marginRight:'10px' }}>
                  <button
                    className="btn btn-primary dropdown-toggle"
                    style={pios6_Button}
                    id="dropdownMenuButton"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Year: 2022 <span style={{float:'right'}}><FontAwesomeIcon icon={faCaretDown}/></span>
                  </button>
        </span>
        <VerticalBarChart />
      </div>
      </div>
    </div>
  );
};

export default Home;
