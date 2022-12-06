import React from 'react';
import { SimpleGrid, Icon } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';

import Container from '@/components/atoms/Container';
import Feature from './Feature';
const Features = () => {
	return (
		<Container backgroundColor="brand.dark" py="10vh">
			<SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
				<Feature
					icon={<Icon as={FcAssistant} w={10} h={10} />}
					title={'Lifetime Support'}
					text={
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
					}
				/>
				<Feature
					icon={<Icon as={FcDonate} w={10} h={10} />}
					title={'Unlimited Donations'}
					text={
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
					}
				/>
				<Feature
					icon={<Icon as={FcInTransit} w={10} h={10} />}
					title={'Instant Delivery'}
					text={
						'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore...'
					}
				/>
			</SimpleGrid>
		</Container>
	);
};

export default Features;
