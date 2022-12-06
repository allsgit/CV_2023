import React from 'react';
import styled from 'styled-components';
import Letter from '../assets/EnvelopeSimpleOpen.png';
import Phone from '../assets/phone.svg';
import SelfPictureContainer from './SelfPictureContainer';

const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 2;
  display: flex;
  background: white;
  @media (max-width: 414px) {
    flex-direction: column;
    margin: 40px auto;
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;
const InputWrapper = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 102px 0;
  margin: 0;
  @media (max-width: 414px) {
    padding-bottom: 0px;
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`;
const ContactInfo = styled(InputWrapper)`
  width: 30%;
  justify-content: center;
  align-items: flex-start;
  margin-right: 30px;

  @media (max-width: 414px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 0;
  }
`;
const InfoInput = styled.input`
  width: 422px;
  height: 50px;
  border: none;
  background: #303030;
  border-radius: 7px;
  margin-top: 22px;
  padding-left: 8px;
  color: white;
  @media (max-width: 414px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
  &::placeholder {
    color: white;
    margin-top: 0;
  }
`;
const MsgInput = styled.textarea`
  height: 141px;
  width: 422px;
  max-height: 141px;
  max-width: 422px;
  border-radius: 7px;
  color: white;
  margin: 22px 0 30px 0;
  border: none;
  background: #303030;
  border-radius: 7px;
  padding-left: 8px;
  @media (max-width: 414px) {
    flex-direction: column;
    width: 90%;
    align-items: center;
  }
`;

const ContactTitle = styled.h1`
  font-size: 42px;
  margin: 15px 0 60px 0;
`;

const NameTitle = styled.h2`
  color: #0491f6;
  font-size: 24px;
  font-weight: bold;
`;
const PhoneAndMail = styled.div`
  display: flex;
  align-items: center;
`;

const IconImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 9px;
`;

export default function ContactPage() {
  return (
    <>
      <span id="contact"></span>
      <ContactWrapper>
        <ContactInfo>
          <ContactTitle>Contact</ContactTitle>
          <NameTitle>Allan SEU</NameTitle>

          <PhoneAndMail>
            <IconImg src={Letter} alt="" /> <p>allanseu@gmail.com</p>
          </PhoneAndMail>
          <PhoneAndMail>
            <IconImg src={Phone} alt="" /> <p>+33623557196</p>
          </PhoneAndMail>
          <PhoneAndMail>
            <IconImg src={Phone} alt="" /> <p>LinkedIn</p> 
          </PhoneAndMail>
       
        </ContactInfo>
        <SelfPictureContainer />
      </ContactWrapper>
    </>
  );
}

//    https://www.linkedin.com/in/allan-seu-38734b5a/
