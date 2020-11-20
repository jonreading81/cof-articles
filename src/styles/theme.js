import { fontFormats } from './fonts';

export const theme = {
  fonts: {
    PRIMARY_REGULAR: {
      family: 'Roboto',
      weight: 'regular',
      formats: fontFormats('/fonts/Roboto/Roboto-Regular'),
    },
    PRIMARY_BOLD: {
      family: 'Roboto',
      weight: 'bold',
      formats: fontFormats('/fonts/Roboto/Roboto-Bold'),
    },
  },
  colors: {
    black: '#333',
    primary: 'lightblue',
  },
  spacing: {
    base: 4,
    xs: 8,
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
  },
  text: {
    xxl: {
      SMALL: {
        fontSize: 31,
        lineHeight: 48,
      },
      LARGE: {
        fontSize: 39,
        lineHeight: 64,
      },
    },
    xl: {
      SMALL: {
        fontSize: 28,
        lineHeight: 44,
      },
      LARGE: {
        fontSize: 31,
        lineHeight: 48,
      },
    },
    lg: {
      SMALL: {
        fontSize: 25,
        lineHeight: 40,
      },
    },
    md: {
      SMALL: {
        fontSize: 20,
        lineHeight: 32,
      },
    },
    sm: {
      SMALL: {
        fontSize: 16,
        lineHeight: 24,
      },
    },
    xs: {
      SMALL: {
        fontSize: 14,
        lineHeight: 20,
      },
    },
    xxs: {
      SMALL: {
        fontSize: 12,
        lineHeight: 16,
      },
    },
  },
};
