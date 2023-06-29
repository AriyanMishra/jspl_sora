import React from 'react';
import styled from '@emotion/styled';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';
import Logo from "../images/Jindal-logo-light.png"

const SidebarNav = styled.nav`
  display: block;
  position: fixed;
  height: 98.5vh;
  overflow-y: auto;
  left: 0;
  top: 0;
  margin: 5px;
  border-radius: 10px;
  width: 264px;
  background: linear-gradient(45deg, #59ab40, #ffa355);
`;


const SidebarWrap = styled.div`
  width: 100%;
`;

const LogoContainer = styled.div`
  width: 165px;
  margin-top: 1.5rem;
  margin-left: 2.7rem;
  margin-bottom: 1rem;
  align-items: center;
  justify-content: center;
  display: flex;
`;


const LogoImage = styled.img`
  height: 75px;
`;

const Sidebar = () => {

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <SidebarNav>
          <SidebarWrap>
            <LogoContainer>
              <LogoImage src={Logo} alt="Logo" />
            </LogoContainer>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
