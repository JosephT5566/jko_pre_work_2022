import React from "react"
import { styled, makeStyles } from "@material-ui/core/styles"
import moment from "moment"

const StyledTimeSelectorContainer = styled("div")({
    display: "flex",
    gap: "1em",
    overflow: "auto",
    paddingBottom: "1em",
})

const useStyles = makeStyles({
    timeButton: {
        display: "flex",
        gap: "0.5em",
        alignItems: "center",
        padding: "1em",
        border: "none",
        borderRadius: "0.5em",
        color: "white",
        background: "#2f3140",
        cursor: "pointer",
        whiteSpace: "nowrap",

        "&.active": {
            background: "#381e4e",
        },

        "& .active-dot": {
            height: "0.5em",
            width: "0.5em",
            backgroundColor: "red",
            borderRadius: "50%",
            display: "inline-block",
            verticalAlign: "middle",

            willChange: "transform",
            animation: "$blinker 1s linear infinite",
        },
    },
    "@keyframes blinker": {
        "50%": {
            opacity: 0,
        },
    },
})

interface Props {
    month: number
    setMonth: React.Dispatch<React.SetStateAction<number>>
}

export default function TimeSelector({ month, setMonth }: Props) {
    const genMonthes = () => {
        return new Array(12).fill(0).map((i, index) => moment().add(index, "M"))
    }
    const classes = useStyles()
    const handleClickButton = (month: number) => {
        setMonth(month)
    }

    return (
        <StyledTimeSelectorContainer>
            {genMonthes().map((mon, index) => {
                const active = month === mon.month()
                return (
                    <button
                        className={`${classes.timeButton} ${active ? "active" : ""}`}
                        onClick={() => {
                            handleClickButton(mon.month())
                        }}
                        key={index}
                    >
                        {active && <span className="active-dot"></span>}
                        {`${mon.year()}年${mon.month() + 1}月`}
                    </button>
                )
            })}
        </StyledTimeSelectorContainer>
    )
}
