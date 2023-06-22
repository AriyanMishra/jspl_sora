import React, {useState} from 'react';
import "./Navbar.css";
import header_logo from "../images/profile.png";
import { faMapLocationDot, faBuildingUser, faUserPlus, faUserGroup, faArrowRightFromBracket, faUserCheck, faExpand, faCompress} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [isFullScreen, setIsFullScreen] = useState(false);

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    if (!isFullScreen) {
      enterFullScreen();
    } else {
      exitFullScreen();
    }
  };

  const enterFullScreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };


  // const dashboardHeaderStyle = {
  //   marginTop: '10px',        //padding: '20px',
  //   display: 'flex',
  //   height: '64px',
  //   overflowY: 'auto',
  //   borderRadius: '5px',
  //   width: '100%',
  //   background: '#ffffff',
  //   boxShadow: '0 1px 15px rgba(0, 0, 0, 0.09), 0 1px 6px rgba(0, 0, 0, 0.09)',
  // };


  const headerIcon = {
    marginTop: "-5px",
    marginRight: "10px",
    width: "36px",
    height: "36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: ".5px solid #000",
    borderRadius: "8px",
  };

  const menu = {
    boxShadow: '0 1px 15px rgba(0, 0, 0, 0.09), 0 1px 6px rgba(0, 0, 0, 0.09)',
    borderRadius: '0.5rem',
    background: '#ffffff',
    margin: '0px 2px 0px 0px',
    padding: '35px 55px 35px 55px',
    position: 'absolute',
    willChange: 'transform',
    top: '0px',
    left: '0px',
    transform: 'translate3d(-330px, 0px, 0px)',
    zIndex: 10000,
    
  };

  const aStyle1 = {
    background: "#fff",
    display: "flex",
    alignItems:"center",
  };

  const aStyle2 = {

    color:'#47404f',
    textDecoration:'none',
  };

  const aStyle3 = {
    color:'#47404f',
    textDecoration:'none',
  };

  const icons_Style = {
    paddingTop: "10px",
    paddingBottom: '10px',
    paddingLeft: "10px",
    paddingRight: "10px",
  };

  const icons_Styles = {
    height:'25px',
    paddingRight:'10px',
    paddingLeft:"10px",
  };

  const icons_Styles1 = {
    height:'25px',
    marginRight:"70px",
  };

  return (
    <div className='navbar'>
    <div className="left">
          <span className="mr-3 mb-0" style={icons_Style}>
            <FontAwesomeIcon icon={faMapLocationDot} className="text-20 cursor-pointer" dataToggle="tooltip" dataPlacement="top" title="Location" ariaHidden="true" style={icons_Styles}/>
            &nbsp;<strong>Location:</strong> Angul
          </span>
          <span className="mr-3 mb-0" style={icons_Style}>
            <FontAwesomeIcon icon={faBuildingUser} className="text-20 cursor-pointer" dataToggle="tooltip" dataPlacement="top" title="Department" ariaHidden="true" style={icons_Styles}/>
            &nbsp;<strong>Department:</strong> Angul IT
          </span>
          <span className="mr-3 mb-0" style={icons_Style}>
            <FontAwesomeIcon icon={faUserPlus} className="text-20 cursor-pointer" dataToggle="tooltip" dataPlacement="top" title="Logged In As" ariaHidden="true" style={icons_Styles}/>
            &nbsp;<strong>Logged In As:</strong> Suraj Kumar Dash
          </span>
          <span className="mr-3 mb-0" style={icons_Style}>
            <FontAwesomeIcon icon={faUserGroup} className="text-20 cursor-pointer" dataToggle="tooltip" dataPlacement="top" title="User Category" ariaHidden="true" style={icons_Styles}/>
            &nbsp;<strong>User Category:</strong> LM
          </span>
    </div>

    <div className="right"> 
          <span onClick={toggleFullScreen}>
            <FontAwesomeIcon icon={isFullScreen ? faCompress : faExpand} className="header-icon" style={icons_Styles1}/>
          </span>

          <span className='dropdown dropleft show' style={{position: "absolute", left: "", top: "",}}>
          <img
            className={`header-icon ${isCollapsed ? 'collapsed' : ''}`}
            src={header_logo}
            alt=""
            onClick={toggleCollapse}
            style={headerIcon}
          />
            {isCollapsed && (

              // <span className='dropdown' style={menu}>
              //   <span className='menu-icon-grid' style={aStyle1}>
              //     <a href="logout.jsx" style={aStyle2}><FontAwesomeIcon icon={faArrowRightFromBracket} aria-hidden="true" />Logout</a>
              //     <a href="profile.jsx" style={aStyle3}><FontAwesomeIcon icon={faUserCheck} aria-hidden="true"/> Profile</a>
              //   </span>
              // </span>

              <span className='dropdown' style={menu}>
              <span className='menu-icon-grid' style={aStyle1}>
                <div className="column">
                  <a href="logout.jsx" style={aStyle2}><FontAwesomeIcon icon={faArrowRightFromBracket} aria-hidden="true" style={{marginRight:'10px', height:'20px'}}/>Logout</a>
                </div>
                <div className="column">
                  <a href="profile.jsx" style={aStyle3}><FontAwesomeIcon icon={faUserCheck} aria-hidden="true" style={{marginRight:'10px', height:'20px'}}/> Profile</a>
                </div>
              </span>
            </span>


            )}
          </span>
    </div>
    </div>
  )
}

export default Navbar