import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { sectionSubHeader, sectionTitle } from "../../constants";
import { DocumentTitle } from "../../styles/globalStyle";
import Sidenav from "./Sidenav";

const DocumentationLayout = ({ children }: any) => {
  const router = useRouter();
  const pageTitle: any = router.pathname.split("/").pop();
  const { title } = router?.query;
  return (
    <DocumentationContainer>
      <Sidenav />
      <Section>
        <DocumentTitle>
          {pageTitle == "example" ? title : sectionTitle[pageTitle]}
        </DocumentTitle>
        <SubTitle>{sectionSubHeader[pageTitle]}</SubTitle>
        <HorizontalLine />
        {children}
      </Section>
    </DocumentationContainer>
  );
};

export default DocumentationLayout;
const DocumentationContainer = styled.div`
  color: black;
  display: flex;
  width: 100%;
`;
const Section = styled.section`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 1rem 1rem 1rem 3rem;
`;

const SubTitle = styled.h3`
font-size: 0.9rem;
font-weight: 400;
line-height: 1.5;
color:var(--primary-violet);
`

const HorizontalLine = styled.hr`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  border: 0;
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.1);
`;
