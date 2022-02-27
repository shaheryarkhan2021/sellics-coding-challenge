import styled from "styled-components";
import PlusIcon from "../PlusIcon";
import ButtonRow from "../ButtonRow";
import Border from "../Border";
import LowerHeading from "../LowerHeading";
import StyledImageView  from "../StyledImageView";

function ImageView({ height, width }) {
  const handleClick = () =>{
    console.log("Span Clicked")
  }
  return (
    <>
      <StyledImageView height={height} width={width}>
        <span onClick={handleClick}><PlusIcon /></span>
      </StyledImageView>
      <Border borderSetting="partial" />
      <ButtonRow/>
      <LowerHeading>
        <span>Click on the&nbsp;
        <PlusIcon size={"1em"} />
        &nbsp;in order to get image recommendations</span>
      </LowerHeading>
    </>
  );
}

export default ImageView;
