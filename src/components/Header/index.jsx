import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const navItems = [
  { path: '/', nav: 'Home' },
  { path: '/world-map', nav: 'World' },
  { path: '/countries', nav: 'Countries' },
];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant='title'
        sx={{
          my: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          src='/assets/logo/c-t-logo-small.png'
          alt='covid-tracker-logo'
          className={styles['logo']}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.nav} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                fontSize: '18px',
                '& .MuiTypography-root': {
                  fontSize: '18px',
                },
              }}
            >
              <NavLink to={item.path} className={styles.navItem}>
                <ListItemText primary={item.nav} />
              </NavLink>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component='nav' sx={{ background: '#ffff' }}>
        <Toolbar>
          <IconButton
            color='black'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: 'flex', sm: 'none' },
              alignItems: 'center',
            }}
          >
            <MenuIcon fontSize='large' />
          </IconButton>
          <Typography
            variant='title'
            sx={{
              my: 2,
              display: { xs: 'flex', sm: 'none' },
              mx: 'auto',
              alignItems: 'center',
            }}
          >
            <img
              src='/assets/logo/c-t-logo-small.png'
              alt='covid-tracker-logo'
              className={styles['logo']}
            />
            Covid-Tracker
          </Typography>
          <Typography
            variant='title'
            component='div'
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'flex' },
              alignItems: 'center',
            }}
          >
            <img
              src='/assets/logo/c-t-logo-large.png'
              alt='covid-tracker-logo'
              className={styles['logo-large']}
            />
            Covid-Tracker
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.nav}
                sx={{
                  color: '#000000',
                  fontSize: '18px',
                  fontWeight: '400px',
                }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    !isActive
                      ? styles.navItem
                      : `${styles.navItem} ${styles.navItemActive}`
                  }
                >
                  {item.nav}
                </NavLink>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
