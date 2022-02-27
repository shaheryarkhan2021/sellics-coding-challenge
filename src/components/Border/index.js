import styled from "styled-components";

const StyledBorder = styled.hr`
  margin: 0px;
  width: ${(props) => (props.borderSetting === "partial" ? "95%" : "100%")};
  overflow: hidden;
  color: ${(props) => props.theme.border};
  margin: auto;
`;

function Border(props) {
  return <StyledBorder borderSetting={props.borderSetting} />;
}

export default Border;
