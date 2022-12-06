import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import { v4 as uuidv4 } from 'uuid';
import MyCV from '../assets/kazaa.png';

const AboutTxtWrapper = styled.div`
  margin-top: 200px;
  width: 70%;
  background-color: white;
  @media (max-width: 414px) {
    flex-direction: column-reverse;
    margin-top: 100px;
  }
`;
const MySkillz = styled.h2`
  font-family: 'calibre';
  font-size: 50px; 
  @media (max-width: 360px) {
    flex-direction: column-reverse;
    font-size: 40px;
  }
`;

const AboutTxt = styled.p`
  font-family: 'calibre';
  font-size: 25px;
`;

const SpreadIcon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 30px 90px;
  width: 90px;
  height: 60px;
`;
const SpreadIconWrap = styled.div`
  margin: 90px auto 40px;
  max-width: 1100px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 820px) {
 text-align: center;
 width: 92%;
  }
`;
const TechTitle = styled.p`
  margin: auto 10px;
  font-size: 25px;
  width: 200px;
`;

export default function AboutMySkillz(props) {

  let downloadCvTxt = "Télécharger mon CV"


  return (
    <>
      <span id="skillz"></span>
      <AboutTxtWrapper>
        <MySkillz>Mes Compétences</MySkillz>
        <AboutTxt>
       "A travers mes expériences j'ai été ammené à utiliser différents outils afin de solutionner les problématiques inhérentes à chaques projet.
       Le respect du cahier des charges et la fiabilité des <strong>languages </strong>et <strong>frameworks</strong> utilisées sont des point essentiels à la reussite d'une application."<br/><br/>
       C'est pour ces raisons que j'utilise  : 
        </AboutTxt>
      </AboutTxtWrapper>
      <SpreadIconWrap>
        {props.IconArray.map((icon) => {
          return (
            <SpreadIcon key={uuidv4()}>
              <img src={icon.img} alt="" />
              <TechTitle>{icon.title}</TechTitle>
            </SpreadIcon>
          );
        })}
      </SpreadIconWrap>
      <a href={MyCV} download={MyCV}>
        <Button utility={downloadCvTxt} />
      </a>
    </>
  );
}
