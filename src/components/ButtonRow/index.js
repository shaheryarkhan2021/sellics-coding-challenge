import Button from "../Button";
import styled from "styled-components";

const StyledButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

function ButtonRow({ approveImage, disapproveImage }) {
  return (
    <StyledButtonRow>
      <Button onClick={disapproveImage} />
      <Button buttonType={"blue"} onClick={approveImage} />
    </StyledButtonRow>
  );
}
export default ButtonRow;
