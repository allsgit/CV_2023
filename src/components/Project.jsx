import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import GitHubIcon from '../assets/icon github.png';
import { GoMarkGithub } from 'react-icons/go';
import Column from 'antd/lib/table/Column';
import { keyframes } from 'styled-components';

const githubIconJump = keyframes`
   0% {
     
        transform: translateY(0);
    }
    25%{
      transform: translateY(-10px);
    }
    50%{
      transform: translateY(0px);
    }
    75%{
      transform: translateY(-10px);
    }
    100% {
  
        transform: translateX(0);
    }
    `;

const GalleryWrapper = styled.div`
  height: auto;
  width: 80%;
  display: flex;
  margin: 0 auto;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 414px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
  }
`;
const ProjectSection = styled.h2`
  margin-top: 80px;
  font-size: 50px;
  font-family: 'calibre';
`;
const ThumbWrapper = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: auto;
  width: 500px;
  margin: 20px;
  object-fit: cover;
  border-radius: 5px;
  color: black;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  transition: 0.3s;
  overflow: hidden;
  .gitWrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
  }
  a {
    cursor: pointer;
  }
  .GitHub-icon {
    width: 80%;
    &:hover {
      animation: ${githubIconJump} 0.7s forwards;
    }
  }

  @media (max-width: 414px) {
    height: 80%;
    width: 100%;
    margin: 15px auto;
  }
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 10px 10px 8px 0px;
    transform: scale(1.03);
  }
`;
const ThumbImg = styled.img`
  object-fit: cover;
  margin-top: 10px;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  position: relative;

  /*   &::before {
    position: absolute;
    content: "${(props) => props.describe}";
    margin-top: 40px;
    width: 500px;
    height: 300px;
    background-color: #ffffff89;
    transform: translate(-600px) rotate(40deg);
    z-index: 10;
    transition: 0.3s ease;

  }
  &:hover {
    transform: translate(0px);
    &::before {
      transform: translate(0);

    }
  } */
`;
const ThumbTitle = styled.p`
  font-size: 30px;
  margin: 20px 0 0 0;
`;
const ThumbDescrib = styled.p`
  margin: 0;
  font-size: 17px;
  padding: 0 14px;
`;
const ThumbTech = styled.div`
  font-size: 10px;
  position: relative;
  text-align: center;
  background-color: #128b12;
  margin: 10px;
  color: white;
  border-radius: 5px;
  padding: 3px 10px 0;
`;
const ThumbTechWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export default function Project(props) {
  return (
    <>
      <span id="projects"></span>
      <ProjectSection>Portfolio Gallerie</ProjectSection>
      <GalleryWrapper>
        {props.projectArray.map((projects) => {
          return (
            <ThumbWrapper>
              <ThumbTitle> {projects.name}</ThumbTitle>

              <a href={projects.website} target="_blank" key={uuidv4()}>
                <ImgWrapper describe={projects.describe}>
                  <ThumbImg src={projects.thumb} alt="" />
                </ImgWrapper>{' '}
              </a>

              <ThumbDescrib>{projects.describe}</ThumbDescrib>
              <ThumbTechWrapper>
                {projects.tech?.map((techno) => {
                  return (
                    <ThumbTech key={uuidv4()}>
                      <p>{techno}</p>
                    </ThumbTech>
                  );
                })}
              </ThumbTechWrapper>
              <a href={projects.gitHub}>
                <img src={GitHubIcon} alt="" className="GitHub-icon" />
              </a>
            </ThumbWrapper>
          );
        })}
      </GalleryWrapper>
    </>
  );
}
