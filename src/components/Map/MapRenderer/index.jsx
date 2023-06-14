import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './MapRenderer.module.css';
import 'leaflet/dist/leaflet.css';
import PopUpCard from '../PopUpCard';
import L from 'leaflet';

const markerIcon = L.icon({
  iconUrl: '/assets/images/marker-icon-s.png',
  iconSize: [30, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: '/assets/images/marker-shadow.png',
  shadowSize: [30, 30],
  shadowAnchor: [22, 94],
});

const MapRenderer = ({ mapData }) => {
  return (
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
          <Marker position={[lat, long]} key={country} icon={markerIcon}>
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
  );
};

export default MapRenderer;
