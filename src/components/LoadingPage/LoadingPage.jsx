import Loader from '../Loader';
import styles from './LoadingPage.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <Loader />
    </div>
  );
};

export default LoadingPage;
