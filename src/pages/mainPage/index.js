import React from "react";
import { useSelector } from 'react-redux'

import Border from "../../components/Border";
import ImageView from "../../components/ImageView";
import Heading from "../../components/Heading";
import Container from '../../components/container'
import ImageRow from "../../components/ImageRow"

function MainPage() {

  const savedImages = useSelector((state) => state.addedImages)
  return (
    <Container>
      <Heading> {"IMAGE APPROVAL APPLICATION"} </Heading>
      <Border />
      <Heading> {`APPROVED IMAGES (${savedImages.length})`} </Heading>
      <ImageRow images={savedImages}/>
      <Border borderSetting="partial" />
      <ImageView height={"30em"} />
      {/* <button onClick={handleDispatch}>click</button> */}
      {/* <button onClick={getPhoto}>getPhoto</button> */}
    </Container>
  );
}

export default MainPage;
