import 'leaflet/dist/leaflet.css';
import { useStoreState } from '../../store';
import Consent from './Consent';
import MapRenderer from './MapRenderer';
import Loader from '../Loader';
import styles from './Map.module.css';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';
import RetryComponent from '../RetryComponent';
import { GEOLOCATION_ERROR_MESSAGE } from '../constants';

export default function MapRender() {
  const { mapData, dispatchGeoLocation, dispatchMapData } = useStoreState();
  const showMap =
    Boolean(mapData.coordinates) && !mapData.isLoading && !mapData.error;
  if (!mapData.consentCompleted) {
    return <Consent getGeoLocation={dispatchGeoLocation} />;
  }

  return (
    <div className={styles.container}>
      <div className={styles['title__container']}>
        <h2 className={styles.title}>World Map With Covid Data </h2>
        <CoronavirusOutlinedIcon color='error' fontSize='large' />
      </div>
      {mapData.error && (
        <RetryComponent
          retryMessage={mapData.error}
          onRetry={dispatchMapData}
        />
      )}
      {mapData.isLoading && <Loader />}
      {!!showMap && <MapRenderer mapData={mapData} />}
      {mapData.geoLocationFetchError && (
        <RetryComponent retryMessage={GEOLOCATION_ERROR_MESSAGE} />
      )}
    </div>
  );
}
