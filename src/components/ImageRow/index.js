import styled from "styled-components";
import { Carousel } from '@trendyol-js/react-carousel';
import StyledImageView from "../StyledImageView";
import PlusIcon from "../PlusIcon";

const StyledCarousel = styled.div`
width: 90%;
margin: auto;
.styles-module_carousel-arrow__26sRw{
  border: solid blue;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 10px;
  margin-top: 30px;
  background-color: white;
}
.styles-module_carousel-arrow__26sRw[data-direction="left"] {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
.styles-module_carousel-arrow__26sRw[data-direction="right"] {
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}
`
function ImageRow(){
  return(

    <StyledImageView height={"70px"} width={"100px"} setting={"left"}>
      <PlusIcon size={"1em"} />
    </StyledImageView>
    // <StyledCarousel>
    // <Carousel show={5.5} slide={3} swiping={true}>
		//   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
    //   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
    //   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
    //   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
    //   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
    //   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
    //   <StyledImageView height={"70px"} width={"100px"}></StyledImageView>
	  // </Carousel>
    // </StyledCarousel>
  )
}

export default ImageRow