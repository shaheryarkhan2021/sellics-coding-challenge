import styled from "styled-components";
import React, { useState } from "react";

const StyledContainer = styled.div`
  margin: auto;
  width: 400px;
  background-color: ${(props) => props.theme.mainBodyColor};
  margin-top: 30px;
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
