import '@emotion/react';

type Text = {
  fontSize: string;
  fontWeight: string;
  letterSpacing: string;
};
declare module '@emotion/react' {
  export interface DefaultTheme {
    textVariants: {
      heading1: Text;
      heading2: Text;
      heading3: Text;
      heading4: Text;
      body1: Text;
      body1_bold: Text;
      body2: Text;
      body2_bold: Text;
      detail: Text;
      detail_bold: Text;
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
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        300: string;
        200: string;
        100: string;
        50: string;
        black: string;
        white: string;
      };
      semantic: {
        success: { 500: string };
        info: { 500: string };
        warning: { 500: string };
        danger: { 500: string };
      };
    };
    spacing: {
      xxxs: string;
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
  }
}
