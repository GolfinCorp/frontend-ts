import { useContext } from 'react';
import { GamesContext } from '@/contexts';
import { useAxiosPrivate, useToastNotification, useCalendar } from '@/hooks';
import { GamesContextT } from '@/contexts/types.context';
import { getCurrentDate } from '@/helpers/getCurrentDate';

type gamesUrlT = (endpoint: string) => string;
const gamesUrl: gamesUrlT = (endpoint) => {
	return endpoint ? `games/${endpoint}` : 'games';
};

const useGames = () => {
	const { setGames, games, setGameDailySchedule } = useContext(
		GamesContext
	) as GamesContextT;
	const { handleAsyncToast, handleErrorToast } = useToastNotification();
	const { get } = useAxiosPrivate();

	const getGamesByDate = async (date = getCurrentDate()): Promise<boolean> => {
		if (games) {
			// Check if games exist and if games of 'selected' date has already been fetched
			const fetchedDate = games.find(
				(gameDay) => gameDay.id === date.getTime()
			);
			if (fetchedDate) {
				setGameDailySchedule(fetchedDate.games);
				return true;
			}
		}
		try {
			// Set to any because left hand operator must be of type any, int, bigInt (js?)
			const endDate: any = date;
			const gamesRes = await handleAsyncToast(
				get(gamesUrl('filter'), {
					params: {
						startDate: date,
						endDate: new Date(endDate - 1)
					}
				}),
				{
					title: 'Exito',
					description: 'Juegos cargados'
				},
				'Cargando Juegos'
			);

			if (!gamesRes) return false;
			// Generate game object
			const newGameDate = {
				id: date.getTime(), // Will be used to find and filter gameDates
				games: gamesRes.data
			};
			setGames(games ? [...games, newGameDate] : [newGameDate]);
			setGameDailySchedule(gamesRes.data);
			return true;
		} catch (error) {
			handleErrorToast(error);
			return false;
		}
	};

	return { getGamesByDate, ...useContext(GamesContext) };
};

export default useGames;
