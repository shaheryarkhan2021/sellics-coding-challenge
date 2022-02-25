import styled from 'styled-components'
import React, { useState } from 'react';
import Button from '../Button'
import ImageView from '../ImageView'
import {useSelector,useDispatch} from 'react-redux'
import increment from '../../actions'

const StyledContainer = styled.div`
  margin: auto;
  width: 85%;
  background-color: ${props => props.theme.mainBodyColor};
  margin-top: 100px;
  margin-bottom: 100px;
  border-radius: 5px;
`;

const StyledHeading = styled.h5`
color: ${props => props.theme.text};
margin:0px;
padding: 15px 0px 10px 20px;
`;

const StyledBorder = styled.hr`
margin: 0px;
width: ${props => props.borderSetting === 'partial' ?'95%':'100%'};
overflow: hidden;
color: ${props => props.theme.border};
margin: auto;
`;


function Container(){
  const [imageCount, setImageCount] = useState(0)
  
  const dispatch = useDispatch()
  // dispatch(increment())
  const handleDispatch = () => {
    dispatch(increment())
  }
  const myObject = useSelector(state=> state)
  console.log("myObject",myObject.counter)

  return (
  <StyledContainer>
    <StyledHeading>
      IMAGE APPROVAL APPLICATION
    </StyledHeading>
    <StyledBorder/>
    <StyledHeading>
      APPROVED IMAGES ({imageCount})
    </StyledHeading >
    <StyledBorder borderSetting='partial'/>
    {/* <Button /> */}
    <ImageView/>
    <button onClick= {handleDispatch}>click</button>
  </StyledContainer>
  
  )
}

export default Container
