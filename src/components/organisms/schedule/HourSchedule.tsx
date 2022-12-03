import { Grid } from '@chakra-ui/react';
import MatchCard from './MatchCard';
import { useGames } from '@/hooks';
import { GameT } from '@/types';
import { fillGames } from './utils';
import { useEffect, useState } from 'react';
import MatchSkeleton from './MatchSkeleton';
// Constant Values
const startingHour: number = 7; // Should be provided by club?
const finishingHour: number = 18; // Should be provided by club?

const HourSchedule = () => {
	const { gameDailySchedule } = useGames();
	const [gameSchedule, setGameSchedule] = useState<GameT[]>([]);

	useEffect(() => {
		if (gameDailySchedule == null) return;
		const gameScheduleFill = fillGames(
			gameDailySchedule,
			startingHour,
			finishingHour
		);
		setGameSchedule(gameScheduleFill);
	}, [gameDailySchedule]);

	return (
		<Grid
			py="5"
			px={{ base: '0', md: 5 }}
			gap="5"
			maxH="80vh"
			overflowY="scroll"
			css={{
				'&::-webkit-scrollbar': {
					display: 'none'
				}
			}}
		>
			{gameSchedule.length < 1 ? (
				<MatchSkeleton />
			) : (
				gameSchedule.map((game, index) => (
					<MatchCard game={game} key={`${game._id}-${index}`} />
				))
			)}
		</Grid>
	);
};

export default HourSchedule;
