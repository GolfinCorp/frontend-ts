export type GuestT = {
	name: string;
	membership: string | null;
	_id: string;
};

export type GameT = {
	_id: string;
	memberId: string;
	memberName: string;
	clubId: string;
	membership: string;
	date: Date;
	status: string;
	guests: GuestT[] | null;
};

export interface GamesByDateI {
	id: number;
	games: GameT[] | [];
}

export interface GameHistoryT {
	page: number;
	games: GameT[] | [];
}
