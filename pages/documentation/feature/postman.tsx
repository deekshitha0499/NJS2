import { useRouter } from "next/router";
import React from "react";
import { featureData} from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { DocumentTitle } from "../../../styles/globalStyle";

const Postman = () => {
  const router = useRouter();
  const title:string=router.pathname.split('/')[3]

  return (
    <DocumentationLayout>
      <p>{featureData.postmanFeat}</p>
    </DocumentationLayout>
  );
};

export default Postman;
