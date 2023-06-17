import { createTheme } from '@mui/material/styles';
import merge from 'lodash.merge';

const theme = createTheme();

const customTheme = {
  palette: {
    other: {
      lightBgRed: '#FDF4F5',
      successGreen: '#128400',
      interCoastal: '#A1CDE1',
      lightGreyV2: '#F4F4F4;',
    },
  },
  breakpoints: {
    values: {
      sLg: 1100,
    },
  },
  typography: {
    // heading1: {
    //   fontSize: theme.typography.fontSizes.f_85,
    //   lineHeight: '93.5px',
    //   fontWeight: 400,
    //   [theme.breakpoints.up('sm')]: {
    //     fontSize: '145px',
    //     lineHeight: '159.5px',
    //   },
    // },
    // header2: {
    //   fontFamily: 'Proxima-Bold',
    //   fontSize: theme.typography.fontSizes.medium,
    //   lineHeight: theme.typography.fontSizes.medium,
    // },
    // header3: {
    //   fontFamily: theme.typography.header.fontFamily.semiBold,
    //   fontSize: theme.typography.fontSizes.medium,
    //   lineHeight: theme.typography.fontSizes.f_27,
    //   marginBottom: '8px',
    //   color: theme.palette.other.ebonyClay,
    // },
    // header5: {
    //   fontFamily: theme.typography.header.fontFamily.semiBold,
    //   fontSize: theme.typography.fontSizes.mediumSmall,
    //   lineHeight: theme.typography.fontSizes.large,
    //   color: theme.palette.other.ebonyClay,
    //   marginRight: '8px',
    // },
    h1: {
      color: '#000000',
      fontSize: '1.9rem',
      textShadow: `0px 1.85991px 1.85991px rgba(0, 0, 0, 0.25)`,
      fontFamily: 'Proxima-Bold',
      [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
      },
    },
    title: {
      color: '#ffffff',
      fontSize: '1.8rem',
      textShadow: `0px 1.85991px 1.85991px rgba(0, 0, 0, 0.25)`,
      fontFamily: 'Proxima-Bold',
      padding: '2px 0',
      [theme.breakpoints.up('sm')]: {
        fontSize: '2.4rem',
      },
    },
    fontSizes: { f_22: '22px', f_48: '48px', f_36: '36px' },
  },
  CustomWidth: {
    maxDisplay: '1660px',
  },
};

const appTheme = merge(theme, customTheme);

export { appTheme };
