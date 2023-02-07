import styled, { css } from "styled-components";

export const IconeButtonIncluir = () => {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
};

export const StyledButton = styled.button`
  padding: 8px 15px;
  font-size: 16px;
  background: transparent;
  border-radius: 4px;
  box-shadow: none;
  text-transform: capitalize;
  margin: 10px;
  cursor: pointer;
  border: 1px solid transparent;
  background-color: ${({ type }) =>
    (type === "primary" && "red") ||
    (type === "secondary" && "teal") ||
    "transparent"};
  color: ${({ type }) => (type === "ghost" && "teal") || "white"};
  border-color: ${({ type }) => type === "ghost" && "teal"};

  ${props =>
    props.disbaled &&
    css`
      transform: ${({ isActive }) =>
        !isActive ? "translateY(-100%)" : "translateY(0)"};
    `};
  }
`;
