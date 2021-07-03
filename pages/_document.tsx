import styled from "styled-components";
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from "styled-components";

interface IMyDocumentProps {
    styleTags: string;
}
interface ILinkProps {
    crossorigin?: boolean;
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
                    <link 
                        href="https://api.fontshare.com/css?f[]=general-sans@500,600,700&display=swap" 
                        rel="stylesheet" 
                    />
                    <link 
                        rel="preconnect" 
                        href="https://fonts.googleapis.com"
                    />
                    <SLink 
                        rel="preconnect" 
                        href="https://fonts.gstatic.com" 
                        crossorigin
                    />
                    <link 
                        href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;600&display=swap" 
                        rel="stylesheet"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

const SLink = styled.link<ILinkProps>``;

export default MyDocument;
