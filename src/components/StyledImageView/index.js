import styled from "styled-components";
const StyledImageView = styled.div`
background-color: #f5f5f5;
margin: auto;
height: ${(props) => props.height || "50px"};
width: ${(props) => props.width || "87%"};
display: flex;
justify-content: center;
align-items: center;
margin-top: 10px;
margin-bottom: 10px;
border-radius: 5px;
`;

export default StyledImageView;