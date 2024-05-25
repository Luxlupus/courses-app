import styled from "styled-components";
import Logo from "./components/Logo/Logo";
import Button from "../../common/Button/Button";

const Header = styled.header`
  box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.15);
  background-color: #fff;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: var(--white, #fff);
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  text-transform: uppercase;
  line-height: 150%;
  justify-content: space-between;
  padding: 14px 34px;
  /* Remove extra padding from original code */

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
    padding: 14px 20px; /* Adjust padding for mobile */
  }
`;

const HeaderLayout = () => {
  return (
    <Header>
      <Logo />
      <Button>LOGIN</Button>
    </Header>
  );
};

export default HeaderLayout;
