import React, { useMemo } from "react";
import styled from "styled-components";
import { teamData } from "../../constants";
import {Section, Title} from "../../styles/globalStyle"

const Teams = () => {
  
  const Contributors = useMemo(() => {
    return teamData.map(({ name, imagePath, role }, index) => (
      <TeamMember key={index}>
        <TeamMemberInnerContainer>
          <Image src={imagePath} alt={name} />
          <InfoContainer>
            <Name>{name}</Name>
            <Role>{role}</Role>
          </InfoContainer>
        </TeamMemberInnerContainer>
      </TeamMember>
    ));
  }, []);

  return (
    <TeamSection>
      <Title>Contributors</Title>
      <Content>{Contributors}</Content>
    </TeamSection>
  );
};

export default Teams;

const TeamSection = styled(Section)`
  padding-top: 6rem;
  padding-bottom:6rem;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const TeamMember = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
  @media (max-width: 992px) {
    width: 50%;
    padding-right: 1rem;
    margin-bottom: 5rem;
  }
  @media (max-width: 756px) {
    width: 100%;
  }
`;

const TeamMemberInnerContainer = styled.div`
  padding: 0 1.5rem;
`;

const Image = styled.img`
  margin: 0 auto;
  box-shadow: 0 15px 35px var(--dark-grey), 0 5px 15px var(--trans-dark) !important;
  border-radius: 50% !important;
  max-width: 100%;
  height: auto;
  width: 200px;
  transition: all 0.15s ease;
  &: hover {
    box-shadow: 0 1rem 3rem var(--secondary-trans-dark) !important;
  }
`;

const InfoContainer = styled.div`
  text-align: center !important;
  padding-top: 1.5rem !important;
`;

const Name = styled.h5`
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: var(--primary-violet);
  font-size: 1.25rem;
`;

const Role = styled(Name)`
  color: var(--late-grey) !important;
  font-size: 1rem;
`;
