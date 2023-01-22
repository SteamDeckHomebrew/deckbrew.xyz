import styled from "styled-components";

export const Button = styled.div`
  margin-top: 16px;
  background: var(--dark);
  color: var(--light);
  font-weight: bold;
  display: inline-flex;
  align-items: center;

  border-radius: 32px;
  padding: 12px 24px;

  transition-property: all;
  transition-duration: 0.15s;

  /* on hover */
  :hover {
    background: var(--light);
    color: var(--dark);
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.3);
  }
`;

export default Button;
