import { CircularProgress } from '@mui/material';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.containerLoader}>
      <CircularProgress />
    </div>
  );
};

export default Loader;
