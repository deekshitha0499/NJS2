import { useRouter } from "next/router";
import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { DocumentTitle } from "../../../styles/globalStyle";

const Authentication = () => {

  return (
    <DocumentationLayout>
      <p>{featureData.authenticationFeat}</p>
    </DocumentationLayout>
  );
};

export default Authentication;
