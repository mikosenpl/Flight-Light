import { Button } from '@mui/material';
import styled from 'styled-components';

export const FlightCardWrapper = styled.div`
  background-color: white;
  display: flex;
  margin-top: 20px;

  ${({ theme }) => theme.mq.desktop} {
    width: 728px;
    height: 260px;
  }
  ${({ theme }) => theme.mq.tablet} {
    width: 650px;
    height: 260px;
  }
  ${({ theme }) => theme.mq.smartphone} {
    flex-direction: column;
    width: 450px;
    min-height: 236px;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  ${({ theme }) => theme.mq.desktop} {
    width: 75%;
  }
  ${({ theme }) => theme.mq.tablet} {
    width: 75%;
  }
  ${({ theme }) => theme.mq.smartphone} {
    width: 100%;
  }
`;

export const CardShortRightAlign = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 30%;
`;

export const CardShortLeftAlign = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 30%;
`;

export const CardMiddle = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`;

export const CardYellowLine = styled.div`
  width: 50%;
  height: 2px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const CardCircleYellow = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 13px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const CardTriangle = styled.div`
  margin-top: -1rem;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 20px 10px 0;
  border-color: ${({ theme }) => theme.colors.primary};

  ${({ theme }) => theme.mq.desktop} {
    transform: translate(-50%, 600%) rotate(45deg);
  }

  ${({ theme }) => theme.mq.tablet} {
    transform: translate(-50%, 600%) rotate(45deg);
  }

  ${({ theme }) => theme.mq.smartphone} {
    transform: translate(1050%, -30%) rotate(45deg);
  }
`;

export const CardAirlinesDiv = styled.div`
  display: flex;
  margin: 0 auto;
  padding-left: 1rem;
  justify-content: center;
  width: 15%;

  ${({ theme }) => theme.mq.desktop} {
    align-items: center;
  }

  ${({ theme }) => theme.mq.tablet} {
    align-items: flex-start;
  }

  ${({ theme }) => theme.mq.smartphone} {
    align-items: flex-start;
  }
`;

export const CardRight = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 100%;
  padding: 1rem 0;

  ${({ theme }) => theme.mq.desktop} {
    width: 35%;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 35%;
  }

  ${({ theme }) => theme.mq.smartphone} {
    width: 100%;
  }
`;

export const CardRightInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.smartphone} {
    justify-content: space-between;
    padding-top: 5px;
    width: 100%;
  }
`;

export const CardInfoButton = styled(Button)`
  && {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.secondary};
    transition: opacity 0.5s ease-out;
    opacity: 0.5;
    &:hover {
      background-color: transparent;
      opacity: 1;
    }
  }
`;
