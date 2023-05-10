import { Flight } from '../models/Flight';

export const mockFlight: Flight[] = [
  {
    uuid: 'b4c2169a-c351-4105-92ab-7d5386c8ade5',
    airlineCode: 'LH',
    price: {
      amount: 20,
      currency: 'EUR',
    },
    bounds: [
      {
        departure: {
          code: 'AMS',
          name: 'Amsterdam Schiphol',
          dateTime: '2023-05-09T22:00:00.000Z',
        },
        destination: {
          code: 'BCN',
          name: 'Barcelona',
          dateTime: '2023-05-09T24:00:00.000Z',
        },
        duration: 'PT9600S',
        flightNumber: 'LH 1011',
        aircraftName: 'Airbus A330',
      },
      {
        departure: {
          code: 'GDN',
          name: 'Gdańsk',
          dateTime: '2023-05-14T22:00:00.000Z',
        },
        destination: {
          code: 'SZY',
          name: 'Olsztyn-Mazury',
          dateTime: '2023-05-14T22:00:00.000Z',
        },
        duration: 'PT26100S',
        flightNumber: 'LH 1111',
        aircraftName: 'Airbus A330',
      },
    ],
  },
  {
    uuid: 'b4c2169a-c351-4105-92ab-7d5386c8ade5',
    airlineCode: 'LH',
    price: {
      amount: 20,
      currency: 'EUR',
    },
    bounds: [
      {
        departure: {
          code: 'AMS',
          name: 'Amsterdam Schiphol',
          dateTime: '2023-05-09T22:00:00.000Z',
        },
        destination: {
          code: 'BCN',
          name: 'Barcelona',
          dateTime: '2023-05-09T24:00:00.000Z',
        },
        duration: 'PT9600S',
        flightNumber: 'LH 1208',
        aircraftName: 'Airbus A330',
      },
      {
        departure: {
          code: 'GDN',
          name: 'Gdańsk',
          dateTime: '2023-05-14T22:00:00.000Z',
        },
        destination: {
          code: 'SZY',
          name: 'Olsztyn-Mazury',
          dateTime: '2023-05-14T22:00:00.000Z',
        },
        duration: 'PT26100S',
        flightNumber: 'LH 1211',
        aircraftName: 'Airbus A330',
      },
    ],
  },
];
