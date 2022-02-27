import React from "react";

import Border from "../../components/Border";
import ImageView from "../../components/ImageView";
import Heading from "../../components/Heading";
import Container from '../../components/container'

function MainPage() {

  return (
    <Container>
      <Heading> {"IMAGE APPROVAL APPLICATION"} </Heading>
      <Border />
      <Heading> {`APPROVED IMAGES (0)`} </Heading>
      
      <Border borderSetting="partial" />
      <ImageView height={"20em"} />
      {/* <button onClick={handleDispatch}>click</button> */}
      {/* <button onClick={getPhoto}>getPhoto</button> */}
    </Container>
  );
}

export default MainPage;
