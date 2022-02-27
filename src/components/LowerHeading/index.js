import styled from "styled-components";
import PlusIcon from "../PlusIcon";

const StyledLowerHeading = styled.h5`
  color: ${(props) => props.theme.border};
  margin: 0px;
  padding: 15px 0px 10px 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
`;

function LowerHeading(props) {
  return <StyledLowerHeading> {props.children} </StyledLowerHeading>;
}

export default LowerHeading;
