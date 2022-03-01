import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

const StyledButton = styled.button`
  background-color: ${(props) =>
    props.buttonType === "blue"
      ? props.theme.blueButton.default
      : props.theme.blackButton.default};
  color: white;
  padding: 15px 55px;
  border-radius: 40px;
  border-style: none;
  &:hover {
    background-color: ${(props) =>
      props.buttonType === "blue"
        ? props.theme.blueButton.hover
        : props.theme.blackButton.hover};
  }
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px;
`;

function Button(props) {
  return (
    <StyledButton buttonType={props.buttonType} onClick={props.onClick}>
      {props.buttonType === "blue" ? (
        <FontAwesomeIcon icon={faCheck} />
      ) : (
        <FontAwesomeIcon icon={faXmark} />
      )}
    </StyledButton>
  );
}

export default Button;
