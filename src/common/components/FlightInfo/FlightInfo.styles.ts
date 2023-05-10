import { Dialog } from '@mui/material';
import styled from 'styled-components';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export const FlightInfoModal = styled(Dialog)`
  & .MuiDialog-paper {
    min-width: 50rem;
    background-color: ${({ theme }) => theme.colors.body};

    &::-webkit-scrollbar {
      width: 0.3rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.tertiary};
      border-radius: 2rem;
    }
  }
`;

export const FlightInfoWrapper = styled.div`
  width: 100%;
`;

export const FlightInfoHeader = styled.div`
  height: 12rem;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FlightInfoHeaderContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem 1rem 2rem 1rem;
  display: flex;
  justify-content: space-between;
`;

export const FlightInfoBody = styled.div`
  height: 60rem;
  width: 100%;
`;
export const FlightInfoBodyContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

export const FlightInfoLocalization = styled.div`
  width: 75%;
`;

export const AirlineLogoIcon = styled.div`
  width: 25%;
  text-align: center;
`;

export const FlightInfoBound = styled.div`
  height: 40%;
  width: 100%;
  padding: 1rem;
`;

export const FlightInfoFooter = styled.div`
  height: 20%;
  width: 100%;
  padding: 1rem;
`;
export const FlightInfoBoundPart = styled.div`
  width: 70%;
  height: 12rem;
  display: flex;
  background-color: white;
  padding: 1rem 3rem;
`;

export const FlightInfoBoundPartTime = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
`;

export const FlightInfoDetailsPart = styled.div`
  width: 30%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const FlightInfoBoundPartIcon = styled.div`
  width: 15%;
`;

export const FlightInfoBoundPartName = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FlightInfoYellowLine = styled.div`
  margin: auto;
  height: 4rem;
  width: 0.2rem;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FlightInfoCircleYellow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  text-align: center;
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 0.2rem solid ${({ theme }) => theme.colors.primary};
`;
export const CloseButton = styled(CloseOutlinedIcon)`
  && {
    font-size: 3rem;
    transition: color 0.5s ease-out;
    &:hover {
      color: ${({ theme }) => theme.colors.tertiary};
      opacity: 0.8;
    }
  }
`;
