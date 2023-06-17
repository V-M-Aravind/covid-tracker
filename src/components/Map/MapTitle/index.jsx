import styles from './MapTitle.module.css';
import CoronavirusOutlinedIcon from '@mui/icons-material/CoronavirusOutlined';

const MapTitle = () => {
  return (
    <div className={styles['title__container']}>
      <h2 className={styles.title}>World Map With Covid Data </h2>
      <CoronavirusOutlinedIcon color='error' fontSize='large' />
    </div>
  );
};

export default MapTitle;
