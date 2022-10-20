import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";

const Localization = () => {
  return (
    <DocumentationLayout>
      <p>{featureData.localizationFeat}</p>
    </DocumentationLayout>
  );
};

export default Localization;
