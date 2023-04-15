import { useQuery, QueryClient } from 'react-query';
import axiosInstance from '../api/axios';
import { Flight, FlightDetails } from '../models/Flight';

export const useGetFlights = () => {
  return useQuery<Flight[]>(['Flights'], () => fetchFlights());
};

export const useGetFlight = (flightId: string | undefined) => {
  return useQuery<FlightDetails>(
    ['Flight', flightId],
    () => fetchFlight(flightId),
    {
      enabled: flightId !== undefined,
    }
  );
};

export const invalidateFlight = (queryClient: QueryClient) => {
  queryClient.invalidateQueries('Flights');
  queryClient.invalidateQueries('Flight');
};

const fetchFlights = async () => {
  const response = await axiosInstance.get<Flight[]>('/flights');
  return response.data;
};

const fetchFlight = async (flightId: string | undefined) => {
  const response = await axiosInstance.get<FlightDetails>(
    `/flights/${flightId}`
  );
  return response.data;
};
