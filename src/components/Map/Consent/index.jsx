import { Button } from '@mui/material';
import styles from './Consent.module.css';

const Consent = ({ getGeoLocation }) => {
  return (
    <div className={styles.consent}>
      <h2 className={styles.title}>World Map With Covid Data</h2>
      <div>
        <p>In order to display map, we would like to access your location.</p>
        <div className={styles.buttonContainer}>
          <Button
            variant='contained'
            type='button'
            size='large'
            onClick={getGeoLocation.bind(null, false)}
          >
            Get My Location
          </Button>
          <Button
            variant='contained'
            type='button'
            size='large'
            onClick={getGeoLocation.bind(null, true)}
          >
            Use Default Location
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Consent;
