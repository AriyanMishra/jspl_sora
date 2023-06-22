import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { menuItems } from '../data/dummy';
import Logo from "../images/Jindal-logo-light.png"
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');
  const location = useLocation();
  const handleMenuClick = (name) => {
    setActiveMenu(name);
  };

  const [expandedSubmenus] = useState([]);
  const isSubMenuExpanded = (name) => {
    return expandedSubmenus.includes(name);
  };

  return (
    <div className="container">
      <div className="logo">
      <img src={Logo} alt="" style={{height:'75px'}}/>
      </div>

      <div className="menu">
        {menuItems.map((item) => (
          <div
            className={`item ${item.name === activeMenu ? 'active' : ''}`}
            key={item.id}
            onClick={() => handleMenuClick(item.name)}
          >
            {item.icon}
            <h3>{item.title}</h3>
            {item.submenu.length > 0 && (
              <FontAwesomeIcon
                icon={isSubMenuExpanded(item.name) ? faChevronUp : faChevronDown}
                className="submenu-arrow"
              />
            )}
          </div>
        ))}
      </div>

      {menuItems.map((item) =>
        item.submenu.length > 0 && item.name === activeMenu ? (
          <div className="submenu" key={item.id}>
            {item.submenu.map((subItem) => (
              <Link
                to={`/${item.name}/${subItem.name}`}
                key={subItem.id}
                className={`submenu-item ${
                  `/${item.name}/${subItem.name}` === location.pathname ? 'active' : ''
                }`}
              >
                {subItem.icon}
                <h3>{subItem.title}</h3>
              </Link>
            ))}
          </div>
        ) : null
      )}
    </div>
  );
};

export default Sidebar;
