import { Button } from '@mui/material';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 1 / 3;
  display: flex;
  justify-content: space-between;
  padding: 1vh;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const LogoWrapper = styled.div`
  width: 10%;
  height: 100%;
`;

export const LogoImage = styled.img`
  height: 100%;
  width: auto;
`;

export const HeaderText = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.tertiary};
  font-weight: 700;
`;

export const MenuWrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MenuNavigationItemWrapper = styled.ul`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;

  li {
    margin: 2rem;
  }
  a {
    color: black;
    text-decoration: underline transparent;
    transition: text-decoration 0.5s ease-out;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledMuiButtonLink = styled(Button)`
  && {
    background-color: ${({ theme }) => theme.colors.tertiary} !important;
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 0.8rem;
    border: 0.2rem solid ${({ theme }) => theme.colors.secondary};
    border-radius: 2rem;
    transition: opacity 0.5s ease-out;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const StyledUnderlinedLink = styled.p`
  > a {
    text-decoration: underline;
    transition: text-decoration 0.5s ease-out;

    &:hover {
      text-decoration: underline transparent;
    }
  }
`;
