import SearchBar from './SearchBar';
import styles from './CountryInfo.module.css';
import Card from './Card';
import { CircularProgress } from '@mui/material';
import { useStoreState } from '../../store';
import RetryComponent from '../RetryComponent';
import { formatNumber, getLocalLanguage } from '../utility/generalUtility';

const CountryInfo = () => {
  const {
    country: { isLoading, data, error },
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
    const lanuageFormat = getLocalLanguage();
    return {
      cases: formatNumber(cases, lanuageFormat),
      deaths: formatNumber(deaths, lanuageFormat),
      recovered: formatNumber(recovered, lanuageFormat),
      todayCases: formatNumber(todayCases, lanuageFormat),
      todayDeaths: formatNumber(todayDeaths, lanuageFormat),
      todayRecovered: formatNumber(todayRecovered, lanuageFormat),
    };
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Country Covid Data</h2>
      <SearchBar onSubmit={dispatchCountryData} />

      {isLoading && (
        <div className={styles.center}>
          <CircularProgress />
        </div>
      )}
      {error && <RetryComponent retryMessage={error} />}
      {!isLoading && data?.country && !error && (
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
