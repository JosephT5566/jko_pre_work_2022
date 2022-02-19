import React, { useEffect, useState } from "react"
import moment from "moment"
import { v4 as uuidv4 } from "uuid"

import { delay } from "utils/helper"
import { Competition } from "type/schedule"

export function useGetScheduleByMonth(month: number) {
    const [schedule, setSchedule] = useState<Competition[] | undefined>(undefined)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const updateSchedule = async () => {
            await delay(3000)
            setSchedule(
                mockSchedule.filter((com) => {
                    const date = moment(com.date)
                    return date.month() === month
                })
            )
        }

        setSchedule(undefined)
        updateSchedule()
    }, [month])

    return { schedule, error }
}

const mockTeams = [
    { name: "新竹街口工程獅", icon: "/images/logo1.png" },
    { name: "新竹街口工程獅", icon: "/images/logo2.png" },
    { name: "新竹街口工程獅", icon: "/images/logo3.png" },
    { name: "台北富邦勇士", icon: "/images/logo4.png" },
]

const mockSchedule: Competition[] = [
    {
        gameId: uuidv4(),
        date: moment("2022-02-21 13:30").format(),
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: {...mockTeams[Math.floor(Math.random()*3)], score: 123 },
        away: {...mockTeams[Math.floor(Math.random()*3)], score: 456 },
    },
]
