import React from 'react';
import styled from 'styled-components';
import heart from '../assets/icons8-coeurs-48.png';


const PostFooterWrapper = styled.div`
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  color: white;
  margin-top: 100px;
  @media (max-width: 360px) {
   font-size: 13px;
  }
`;

export default function Footer() {
const date = new Date()
  const dynamicYear = date.getFullYear()
  return (
    <>
      <PostFooterWrapper>
        Mon portfolio {dynamicYear} - Codé intégralement avec <img src={heart}></img> et React 
      </PostFooterWrapper>
    </>
  );
}
