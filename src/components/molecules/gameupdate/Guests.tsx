import React from 'react';
import {
	SimpleGrid,
	GridItem,
	Flex,
	Divider,
	Text,
	IconButton
} from '@chakra-ui/react';
import { GuestT } from '@/types';
import { MdDelete, MdPayments } from 'react-icons/md';
type PropsT = {
	guests: GuestT[] | null;
};
const Guests = ({ guests }: PropsT) => {
	return (
		<>
			<Divider />
			<SimpleGrid columns={{ base: 6, md: 3, lg: 12 }}>
				{guests?.map((guest) => (
					<GridItem colSpan={{ base: 3, md: 1, lg: 3 }}>
						<SimpleGrid
							placeItems="center"
							columns={2}
							py="2"
							px="5"
							border="1px"
							borderRadius="14px"
							borderColor="brand.100"
							gap="2"
						>
							<GridItem>
								<Text>{guest.name}</Text>
								<Text>
									{guest.membership ? guest.membership : 'No es miembro'}
								</Text>
							</GridItem>
							<GridItem>
								<Flex gap="2">
									<IconButton
										minW={'auto'}
										variant="payment"
										p="2"
										icon={<MdPayments />}
										aria-label={''}
									/>
									<IconButton
										minW={'auto'}
										variant="danger"
										p="2"
										icon={<MdDelete />}
										aria-label={''}
									/>
								</Flex>
							</GridItem>
						</SimpleGrid>
					</GridItem>
				))}
			</SimpleGrid>
		</>
	);
};

export default Guests;
