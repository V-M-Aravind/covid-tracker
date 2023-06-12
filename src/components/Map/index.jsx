import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import { Button, CircularProgress } from '@mui/material';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import PopUpCard from './PopUpCard';
import { useStoreState } from '../../store';

export default function MapRender() {
  const { mapData, dispatchGeoLocation } = useStoreState();
  //create a button asking use to use their geo location or use default setback location

  if (!mapData.consentCompleted) {
    return (
      <div className={styles.consent}>
        <h2 className={styles.title}>World Map With Covid Data</h2>
        <div>
          <p>In order to display map, we would like to access your location</p>
          <div className={styles.buttonContainer}>
            <Button
              variant='contained'
              type='button'
              size='large'
              onClick={dispatchGeoLocation.bind(null, false)}
            >
              Get My Location
            </Button>
            <Button
              variant='contained'
              type='button'
              size='large'
              onClick={dispatchGeoLocation.bind(null, true)}
            >
              Use Default Location
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (!mapData.coordinates || mapData.isLoading)
    return (
      <div className={styles.containerLoader}>
        <h2 className={styles.title}>World Map With Covid Data</h2>
        <CircularProgress />
      </div>
    );

  return (
    <div className={styles.container}>
      <div className={styles['title__container']}>
        <h2 className={styles.title}>World Map With Covid Data </h2>
        <CoronavirusOutlinedIcon color='error' fontSize='large' />
      </div>

      <MapContainer
        center={mapData.coordinates}
        zoom={3}
        scrollWheelZoom={false}
        className={styles['leaflet-container']}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {mapData.data.map((data) => {
          const {
            countryInfo: { lat, long },
            cases,
            deaths,
            recovered,
            active,
            country,
          } = data;
          return (
            <Marker position={[lat, long]} key={country}>
              <Popup className={styles.popup}>
                <PopUpCard
                  country={country}
                  cases={cases}
                  deaths={deaths}
                  recovered={recovered}
                  active={active}
                />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
