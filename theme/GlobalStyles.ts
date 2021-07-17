import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { media } from "../utils/media";

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
    @font-face {
        font-family: 'Calibre-Regular';
        src: url('../public/fonts/Calibre-Regular.woff2') format('woff2'),
             url('../public/fonts/Calibre-Regular.woff') format('woff'),
             url('../public/fonts/Calibre-Regular.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    ${({ theme }) => `
        *,
        *::before,
        *::after {
            box-sizing: inherit;
        }
        html, body {
            height: 100%;
            box-sizing: inherit;
        }
        body {
            font-family: ${theme.font.body};
            font-size: ${theme.size.default};
            overflow-x: hidden;
            overflow-y: scroll;
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            padding: 20px 0;
        }
        a {
            text-decoration: none!important;
            color: black;
        }
        ul {
            li {
            }
        }
        span {
            color: black;
        }
        @media only screen and (max-width: 864px) {
            body {
                font-size: 18px;
            }
        }
        @media only screen and (max-width: 600px) {
            body {
                font-size: 16px;
            }
        }
    `};
`;
