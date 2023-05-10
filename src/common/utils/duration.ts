import { differenceInMinutes } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';
import { parse, toSeconds } from 'iso8601-duration';

const ABBREVIATIONS = {
  HOURS: 'h',
  MINUTES: 'm',
};

export const formatDuration = (isoDuration: string) => {
  const durationSeconds = toSeconds(parse(isoDuration));
  return `${Math.floor(durationSeconds / 3600)}${ABBREVIATIONS.HOURS} \
                             ${Math.ceil((durationSeconds % 3600) / 60)}${
    ABBREVIATIONS.MINUTES
  }`;
};

export const flightDuration = (
  departureDate: string,
  destinationDate: string
) => {
  const departureUTC = new Date(departureDate);
  const destinationUTC = new Date(destinationDate);

  const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
  const departureTimezone = utcToZonedTime(departureUTC, timeZone);
  const arrivalTimezone = utcToZonedTime(destinationUTC, timeZone);

  const durationInMinutes = differenceInMinutes(
    arrivalTimezone,
    departureTimezone
  );
  const hours = Math.floor(durationInMinutes / 60);
  const minutes = durationInMinutes % 60;

  return `${hours}${ABBREVIATIONS.HOURS} ${minutes}${ABBREVIATIONS.MINUTES}`;
};

export const flightLocaleDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    month: 'long',
    day: 'numeric',
  };
  const region = navigator.language;
  return date.toLocaleDateString(region, options);
};

export const flightLocaleDateWithYear = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const region = navigator.language;
  return date.toLocaleDateString(region, options);
};

export const formatTimeSeconds = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const minutesFormatted = String(minutes % 60).padStart(2, '0');
  return `${hours}:${minutesFormatted}`;
};
