import { GamesByDateI, GameT, GameHistoryT, MemberListT } from "@/types";
export type GamesContextT = {
  games: GamesByDateI[];
  gameDailySchedule: GameT[];
  history: GameHistoryT[];
  setGames: (games: GamesByDateI[]) => void;
  setGameDailySchedule: (games: GameT[]) => void;
  setHistory: (gameHistory: GameHistoryT[]) => void;
};

export type CalendarContextT = {
  selectedDate: Date;
  setSelectedDate: (date: Date) => void;
};

export type MemberContextT = {
  members: MemberListT;
  setMembers: (members: MemberListT) => void;
};
