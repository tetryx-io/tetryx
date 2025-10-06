// @ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  align-items: center;
  background: ${({ color }) => color || "#ffb100"};
  border-radius: 0.5rem;
  color: white;
  display: flex;
  justify-content: center;
`;

export default function App({ children, onClick, ...other }) {
  const [visible, setVisible] = useState(true);

  return (
    <button onClick={onClick}>
      <StyledDiv color="#FF6782">{children}</StyledDiv>
    </button>
  );
}
