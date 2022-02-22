import React from "react"
import { styled } from "@material-ui/core/styles"
import { Competition } from "type/schedule"
import moment from "moment"

import Button from "components/based/button"

const StyledTimeTableContainer = styled("div")({
    display: "flex",
    gap: "1em",
    overflow: "auto",
    whiteSpace: "nowrap",
})

const StyledTimeTable = styled("div")({
    display: "grid",
    minWidth: "300px",
    flexShrink: 0,
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
    background: "linear-gradient(#322556, #272934 30%)",

    "& .date": {
        gridArea: "date",
    },
    "& .type": {
        gridArea: "type",
        color: "#a6a3b1",
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
        fontStyle: "italic",
    },
})

const StyledButtons = styled("div")({
    display: "flex",
    gap: "1em",
    "& *": { flex: "0 1 50%" },
})

interface Props {
    schedule: Competition[]
    onClickPurchase: (com: Competition) => void
}

export default function TimeTable({ schedule, onClickPurchase }: Props) {
    return (
        <StyledTimeTableContainer>
            {schedule.length === 0
                ? "無賽事"
                : schedule.map((com, index) => {
                      const date = moment(com.date, "YYYY-MM-DD")
                      const time = moment(com.time, "hh:mm:ss")

                      return (
                          <StyledTimeTable key={index}>
                              <div className={"date"}>
                                  <div>{`${date.month() + 1}月${date.date()}日（${
                                      date.weekday() + 1
                                  }）${time.hour()}:${time.minute()}`}</div>
                                  <div style={{ color: "#a6a3b1" }}>{com.place}</div>
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
                                  <Button
                                      style={{
                                          background: "#393b4f",
                                      }}
                                  >
                                      {"查看詳情"}
                                  </Button>
                                  <Button
                                      style={{
                                          background: "#94263c",
                                      }}
                                      onClick={() => {
                                          onClickPurchase(com)
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
