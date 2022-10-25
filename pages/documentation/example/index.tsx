import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { Code } from "../../../styles/globalStyle";

const Example = () => {
  const [code, setCode] = useState("");
  const router=useRouter()
  const { url } = router?.query;
  useEffect(() => {
    getExampleData();
  }, [url]);

  const getExampleData = async () => {
    await fetch(`${url}`)
      .then((data) => data.json())
      .then((data) => {
        fetch(`${data.tree[0].url}`, {
          headers: {
            accept: "application/vnd.github.VERSION.raw",
          },
        })
          .then((data) => data.text())
          .then((code) => {
            setCode(code);
          })
          .catch(console.error);
      });
  };
  return (
    <DocumentationLayout>
      <Code>{code}</Code>
    </DocumentationLayout>
  );
};

export default Example;
