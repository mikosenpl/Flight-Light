import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    primary: '#ffc13b',
    secondary: '#1e3d59',
    tertiary: '#ff6e40',
    body: '#f5f0e1',
  },
  fontSize: {
    xxl: '3rem',
    xl: '2.5rem',
    l: '2rem',
    m: '1.2rem',
    s: '1rem',
  },
  mq: {
    smartphone: '@media only screen and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
  family: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    primary: '#FCC002',
    secondary: '#008eff',
    tertiary: '#06D59F',
    body: 'rgb(242, 242, 242)',
  },
  fontSize: {
    xxl: '2.5rem',
    xl: '1.5rem',
    l: '1rem',
    m: '0.75rem',
    s: '0.68rem',
  },
  mq: {
    smartphone: '@media only screen and (max-width: 767px)',
    tablet: '@media only screen and (min-width: 768px) and (max-width: 1023px)',
    desktop: '@media only screen and (min-width: 1024px)',
  },
  family: {
    primary: '"Montserrat", sans-serif',
    secondary: '"Roboto Mono", monospace',
  },
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      body: string;
    };
    fontSize: {
      xxl: string;
      xl: string;
      l: string;
      m: string;
      s: string;
    };
    mq: {
      smartphone: string;
      tablet: string;
      desktop: string;
    };
    family: {
      primary: string;
      secondary: string;
    };
  }
}
