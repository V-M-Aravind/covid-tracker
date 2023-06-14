import LineGraph from '../components/LineGraph';
import MapRender from '../components/Map';
import Layout from '../layout';
import styles from './Pages.module.css';

const WorldMapPage = () => {
  return (
    <Layout>
      <div className={styles.flexContainerWM}>
        <LineGraph />
        <MapRender />
      </div>
    </Layout>
  );
};

export default WorldMapPage;
