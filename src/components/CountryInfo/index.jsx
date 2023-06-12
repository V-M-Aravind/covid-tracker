import SearchBar from './SearchBar';
import styles from './CountryInfo.module.css';
import Card from './Card';
import { useState } from 'react';
import covidClientInstance from '../../services';
import { CircularProgress } from '@mui/material';

const CountryInfo = () => {
  const [loading, setLoading] = useState(false);
  const [countryData, setCountryData] = useState(null);
  const searchCountry = async (country) => {
    setLoading(true);
    console.log('country', country);
    const data = await covidClientInstance
      .get(`countries/${country}?strict=true`)
      .then((res) => res.data);
    console.log('api result', data);
    setCountryData(data);
    setLoading(false);
  };

  const modifiedCountryData = () => {
    if (!countryData) return null;
    const {
      cases,
      todayCases,
      deaths,
      todayDeaths,
      recovered,
      todayRecovered,
    } = countryData;
    return {
      cases,
      deaths,
      recovered,
      todayCases,
      todayDeaths,
      todayRecovered,
    };
  };
  console.log('modifiedCountryData', modifiedCountryData());
  return (
    <div>
      <h2 className={styles.title}>Country Covid Data</h2>
      <SearchBar onSubmit={searchCountry} />

      {loading && (
        <div className={styles.center}>
          <CircularProgress />{' '}
        </div>
      )}
      {!loading && countryData && (
        <>
          <h2 className={styles.subtitle}>{countryData.country}</h2>
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
