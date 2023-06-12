import styles from './Card.module.css';

const Card = ({ type, count }) => {
  const titleType = {
    cases: 'Cases',
    todayCases: "Today' Cases",
    deaths: 'Deaths',
    todayDeaths: "Todays' Deaths",
    recovered: 'Recoverd',
    todayRecovered: "Todays' Recovered",
  };
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <h3>{titleType[type]}</h3>
      <p>{count}</p>
    </div>
  );
};

export default Card;
