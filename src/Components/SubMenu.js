import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';

const SidebarLink = styled(Link)`
  display: flex;
  color: #fff;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  list-style: none;
  height: 20px;
  text-decoration: none;
  font-size: 15px;

  background: ${props => (props.isActive ? 'rgb(215 252 204 / 25%)' : 'none')};
  border-radius: 0.5rem;
  height: 20px;
  color: ${props => (props.isActive ? '#fff' : '#fff')};

  &:hover {
    background: rgb(215 252 204 / 25%);
    border-radius: 0.5rem;
    height: 20px;
    color: #fff;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  height: 50px;
  padding-left: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 14px;

  background: ${props => (props.isActive ? 'rgb(215 252 204 / 25%)' : 'none')};
  border-radius: 0.5rem;
  height: 50px;
  color: ${props => (props.isActive ? '#fff' : '#fff')};

  &:hover {
    background: rgb(215 252 204 / 25%);
    border-radius: 0.5rem;
    height: 50px;
    color: #fff;
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);
  const location = useLocation();

  const showSubnav = () => setSubnav(!subnav);

  const isActive = item.path === location.pathname;

  return (
    <>
      <SidebarLink to={item.path} isActive={isActive} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          // Check if the current sub-item path matches the location pathname to determine if it is active
          const isSubItemActive = item.path === location.pathname;
          return (
            <DropdownLink to={item.path} key={index} isActive={isSubItemActive}>
              {item.icon}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
