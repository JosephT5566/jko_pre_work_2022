import { useEffect } from "react"
import "../styles/globals.css"
import type { AppProps } from "next/app"
import { ThemeProvider, createTheme } from "@material-ui/core/styles"

const theme = createTheme()

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        const jssStyles = document.querySelector("#jss-server-side")
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles)
        }
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
