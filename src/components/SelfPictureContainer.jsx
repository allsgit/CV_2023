import React from 'react';
import styled from 'styled-components';
import AllanPicture from '../assets/1615124005271.jpeg';
const SelfImgContainer = styled.div`
  position: relative;
  width: 330px;
  height: 330px;
  border-radius: 50%;
  background-color: red;
  overflow: hidden;
  object-fit: cover;
  margin: 0;

  @media (max-width: 414px) {
   width: 250px;
   height: 250px;
  }
`;
const SelfImg = styled.img`
  width: 100%;
`;
const BackCircle = styled(SelfImgContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;
  background-color: rgba(98, 94, 94, 0.17);
  @media (max-width: 414px) {
   width: 270px;
   height: 270px;
  }
`;
export default function SelfPictureContainer() {
  return (
    <>
      <BackCircle>
        <SelfImgContainer>
          <SelfImg src={AllanPicture}></SelfImg>
        </SelfImgContainer>
      </BackCircle>
    </>
  );
}
