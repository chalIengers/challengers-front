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
    heading1: { 'font-size': font.xxxl, 'font-weight': '700', 'letter-spacing': '-0.12rem' },
    heading2: { 'font-size': font.xxl, 'font-weight': '700', 'letter-spacing': '-0.066rem' },
    heading3: { 'font-size': font.xl, 'font-weight': '700', 'letter-spacing': '-0.06rem' },
    heading4: { 'font-size': font.lg, 'font-weight': '400', 'letter-spacing': '-0.054rem' },
    body1: { 'font-size': font.md, 'font-weight': '700', 'letter-spacing': '-0.048rem' },
    body1_bold: { 'font-size': font.md, 'font-weight': '400', 'letter-spacing': '-0.048rem' },
    body2: { 'font-size': font.sm, 'font-weight': '700', 'letter-spacing': '-0.042rem' },
    body2_bold: { 'font-size': font.sm, 'font-weight': '400', 'letter-spacing': '-0.042rem' },
    detail: { 'font-size': font.xs, 'font-weight': '700', 'letter-spacing': '-0.036rem' },
    detail_bold: { 'font-size': font.xs, 'font-weight': '400', 'letter-spacing': '-0.036rem' },
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
