import { DefaultTheme } from '@emotion/react';

const font = {
  xxs: '1.1rem',
  xs: '1.2rem',
  sm: '1.4rem',
  md: '1.6rem',
  lg: '1.8rem',
  xl: '2.0rem',
  xxl: '2.2rem',
  xxxl: '4.0rem',
};

const theme: DefaultTheme = {
  textVariants: {
    heading1: { fontSize: font.xxxl, fontWeight: '700', letterSpacing: '-0.12rem' },
    heading2: { fontSize: font.xxl, fontWeight: '700', letterSpacing: '-0.066rem' },
    heading3: { fontSize: font.xl, fontWeight: '700', letterSpacing: '-0.06rem' },
    heading4: { fontSize: font.lg, fontWeight: '400', letterSpacing: '-0.054rem' },
    body1: { fontSize: font.md, fontWeight: '700', letterSpacing: '-0.048rem' },
    body1_bold: { fontSize: font.md, fontWeight: '400', letterSpacing: '-0.048rem' },
    body2: { fontSize: font.sm, fontWeight: '700', letterSpacing: '-0.042rem' },
    body2_bold: { fontSize: font.sm, fontWeight: '400', letterSpacing: '-0.042rem' },
    detail: { fontSize: font.xs, fontWeight: '700', letterSpacing: '-0.036rem' },
    detail_bold: { fontSize: font.xs, fontWeight: '400', letterSpacing: '-0.036rem' },
  },
  palette: {
    primary: {
      100: '#DBECFD',
      200: '#B8D7FB',
      300: '#93BCF4',
      400: '#75A3EA',
      500: '#4A7EDC',
      600: '#3661BD',
      700: '#25479E',
      800: '#17317F',
      900: '#0E2169',
    },
    gray: {
      900: '#222222',
      800: '#424242',
      700: '#616161',
      600: '#757575',
      500: '#9e9e9e',
      400: '#bdbdbd',
      300: '#e0e0e0',
      200: '#eeeeee',
      100: '#f5f5f5',
      50: '#fafafa',
      black: '#000000',
      white: '#ffffff',
    },
    semantic: {
      success: { 500: '#59BA2C' },
      info: { 500: '#47C1FF' },
      warning: { 500: '#FFB200' },
      danger: { 500: '#FF3A3A' },
    },
  },
  spacing: {
    xxxs: '0.2rem',
    xxs: '0.4rem',
    xs: '0.8rem',
    sm: '1.2rem',
    md: '1.6rem',
    lg: '2.0rem',
    xl: '2.4rem',
    xxl: '3.2rem',
    xxxl: '4.0rem',
  },
};

export default theme;

// 예시
// primary: {
//   "font-weight": '700',
//   "letter-spacing"white',
//   backgroundColor: 'primary.500',
//   '&:hover': {
//     backgroundColor: 'primary.700',
//   },
//   '&:active': {
//     backgroundColor: 'primary.800',
//   },
//   '&:disabled': {
//     color: 'primary.200',
//     backgroundColor: 'primary.100',
//   },
// },
