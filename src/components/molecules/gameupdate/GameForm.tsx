import React from 'react';
import { Collapse, Box, Flex, Text, Divider } from '@chakra-ui/react';
import { GameT } from '@/types';
import Guests from './Guests';
type PropsT = {
	isOpen: boolean;
	game: GameT;
};
const GameForm = ({ isOpen, game }: PropsT) => {
	console.log(game.guests);
	return (
		<Collapse in={isOpen} animateOpacity>
			<Box p="2">
				<Divider />
				<Box p="2" borderRadius="lg">
					<Guests guests={game.guests} />
				</Box>
			</Box>
		</Collapse>
	);
};

export default GameForm;
