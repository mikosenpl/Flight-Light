import { SortOptions } from '../enums/SortOption';
import { Flight } from '../models/Flight';

export const getSortOptionFromQuery = (options: string | null) => {
  if (options !== null) {
    if (options === SortOptions.PRICE) return SortOptions.PRICE;
    if (options === SortOptions.DEPARTURE_TIME)
      return SortOptions.DEPARTURE_TIME;
  }
  return SortOptions.DEFAULT;
};

export const sortFlightByPrice = (flights: Flight[]) => {
  const sortedFlightsByPrice = flights.sort(
    (a, b) => a.price.amount - b.price.amount
  );
  return sortedFlightsByPrice;
};

export const sortFlightByDepartureTime = (flights: Flight[]) => {
  const sortedFlightsByDepartureDate = flights.sort((a, b) => {
    const departureA = new Date(a.bounds[0].departure.dateTime);
    const departureB = new Date(b.bounds[0].departure.dateTime);
    return departureA.getTime() - departureB.getTime();
  });
  return sortedFlightsByDepartureDate;
};

export const sortFlightByOption = (option: SortOptions, flights: Flight[]) => {
  if (option === SortOptions.DEPARTURE_TIME) {
    return sortFlightByDepartureTime(flights);
  }
  if (option === SortOptions.DEFAULT || SortOptions.PRICE) {
    return sortFlightByPrice(flights);
  }
};
