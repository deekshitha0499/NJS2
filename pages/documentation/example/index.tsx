import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import { ApiDetailContext } from "../../../src/context/ApiDetailProvider";
import { Code, SubTitle } from "../../../styles/globalStyle";
import Button from "../../../src/components/Button";

const Example = () => {
  const { apiDetail }: any = useContext(ApiDetailContext);
  const [exampleData, setExampleData] = useState({
    title: "",
    steps: "",
    code: "",
  });
  const router = useRouter();
  const { title } = router.query;

  useEffect(() => {
    getExampleData();
  }, [title]);

  const getExampleApiData = () => {
    return apiDetail.find((data: any) => {
      return data.example_name === title;
    });
  };

  const getExampleData = async () => {
    await fetch(`${getExampleApiData()?.url}`, {
      headers: new Headers({
        Authorization: process.env.NEXT_PUBLIC_Token || "",
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        fetch(`${data.tree[0].url}`, {
          headers: {
            accept: "application/vnd.github.VERSION.raw",
            Authorization: process.env.NEXT_PUBLIC_Token || "",
          },
        })
          .then((data) => data.text())
          .then((code) => {
            setExampleData({
              title: code?.split("#")[1]?.toLowerCase(),
              steps: `${code
                ?.split("#")[3]
                ?.split("\n")
                ?.slice(1)
                ?.join("\n")} \n`,
              code: code?.split("#")[5]?.split("//")[0],
            });
          })
          .catch(console.error);
      });
  };

  const goToGitExampleHandler = () => {
    window.open(getExampleApiData()?.html);
  };

  return (
    <DocumentationLayout>
      <SubTitle>{exampleData?.title}</SubTitle>
      <SubTitle>Steps:</SubTitle>
      <Steps>{exampleData?.steps}</Steps>
      <SubTitle>Code:</SubTitle>
      <Code>{exampleData?.code}</Code>
      <ButtonContainer>
        <Button
          btnText="Go to Github example"
          color="#5e72e4"
          clickHandler={goToGitExampleHandler}
        />
      </ButtonContainer>
    </DocumentationLayout>
  );
};

export default Example;

const Steps = styled.pre`
  font-size: 0.8rem;
  font-weight: 400;
  line-height: 1.5;
  color: #525f7f;
`;

const ButtonContainer = styled.div`
  margin: 1rem 0;
  width: 30%;
`;
