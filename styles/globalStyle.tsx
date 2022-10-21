import styled from "styled-components";

export const Section = styled.section`
  padding: 0 12.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  @media (max-width: 992px) {
    padding: 0 3.5rem;

  }
  @media (max-width: 756px) {
    padding: 0 2rem;
}
`

export const Title = styled.h2`
  margin-bottom: 6rem;
  font-family: inherit;
  line-height: 1.5;
  color: var(--primary-violet);
  font-size: 2.1875rem;
  font-weight: 600;
`;


export const DocumentTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1rem 0;
  line-height: 1.5;
  color:var(--primary-violet);
  border-left: 3px solid var(--primary-blue);
  padding-left: 1rem;
`;


export const Code = styled.pre`
  background-color: #f5f7ff !important;
  text-shadow: white 0px 1px;
  font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  overflow-wrap: normal;
  line-height: 1.5;
  tab-size: 4;
  hyphens: none;
  padding: 1em;
  margin: 0.5em 0px;
  overflow: auto;
`;


