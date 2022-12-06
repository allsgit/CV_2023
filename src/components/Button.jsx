import React from 'react';
import styled from 'styled-components';

const ButtonComp = styled.button`
  width: ${(props) => (props.buttonStyle == 'primary' ? '119px' : '179px')};
  height: 49px;
  background-color: #128b12;
  border: none;
  font-size: 15px;
  border-radius: 7px;
  color: white;
  position: relative;
  overflow: hidden;
  z-index: 100;
  &:hover{
    color: black;
  }

  cursor: pointer;
  ::before{

    transition: 0.18s;
    position: absolute;
    z-index: -1;
    top: 0;
    content: "";
    display: block;
    width: 200px;
    height: 47px;
    background-color: white;
    border: 1px solid green;
    transform: translateX(-210px);
   
  }
  &:hover::before{
       transform: translateX(-10px);
    }
`;

export default function Button(props) {
  return (
    <>
      <ButtonComp buttonStyle={props.buttonStyle} onClick={props.OnClickAction}>
        <p>{props.utility}</p>
      </ButtonComp>
    </>
  );
}
