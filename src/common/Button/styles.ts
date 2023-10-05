import styled from "styled-components";

export const StyledButton = styled("button")<any>`
  background: ${(p) => p.color || "#0B9300"};
  color: ${(p) => (p.color ? "#2E186A" : "#fff")};
  font-size: 0.8rem;
  font-weight: 150;
  width: 150%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 0px 0;
  cursor: pointer;
  max-width: 500px;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: 1px solid rgb(255, 130, 92);
    background-color: rgb(255, 130, 92);
  }
`;
