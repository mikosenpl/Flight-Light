import { Bound, Flight, FlightDetails } from '../../models/Flight';
import { useEffect, useState } from 'react';
import { CardInfoButton } from '../FlightCard/FlightCard.styles';
import InfoIcon from '@mui/icons-material/Info';
import {
  AirlineLogoIcon,
  CloseButton,
  FlightInfoBody,
  FlightInfoBodyContent,
  FlightInfoBound,
  FlightInfoBoundPart,
  FlightInfoBoundPartIcon,
  FlightInfoBoundPartName,
  FlightInfoBoundPartTime,
  FlightInfoCircleYellow,
  FlightInfoDetailsPart,
  FlightInfoFooter,
  FlightInfoHeader,
  FlightInfoHeaderContent,
  FlightInfoLocalization,
  FlightInfoModal,
  FlightInfoWrapper,
  FlightInfoYellowLine,
} from './FlightInfo.styles';
import {
  Text,
  BigText,
  BiggerText,
  TheBiggestText,
  BookFlightButton,
  FlexCenter,
  FlexAlignEnd,
  BoldText,
  FlexSpaceBetween,
  SmallText,
  MiddleBlackLine,
  Flex,
  HalfWidth,
  QuarterWidthRight,
  FlexGap1,
  TextTertiary,
  BiggerTextSecondary,
  HalfWidthRightAlign,
  MiddleLine,
} from '../../assets/styles/GlobalStyle';
import {
  flightLocaleDate,
  flightLocaleDateWithYear,
  formatDuration,
} from '../../utils/duration';
import { getImageOfAirlineUrl } from '../../utils/images';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import LuggageIcon from '@mui/icons-material/Luggage';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import FlightClassIcon from '@mui/icons-material/FlightClass';
import FlightIcon from '@mui/icons-material/Flight';
import BadgeIcon from '@mui/icons-material/Badge';
import { useGetFlight } from '../../queries/useGetFlights';
import { useTranslation } from 'react-i18next';

interface FlightInfoProps {
  flight: Flight;
}

const FlightInfo = (props: FlightInfoProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [flightDetails, setFlightDetails] = useState<FlightDetails>();
  const AirlineImageUrl = getImageOfAirlineUrl(props.flight.airlineCode);
  const flightsDetailsQuery = useGetFlight(props.flight.uuid);

  useEffect(() => {
    if (flightsDetailsQuery.isSuccess && flightsDetailsQuery.data) {
      setFlightDetails(flightsDetailsQuery.data);
    }
  }, [flightsDetailsQuery, flightsDetailsQuery.data]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const BoundPartArea = (flightBounds: Bound) => {
    const departureTime = new Date(flightBounds.departure.dateTime);
    const destinationTime = new Date(flightBounds.destination.dateTime);
    return (
      <FlightInfoBound>
        <FlexSpaceBetween>
          <FlightInfoLocalization>
            <BigText>{`${flightBounds.departure.name} - ${flightBounds.destination.name}`}</BigText>
            <Text>{flightLocaleDateWithYear(departureTime)}</Text>
            <BoldText>{formatDuration(flightBounds.duration)}</BoldText>
          </FlightInfoLocalization>
          <AirlineLogoIcon>
            <img
              src={AirlineImageUrl}
              alt={props.flight.airlineCode ?? 'airlineCode'}
              height={'auto'}
            />
          </AirlineLogoIcon>
        </FlexSpaceBetween>
        <Flex>
          <FlightInfoBoundPart>
            <FlightInfoBoundPartTime>
              <BoldText>{`${departureTime.getHours()}:${departureTime.getMinutes()}`}</BoldText>
              <SmallText>{formatDuration(flightBounds.duration)}</SmallText>
              <BoldText>{`${destinationTime.getHours()}:${destinationTime.getMinutes()}`}</BoldText>
            </FlightInfoBoundPartTime>
            <FlightInfoBoundPartIcon>
              <FlightInfoCircleYellow>
                <FlightTakeoffIcon />
              </FlightInfoCircleYellow>
              <FlightInfoYellowLine />
              <FlightInfoCircleYellow>
                <FlightLandIcon />
              </FlightInfoCircleYellow>
            </FlightInfoBoundPartIcon>
            <FlightInfoBoundPartName>
              <div>
                <BoldText>{flightBounds.departure.name}</BoldText>
                <SmallText>{`(${flightBounds.departure.code})`}</SmallText>
              </div>
              <div>
                <SmallText>{flightBounds.flightNumber}</SmallText>
              </div>
              <div>
                <BoldText>{flightBounds.destination.name}</BoldText>
                <SmallText>{`(${flightBounds.destination.code})`}</SmallText>
              </div>
            </FlightInfoBoundPartName>
          </FlightInfoBoundPart>
          <FlightInfoDetailsPart>
            <FlexSpaceBetween>
              <HalfWidth>
                <SmallText>{t('flightInfo.freeLuggage')}</SmallText>
              </HalfWidth>
              <QuarterWidthRight>
                <LuggageIcon fontSize="large" />
                {flightDetails?.freeBaggageAllowed ? (
                  <CheckCircleIcon fontSize="large" color="success" />
                ) : (
                  <CancelIcon fontSize="large" color="error" />
                )}
              </QuarterWidthRight>
            </FlexSpaceBetween>
            {flightDetails?.seatPitch && (
              <FlexSpaceBetween>
                <HalfWidth>
                  <SmallText>{t('flightInfo.seat.pitch')}</SmallText>
                </HalfWidth>
                <QuarterWidthRight>
                  <FlightClassIcon fontSize="large" />
                  <BigText>{flightDetails.seatPitch}</BigText>
                </QuarterWidthRight>
              </FlexSpaceBetween>
            )}
            <FlexSpaceBetween>
              <HalfWidth>
                <SmallText>{flightBounds.aircraftName}</SmallText>
              </HalfWidth>
              <QuarterWidthRight>
                <FlightIcon fontSize="large" />
                <BadgeIcon fontSize="large" />
              </QuarterWidthRight>
            </FlexSpaceBetween>
          </FlightInfoDetailsPart>
        </Flex>

        <FlexGap1>
          {flightDetails?.cabinClass && (
            <HalfWidth>
              <SmallText>{t('flightInfo.seat.class')}</SmallText>
              <BoldText>{flightDetails.cabinClass}</BoldText>
            </HalfWidth>
          )}
          {flightDetails?.remainingNumberOfSeats && (
            <HalfWidthRightAlign>
              <TextTertiary>{t('flightInfo.seat.free')}</TextTertiary>
              <BiggerTextSecondary>
                {flightDetails.remainingNumberOfSeats}
              </BiggerTextSecondary>
            </HalfWidthRightAlign>
          )}
        </FlexGap1>
      </FlightInfoBound>
    );
  };
  return (
    <div>
      <CardInfoButton startIcon={<InfoIcon />} onClick={handleOpen}>
        {t('flightInfo.info')}
      </CardInfoButton>
      <FlightInfoModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <FlightInfoWrapper>
          <FlightInfoHeader>
            <FlightInfoHeaderContent>
              <div>
                <BiggerText>
                  {`${props.flight.bounds[0].departure.code} - ${props.flight.bounds[0].destination.code}`}
                </BiggerText>
                <Text>
                  {`${flightLocaleDate(
                    new Date(props.flight.bounds[0].departure.dateTime)
                  )} - ${flightLocaleDate(
                    new Date(props.flight.bounds[1].destination.dateTime)
                  )}`}
                </Text>
                <TheBiggestText>{`${props.flight.price.amount} ${props.flight.price.currency}`}</TheBiggestText>
              </div>
              <FlexCenter>
                <FlexAlignEnd>
                  <BookFlightButton>{t('flightInfo.book')}</BookFlightButton>
                </FlexAlignEnd>
                <div>
                  <CloseButton />
                </div>
              </FlexCenter>
            </FlightInfoHeaderContent>
          </FlightInfoHeader>
          <FlightInfoBody>
            <FlightInfoBodyContent>
              {BoundPartArea(props.flight.bounds[0])}
              <MiddleLine />
              {BoundPartArea(props.flight.bounds[1])}
              <MiddleLine />
              <FlightInfoFooter>
                <SmallText>{t('flightInfo.bottomText')}</SmallText>
              </FlightInfoFooter>
            </FlightInfoBodyContent>
          </FlightInfoBody>
        </FlightInfoWrapper>
      </FlightInfoModal>
    </div>
  );
};

export default FlightInfo;
