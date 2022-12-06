import React from 'react';
import AboutMySkillz from './AboutMySkillz';
import { useState } from 'react';
import Project from './Project';
import ArrowForAnchor from './ArrowForAnchor';
import Header from './Header';
import Footer from './Footer';
import ContactPage from './ContactPage';
import Nav from './Nav';
import TopNav from './TopNav';
import { Keyframes } from 'styled-components';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'


export default function Home(props) {

  const [scrollPosition, setScrollPoisition] = useState()
  useScrollPosition(({ prevPos, currPos }) => {
    setScrollPoisition(currPos.y)
  })
  return (
    <>
      <TopNav userPosition={scrollPosition}/>
      <Header IconArray={props.IconArray} />
      <AboutMySkillz IconArray={props.IconArray} />
      <Project projectArray={props.projectArray} />
      <ContactPage />
      <Footer />
    </>
  );
}
