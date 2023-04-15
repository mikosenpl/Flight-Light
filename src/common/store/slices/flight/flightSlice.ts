import { createSlice } from '@reduxjs/toolkit';
import { SortOptions } from '../../../enums/SortOption';

export interface FlightState {
  sortDirection: SortOptions;
}

export const initialFlightState: FlightState = {
  sortDirection: SortOptions.DEFAULT,
};

const fightSlice = createSlice({
  name: 'flight',
  initialState: initialFlightState,
  reducers: {
    setFlightSortDirection: (state, action) => {
      state.sortDirection = action.payload;
    },
  },
});

export const { setFlightSortDirection } = fightSlice.actions;

export default fightSlice.reducer;
