import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { Description } from "../../../styles/globalStyle";

const API = () => {
  return (
    <DocumentationLayout>
      <Description>{featureData.restApiFeat}</Description>
    </DocumentationLayout>
  );
};

export default API;
