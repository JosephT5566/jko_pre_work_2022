import React, { useState } from "react"

import TimeTable from "components/schedule/TimeTable"
import TimeSelector from "components/schedule/TimeSelector"
import { useGetScheduleByMonth } from "api/schedule"

export default function Schedule() {
    const [month, setMonth] = useState(1)
    const { schedule } = useGetScheduleByMonth(month)

    return (
        <>
            <TimeSelector month={month} setMonth={setMonth} />
            {schedule ? <TimeTable schedule={schedule} /> : "loading..."}
        </>
    )
}
