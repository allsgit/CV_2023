import React from 'react';
import Nav from './Nav';
import Button from './Button';
import styled from 'styled-components';
import SelfPictureContainer from './SelfPictureContainer';
import SideIconContainer from './SideIconContainer';
import { Link } from 'react-router-dom';
import { keyframes } from 'styled-components';
import FOO from '../assets/scattered-forcefields.svg';

// ANIMATION
const breatheAnimation = keyframes`
   0% {
     
        transform: translateX(-10rem);
    }
    100% {
  
        transform: translateX(0);
    }
    `;
const appearFromBottomFade = keyframes`
    0% {
      
         opacity: 0;
         transform: translateY(3rem);
     }
 
     100% {
      opacity: 1;
         transform: translateY(0);
     }
     `;
const breatheAnimation2 = keyframes`
    0% {
         opacity: 0;
         
     }
     30% {
         opacity: 0;
         
     }
     100% {
         opacity: 1;     
     }

     `;
const HeaderAppear = keyframes`
     0% {
          opacity: 0;
          
      }
      30% {
          opacity: 0;
          
      }
      100% {
          opacity: 1;     
      }
 
      `;

// STYLE
const BannerWrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 150px auto 0;
  max-width: 2000px;
  height: auto;
  animation: 1.9s ${HeaderAppear};
  @media (max-width: 414px) {
    flex-direction: column-reverse;
    margin-top: 70px;
  }
`;
const TitleNameAndButtonWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  z-index: 2;
  font-weight: bold;
  @media (max-width: 414px) {
    margin: 0;
    align-items: center;
  }
`;

const TitleName = styled.h1`
  opacity: 0;
  height: 28px;
  font-size: 76px;
  margin: 10px 0 60px 0;
  animation: 0.7s ${appearFromBottomFade} forwards;
  animation-delay: 1.5s;
  @media (max-width: 360px) {
    font-size: 70px;
  }
`;
const Hi = styled.p`
  width: 100%;
  opacity: 0;
  text-align: start;
  font-size: 25px;
  font-weight: 400;
  margin: 0 0 20px 0;
  color: grey;
  animation: 0.7s ${appearFromBottomFade} forwards;
  animation-delay: 1s;
  @media (max-width: 414px) {
    text-align: center;
    margin: 30px 0;
  }
`;

const HighLight = styled.span`
  opacity: 0;
  border-radius: 10px;
  padding: 5px;
  font-size: 70px;
  margin-left: 10px;
  display: block;
  color: #61dbfb;
  animation: ${breatheAnimation}, ${breatheAnimation2} forwards;
  animation-duration: 1.2s;
  animation-delay: 1.8s;
  @media (max-width: 900px) {
    margin: 0;
  }
  @media (max-width: 360px) {
    margin: 0;
    font-size: 50px;
  }
`;
const HighLightWrap = styled.span`
  opacity: 0;
  display: flex;
  font-size: 76px;
  align-items: center;
  animation: 0.7s ${appearFromBottomFade} forwards;
  animation-delay: 1.3s;
  @media (max-width: 414px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: 38px;
  }
  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-size: 38px;
    margin: 0;
  }
`;

const BackgroundSvg = styled.img`
  position: fixed;
  z-index: 0;
`;

export default function Header(props) {
  return (
    <>
      <BannerWrapper>
        <TitleNameAndButtonWrapper>
          <span id="home" style={{ position: 'absolute', top: '0px' }}></span>

          <TitleName>Allan Seu</TitleName>

          <HighLightWrap>
            Developpeur <HighLight>Front-End</HighLight>
          </HighLightWrap>
          <Hi fontsizeStyle="40px">
            Je développe des applications web, avec une préférence pour{' '}
            <HighLight
              style={{
                fontSize: 25,
                display: 'inline',
                fontWeight: 'bold',
                margin: 0,
                animationDelay: 2,
              }}
            >
              React.JS
            </HighLight>
            .<br />
            Autodidacte depuis octobre 2020 je suis passioné par le développement web et la tech.
            <br />
            Je suis disponible afin contribuer à la reussite de votre entreprise !
          </Hi>

          <a href="https://calendly.com/allanseu-dev/entretien?month=2022-08" rel="noonpener" target={'_blank'}>
            <Button utility="Booker un entretien ?" buttonStyle="secondary" OnClickAction={() => ''} />
          </a>
          
        </TitleNameAndButtonWrapper>

        {window.innerWidth > 1000 ? <SideIconContainer IconArray={props.IconArray} /> : ''}
      </BannerWrapper>
    </>
  );
}
