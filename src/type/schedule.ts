interface Team {
    icon: string
    name: string
    score: number
}

export interface Competition {
    gameId: string
    date: string
    place: string
    type: string
    home: Team
    away: Team
}
