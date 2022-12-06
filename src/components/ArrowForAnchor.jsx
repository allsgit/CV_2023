import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/arrow.png';
import { HashLink as Anchor } from 'react-router-hash-link';

const ArrowUp = styled.img`
  z-index: 1000000;
  position: fixed;
  right: 60px;
  bottom: 50px;
  width: 50px;
  height: 50px;
`;
function ArrowForAnchor() {
  return (
    <>
      <Anchor smooth={true} to="#top">
        <ArrowUp src={Arrow}></ArrowUp>
      </Anchor>
      <p>Retour haut de page</p>
    </>
  );
}

export default ArrowForAnchor;
