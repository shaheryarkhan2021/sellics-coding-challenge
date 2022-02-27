import styled from "styled-components";
const StyledImageView = styled.div`
background-color: #f5f5f5;
margin: auto;
margin: ${(props) => props.setting === "left"? "10px 0px 10px 15px": "auto" };
margin-top: 10px;
margin-bottom: 10px;
height: ${(props) => props.height || "50px"};
width: ${(props) => props.width || "87%"};
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
`;

export default StyledImageView;