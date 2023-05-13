import { useEffect, useState } from 'react';
import {
  FilterList,
  FilterSideBarWrapper,
  FilterTitle,
} from './FilterSidebar.styles';
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  VolumeUp,
} from '@mui/icons-material';
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  List,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  Slider,
} from '@mui/material';
import TimesOneMobiledataIcon from '@mui/icons-material/TimesOneMobiledata';
import StartIcon from '@mui/icons-material/Start';
import AlarmIcon from '@mui/icons-material/Alarm';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useGetAirLines } from '../../queries/useGetAirlines';
import { Airline } from '../../models/Airline';
import { Airport } from '../../models/Airport';
import { useGetAirports } from '../../queries/useGetAirports';
import { formatTimeSeconds } from '../../utils/duration';
import { useTranslation } from 'react-i18next';

const FilterSideBar = () => {
  const { t } = useTranslation();
  const [openConnection, setOpenConnection] = useState(true);
  const [openHour, setOpenHour] = useState(true);
  const [openDuration, setOpenDuration] = useState(true);
  const [openAirlines, setOpenAirlines] = useState(true);
  const [openAirports, setOpenAirports] = useState(true);
  const [departureTime, setDepartureTime] = useState<number[]>([0, 1439]);
  const [durationTime, setDurationTime] = useState<number[]>([0, 1439]);
  const [destinationTime, setDestinationTime] = useState<number[]>([0, 1439]);
  const [allAirlines, setAllAirlines] = useState<Airline[]>();
  const [allAirports, setAllAirports] = useState<Airport[]>();

  const airlines = useGetAirLines();
  const airports = useGetAirports();

  useEffect(() => {
    if (airlines.isSuccess && airlines.data) {
      setAllAirlines(airlines.data);
    }
  }, [airlines]);

  useEffect(() => {
    if (airports.isSuccess && airports.data) {
      setAllAirports(airports.data);
    }
  }, [airports]);

  const handleClickConnection = () => {
    setOpenConnection(!openConnection);
  };

  const handleClickHour = () => {
    setOpenHour(!openHour);
  };

  const handleClickDuration = () => {
    setOpenDuration(!openDuration);
  };

  const handleClickAirlines = () => {
    setOpenAirlines(!openAirlines);
  };

  const handleClickAirports = () => {
    setOpenAirports(!openAirports);
  };

  const handleChangeDepartureTime = (
    event: Event,
    newValue: number | number[]
  ) => {
    setDepartureTime(newValue as number[]);
  };

  const handleChangeDestinationTime = (
    event: Event,
    newValue: number | number[]
  ) => {
    setDestinationTime(newValue as number[]);
  };

  const handleChangeDurationTime = (
    event: Event,
    newValue: number | number[]
  ) => {
    setDurationTime(newValue as number[]);
  };
  return (
    <FilterSideBarWrapper>
      <FilterList>
        <ListItemButton onClick={handleClickConnection}>
          <ListItemIcon>
            <TimesOneMobiledataIcon />
          </ListItemIcon>
          <FilterTitle primary={t('filterSideBar.stops.name')} />
          {openConnection ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openConnection} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label={t('filterSideBar.stops.direct')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('filterSideBar.stops.stop')}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label={t('filterSideBar.stops.stops')}
                />
              </FormGroup>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickHour}>
          <ListItemIcon>
            <StartIcon />
          </ListItemIcon>
          <FilterTitle primary={t('filterSideBar.departureTime.name')} />
          {openHour ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openHour} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <FormGroup
                sx={{
                  width: '75%',
                  alignItems: 'flex-end',
                  marginTop: '1rem',
                }}
              >
                <FormControlLabel
                  control={
                    <Slider
                      min={0}
                      max={1439}
                      sx={{ margin: '1rem', width: '10rem' }}
                      value={departureTime}
                      size="small"
                      onChange={handleChangeDepartureTime}
                      valueLabelFormat={formatTimeSeconds}
                      valueLabelDisplay="on"
                      aria-labelledby="range-slider"
                    />
                  }
                  label={t('filterSideBar.departureTime.outbound')}
                  labelPlacement="start"
                ></FormControlLabel>
              </FormGroup>
            </ListItemButton>
            <ListItemButton>
              <FormGroup sx={{ width: '75%', textAlign: 'right' }}>
                <FormControlLabel
                  control={
                    <Slider
                      min={0}
                      max={1439}
                      sx={{ margin: '1rem', width: '10rem' }}
                      value={destinationTime}
                      size="small"
                      onChange={handleChangeDestinationTime}
                      valueLabelFormat={formatTimeSeconds}
                      valueLabelDisplay="on"
                      aria-labelledby="range-slider"
                    />
                  }
                  label={t('filterSideBar.departureTime.return')}
                  labelPlacement="start"
                ></FormControlLabel>
              </FormGroup>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickDuration}>
          <ListItemIcon>
            <AlarmIcon />
          </ListItemIcon>
          <FilterTitle primary={t('filterSideBar.tripDuration.name')} />
          {openDuration ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openDuration} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <FormGroup sx={{ width: '75%', textAlign: 'right' }}>
                <FormControlLabel
                  control={
                    <Slider
                      min={0}
                      max={1439}
                      sx={{ margin: '1rem', width: '10rem' }}
                      value={durationTime}
                      size="small"
                      onChange={handleChangeDurationTime}
                      valueLabelFormat={formatTimeSeconds}
                      valueLabelDisplay="on"
                      aria-labelledby="range-slider"
                    />
                  }
                  label={t('filterSideBar.tripDuration.time')}
                  labelPlacement="start"
                ></FormControlLabel>
              </FormGroup>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickAirlines}>
          <ListItemIcon>
            <AirplaneTicketIcon />
          </ListItemIcon>
          <FilterTitle primary={t('filterSideBar.airlines.name')} />
          {openAirlines ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAirlines} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <FormGroup>
                {allAirlines && airlines.isSuccess ? (
                  allAirlines.map((airline: Airline) => {
                    return (
                      <FormControlLabel
                        control={<Checkbox value={airline.airlineCode} />}
                        label={airline.airlineName}
                      />
                    );
                  })
                ) : (
                  <p></p>
                )}
              </FormGroup>
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton onClick={handleClickAirports}>
          <ListItemIcon>
            <LocationOnIcon />
          </ListItemIcon>
          <FilterTitle primary={t('filterSideBar.airports.name')} />
          {openAirports ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openAirports} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton>
              <FormGroup>
                {allAirports && airports.isSuccess ? (
                  allAirports.map((airport: Airport) => {
                    return (
                      <FormControlLabel
                        control={<Checkbox value={airport.code} />}
                        label={airport.name}
                      />
                    );
                  })
                ) : (
                  <p>{t('alert.loading')}</p>
                )}
              </FormGroup>
            </ListItemButton>
          </List>
        </Collapse>
      </FilterList>
    </FilterSideBarWrapper>
  );
};

export default FilterSideBar;
