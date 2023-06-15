import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import styles from './MapRenderer.module.css';
import 'leaflet/dist/leaflet.css';
import PopUpCard from '../PopUpCard';
import L from 'leaflet';
import markerIcon from '../../../assets/images/marker-icon-s.png';
import shadowIcon from '../../../assets/images/marker-shadow.png';

const markerIcons = L.icon({
  iconUrl: markerIcon,
  iconSize: [30, 30],
  iconAnchor: [22, 94],
  popupAnchor: [-3, -76],
  shadowUrl: shadowIcon,
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
          <Marker position={[lat, long]} key={country} icon={markerIcons}>
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
