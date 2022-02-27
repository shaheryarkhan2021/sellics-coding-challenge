import styled from "styled-components";
import PlusIcon from "../PlusIcon";

const StyledLowerHeading = styled.h5`
  color: ${(props) => props.theme.border};
  margin: 0px;
  padding: 15px 5px 10px 20px;
  display: flex;
  justify-content: center;
  font-size: 20px;
  text-align: center;
`;

function LowerHeading(props) {
  return <StyledLowerHeading> {props.children} </StyledLowerHeading>;
}

export default LowerHeading;
