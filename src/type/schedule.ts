interface Team {
	icon: string;
	name: string;
}

export interface Competition {
	date: string;
	place: string;
	type: string;
	home: Team;
	away: Team;
}
