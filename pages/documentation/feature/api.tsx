import { useRouter } from "next/router";
import React from "react";
import { featureData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";

const API = () => {
  return (
    <DocumentationLayout>
      <p>{featureData.restApiFeat}</p>
    </DocumentationLayout>
  );
};

export default API;
