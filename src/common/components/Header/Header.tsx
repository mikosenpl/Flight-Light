import { Link } from 'react-router-dom';
import Logo from '../../assets/icons/logo.png';
import {
  HeaderWrapper,
  LogoImage,
  LogoWrapper,
  MenuNavigationItemWrapper,
  MenuWrapper,
  StyledMuiButtonLink,
  StyledUnderlinedLink,
} from './Header.styles';

const Header = () => {
  const MenuNavigationItem = () => {
    return (
      <MenuNavigationItemWrapper>
        <li>
          <Link to="/search">Wyszukiwarka</Link>
        </li>
        <li>
          <Link to="/news">Zaplanuj podróz</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/about-us">O nas</Link>
        </li>
      </MenuNavigationItemWrapper>
    );
  };

  const AuthNavigationItem = () => {
    return (
      <MenuNavigationItemWrapper>
        <li>
          <StyledMuiButtonLink>
            <Link to="/register">Rejestacja</Link>
          </StyledMuiButtonLink>
        </li>
        <li>
          <StyledUnderlinedLink>
            <Link to="/login">LOGOWANIE</Link>
          </StyledUnderlinedLink>
        </li>
      </MenuNavigationItemWrapper>
    );
  };

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <Link to={`/flights`}>
          <LogoImage src={Logo} alt="Logo" />
        </Link>
      </LogoWrapper>
      <MenuWrapper>
        <MenuNavigationItem />
        <AuthNavigationItem />
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
