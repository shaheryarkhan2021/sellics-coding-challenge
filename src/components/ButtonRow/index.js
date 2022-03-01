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
function ButtonRow({approveImage, disapproveImage}) {
  const dispatch = useDispatch()
  const myObject = useSelector(state => state)

  const rejectedImage = () => {
    getRandomPhoto().then((response) => {
      photoObject.id =response.data.id
      photoObject.url = response.data.urls.thumb
      dispatch(rejectImage(photoObject))
    })
  }

  const saveImage = () => {
    getRandomPhoto().then((response) => {
      photoObject.id =response.data.id
      photoObject.url = response.data.urls.thumb
      dispatch(addImage(photoObject))
    })
  }
  return (
    <StyledButtonRow>
      <Button onClick={disapproveImage} />
      <Button buttonType={"blue"} onClick={approveImage}/>
    </StyledButtonRow>
  );
}
export default ButtonRow;
