import { useQuery, QueryClient } from 'react-query';
import axiosInstance from '../api/axios';
import { Airline } from '../models/Airline';

export const useGetAirLines = () => {
  return useQuery<Airline[]>(['AirLines'], () => fetchAirLines());
};

export const invalidateAirLines = (queryClient: QueryClient) => {
  queryClient.invalidateQueries('AirLines');
};

const fetchAirLines = async () => {
  const response = await axiosInstance.get<Airline[]>('/airLines');
  return response.data;
};
