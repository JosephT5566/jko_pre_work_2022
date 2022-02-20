import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { styled } from "@material-ui/core/styles"

import { PageContainer } from "components/shared/Container"
import { H1 } from "components/shared/Typography"
import { Card } from "components/shared/Card"

const MainContainer = styled("main")({
    minHeight: "100vh",
    padding: "4rem 0",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

const CardsContainer = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    maxWidth: "800px",

    [theme.breakpoints.down("sm")]: {
        width: "100%",
        flexDirection: "column",
    },
}))

const Home: NextPage = () => {
    const router = useRouter()

    return (
        <PageContainer>
            <Head>
                <title>JKO Test App</title>
                <meta name="description" content="JKO Test App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <MainContainer>
                <H1>Home page</H1>

                <CardsContainer>
                    <Card
                        onClick={() => {
                            router.push("/schedule")
                        }}
                    >
                        <h2>時刻表 &rarr;</h2>
                    </Card>
                </CardsContainer>
            </MainContainer>
        </PageContainer>
    )
}

export default Home
