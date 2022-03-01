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
function ImageRow({images}){

  const emptyImage = () => {
    return (<StyledImageView height={"70px"} width={"100px"} setting={"left"}>
    <PlusIcon size={"1em"} />
  </StyledImageView>)
  }

  const singleImage = (image) => {
    return (<StyledImageView height={"70px"} width={"100px"} setting={"left"}>
    <img height={"100%"} width={"100%"} src={image}/>
  </StyledImageView>)
  }
  
  const multipleImages = (images) => {
    return(<StyledCarousel>
    <Carousel show={5.5} slide={3} swiping={true}>
      {
        images.map((src)=> {
          return singleImage(src)
        })
      }
	  </Carousel>
    </StyledCarousel>)
  }

  const CarouselView = ({images}) => {

    if(images.length === 0){
      return emptyImage()
    }
    else if(images.length === 1){
      return singleImage(images[0])
    }
    else if(images.length > 1){
      return multipleImages(images)
    }
  }

  return(
    <CarouselView images={images}/>
  )
}

export default ImageRow