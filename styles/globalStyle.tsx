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