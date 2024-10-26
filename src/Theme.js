// src/theme.js
import { DefaultTheme } from 'react-native-paper';
import { Color, FontFamily, FontSize } from './GlobalStyles';

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Color.blue,
    accent: Color.colorPaleturquoise,
    background: Color.colorWhitesmoke,
    surface: Color.white,
    text: Color.colorBlack,
    error: '#FF0000',
    success: Color.colorSeagreen,
    disabled: Color.n400,
    placeholder: Color.d500,
    backdrop: 'rgba(0, 0, 0, 0.5)',
    notification: Color.blue,
    // Custom colors from your GlobalStyles
    darkBlue: Color.colorDarkslateblue,
    seaGreen: Color.colorSeagreen,
    honeydew: Color.colorHoneydew,
    b2B2B: Color.b2B2B,
  },
  fonts: {
    regular: {
      fontFamily: FontFamily.ralewayRegular,
    },
    medium: {
      fontFamily: FontFamily.ralewayMedium,
    },
    light: {
      fontFamily: FontFamily.ralewayLight,
    },
    thin: {
      fontFamily: FontFamily.ralewayLight,
    },
    bold: {
      fontFamily: FontFamily.ralewayBold,
    },
  },
  fontSizes: {
    small: FontSize.size_sm,
    medium: FontSize.paragraphRegular_size,
    large: FontSize.size_xl,
    extraLarge: FontSize.size_21xl,
  },
  // Custom theme properties
  roundness: 4,
  animation: {
    scale: 1.0,
  },
  // Custom properties for your app
  customProperties: {
    headerFont: FontFamily.sonder,
    titleFont: FontFamily.poppinsExtraBold,
    bodyFont: FontFamily.ralewayRegular,
    accentFont: FontFamily.maliMedium,
    specialFont: FontFamily.reenieBeanie,
  },
  // Component specific theme overrides
  components: {
    Button: {
      contained: {
        fontFamily: FontFamily.ralewayBold,
        borderRadius: 25,
      },
    },
    Card: {
      elevation: 4,
      borderRadius: 12,
    },
    Text: {
      fontFamily: FontFamily.ralewayRegular,
    },
  },
};

// Optional: You can also export specific theme values for use throughout your app
export const getThemeColor = (colorName) => theme.colors[colorName];
export const getThemeFont = (fontName) => theme.customProperties[fontName];
export const getThemeFontSize = (sizeName) => theme.fontSizes[sizeName];