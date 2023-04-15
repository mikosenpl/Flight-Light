import { Link } from 'react-router-dom';
import { Flight } from '../../models/Flight';
import { flightLocaleDate, formatDuration } from '../../utils/duration';
import { getImageOfAirlineUrl } from '../../utils/images';
import {
  AirlinesDiv,
  BigTextFlightCard,
  BookFlightButton,
  BoundsPart,
  FlexDivCenter,
  FlightCardWrapper,
  FlightInfoMiddle,
  FlightInfoMiddleLine,
  FlightInfoShortLeftAlign,
  FlightInfoShortRightAlign,
  LeftCard,
  MiddleLine,
  RightCard,
  RightCardInfo,
  SmallTextFlightCard,
  TextFlightCard,
  Triangle,
  YellowCircle,
  YellowLine,
} from './FlightCard.styles';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = (props: FlightCardProps) => {
  const AirlineImageUrl = getImageOfAirlineUrl(props.flight.airlineCode);

  const BoundPartArea = (
    departureCode: string,
    departureDate: Date,
    destinationCode: string,
    destinationDate: Date,
    duration: string
  ) => {
    return (
      <BoundsPart>
        <AirlinesDiv>
          <img
            src={AirlineImageUrl}
            alt={props.flight.airlineCode ?? 'airlineCode'}
            height="80%"
          />
        </AirlinesDiv>
        <FlightInfoShortRightAlign>
          <TextFlightCard>{departureCode}</TextFlightCard>
          <BigTextFlightCard>
            {departureDate.getUTCHours()}:
            {departureDate.getUTCMinutes().toString().padStart(2, '0')}
          </BigTextFlightCard>
          <TextFlightCard>{flightLocaleDate(departureDate)}</TextFlightCard>
        </FlightInfoShortRightAlign>
        {FlightInfoMiddleArea(duration)}
        <FlightInfoShortLeftAlign>
          <TextFlightCard>{destinationCode}</TextFlightCard>
          <BigTextFlightCard>
            {destinationDate.getUTCHours()}:
            {destinationDate.getUTCMinutes().toString().padStart(2, '0')}
          </BigTextFlightCard>
          <TextFlightCard>{flightLocaleDate(destinationDate)}</TextFlightCard>
        </FlightInfoShortLeftAlign>
        {/* <FlightModal flight={props.flight} /> */}
      </BoundsPart>
    );
  };

  const FlightInfoMiddleArea = (duration: string) => {
    const formattedDifference = formatDuration(duration);

    return (
      <FlightInfoMiddle>
        <FlexDivCenter>
          <SmallTextFlightCard>{formattedDifference}</SmallTextFlightCard>
        </FlexDivCenter>
        <FlightInfoMiddleLine>
          <YellowCircle />
          <YellowLine />
          <YellowCircle />
        </FlightInfoMiddleLine>
      </FlightInfoMiddle>
    );
  };

  return (
    <FlightCardWrapper>
      <LeftCard>
        {BoundPartArea(
          props.flight.bounds[0].departure.code,
          new Date(props.flight.bounds[0].departure.dateTime),
          props.flight.bounds[0].destination.code,
          new Date(props.flight.bounds[0].destination.dateTime),
          props.flight.bounds[0].duration
        )}
        <MiddleLine />
        {props.flight.bounds[1] ? (
          BoundPartArea(
            props.flight.bounds[1].departure.code,
            new Date(props.flight.bounds[1].departure.dateTime),
            props.flight.bounds[1].destination.code,
            new Date(props.flight.bounds[1].destination.dateTime),
            props.flight.bounds[1].duration
          )
        ) : (
          <BoundsPart></BoundsPart>
        )}
      </LeftCard>
      <RightCard>
        <Triangle />
        <RightCardInfo>
          <BigTextFlightCard>
            {props.flight.price.amount} {props.flight.price.currency}
          </BigTextFlightCard>
          <Link to={`/flight/${props.flight.uuid}`}>
            <BookFlightButton>Book flight</BookFlightButton>
          </Link>
        </RightCardInfo>
      </RightCard>
    </FlightCardWrapper>
  );
};

export default FlightCard;
