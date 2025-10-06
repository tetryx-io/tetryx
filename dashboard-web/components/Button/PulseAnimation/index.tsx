// @ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import Pulsating from "./pulsating";

const StyledDiv = styled.div`
  align-items: center;
  background: ${({ color }) => color || "#ffb100"};
  border-radius: 0.5rem;
  color: white;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 130px;
`;

export default function App({ children }) {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <Pulsating visible={visible} color="#FFD4E4">
        <StyledDiv color="#FF6782">{children}</StyledDiv>
      </Pulsating>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Stop" : "Start"} Pulse
      </button>
    </div>
  );
}
