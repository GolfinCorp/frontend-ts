import { GamesByDateI, PropChildrenT, GameHistoryT } from "@/types";
import { MemberListT, MemberT } from "@/types/members/members";
export type GamesContextT = {
  games: GamesByDateI[];
  history: GameHistoryT[];
  setGames: (games: GamesByDateI[]) => void;
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
