import { GameT } from '@/types';
import { getCurrentDate } from '@/helpers/getCurrentDate';

export const addHours = (numOfHours: number, date: Date): string => {
	date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);

	return new Date(date).toLocaleString();
};

export const generateAvailableGame = (date: string): GameT => {
	return {
		_id: 'available',
		memberId: 'available',
		membership: '2',
		date,
		clubId: '123',
		status: 'coming',
		guests: []
	};
};

export const dummyGames: GameT[] = [
	{
		_id: 'dummy-1',
		memberId: 'Pedro',
		membership: '2',
		date: addHours(7, getCurrentDate()),
		clubId: '123',
		status: 'coming',
		guests: []
	},
	{
		_id: 'dummy-1',
		memberId: 'Juan',
		membership: '2',
		date: addHours(8, getCurrentDate()),
		clubId: '123',
		status: 'coming',
		guests: []
	},
	{
		_id: 'dummy-1',
		memberId: 'Petra',
		membership: '2',
		date: addHours(10, getCurrentDate()),
		clubId: '123',
		status: 'coming',
		guests: []
	}
];

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
		let exists = dummyGames.find((game) => checkingTime === game.date);
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
