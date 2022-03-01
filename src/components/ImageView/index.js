import { useState } from 'react';
import PlusIcon from "../PlusIcon";
import ButtonRow from "../ButtonRow";
import Border from "../Border";
import LowerHeading from "../LowerHeading";
import StyledImageView  from "../StyledImageView";
import {getRandomPhoto} from "../../utils/apiCall"
import { useDispatch, useSelector } from 'react-redux'
import addImage from "../../actions/addImage"
import rejectImage from "../../actions/rejectImage"

function ImageView({ height, width }) {
  const dispatch = useDispatch()
  const [image, setImage] = useState(null);
  const [photoId,setPhotoId] = useState(null)

  const handleClick = () =>{
    getRandomPhoto().then((response) => {
      setImage(response.data.urls.thumb)
      setPhotoId(response.data.id)
    })
  }

  const MainSection = () => {
    if(image){
      return <img height={"100%"} width={"100%"} src={image}/>
    }
    return <span onClick={handleClick}><PlusIcon /></span>
  }

  const approveImage = () => {
    dispatch(addImage(image))
    handleClick()
  }

  const disapproveImage = () => {
    dispatch(rejectImage(photoId))
    handleClick()
  }
  return (
    <>
      <StyledImageView height={height} width={width}>
        <MainSection/>
      </StyledImageView>
      <Border borderSetting="partial" />
      <ButtonRow approveImage={approveImage} disapproveImage={disapproveImage} />
      <LowerHeading>
        <span>Click on the&nbsp;
        <PlusIcon size={"1em"} />
        &nbsp;in order to get image recommendations</span>
      </LowerHeading>
    </>
  );
}

export default ImageView;
