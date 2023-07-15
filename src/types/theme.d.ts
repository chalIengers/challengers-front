import '@emotion/react';

type Text = {
  fontSizes: string;
  fontWeight: string;
};
declare module '@emotion/react' {
  export interface DefaultTheme {
    fontSizes: {
      xxs: string;
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      xxl: string;
      xxxl: string;
    };
    textVariants: {
      heading1: Text;
      heading2: Text;
      heading3: Text;
      heading4: Text;
      body1: Text;
      body2: Text;
      body3: Text;
      body4: Text;
      detail1: Text;
      detail2: Text;
    };

    colorMain: {
      primary_100: string;
      primary_200: string;
      primary_300: string;
      primary_400: string;
      primary_500: string;
      primary_600: string;
      primary_700: string;
      primary_800: string;
      primary_900: string;
    };
    colorSemantic: {
      success_500: string;
      info_500: string;
      warning_500: string;
      danger_500: string;
    };
    colorGray: {
      gray_900: string;
      gray_800: string;
      gray_700: string;
      gray_600: string;
      gray_500: string;
      gray_400: string;
      gray_300: string;
      gray_200: string;
      gray_100: string;
      gray_50: string;
      black: string;
      white: string;
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
