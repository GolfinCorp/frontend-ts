import { GameT } from '@/types';
import { SimpleGrid, GridItem, Flex, Text, Box, Badge } from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';

type PropsT = {
	game: GameT;
};

const MatchCard = ({ game }: PropsT) => {
	const { date, memberId, guests, status } = game;
	let time = new Date(date);
	let hour = time.getHours();
	let minute = time.getMinutes();
	let minutes = minute < 10 ? `${minute}0` : `${minute}`;
	let meridian = hour > 11 ? 'PM' : 'AM';
	return (
		<Box>
			<SimpleGrid
				columns={12}
				borderRadius="14px"
				backgroundColor="brand.50"
				p="5"
				cursor="pointer"
				alignItems="center"
			>
				<GridItem colSpan={4}>
					<Text>
						{hour}:{minutes}
						{meridian}
					</Text>
				</GridItem>
				<GridItem colSpan={8}>
					<Flex justifyContent="space-between" alignItems="center">
						<Box>
							<Text>{memberId}</Text>
						</Box>
						<Flex gap="6">
							<Badge variant="active">{status}</Badge>
							<Flex justifyContent="center" alignItems="center" gap={3}>
								<MdPerson />
								<Text m="0px" p="0px">
									{guests?.length}
								</Text>
							</Flex>
						</Flex>
					</Flex>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default MatchCard;
