import styled from "styled-components";

const StyledLoginButton = styled.button`
  font-family:
    Open Sans,
    sans-serif;
  justify-content: center;
  border-radius: 4px;
  background-color: var(--primary-blue, #007298);
  padding: 13px 36px;
  @media (max-width: 991px) {
    white-space: initial;
    padding: 0 20px;
  }
`;

const ButtonLogin = () => {
  return <StyledLoginButton>LOGIN</StyledLoginButton>;
};

export default ButtonLogin;
