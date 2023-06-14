import Loader from '../components/Loader';
import styles from './Pages.module.css';

const LoadingPage = () => {
  return (
    <div className={styles.loadingPage}>
      <Loader />
    </div>
  );
};

export default LoadingPage;
