import { AxiosError } from 'axios';
import { QueryClient, useMutation } from 'react-query';
import axiosInstance from '../api/axios';
import { invalidateFlight } from './useGetFlights';

export const usePostFlightReservation = (
  queryClient: QueryClient,
  callbacks?: {
    onSuccess?: () => void;
    onError?: (error: AxiosError) => void;
    onSettled?: () => void;
  }
) => {
  return useMutation((data: string) => postFlight(data), {
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
    onError: (error: AxiosError) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
    onSettled: () => {
      if (callbacks?.onSettled) callbacks.onSettled();
      invalidateFlight(queryClient);
    },
  });
};

const postFlight = async (data: string) => {
  return await axiosInstance.post<any>(`/flights`, data, {
    headers: { 'Content-Type': 'application/json' },
  });
};
