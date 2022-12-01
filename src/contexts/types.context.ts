import { GamesByDateI, PropChildrenT, GameHistoryT } from "@/types";

export type GamesContextT = {
  games: GamesByDateI[];
  history: GameHistoryT[];
  setGames: (games: GamesByDateI[]) => void;
  setHistory: (gameHistory: GameHistoryT[]) => void;
};
