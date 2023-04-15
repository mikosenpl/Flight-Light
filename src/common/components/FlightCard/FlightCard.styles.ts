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

export const LeftCard = styled.div`
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

export const BoundsPart = styled.div`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  height: 49%;
  width: 100%;
`;

export const FlightInfoShortRightAlign = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: right;
  width: 30%;
`;

export const FlightInfoShortLeftAlign = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 30%;
`;

export const MiddleLine = styled.div`
  width: 90%;
  height: 1%;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FlightInfoMiddle = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`;

export const FlightInfoMiddleLine = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const FlexDivCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const YellowLine = styled.div`
  width: 50%;
  height: 2px;
  margin-top: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const YellowCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 13px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const Triangle = styled.div`
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

export const AirlinesDiv = styled.div`
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

export const RightCard = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 100%;

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

export const RightCardInfo = styled.div`
  display: flex;
  justify-content: flex-end;
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

export const BookFlightButton = styled.button`
  margin: 0.5rem 0 20px 0;
  width: 180px;
  height: 48px;
  font-size: 20px;
  color: white;
  border-radius: 24px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-color: ${({ theme }) => theme.colors.tertiary};
`;

export const BigTextFlightCard = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const TextFlightCard = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const SmallTextFlightCard = styled.p`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
