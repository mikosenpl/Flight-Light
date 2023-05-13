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
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();
  const MenuNavigationItem = () => {
    return (
      <MenuNavigationItemWrapper>
        <li>
          <Link to="/search">{t('header.navigation.search')}</Link>
        </li>
        <li>
          <Link to="/news">{t('header.navigation.planning')}</Link>
        </li>
        <li>
          <Link to="/faq">{t('header.navigation.faq')}</Link>
        </li>
        <li>
          <Link to="/about-us">{t('header.navigation.aboutUs')}</Link>
        </li>
      </MenuNavigationItemWrapper>
    );
  };

  const AuthNavigationItem = () => {
    return (
      <MenuNavigationItemWrapper>
        <li>
          <StyledMuiButtonLink>
            <Link to="/register">{t('header.navigation.register')}</Link>
          </StyledMuiButtonLink>
        </li>
        <li>
          <StyledUnderlinedLink>
            <Link to="/login">{t('header.navigation.logIn')}</Link>
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
