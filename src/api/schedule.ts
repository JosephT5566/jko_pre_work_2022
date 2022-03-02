import { useEffect, useState } from "react"
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
                    const date = moment(com.date, 'YYYY-MM-DD')
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
    { name: "桃園領航猿", icon: "/images/logo1.png" },
    { name: "福爾摩沙台新夢想家", icon: "/images/logo2.png" },
    { name: "新竹街口工程獅", icon: "/images/logo3.png" },
    { name: "台北富邦勇士", icon: "/images/logo4.png" },
]

const mockScore = () => {
    return Math.floor(Math.random() * 500)
}

const mockSchedule: Competition[] = [
    {
        gameId: uuidv4(),
        date: "2022-02-21",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-02-22",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-02-23",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-02-24",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-03-01",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-03-02",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-03-21",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-04-01",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-04-02",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
    {
        gameId: uuidv4(),
        date: "2022-04-21",
        time: "13:30:00",
        place: "桃園市立綜合體育館",
        type: "例行賽",
        home: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
        away: { ...mockTeams[Math.floor(Math.random() * 3)], score: mockScore() },
    },
]
