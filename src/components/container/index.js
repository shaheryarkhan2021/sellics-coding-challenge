import styled from "styled-components";
import React, { useState } from "react";

const StyledContainer = styled.div`
  margin: auto;
  width: 85%;
  background-color: ${(props) => props.theme.mainBodyColor};
  margin-top: 60px;
  border-radius: 5px;
`;

function Container({children}) {
  return (
    <StyledContainer>
      {children}
    </StyledContainer>
  );
}

export default Container;
