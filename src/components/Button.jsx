import styled from "styled-components";

export const ButtonOutline = styled.button`
  background: none;
  border: 1px solid #000;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #000;
    color: #fff;
  }
`;
