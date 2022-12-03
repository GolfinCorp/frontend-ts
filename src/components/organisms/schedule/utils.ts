import { GameT } from '@/types';
import { getCurrentDate } from '@/helpers/getCurrentDate';

export const addHours = (numOfHours: number, date: Date): Date => {
	date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

	return new Date(date);
};

export const generateAvailableGame = (date: Date): GameT => {
	return {
		_id: 'available',
		memberId: 'available',
		memberName: 'available',

		membership: '2',
		date,
		clubId: '123',
		status: 'coming',
		guests: []
	};
};

export const fillGames = (
	games: GameT[],
	start: number,
	finish: number
): GameT[] => {
	let filledGames: GameT[] = [];
	if (games?.length > 0) {
		filledGames.push(...games);
	}
	for (let i = start; i < finish; i++) {
		const date = getCurrentDate();
		let checkingTime = addHours(i, date);

		let exists = games.find((game) => checkingTime === new Date(game.date));
		if (exists) continue;
		filledGames.push(generateAvailableGame(checkingTime));
	}
	filledGames.sort((a, b) => {
		let dateA: any = new Date(a.date);
		let dateB: any = new Date(b.date);
		return dateA - dateB;
	});
	return filledGames;
};
