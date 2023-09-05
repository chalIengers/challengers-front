import '@emotion/react';

type Text = {
  fontfontSize: string;
  fontfontWeight: string;
};
declare module '@emotion/react' {
  export interface DefaultTheme {
    font: {
      xxs: '1.1rem';
      xs: '1.2rem';
      sm: '1.4rem';
      md: '1.6rem';
      lg: '1.8rem';
      xl: '2.0rem';
      xxl: '2.2rem';
      xxxl: '2.2rem';
      xxxxl: '4.0rem';
    };
    typography: {
      title: {
        fontWeight: '800';
        fontSize: '4.0rem';
      };
      header1: {
        fontWeight: 'Bold';
        fontSize: '2.4rem';
      };
      header2: {
        fontWeight: 'Bold';
        fontSize: '2.0rem';
      };
      body1: {
        fontWeight: '500';
        fontSize: '1.8rem';
      };
      body1Bold: {
        fontWeight: 'Bold';
        fontSize: '1.8rem';
      };
      body2: {
        fontWeight: '500';
        fontSize: '1.6rem';
      };
      body2Bold: {
        fontWeight: 'Bold';
        fontSize: '1.6rem';
      };
      body3Bold: {
        fontWeight: 'Bold';
        fontSize: '1.4rem';
      };
      body3: {
        fontWeight: '500';
        fontSize: '1.4rem';
      };
      body4: {
        fontWeight: '500';
        fontSize: '1.2rem';
      };
    };
    palette: {
      primary: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
      gray: {
        900: '#212121';
        800: '#404040';
        700: '#616161';
        600: '#757575';
        500: '#9e9e9e';
        400: '#bdbdbd';
        300: '#e0e0e0';
        200: '#eeeeee';
        150: '#f2f2f2';
        100: '#f5f5f5';
        50: '#fafafa';
        black: '#000000';
        white: '#ffffff';
      };
      semantic: {
        placeholder: { 500: '#cbcbcb' };
        success: { 500: string };
        info: { 500: string };
        warning: { 500: string };
        danger: { 500: string };
      };
    };
    // spacing: {
    //   xxxs: '0.2rem';
    //   xxs: '0.4rem';
    //   xs: '0.8rem';
    //   sm: '1.2rem';
    //   md: '1.6rem';
    //   lg: '2.0rem';
    //   xl: '2.4rem';
    //   xxl: '3.2rem';
    //   xxxl: '4.0rem';
    // };
  }
}
