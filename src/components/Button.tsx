import React from "react";
import styled from "styled-components";

interface ButtonProps {
  btnText: string;
  color:string;
}
const Button = ({ btnText,color }: ButtonProps) => {
  return <StyledButton color={color}>{btnText}</StyledButton>;
};

export default React.memo(Button);

const StyledButton = styled.button`
  color:white;
  text-transform: uppercase;
  background-color: ${props=>props.color};
  border: none;
  border-radius: 0.25rem;
  padding: 0.65rem 0.95rem;
  font-size: 0.8rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.01rem;
`;
