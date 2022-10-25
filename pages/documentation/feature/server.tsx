import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { Description } from "../../../styles/globalStyle";

const Server = () => {

  return (
    <DocumentationLayout>
      <Description>{featureData.serverFeat}</Description>
    </DocumentationLayout>
  );
};

export default Server;
