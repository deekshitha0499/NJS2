import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";

const Authentication = () => {
  return (
    <DocumentationLayout>
      <p>{featureData.authenticationFeat}</p>
    </DocumentationLayout>
  );
};

export default Authentication;
