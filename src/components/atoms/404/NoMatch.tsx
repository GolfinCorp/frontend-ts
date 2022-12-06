import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const NoMatch = () => {
	const navigate = useNavigate();
	return (
		<Center h="100vh" maxH="100%">
			<Box textAlign="center" py={10} px={6}>
				<Heading
					display="inline-block"
					as="h2"
					size="2xl"
					bgGradient="linear(to-r, brand.primary, brand.secondary)"
					backgroundClip="text"
				>
					404
				</Heading>
				<Text fontSize="18px" mt={3} mb={2}>
					Pagina no encontrada
				</Text>
				<Text color={'gray.500'} mb={6}>
					La pagina que esta buscando no parece existir
				</Text>

				<Button
					variant="primary"
					bgGradient="linear(to-r, brand.primary, brand.secondary)"
					_hover={{
						background: 'transparent',
						color: 'brand.primary',
						textDecor: 'underline',
						borderColor: 'brand.primary'
					}}
					color="white"
					onClick={() => navigate('/')}
				>
					Ir al inicio
				</Button>
			</Box>
		</Center>
	);
};

export default NoMatch;
