import { ThemeProvider } from '@mui/material/styles';
import { appTheme } from '../theme';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './Layout.module.css';

function Layout(props) {
  return (
    <ThemeProvider theme={appTheme}>
      <Header />
      <div className={styles.container}>{props.children}</div>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout;
