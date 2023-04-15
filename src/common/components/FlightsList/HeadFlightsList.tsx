import styled, { keyframes } from 'styled-components';
import { SortOptions } from '../../enums/SortOption';
import { WrapProps } from '../../models/WrapProps';
import {
  BigTextHeadFlightList,
  TextHeadFlightList,
} from './FlightsList.styles';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  text-align: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const StyledSelect = styled.select`
  margin-top: 10px;
  margin-left: 20vw;
  padding: 10px;
  border: 1;
  border-radius: 20px;
  background-color: white;
  font-size: 1rem;
  color: #333;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }
  & option {
    background-color: white;
  }

  &.loading {
    animation: ${rotate} 1s linear infinite;
  }
`;

export interface HeadFlightsListProps {
  sortDirection: SortOptions;
  ammountOfFlight: number;
  onSortDirectionChangeCallback: (options: SortOptions) => void;
}

const HeadFlightsList: React.FC<WrapProps<HeadFlightsListProps>> = ({
  props,
}) => {
  const handleSortDirectionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const option = e.target.value as SortOptions;
    props.onSortDirectionChangeCallback(option);
  };

  return (
    <Wrapper>
      <TextHeadFlightList>Results: </TextHeadFlightList>
      <BigTextHeadFlightList>{props.ammountOfFlight}</BigTextHeadFlightList>
      <StyledSelect
        id="sort-direction"
        name="sort-direction"
        value={props.sortDirection}
        onChange={handleSortDirectionChange}
      >
        <option value={SortOptions.PRICE}>Price</option>
        <option value={SortOptions.DEPARTURE_TIME}>Departure time</option>
      </StyledSelect>
    </Wrapper>
  );
};

export default HeadFlightsList;
