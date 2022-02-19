import React from "react"
import { styled } from "@material-ui/core/styles"
import { Competition } from "type/schedule"
import moment from "moment"

import Button from "components/based/button"

const StyledTimeTableContainer = styled("div")({
    display: "flex",
    gap: "1em",
})

const StyledTimeTable = styled("div")({
    display: "grid",
    gridTemplateColumns: "1fr auto",
    gridTemplateRows: "auto auto auto auto",
    gridTemplateAreas: `
    "date type"
    "home home"
    "away away"
    "buttons buttons"
    `,
    gap: "1em",
    padding: "1em",
    color: "white",
    borderRadius: "0.5em",
    background: "#272934",

    "& .date": {
        gridArea: "date",
    },
    "& .type": {
        gridArea: "type",
    },
    "& .home": {
        gridArea: "home",
    },
    "& .away": {
        gridArea: "away",
    },
    "& .buttons": {
        gridArea: "buttons",
    },
})

const StyledTeam = styled("div")({
    display: "grid",
    gridTemplateColumns: "3em auto 1fr",
    gridTemplateAreas: `"icon name score"`,
    gap: "1em",

    "& .icon": {
        gridArea: "icon",
        width: "100%",
        height: "100%",
        objectFit: "contain",
    },
    "& .score": {
        gridArea: "score",
        textAlign: "end",
    },
})

const StyledButtons = styled("div")({
    display: "flex",
    gap: "1em",
    "& *": { flex: "0 1 50%" },
})

interface Props {
    schedule: Competition[]
}

export default function TimeTable({ schedule }: Props) {
    return (
        <StyledTimeTableContainer>
            {schedule.length === 0
                ? "無賽事"
                : schedule.map((com) => {
                      const date = moment(com.date)
                      return (
                          <StyledTimeTable>
                              <div className={"date"}>
                                  <div>{`${date.month() + 1}月${date.day()}日（${
                                      date.weekday() + 1
                                  }）${date.hour()}:${date.minute()}`}</div>
                                  <div>{com.place}</div>
                              </div>
                              <div className={"type"}>{com.type}</div>
                              <StyledTeam className={"home"}>
                                  <img src={com.home.icon} className={"icon"} />
                                  <p style={{ gridArea: "name" }}>{com.home.name}</p>
                                  <p className={"score"}>{com.home.score}</p>
                              </StyledTeam>
                              <StyledTeam className={"away"}>
                                  <img src={com.away.icon} className={"icon"} />
                                  <p style={{ gridArea: "name" }}>{com.away.name}</p>
                                  <p className={"score"}>{com.away.score}</p>
                              </StyledTeam>
                              <StyledButtons className={"buttons"}>
                                  <Button>{"查看詳情"}</Button>
                                  <Button
                                      style={{
                                          background: "red",
                                      }}
                                  >
                                      {"訂購"}
                                  </Button>
                              </StyledButtons>
                          </StyledTimeTable>
                      )
                  })}
        </StyledTimeTableContainer>
    )
}
