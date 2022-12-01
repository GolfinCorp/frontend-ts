import { createContext, useState } from "react";
import { GamesByDateI, PropChildrenT, GameHistoryT } from "@/types";
import { GamesContextT } from "./types.context";

export const GamesContext = createContext<GamesContextT | {}>({});
type PropsT = PropChildrenT;
const GamesProvider = ({ children }: PropsT) => {
  // Games By Day
  const [games, setGames] = useState<GamesByDateI[] | null>(null);

  // Games matching the selectedDate
  const [history, setHistory] = useState<GameHistoryT[] | null>(null);

  //
  const data = { games, setGames, history, setHistory };

  return <GamesContext.Provider value={data}>{children}</GamesContext.Provider>;
};

export default GamesProvider;
