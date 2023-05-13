import { Link } from 'react-router-dom';
import { Flight } from '../../models/Flight';
import { flightLocaleDate, formatDuration } from '../../utils/duration';
import { getImageOfAirlineUrl } from '../../utils/images';
import {
  CardAirlinesDiv,
  FlightCardWrapper,
  CardMiddle,
  CardShortLeftAlign,
  CardShortRightAlign,
  CardLeft,
  CardRight,
  CardRightInfo,
  CardTriangle,
  CardCircleYellow,
  CardYellowLine,
} from './FlightCard.styles';
import FlightInfo from '../FlightInfo/FlightInfo';
import {
  BoundsPart,
  Text,
  BigText,
  FlexCenter,
  SmallText,
  FlexCenterFullWidth,
  MiddleLine,
  BookFlightButton,
} from '../../assets/styles/GlobalStyle';
import { useTranslation } from 'react-i18next';

interface FlightCardProps {
  flight: Flight;
}

const FlightCard = (props: FlightCardProps) => {
  const { t } = useTranslation();
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
        <CardAirlinesDiv>
          <img
            src={AirlineImageUrl}
            alt={props.flight.airlineCode ?? 'airlineCode'}
            height="80%"
          />
        </CardAirlinesDiv>
        <CardShortRightAlign>
          <Text>{departureCode}</Text>
          <BigText>
            {departureDate.getUTCHours()}:
            {departureDate.getUTCMinutes().toString().padStart(2, '0')}
          </BigText>
          <Text>{flightLocaleDate(departureDate)}</Text>
        </CardShortRightAlign>
        {FlightInfoMiddleArea(duration)}
        <CardShortLeftAlign>
          <Text>{destinationCode}</Text>
          <BigText>
            {destinationDate.getUTCHours()}:
            {destinationDate.getUTCMinutes().toString().padStart(2, '0')}
          </BigText>
          <Text>{flightLocaleDate(destinationDate)}</Text>
        </CardShortLeftAlign>
        {/* <FlightModal flight={props.flight} /> */}
      </BoundsPart>
    );
  };

  const FlightInfoMiddleArea = (duration: string) => {
    const formattedDifference = formatDuration(duration);

    return (
      <CardMiddle>
        <FlexCenter>
          <SmallText>{formattedDifference}</SmallText>
        </FlexCenter>
        <FlexCenterFullWidth>
          <CardCircleYellow />
          <CardYellowLine />
          <CardCircleYellow />
        </FlexCenterFullWidth>
      </CardMiddle>
    );
  };

  return (
    <FlightCardWrapper>
      <CardLeft>
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
      </CardLeft>
      <CardRight>
        <CardTriangle />
        <CardRightInfo>
          <FlightInfo flight={props.flight} />
          <div>
            <BigText>
              {props.flight.price.amount} {props.flight.price.currency}
            </BigText>
            <Link to={`/flight/${props.flight.uuid}`}>
              <BookFlightButton>{t('flightCard.book')}</BookFlightButton>
            </Link>
          </div>
        </CardRightInfo>
      </CardRight>
    </FlightCardWrapper>
  );
};

export default FlightCard;
