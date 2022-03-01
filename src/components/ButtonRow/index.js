import Button from "../Button";
import styled from "styled-components";
import {getRandomPhoto} from "../../utils/apiCall"
import { useDispatch, useSelector } from 'react-redux'
import addImage from "../../actions/addImage"
import rejectImage from "../../actions/rejectImage"

const StyledButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const photoObject={
  id: " ",
  url:" "
}
function ButtonRow() {
  const dispatch = useDispatch()
  const myObject = useSelector(state => state)
  const handleClick = () => {
    dispatch(rejectImage(photoObject))
    console.log("myObject", myObject)
  }

  const actionDispatching = () => {
    dispatch(addImage(getRandomPhoto))
    console.log("myObject", myObject)
    
  }
  return (
    <StyledButtonRow>
      <Button onClick={handleClick} />
      <Button buttonType={"blue"} onClick={actionDispatching}/>
    </StyledButtonRow>
  );
}
export default ButtonRow;
