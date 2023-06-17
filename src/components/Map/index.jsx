import 'leaflet/dist/leaflet.css';
import { useStoreState } from '../../store';
import Consent from './Consent';
import MapRenderer from './MapRenderer';
import Loader from '../Loader';
import styles from './Map.module.css';
import RetryComponent from '../RetryComponent';
import { GEOLOCATION_ERROR_MESSAGE } from '../constants';
import MapTitle from './MapTitle';

export default function MapRender() {
  const { mapData, dispatchGeoLocation, dispatchMapData } = useStoreState();
  const showMap =
    Boolean(mapData.coordinates) && !mapData.isLoading && !mapData.error;
  if (!mapData.consentCompleted) {
    return <Consent getGeoLocation={dispatchGeoLocation} />;
  }

  return (
    <div className={styles.container}>
      <MapTitle />
      {mapData.error && (
        <RetryComponent
          retryMessage={mapData.error}
          onRetry={dispatchMapData}
        />
      )}
      {mapData.isLoading && <Loader />}
      {!!showMap && <MapRenderer mapData={mapData} />}
      {!mapData.error && mapData.geoLocationFetchError && (
        <RetryComponent retryMessage={GEOLOCATION_ERROR_MESSAGE} />
      )}
    </div>
  );
}
