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
import { CircularProgress } from '@mui/material';
import { useStoreState } from '../../store';
import Loader from '../Loader';
import RetryComponent from '../RetryComponent';

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

const convertToXYPair = (data = {}) => {
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
  const {
    graph: { error, isLoading, data },
    dispatchGraphData,
  } = useStoreState();

  const modifiedData = convertToXYPair(data);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Worldwide Total Covid Deaths Count</h2>
      {error && (
        <RetryComponent retryMessage={error} onRetry={dispatchGraphData} />
      )}
      {isLoading && <Loader />}
      {!isLoading && !error && (
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
      )}
    </div>
  );
}
