import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from './LineGraph.module.css';
import moment from 'moment';
import { useEffect, useState } from 'react';
import covidClientInstance from '../../services';
import { CircularProgress } from '@mui/material';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  plugins: {
    legend: {
      display: true,
    },
  },
  elements: {
    point: {
      radius: 2,
    },
  },
  maintainAspectRatio: false,
};

const convertToXYPair = (data) => {
  const xyArray = [];
  for (const date in data) {
    const xyPair = { x: '', y: '' };
    const day = new moment(date, 'MM/DD/YYYY').format('DD MMM YYYY');
    xyPair.x = day;
    xyPair.y = data[date];
    xyArray.push(xyPair);
  }
  return xyArray;
};

export default function LineGraph() {
  const [loading, setLoading] = useState(false);
  const [worldData, setWorldData] = useState([]);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const data = await covidClientInstance
        .get(`historical/all?lastdays=180`)
        .then((res) => res.data);
      setWorldData(data?.deaths ? data.deaths : []);
      setLoading(false);
    })();
  }, []);
  const modifiedData = convertToXYPair(worldData);

  if (loading)
    return (
      <div className={styles.containerLoader}>
        <h2 className={styles.title}>Worldwide Total Covid Deaths Count</h2>
        <CircularProgress />
      </div>
    );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Worldwide Total Covid Deaths Count</h2>
      <Line
        options={options}
        data={{
          datasets: [
            {
              label: 'Worldwide Total Covid Deaths Count',
              fill: true,
              backgroundColor: 'rgba(204, 16, 52, 0.5)',
              borderColor: '#CC1034',
              data: modifiedData,
            },
          ],
        }}
      />
    </div>
  );
}
