import React from "react";
import styled from "styled-components";
import { featureData, sectionTitle } from "../../constants";
import Button from "./Button";

interface props {
  background: string;
}

const Feature = () => {
  return (
    <FeatureSection>
      <Card>
        <IconContainer background="rgba(138,152,235,.85)">
          <Image alt="Api-image" src="assets/images/api.png" />
        </IconContainer>
        <FeatureHeader color="#5e72e4">{sectionTitle.api}</FeatureHeader>
        <FeatureContent>{featureData.restApiFeat}</FeatureContent>
        <ButtonContainer>
          <Button btnText="Learn more" color="#5e72e4" />
        </ButtonContainer>
      </Card>
      <Card>
        <IconContainer background="rgba(84,218,161,.85)">
          <Image alt="Sever-image" src="assets/images/server.png" />
        </IconContainer>
        <FeatureHeader color="#2dce89">{sectionTitle.server}</FeatureHeader>
        <FeatureContent>{featureData.serverFeat}</FeatureContent>
        <ButtonContainer>
          <Button btnText="Learn more" color="#2dce89" />
        </ButtonContainer>
      </Card>
      <Card>
        <IconContainer background="rgba(252,140,114,.85)">
          <Image
            alt="Authentication-image"
            src="assets/images/authentication.png"
          />
        </IconContainer>
        <FeatureHeader color="#fb6340">{sectionTitle.authentication}</FeatureHeader>
        <FeatureContent>{featureData.authenticationFeat}</FeatureContent>
        <ButtonContainer>
          <Button btnText="Learn more" color="#fb6340" />
        </ButtonContainer>
      </Card>
      <Card>
        <IconContainer background="rgba(252,140,114,.85)">
          <Image alt="Postman-image" src="assets/images/postman-icon.png" />
        </IconContainer>
        <FeatureHeader color="#fb6340">{sectionTitle.postman}</FeatureHeader>
        <FeatureContent>{featureData.postmanFeat}</FeatureContent>
        <ButtonContainer>
          <Button btnText="Learn more" color="#fb6340" />
        </ButtonContainer>
      </Card>
      <Card>
        <IconContainer background="rgba(138,152,235,.85)">
          <Image alt="Routing-image" src="assets/images/worldwide.png" />
        </IconContainer>
        <FeatureHeader color="#5e72e4">{sectionTitle.customRouting}</FeatureHeader>
        <FeatureContent>{featureData.customRoutingFeature}</FeatureContent>
        <ButtonContainer>
          <Button btnText="Learn more" color="#5e72e4" />
        </ButtonContainer>
      </Card>
      <Card>
        <IconContainer background="rgba(84,218,161,.85)">
          <Image alt="support-image" src="assets/images/support.png" />
        </IconContainer>
        <FeatureHeader color="#2dce89">{sectionTitle.localization}</FeatureHeader>
        <FeatureContent>{featureData.localizationFeat}</FeatureContent>
        <ButtonContainer>
          <Button btnText="Learn more" color="#2dce89" />
        </ButtonContainer>
      </Card>
    </FeatureSection>
  );
};

export default React.memo(Feature);
const FeatureSection = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 2rem;
  justify-content: center;
  margin-top: -10rem;
  justify-items: center;
  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }
  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-gap: 3rem;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  background-color: var(--white);
  background-clip: initial;
  border: 0.0625rem solid rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07) !important;
  transition: all 0.15s ease;
  width: 17.5rem;
  padding: 2.25rem 1.5rem;
  align-items: start;
  :hover {
    transform: translateY(-20px);
  }
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    width: 27.5rem;
    padding: 2.25rem 2.5rem;
  }
`;

const FeatureHeader = styled.h6`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 0.5rem;
  color: ${(props) => props.color};
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const IconContainer = styled.div<props>`
  width: 3.75rem;
  height: 3.75rem;
  border-radius: 50%;
  background-color: ${(props: any) => props.background};
  padding: 0.75rem;
  margin-bottom: 1.25rem;
`;
const Image = styled.img`
  width: 100%;
`;

const FeatureContent = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.7;
  color: var(--grey);
  margin-bottom: 3.35rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 2.25rem;
`;
