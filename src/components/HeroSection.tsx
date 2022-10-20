import React from "react";
import styled from "styled-components";

const HeroSection = () => {
  return (
    <LandingContainer >
      <LandingInnerContainer >
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
        <Span />
      </LandingInnerContainer>
      <Container>
        <Header>As a Framework</Header>
        <Content>
          The Njs2 Framework's main goal is to minimise developer effort during
          initial setup for every project and require team members to adhere to
          the same coding standards throughout the project. It also lessens the
          administrative burden associated with tasks like developing
          documentation, putting authentication protocols in place, and
          establishing database connectivity.
        </Content>
      </Container>
      <Seperator>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <Polygon points="2560 0 2560 100 0 100" />
        </Svg>
      </Seperator>
    </LandingContainer>
  );
};

export default React.memo(HeroSection);
const LandingContainer = styled.section`
  position: relative;
  padding: 4.5rem 0;
  height: 93vh;
  @media (max-width: 768px) {
    height:80vh;
  }
`;
const LandingInnerContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
  background: linear-gradient(150deg, var(--secondary-blue) 15%, var(--tertiary-blue) 70%, var(--quaternary-blue) 94%);
`;
const Span = styled.span`
  position: absolute;
  height: 120px;
  width: 120px;
  border-radius: 50%;
  :nth-child(1) {
    left: -4%;
    bottom: auto;
    background: var(--primary-grey);
  }

  :nth-child(2) {
    right: 4%;
    top: 10%;
    background: var(--primary-grey);
  }

  :nth-child(3) {
    top: 280px;
    right: 5.66666%;
    background: var(--tertiary-grey);
  }

  :nth-child(4) {
    top: 320px;
    right: 7%;
    background: var(--quinary-grey);
  }

  :nth-child(5) {
    top: 38%;
    left: 1%;
    right: auto;
    background: var(--quaternary-grey);
  }

  :nth-child(6) {
    width: 200px;
    height: 200px;
    top: 44%;
    left: 10%;
    right: auto;
    background: var(--quinary-grey);
  }

  :nth-child(7) {
    bottom: 50%;
    right: 36%;
    background: var(--trans-grey);
  }

  :nth-child(8) {
    bottom: 70px;
    right: 2%;
    background: var(--secondary-grey);
  }

  :nth-child(9) {
    bottom: 1%;
    right: 2%;
    background: var(--primary-grey);
  }
`;
const Seperator = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: auto;
  bottom: 0;
  width: 100%;
  height: 150px;
  z-index: 1;
  transform: translateZ(0);
  overflow: hidden;
  pointer-events: none;
  height: 70px;
`;

const Svg = styled.svg`
  position: absolute;
  pointer-events: none;
  bottom: 0;
`;
const Polygon = styled.polygon`
  fill: white;
`;

const Container = styled.div`
  padding: 0 4rem;
  max-width: 45rem;
  margin:0rem 10rem;
  @media (max-width:768px){
    margin:6rem 2rem;
    padding:0rem;
  }
`;

const Header = styled.h1`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.7;
  font-weight: 300;
`;
