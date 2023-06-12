import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './Map.module.css';
import 'leaflet/dist/leaflet.css';
import getGeolocation from '../utility/getGeolocation';
import { useEffect, useState } from 'react';
import { CircularProgress } from '@mui/material';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import covidClientInstance from '../../services';
import PopUpCard from './PopUpCard';

export default function MapRender() {
  const [coordinates, setCoordinates] = useState(undefined);
  const [worldData, setWorldData] = useState(null);
  useEffect(() => {
    getGeolocation(setCoordinates);
    (async () => {
      const data = await covidClientInstance
        .get(`countries`)
        .then((res) => res.data);
      setWorldData(data);
    })();
  }, []);
  if (!coordinates || !worldData)
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
        center={coordinates}
        zoom={3}
        scrollWheelZoom={false}
        className={styles['leaflet-container']}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        {worldData.map((data) => {
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
