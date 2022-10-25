import React, { useMemo } from "react";
import styled from "styled-components";
import { cliTableData } from "../../../constants";
import DocumentationLayout from "../../../src/components/DocumentationLayout";
import {
  Code, Description, SubTitle
} from "../../../styles/globalStyle";

const CLI = () => {
  const CLICommands = useMemo(() => {
    return cliTableData.map(({ command, description }, index) => (
      <TableRow key={index}>
        <TableData>
          <Command>{command}</Command>
        </TableData>
        <TableData>{description}</TableData>
      </TableRow>
    ));
  }, []);

  return (
    <DocumentationLayout>
      <SubTitle>CLI overview:</SubTitle>
      <Description>
        Below are the commands available in @njs2/cli package
      </Description>
      <Table>{CLICommands}</Table>
      <SubTitle>njs2 new:</SubTitle>
      <Description>
        Used to create new njs2 projects and also generates the project
        structure.
      </Description>
      <Code>njs2 new</Code>
      <Description>Example:</Description>
      <Code>njs2 new njs2_project</Code>
      <Description>Arguments:</Description>
      <Description>
        Project-name: Project-name argument is used to create the project also
        updates this name throughout the project structure.
      </Description>
      <SubTitle>njs2 install:</SubTitle>
      <Description>
        Download the remote packages and install the plugins/helpers in the
        Njs2-module folder of the project.
      </Description>
      <Code>njs2 install</Code>
      <Description>Example:</Description>
      <Code>njs2 install njs2-auth-apple@1.0.0</Code>
      <Description>Arguments:</Description>
      <Description>
        Package_name: Name of the package to be installed along with version
        separated by @ symbol.
      </Description>
      <Description>
        Package-url: An optional parameter which is used to specify the remote
        origin from where the package to be installed.
      </Description>
      <SubTitle>njs2 compile:</SubTitle>
      <Description>
        Used to compile the plugins and generate the build that can be hosted in
        remote storage hosting/registry.
      </Description>
      <Code>njs2 compile</Code>
      <SubTitle>njs2 create-endpoint:</SubTitle>
      <Description>Used to create API endpoints in the project.</Description>
      <Code>njs2 create-endpoint --request</Code>
      <Description>Example:</Description>
      <Code>njs2 create-endpoint njs2/api --request GET</Code>
      <Description>Arguments:</Description>
      <Description>
        Endpoint-name: endpoint-name is the API interface name which used to
        create the API definition
      </Description>
      <Description>
        Request: Request is the HTTP request type, options are GET or POST
      </Description>
      <SubTitle>njs2 update-postman:</SubTitle>
      <Description>
        Update-postman command is used to generate the postman export definition
        for all the API’s used in the project.
      </Description>
      <Code>njs2 update-postman</Code>
      <SubTitle>njs2 create-event:</SubTitle>
      <Description>
        Generates the Event structure for websocket events and updates the
        listener.config file at src/configs/listener.json
      </Description>
      <Code>njs2 create-event</Code>
      <Description>Example:</Description>
      <Code>njs2 create-event room_join</Code>
    </DocumentationLayout>
  );
};

export default CLI;


const Table = styled.table`
  width: 100%;
  margin: 1rem 0;
  color: #525f7f;
  padding: 0 1.25rem;
  border: 1px solid #e6ecf1;
  border-radius: 0.25rem;
  background-color: #f5f7f9;
  font-size: 0.875rem;
  tr:first-child td {
    border: none;
  }
`;

const TableRow = styled.tr`
  border-top: 0.0625rem solid #dee2e6;
`;

const TableData = styled.td`
  padding: 1rem;
  vertical-align: top;
  border-top: 0.0625rem solid #dee2e6;
`;
const Command = styled.code`
  font-size: 87.5%;
  color: #f3a4b5;
  word-break: break-word;
`;
