import React, { useState } from "react"

import TimeTable from "components/schedule/TimeTable"
import TimeSelector from "components/schedule/TimeSelector"
import { H2 } from "components/shared/Typography"
import { PageContainer } from "components/shared/Container"

import { useGetScheduleByMonth } from "api/schedule"
import { Competition } from "type/schedule"
import { styled } from "@material-ui/core/styles"
import moment from "moment"

const ScheduleContainer = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
})

export default function Schedule() {
    const [month, setMonth] = useState(moment().month())
    const { schedule } = useGetScheduleByMonth(month)

    const handleClickPurchase = (com: Competition) => {
        const { gameId, time, date } = com

        console.log({ gameId, date, time })
    }

    return (
        <PageContainer>
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
