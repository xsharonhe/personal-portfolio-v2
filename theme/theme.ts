import "styled-components";

interface IBaseTemplate {
    font: {
        header: string;
        body: string;
    },
    size: {
        default: string | number;
        small: string | number;
        h1: string | number;
        h2: string | number;
        h3: string | number;
        defaultLarger: string | number;
        large: string | number;
    },
    radius: {
        default: string;
        border: string;
    },
    media: {
        [key: string]: number | string;
    },
    transitions: {
        cubicBezier: string;
    }
};

declare module 'styled-components' {
    export interface DefaultTheme extends IBaseTemplate {
        colors: {
            primary: string;
        }
    }
};

export const baseTheme: IBaseTemplate = {
  font: {
      header: "'General Sans', sans-serif",
      body: "'Biotif-Regular', sans-serif"
  },
  size: {
    default: "1.25rem",
    small: "0.85rem",
    h1: "2rem",
    h2: "1.75rem",
    h3: "1.3rem",
    defaultLarger: "1.5rem",
    large: "2.5rem",
  },
  radius: {
    default: "8px",
    border: "20px",
  },
  media: {
    small: "325",
    mobile: "414",
    tablet: "900",
    laptop: "1480",
    desktop: "2560",
  },
  transitions: {
    cubicBezier: "all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1)",
    // opacity: "opacity ease 500ms",
    // scale: "scale(1.03)",
  }
};

export const lightTheme = {
    ...baseTheme,
    colors: {
        primary: '#79a3b1',
    },
};

export const darkTheme = {
    ...baseTheme,
    colors: {
        primary: '#bbe1fa',
    },
};
