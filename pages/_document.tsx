import React from "react"
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import { ServerStyleSheets } from "@material-ui/core/styles"

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link rel="apple-touch-icon" href="/favicon.ico"></link>
                    {/* PWA primary color */}
                    <meta name="theme-color" content="black" />
                    <meta name="description" content="JKO Test App" />
                    <link rel="manifest" href="/manifest.json" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }

    static async getInitialProps(ctx: DocumentContext) {
        // Render app and page and get the context of the page with collected side effects.
        const sheets = new ServerStyleSheets()
        const originalRenderPage = ctx.renderPage

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
            })

        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            // Styles fragment is rendered after the app and page rendering finish.
            styles: [
                ...React.Children.toArray(initialProps.styles),
                sheets.getStyleElement(),
            ],
        }
    }
}
