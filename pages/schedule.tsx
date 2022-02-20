import React, { useState } from "react"

import TimeTable from "components/schedule/TimeTable"
import TimeSelector from "components/schedule/TimeSelector"
import { useGetScheduleByMonth } from "api/schedule"
import { Competition } from "type/schedule"

export default function Schedule() {
    const [month, setMonth] = useState(1)
    const { schedule } = useGetScheduleByMonth(month)

    const handleClickPurchase = (com: Competition) => {
        const { gameId, time, date } = com
        console.log({ gameId, date, time })
    }

    return (
        <>
            <TimeSelector month={month} setMonth={setMonth} />
            {schedule ? (
                <TimeTable schedule={schedule} onClickPurchase={handleClickPurchase} />
            ) : (
                "loading..."
            )}
        </>
    )
}
