import React from "react"
import { styled, makeStyles } from "@material-ui/core/styles"
import moment from "moment"

const StyledTimeSelectorContainer = styled("div")({
    display: "flex",
    gap: "1em",
    overflow: "scroll",
    paddingBlock: "1em",
})

const useStyles = makeStyles({
    timeButton: {
        display: "flex",
        gap: "0.5em",
        alignItems: "center",
        padding: "0.5em 1em",
        border: "none",
        borderRadius: "0.5em",
        color: "white",
        background: "grey",
        cursor: "pointer",
        whiteSpace: "nowrap",

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
            {genMonthes().map((mon, index) => (
                <button
                    className={classes.timeButton}
                    onClick={() => {
                        handleClickButton(mon.month())
                    }}
                    key={index}
                >
                    {month === mon.month() && <span className="active-dot"></span>}
                    {`${mon.year()}年${mon.month()}月`}
                </button>
            ))}
        </StyledTimeSelectorContainer>
    )
}
