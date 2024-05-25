import styled from "styled-components";

const Button = styled.button`
  font:
    700 16px/100% Open Sans,
    sans-serif;
  color: var(--white, #fff);
  background-color: var(--primary-blue, #007298);
  border-radius: 4px;
  padding: 13px 32px;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  border: none;

  @media (max-width: 991px) {
    padding: 0px 20px;
  }
`;

export default Button;
