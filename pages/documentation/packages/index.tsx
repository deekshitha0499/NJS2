import React from "react";
import styled from "styled-components";
import {
  basePackageFundamentals,
  packageEndPoints,
  packageTypes,
  plugins,
} from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import List from "../../../src/components/List";
import { Description, SubTitle } from "../../../styles/globalStyle";

interface ImageProps {
  marginTop?: string;
  width?: string;
}

const Packages = () => {
  return (
    <DocumentationLayout>
      <Description>
        Njs2 packages are npm packages that can be installed as dependencies on
        njs2 projects. There are 4 types of packages.
      </Description>
      <OrderedList>
        <List listData={packageTypes} />
      </OrderedList>
      <SubTitle>1. Base Package:</SubTitle>
      <Description>
        Base package has all the fundamentals of the Njs2 Framework.
      </Description>
      <UnorderedList>
        <List listData={basePackageFundamentals} />
      </UnorderedList>
      <Image src="/assets/images/base-package.png" />
      <SubTitle>2. Endpoint:</SubTitle>
      <Description>
        Endpoints are the packages that create the API endpoint definition and
        structure for the API’s. Also these include core logic of the package
        depending on the package. Below are list of endpoint plugins:
      </Description>
      <OrderedList>
        <List listData={packageEndPoints} />
      </OrderedList>
      <Description paddingTop="1rem">
        File tree for endpoint type plugin:
      </Description>
      <Image src="/assets/images/file-tree.png" marginTop="0.5rem" />
      <Description paddingTop="1rem">Package.json file structure:</Description>
      <Image src="/assets/images/package.png" marginTop="0.5rem" width="100%" />
      <SubTitle>3. Helper:</SubTitle>
      <Description>
        Helper packages contain the reusable functionality. Which can be used
        from njs2 projects or from other plugins. <br />
        Below are some helper plugins:
      </Description>
      <OrderedList>
        <List listData={plugins} />
      </OrderedList>
    </DocumentationLayout>
  );
};

export default Packages;

const OrderedList = styled.ol`
  color: #3b454e;
  font-size: 0.875rem;
  line-height: 1.7;
  padding-left: 2rem;
`;

const UnorderedList = styled.ul`
  color: #3b454e;
  font-size: 0.875rem;
  line-height: 1.7;
  padding-left: 1.5rem;
`;

const Image = styled.img<ImageProps>`
  width: ${(props) => (props.width ? props.width : "35%")};
  margin-top: ${(props) => (props.marginTop ? props.marginTop : "2rem")};
`;
