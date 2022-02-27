import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const StyledPlusIcon = styled.span`
  color: ${(props) => props.theme.plusIcon};
  font-size: ${(props) => props.size || "10em"};
`;

function PlusIcon({ size }) {
  return (
    <StyledPlusIcon size={size}>
      <FontAwesomeIcon icon={faPlus} />
    </StyledPlusIcon>
  );
}

export default PlusIcon;
