import { useState } from "react"
import type { NextPage } from "next"
import Head from "next/head"
import { styled } from "@material-ui/core/styles"
import moment from "moment"

import { PageContainer } from "components/shared/Container"
import { H2 } from "components/shared/Typography"
import TimeTable from "components/schedule/TimeTable"
import TimeSelector from "components/schedule/TimeSelector"

import { useGetScheduleByMonth } from "api/schedule"
import { Competition } from "type/schedule"

const ScheduleContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
})

const Home: NextPage = () => {
    const [month, setMonth] = useState(moment().month())
    const { schedule } = useGetScheduleByMonth(month)

    const handleClickPurchase = (com: Competition) => {
        const { gameId, time, date } = com

        console.log({ gameId, date, time })
    }

    return (
        <PageContainer>
            <Head>
                <title>JKO Test App</title>
                <meta name="description" content="JKO Test App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <ScheduleContainer>
                <H2>賽程表</H2>
                <TimeSelector month={month} setMonth={setMonth} />
                {schedule ? (
                    <TimeTable
                        schedule={schedule}
                        onClickPurchase={handleClickPurchase}
                    />
                ) : (
                    "loading..."
                )}
            </ScheduleContainer>
        </PageContainer>
    )
}

export default Home
