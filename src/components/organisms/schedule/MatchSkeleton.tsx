import React from 'react';
import {
	Skeleton,
	Box,
	SimpleGrid,
	Text,
	SkeletonCircle,
	GridItem,
	Flex,
	SkeletonText,
	Badge
} from '@chakra-ui/react';
import { MdPerson } from 'react-icons/md';
const MatchSkeleton = () => {
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
					<SkeletonText noOfLines={1} />
				</GridItem>
				<GridItem colSpan={8}>
					<Flex justifyContent="space-between" alignItems="center">
						<Box>
							<SkeletonText noOfLines={1} w="50%" />
						</Box>
						<Flex gap="6">
							<Badge variant="active"></Badge>
							<Flex justifyContent="center" alignItems="center" gap={3}>
								<SkeletonCircle />
								<SkeletonText noOfLines={1} />
							</Flex>
						</Flex>
					</Flex>
				</GridItem>
			</SimpleGrid>
		</Box>
	);
};

export default MatchSkeleton;
