import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Nav from './Nav';
import Logo from './Logo';

const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 2;
  margin-top: -10px;
  box-sizing: border-box;
`;

const HeaderNavComp = styled.header`
  width: 80%;
  position: sticky;
  top: 1px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 35px;
  max-width: 1800px;
  z-index: 2;
  z-index: 1000;
  padding-bottom: 20px;
  transition: 0.15s;
  background-color: ${props => props.userScrollPos > -198 ? "" : "white"};
  color: ${props => props.userScrollPos > -198 ? "" : "white"};
  border-bottom: ${props => props.userScrollPos > -198 ? "" : "0.4px solid black"};
  @media (max-width: 414px) {
    display: flex;
   flex-direction: column;
   width: 100%;
  }
`;

export default function TopNav(props) {
  return (
    <HeaderNavComp userScrollPos={props.userPosition}>
      <Logo />
      <NavLinkWrapper>
        <Nav />
      </NavLinkWrapper>
    </HeaderNavComp>
  );
}
