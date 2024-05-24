import logo from "../../../../Assets/Logo.svg";
import styled from "styled-components";

const StyledLogo = styled.img`
  aspect-ratio: 2.33;
  object-fit: auto;
  object-position: center;
  width: 111px;
  max-width: 100%;
`;

const Logo: React.FC = () => {
  return <StyledLogo src={logo} alt="logo" />;
};

export default Logo;
