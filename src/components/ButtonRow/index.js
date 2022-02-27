import Button from "../Button";
import styled from "styled-components";

const StyledButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

function ButtonRow() {
  return (
    <StyledButtonRow>
      <Button />
      <Button buttonType={"blue"} />
    </StyledButtonRow>
  );
}
export default ButtonRow;
