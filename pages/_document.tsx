import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from "styled-components";

interface IMyDocumentProps {
    styleTags: string;
}

class MyDocument extends Document<IMyDocumentProps> {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;
    
        try {
          ctx.renderPage = () =>
            originalRenderPage({
              enhanceApp: (App) => (props): React.ReactElement =>
                sheet.collectStyles(<App {...props} />),
            });
    
          const initialProps = await Document.getInitialProps(ctx);
          return {
            ...initialProps,
            styles: (
              <>
                {initialProps.styles}
                {sheet.getStyleElement()}
              </>
            ),
          }
        } finally {
          sheet.seal();
        }
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
