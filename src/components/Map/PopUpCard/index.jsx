import styles from './PopUpCard.module.css';

const PopUpCard = ({ country, cases, recovered, active, deaths }) => {
  return (
    <div className={styles.container}>
      <h3>{country}</h3>
      <div className={styles.tCases}>
        <label>Total Cases:</label>
        <span>{cases}</span>
      </div>
      <div className={styles.deaths}>
        <label>Deaths:</label>
        <span>{deaths}</span>
      </div>
      <div className={styles.recovered}>
        <label>Recovered:</label>
        <span>{recovered}</span>
      </div>
      <div className={styles.aCases}>
        <label>Active Cases:</label>
        <span>{active}</span>
      </div>
    </div>
  );
};

export default PopUpCard;
