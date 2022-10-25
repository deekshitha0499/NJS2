import { useRouter } from "next/router";
import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { Description, DocumentTitle } from "../../../styles/globalStyle";

const Authentication = () => {

  return (
    <DocumentationLayout>
      <Description>{featureData.authenticationFeat}</Description>
    </DocumentationLayout>
  );
};

export default Authentication;
