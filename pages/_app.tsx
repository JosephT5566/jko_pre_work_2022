import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
