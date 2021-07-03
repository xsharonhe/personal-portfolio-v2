import { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{theme: DefaultTheme}>`
    @font-face {
        font-family: 'Biotif-Regular';
        src: url('/fonts/Biotif-Regular.ttf');
        font-weight: normal;
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
            padding: 40px;
        }
        a {
            text-decoration: none;
            color: black;
        }
        ul {
            li {
            }
        }
        span {
            color: ${theme.colors.primary};
        }
    `};
`;
