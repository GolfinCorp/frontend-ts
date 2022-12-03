import { GameT } from '@/types';
import {
	SimpleGrid,
	GridItem,
	Flex,
	Text,
	Box,
	Badge,
	useDisclosure
} from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
import { GameForm } from '@/components/molecules';
type PropsT = {
	game: GameT;
};

const MatchCard = ({ game }: PropsT) => {
	const { date, memberName, guests, status } = game;
	const { isOpen, onClose, onOpen } = useDisclosure();
	let time = new Date(date);
	let minute = time.getMinutes();
	let hours = time.getHours();
	let displayTime = {
		hour: hours,
		minutes: minute < 10 ? `${minute}0` : `${minute}`,
		meridian: hours > 11 ? 'PM' : 'AM'
	};
	const handleOpen = () => {
		isOpen ? onClose() : onOpen();
	};

	return (
		<Box backgroundColor="brand.50" borderRadius="14px">
			<SimpleGrid
				columns={12}
				p="5"
				cursor="pointer"
				alignItems="center"
				onClick={handleOpen}
			>
				<GridItem colSpan={4}>
					<Text>
						{displayTime.hour}:{displayTime.minutes}
						{displayTime.meridian}
					</Text>
				</GridItem>
				<GridItem colSpan={8}>
					<Flex justifyContent="space-between" alignItems="center">
						<Box>
							<Text>{memberName}</Text>
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
			<GameForm isOpen={isOpen} game={game} />
		</Box>
	);
};

export default MatchCard;
