import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SortOptions } from '../../enums/SortOption';
import { Flight } from '../../models/Flight';
import { useGetFlights } from '../../queries/useGetFlights';
import {
  getSortOptionFromQuery,
  sortFlightByOption,
} from '../../utils/searchUtils';
import { FlightsListWrapper } from './FlightsList.styles';
import HeadFlightsList, { HeadFlightsListProps } from './HeadFlightsList';
import FlightCard from '../FlightCard/FlightsCard';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setFlightSortDirection } from '../../store/slices/flight/flightSlice';

const FlightsList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortDirection: SortOptions = useSelector(
    (state: RootState) => state.flight.sortDirection
  );
  const [allFlights, setAllFlights] = useState<Flight[]>();
  const dispatch = useDispatch();
  const flights = useGetFlights();

  useEffect(() => {
    if (!searchParams.get('sort')) {
      searchParams.set('sort', SortOptions.DEFAULT);
      setSearchParams(searchParams);
    } else {
      dispatch(setFlightSortDirection(searchParams.get('sort')));
    }
  }, []);

  useEffect(() => {
    flights.refetch();
  }, [sortDirection]);

  useEffect(() => {
    if (flights.isSuccess && flights.data) {
      const filteredData = sortFlightByOption(sortDirection, flights.data);
      setAllFlights(filteredData);
    }
  }, [flights, sortDirection, searchParams]);

  const onSortDirectionChange = (direction: SortOptions) => {
    dispatch(setFlightSortDirection(direction));
    searchParams.set('sort', direction);
    setSearchParams(searchParams);
  };

  const HeadFlightListProps: HeadFlightsListProps = {
    ammountOfFlight: allFlights ? allFlights.length : 0,
    sortDirection: sortDirection,
    onSortDirectionChangeCallback: onSortDirectionChange,
  };

  return (
    <FlightsListWrapper>
      <HeadFlightsList props={HeadFlightListProps} />
      {allFlights ? (
        allFlights.map((flight: Flight) => {
          return <FlightCard key={flight.uuid} flight={flight} />;
        })
      ) : (
        <p>Spinner</p>
      )}
    </FlightsListWrapper>
  );
};

export default FlightsList;
