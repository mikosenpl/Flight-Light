import styled from 'styled-components';

export const FlightsListWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 2 / 2;
    grid-column: 2 / 2;
    padding: 3rem;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-row: 3 / 4;
    grid-column: 1 / 1;
    padding: 1rem;
  }
`;

export const BigTextHeadFlightList = styled.p`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const TextHeadFlightList = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const SmallTextHeadFlightList = styled.p`
  font-weight: 300;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
