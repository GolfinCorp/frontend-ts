import { createContext, useState } from 'react';
import { GamesByDateI, PropChildrenT, GameHistoryT, GameT } from '@/types';
import { GamesContextT } from './types.context';

export const GamesContext = createContext<GamesContextT | {}>({});
type PropsT = PropChildrenT;
const GamesProvider = ({ children }: PropsT) => {
	// Games By Day
	const [games, setGames] = useState<GamesByDateI[] | null>(null);
	const [gameDailySchedule, setGameDailySchedule] = useState<GameT[] | null>(
		null
	);

	// Games history
	const [history, setHistory] = useState<GameHistoryT[] | null>(null);

	//
	const data = {
		games,
		setGames,
		history,
		setHistory,
		gameDailySchedule,
		setGameDailySchedule
	};

	return <GamesContext.Provider value={data}>{children}</GamesContext.Provider>;
};

export default GamesProvider;
