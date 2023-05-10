export interface Flight {
  uuid: string;
  airlineCode: string;
  price: Price;
  bounds: Bound[];
}

export interface FlightDetails {
  remainingNumberOfSeats?: number;
  seatPitch?: number;
  freeBaggageAllowed?: boolean;
  cabinClass?: string;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Departure {
  code: string;
  name: string;
  dateTime: string;
}

export interface Destination {
  code: string;
  name: string;
  dateTime: string;
}

export interface Bound {
  departure: Departure;
  destination: Destination;
  duration: string;
  flightNumber: string;
  aircraftName: string;
}
