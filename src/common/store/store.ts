import { configureStore } from '@reduxjs/toolkit';
import flightSlice, { FlightState } from './slices/flight/flightSlice';

export interface RootState {
  flight: FlightState;
}

export const store = configureStore({
  reducer: {
    flight: flightSlice,
  },
});
