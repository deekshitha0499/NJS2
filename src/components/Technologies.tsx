import React, { useMemo } from "react";
import styled from "styled-components";
import { technologyData } from "../../constants";
import { Section, Title } from "../../styles/globalStyle";

const Technologies = () => {
    
  function openLink(event: any, href: string) {
    event.preventDefault();
    window.open(href, "_blank");
  }

  const Technologies = useMemo(() => {
    return technologyData.map(({ name, imageUrl, path }, index) => (
      <Technology key={index}>
        <Image src={imageUrl} alt={name} onClick={(e) => openLink(e, path)} />
      </Technology>
    ));
  }, []);

  return (
    <TechnologySection>
      <Title>Technologies used</Title>
      <Content>{Technologies}</Content>
    </TechnologySection>
  );
};

export default Technologies;

const TechnologySection = styled(Section)`
  padding-bottom: 6rem;
`;

const Content = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  @media (max-width: 992px) {
    gap: 5rem;
  }
`;

const Technology = styled.li`
  list-style: none;
  width: 5.5%;
  cursor: pointer;
  @media (max-width: 992px) {
    width: 15%;
    margin-bottom: 3rem;
  }
  @media (max-width: 756px) {
    width: 25%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;
