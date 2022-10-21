import React from "react";
import styled from "styled-components";
import DocumentationLayout from "../../src/components/DocumentationLayout";
import { Code } from "../../styles/globalStyle";

const Documentation = () => {
  return (
    <DocumentationLayout>
        <List>
          <ListItem>
            Operating system requirement
            <br />
            <ListSubItem>
              Njs2 Framework is designed to operate in Linux based operating
              systems.
            </ListSubItem>
          </ListItem>
          <ListItem>
            Install node.js and essential build tools <br />
            <ListSubItem>
              Download and Install Node.js v12 (v12.22.1)
            </ListSubItem>
          </ListItem>
          <ListItem>
            Install Njs2 CLI tool <br />
            <ListSubItem>
              Start by installing the CLI tool globally using npm.
            </ListSubItem>
          </ListItem>
        </List>
        <Code>npm install -g @njs2/cli</Code>
    </DocumentationLayout>
  );
};

export default Documentation;


const List = styled.ol`
  padding-left: 1rem;
`;

const ListItem = styled.li`
  font-size: 1rem;
  font-weight: 600;
  margin: 1.5rem 0;
  color: var(--primary-violet);
`;

const ListSubItem = styled.span`
  font-weight: 400;
  font-size: 0.8rem;
`;
