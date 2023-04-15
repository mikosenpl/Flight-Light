import { useQuery, QueryClient } from 'react-query';
import axiosInstance from '../api/axios';
import { Airport } from '../models/Airport';

export const useGetAirports = () => {
  return useQuery<Airport[]>(['Airports'], () => fetchAirports());
};

export const invalidateAirports = (queryClient: QueryClient) => {
  queryClient.invalidateQueries('Airports');
};

const fetchAirports = async () => {
  const response = await axiosInstance.get<Airport[]>('/airports');
  return response.data;
};
