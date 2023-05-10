import { Button } from '@mui/material';
import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }
  
  *, *::after, *::before {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
  }

  a, ul, li {
    list-style: none;
    text-decoration: none;
  }

  p {
    padding: 0;
    margin: 0;
  }
`;

export const BoundsPart = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  height: 49%;
  width: 100%;
`;

export const FlexColumnSpaceBetween = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const MiddleLine = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const MiddleBlackLine = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: auto;
  background-color: black;
`;
export const FlexCenterFullWidth = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
`;
export const FlexGap1 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const HalfWidth = styled.div`
  width: 50%;
  gap: 1rem;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
`;
export const HalfWidthRightAlign = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const QuarterWidthRight = styled.div`
  width: 25%;
  display: flex;
  justify-content: start;
`;

export const FlexAlignEnd = styled.div`
  display: flex;
  align-items: flex-end;
`;
export const BookFlightButton = styled.button`
  width: 200px;
  height: 60px;
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  border-radius: 24px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.tertiary};
  transition: background-color 0.2s ease-out;
  &:hover {
    background-color: ${({ theme }) => theme.colors.tertiary};
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

export const TheBiggestText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const BiggerText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const BigText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.l};
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const BoldText = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const SmallText = styled.p`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const TextTertiary = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.tertiary};
`;

export const BiggerTextSecondary = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
  color: ${({ theme }) => theme.colors.secondary};
`;
