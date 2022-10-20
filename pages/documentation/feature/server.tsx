import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";

const Server = () => {
  return (
    <DocumentationLayout>
      <p>{featureData.serverFeat}</p>
    </DocumentationLayout>
  );
};

export default Server;
