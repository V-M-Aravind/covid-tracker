import LineGraph from '../LineGraph';
import MapRender from '../Map';
import styles from './WorldMap.module.css';

const WorldMap = () => {
  return (
    <div className={styles.flexContainerWM}>
      <LineGraph />
      <MapRender />
    </div>
  );
};

export default WorldMap;
