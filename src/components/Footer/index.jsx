import { FOOTER_CONTENT } from '../constants';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>We have no data after March 2023.</p>
      <p> &copy;{FOOTER_CONTENT}</p>
    </footer>
  );
};

export default Footer;
