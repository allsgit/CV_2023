import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconImg = styled.img`
  width: 60%;
`;
const IconBackGround = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(98, 94, 94, 0.17);
  border-radius: 50%;
  height: 40px;
  width: 40px;
  object-fit: contain;
  margin: 10px 0;
`;

export default function SideIconContainer(props) {
  return (
    <IconWrapper>
      {props.IconArray.map((el) => {
        return (
          <IconBackGround key={uuidv4()}>
            <IconImg src={el.img}></IconImg>
          </IconBackGround>
        );
      })}
    </IconWrapper>
  );
}
