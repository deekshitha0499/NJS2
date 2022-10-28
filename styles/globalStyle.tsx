import styled from "styled-components";


interface DescriptionProps{
  paddingTop?: string
}

const Section = styled.section`
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
`;

const Title = styled.h2`
  margin-bottom: 6rem;
  font-family: inherit;
  line-height: 1.5;
  color: var(--primary-violet);
  font-size: 2.1875rem;
  font-weight: 600;
`;

const DocumentTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 1rem 0;
  line-height: 1.5;
  color: var(--primary-violet);
  border-left: 3px solid var(--primary-blue);
  padding-left: 1rem;
  text-transform: capitalize;
`;

const Code = styled.pre`
  background-color: #f5f7ff !important;
  text-shadow: white 0px 1px;
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
  font-size: 0.9rem;
`;

const Description = styled.p<DescriptionProps>`
  color: #3b454e;
  font-size: 0.875rem;
  line-height: 1.7;
  padding-bottom: 0.5rem;
  padding-top: ${props => props.paddingTop ? props.paddingTop : "0"}
`;
const SubTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin: 1rem 0;
  line-height: 1.5;
  color: var(--primary-violet);
  text-transform: capitalize;
`;

export { Section, Title, DocumentTitle, Code, Description, SubTitle };
