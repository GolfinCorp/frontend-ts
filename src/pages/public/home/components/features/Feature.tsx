import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';

interface FeatureProps {
	title: string;
	text: string;
	icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
	return (
		<Stack>
			<Flex
				w={16}
				h={16}
				align={'center'}
				justify={'center'}
				color={'brand.200'}
				rounded={'full'}
				bg={'gray.100'}
				mb={1}
			>
				{icon}
			</Flex>
			<Text fontWeight={600} color="brand.primary">
				{title}
			</Text>
			<Text color={'gray.100'}>{text}</Text>
		</Stack>
	);
};

export default Feature;
