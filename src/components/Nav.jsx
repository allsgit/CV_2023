import React from 'react';
import Button from './Button';
import styled from 'styled-components';
import { HashLink as Anchor } from 'react-router-hash-link';
import { keyframes } from 'styled-components';


const appearFromTopFadeNav = keyframes`
    0% {
         opacity: 0;
         transform: translateY(-3rem);
     }
 
     100% {
      opacity: 1;
         transform: translateY(0);
     }
    
     `;

const LiFromMenu = styled.li`
  opacity: 0;
  list-style-type: none;
  margin: 0 20px 0 0;
  color: black;
  scroll-behavior: smooth;
  z-index: 10000;
  animation: 0.2s ${appearFromTopFadeNav} forwards;
  animation-delay: ${(props) => props.AnimationDelay};
  padding: 5px;
  transition: 0.2s;
  &:hover{
    scale: 1.1;
  
  }
  

  a{
    color: black;
  }
`;
const UlFromMenu = styled.ul`
  display: flex;
  width: 230px;
  @media (max-width: 414px) {
 padding: 0;
  }
`;
export default function Nav(props) {
  return (
    <>
      <UlFromMenu>
        
        <LiFromMenu AnimationDelay="0.3s">
          <Anchor to="#skillz" smooth={true}>
            Mes compétences
          </Anchor>
        </LiFromMenu>
        <LiFromMenu AnimationDelay="0.6s">
          <Anchor to="#projects" smooth={true}>
            Portfolio
          </Anchor>
        </LiFromMenu>
      </UlFromMenu>
      <Anchor to="#contact" smooth={true}>
        <Button utility="contact" buttonStyle="primary" OnClickAction={() => ""} />
      </Anchor>
    </>
  );
}
