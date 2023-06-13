import { titleType } from '../../constants';
import styles from './Card.module.css';

const Card = ({ type, count }) => {
  return (
    <div className={`${styles.container} ${styles[type]}`}>
      <h3>{titleType[type]}</h3>
      <p>{count}</p>
    </div>
  );
};

export default Card;
