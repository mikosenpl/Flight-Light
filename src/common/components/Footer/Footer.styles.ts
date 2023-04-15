import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.body};

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 3 / 3;
    grid-column: 1 / 3;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-row: 4 / 5;
    grid-column: 1 / 1;
    justify-content: center;
  }
`;
