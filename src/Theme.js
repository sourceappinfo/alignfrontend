// Theme.js
import { DefaultTheme, configureFonts } from 'react-native-paper';

// Direct exports for easy access
export const colors = {
  // Base colors
  primary: '#1E90FF',
  accent: '#AFEEEE',
  background: '#1A1A1A',  // From GlobalStyles
  surface: '#FFFFFF',
  text: '#000000',
  error: '#FF0000',
  success: '#2E8B57',
  disabled: '#A6A6A6',
  placeholder: '#757575',
  backdrop: 'rgba(0, 0, 0, 0.5)',
  notification: '#1E90FF',
  
  // Extended colors
  white: '#fff',
  black: '#000',
  darkBlue: '#483D8B',
  seaGreen: '#005E36',
  honeydew: '#D2FFE6',
  b2B2B: '#2B2B2B',
  paleturquoise: '#C0FDFF',
  whitesmoke: '#F7F7F9',
  blue: '#00C7F2',
  
  // Semantic colors
  textPrimary: '#333333',
  textSecondary: '#666666',
  selectedOption: '#4A90E2',
  optionBackground: 'rgba(0, 0, 0, 0.05)',
  
  // Design system colors
  d500: '#627D98',
  d800: '#243B53',
  n400: '#B8C0CC',
};

export const spacing = {
  // Base spacing
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 40,
  
  // Additional spacing values from GlobalStyles
  '9xs': 4,
  '5xs': 8,
  '11xs': 2,
  '378xl': 397,
  '38xl': 57,
};

export const fontSizes = {
  // Base sizes
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  xxl: 24,
  xxxl: 32,
  
  // Additional sizes from GlobalStyles
  '3xs': 10,
  mini: 15,
  '13xl': 32,
  '15xl': 34,
  '16xl': 35,
  '17xl': 36,
  '21xl': 40,
  '31xl': 50,
  '36xl': 55,
  '77xl': 96,
  
  // Semantic sizes
  paragraphRegular: 16,
  captionRegular: 12,
  valueExtrabold: 26,
};

export const fonts = {
  // Primary font families
  poppins: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
    extraBold: 'Poppins-ExtraBold',
  },
  raleway: {
    light: 'Raleway-Light',
    regular: 'Raleway-Regular',
    medium: 'Raleway-Medium',
    semiBold: 'Raleway-SemiBold',
    bold: 'Raleway-Bold',
    extraBold: 'Raleway-ExtraBold',
  },
  lato: {
    light: 'Lato-Light',
    regular: 'Lato-Regular',
    bold: 'Lato-Bold',
    black: 'Lato-Black',
  },
  mali: {
    regular: 'Mali-Regular',
    medium: 'Mali-Medium',
  },
  
  // Special fonts
  specialty: {
    reenieBeanie: 'ReenieBeanie',
    trispace: 'Trispace-Light',
    overpass: 'Overpass-Bold',
    sonder: 'Sonder',
    nats: 'NATS',
    zain: 'Zain',  // From GlobalStyles
  },
};

export const borderRadius = {
  // Base radius
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  round: 9999,
  
  // Additional radius from GlobalStyles
  '9xs': 4,
  '5xs': 8,
  '11xl': 30,
  '31xl': 50,
};

export const gap = {
  sm: 4,
  md: 8,
  lg: 12,
};

export const padding = {
  // Base padding
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  
  // Additional padding from GlobalStyles
  '9xs': 4,
  '5xs': 8,
  '11xs': 2,
  '378xl': 397,
  '38xl': 57,
  base: 16,
};

// Font configuration for react-native-paper
const fontConfig = {
  ios: {
    regular: {
      fontFamily: fonts.poppins.regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: fonts.poppins.medium,
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: fonts.poppins.semiBold,
      fontWeight: '600',
    },
    bold: {
      fontFamily: fonts.poppins.extraBold,
      fontWeight: '800',
    },
  },
  android: {
    regular: {
      fontFamily: fonts.poppins.regular,
      fontWeight: '400',
    },
    medium: {
      fontFamily: fonts.poppins.medium,
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: fonts.poppins.semiBold,
      fontWeight: '600',
    },
    bold: {
      fontFamily: fonts.poppins.extraBold,
      fontWeight: '800',
    },
  },
};

// Main theme object
export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts: configureFonts({ config: fontConfig }),
  fontSizes,
  spacing,
  borderRadius,
  gap,
  padding,
  customFonts: fonts,
  roundness: 4,
  animation: {
    scale: 1.0,
  },
};

// Helper functions
export const getColor = (colorName) => colors[colorName];
export const getSpacing = (size) => spacing[size];
export const getFontSize = (size) => fontSizes[size];
export const getBorderRadius = (size) => borderRadius[size];
export const getFont = (family, weight) => fonts[family]?.[weight];
export const getPadding = (size) => padding[size];
export const getGap = (size) => gap[size];

// Theme hook for functional components
export const useTheme = () => {
  return {
    colors,
    spacing,
    fontSizes,
    borderRadius,
    gap,
    padding,
    fonts,
    theme,
  };
};

// For backward compatibility with GlobalStyles
export const FontFamily = {
  poppinsExtraBold: fonts.poppins.extraBold,
  poppinsMedium: fonts.poppins.medium,
  poppinsRegular: fonts.poppins.regular,
  ralewayExtraBold: fonts.raleway.extraBold,
  ralewaySemiBold: fonts.raleway.semiBold,
  ralewayBold: fonts.raleway.bold,
  ralewayMedium: fonts.raleway.medium,
  ralewayLight: fonts.raleway.light,
  ralewayRegular: fonts.raleway.regular,
  latoBold: fonts.lato.bold,
  latoRegular: fonts.lato.regular,
  latoLight: fonts.lato.light,
  valueExtrabold: fonts.lato.black,
  maliMedium: fonts.mali.medium,
  maliRegular: fonts.mali.regular,
  reenieBeanie: fonts.specialty.reenieBeanie,
  trispaceLight: fonts.specialty.trispace,
  overpassBold: fonts.specialty.overpass,
  sonder: fonts.specialty.sonder,
  nats: fonts.specialty.nats,
  zain: fonts.specialty.zain,
};

// Export previous globals for backward compatibility
export const FontSize = fontSizes;
export const Color = colors;
export const Border = borderRadius;
export const Padding = padding;
export const Gap = gap;