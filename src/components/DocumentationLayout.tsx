import React from "react";
import styled from "styled-components";
import Sidenav from "./Sidenav";

const DocumentationLayout = ({ children }: any) => {
  return (
    <DocumentationContainer>
      <Sidenav />
      <Section>{children}</Section>
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
  width: 100%;
  display: flex;
  justify-content: start;
`;
