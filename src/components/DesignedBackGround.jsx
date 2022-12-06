import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Back } from '../assets/Rectangle.svg';

const BackGroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  z-index: 1;
`;
export default function DesignedBackGround() {
  return (
    <BackGroundWrapper>
      <Back />
    </BackGroundWrapper>
  );
}
