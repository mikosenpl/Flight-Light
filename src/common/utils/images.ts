export const getImageOfAirlineUrl = (airlineCode: string) => {
  return process.env.REACT_APP_IMAGES_AIRLINES + airlineCode + '.png';
};
