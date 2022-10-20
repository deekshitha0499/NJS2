import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";

const Postman = () => {
  return (
    <DocumentationLayout>
      <p>{featureData.postmanFeat}</p>
    </DocumentationLayout>
  );
};

export default Postman;
