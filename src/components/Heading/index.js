import styled from "styled-components";

const StyledHeading = styled.h5`
  color: ${(props) => props.theme.text};
  margin: 0px;
  padding: 15px 0px 10px 20px;
`;

function Heading(props) {
  return <StyledHeading> {props.children} </StyledHeading>;
}

export default Heading;
