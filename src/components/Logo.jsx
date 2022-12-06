import React from 'react';
import styled from 'styled-components';
import { HashLink as Anchor } from 'react-router-hash-link';

const LogoComp = styled.div`
  overflow: hidden;
  padding: 0;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: #128b12;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 60px;
  @media (max-width: 414px) {
   margin-bottom: 30px;
  }
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export default function Logo() {
  return (
    <>
      <Anchor to="#home" smooth={true}>
        <LogoWrapper>
          <LogoComp>A</LogoComp>
        </LogoWrapper>
      </Anchor>
    </>
  );
}
