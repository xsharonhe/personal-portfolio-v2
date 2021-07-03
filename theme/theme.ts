import "styled-components";

interface IBaseTemplate {
    font: {
        [key: string]: string;
    },
    size: {
        [key: string]: string | number;
    },
    radius: {
        [key: string]: string | number;
    },
    media: {
        [key: string]: number | string;
    },
    transitions: {
        [key: string]: string;
    },
    colors: {
        [key: string]: string;
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
  },
  colors: {
        primary: '#79a3b1',
  }
};
