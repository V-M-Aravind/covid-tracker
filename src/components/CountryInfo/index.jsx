import SearchBar from './SearchBar';
import styles from './CountryInfo.module.css';
import Card from './Card';
import { CircularProgress } from '@mui/material';
import { useStoreState } from '../../store';

const CountryInfo = () => {
  const {
    country: { isLoading, data },
    dispatchCountryData,
  } = useStoreState();

  const modifiedCountryData = () => {
    if (!data) return null;
    const {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
    } = data;
    return {
      cases,
      deaths,
      recovered,
      todayCases,
      todayDeaths,
      todayRecovered,
    };
  };
  return (
    <div>
      <h2 className={styles.title}>Country Covid Data</h2>
      <SearchBar onSubmit={dispatchCountryData} />

      {isLoading && (
        <div className={styles.center}>
          <CircularProgress />
        </div>
      )}
      {!isLoading && data?.country && (
        <>
          <h2 className={styles.subtitle}>{data.country}</h2>
          <div className={styles.cardContainer}>
            {Object.entries(modifiedCountryData()).map((entry) => (
              <Card key={entry[0]} type={entry[0]} count={entry[1]} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CountryInfo;
