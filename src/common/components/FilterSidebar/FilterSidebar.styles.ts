import { List, ListItemText } from '@mui/material';
import styled from 'styled-components';

export const FilterSideBarWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  background-color: white;

  ${({ theme }) => theme.mq.desktop} {
    grid-row: 2 / 3;
    grid-column: 1 / 1;
  }

  ${({ theme }) => theme.mq.smartphone} {
    grid-row: 2 / 3;
    grid-column: 1 / 1;
    justify-content: right;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  .MuiFormControlLabel-label {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

export const FilterList = styled(List)`
  width: 100%;
`;

export const FilterTitle = styled(ListItemText)`
  > span {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
  }
`;
