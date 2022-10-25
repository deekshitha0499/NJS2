import { useRouter } from "next/router";
import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { Description } from "../../../styles/globalStyle";

const Localization = () => {

  return (
    <DocumentationLayout>
      <Description>{featureData.localizationFeat}</Description>
    </DocumentationLayout>
  );
};

export default Localization;
