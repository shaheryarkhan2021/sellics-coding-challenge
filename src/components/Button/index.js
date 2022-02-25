import styled from "styled-components"

const StyledButton = styled.button`
background-color: ${props => props.buttonType==='blue'?  props.theme.blueButton.default:props.theme.blackButton.default};
color: white;
padding: 15px 35px;
border-radius: 25px;
&:hover {
	background-color: ${props => props.buttonType==='blue'? props.theme.blueButton.hover:props.theme.blackButton.hover};
}
`;

function Button(props){
	console.log("PROPS",props)
return (
	<StyledButton buttonType = {props.buttonType}>Button</StyledButton>
	)
}

export default Button