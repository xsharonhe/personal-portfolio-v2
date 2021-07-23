import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
    @font-face {
        font-family: 'Calibre';
        src: local('Calibre Regular'), local('Calibre-Regular'),
            url('/fonts/Calibre-Regular.woff2') format('woff2'),
            url('/fonts/Calibre-Regular.woff') format('woff'),
            url('/fonts/Calibre-Regular.ttf') format('truetype');
        font-weight: 400;
        font-style: normal;
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
