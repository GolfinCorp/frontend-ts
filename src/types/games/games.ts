export type GuestT = {
  name: string;
  membership: string | null;
  bill: number;
};

export type GameT = {
  _id: string;
  memberId: string;
  clubId: string;
  membership: string;
  date: number;
  status: number;
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
