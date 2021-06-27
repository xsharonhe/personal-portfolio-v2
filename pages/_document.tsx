import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from "styled-components";

interface IMyDocumentProps {
    styleTags: string;
}

class MyDocument extends Document<IMyDocumentProps> {
    static getInitialProps({ renderPage }) {
        const sheet = new ServerStyleSheet();
        
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        );

        const styleTags = sheet.getStyleElement();

        return { ...page, styleTags };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://api.fontshare.com/css?f[]=general-sans@500&display=swap" rel="stylesheet" />
                    {this.props.styleTags}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;
